import { useState } from 'react';
import type { FormEvent } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'invalid' | 'error';

function EmailSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setStatus('invalid');
      return;
    }

    setStatus('submitting');

    try {
      await setDoc(doc(db, 'emailInquiries', normalizedEmail), {
        email: normalizedEmail,
        createdAt: serverTimestamp(),
        source: 'jellyfish-founder-batch-page',
      });

      setStatus('success');
      setEmail('');
    } catch (error) {
      
      console.error('Failed to save lead email:', error);
      setStatus('error');
    }
  }

  return (
    <section className="email-section" id="email">
      <div className="email-copy">
        <p className="eyebrow">Founder Batch 001</p>
        <h2>Get first access</h2>
        <p>
          The first production run will be limited. Join the Founder Batch list
          for launch timing, fit guide updates, sample testing results, and
          first access before public release.
        </p>

        <div className="trust-row" aria-label="Product trust points">
          <span>Patent pending</span>
          <span>Founder Batch 001</span>
          <span>Fit guide before launch</span>
          <span>No spam</span>
        </div>
      </div>

      <form className="email-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>

        <div className="email-row">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus('idle');
            }}
            aria-describedby="form-message"
            autoComplete="email"
          />

          <button
            className="button"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Notify Me'}
          </button>
        </div>

        <p className={`form-message ${status}`} id="form-message" role="status">
          {status === 'success'
            ? 'You are on the Founder Batch list. Watch your inbox for launch updates.'
            : status === 'invalid'
              ? 'Please enter a valid email address.'
              : status === 'error'
                ? 'Something went wrong saving your email. Please try again.'
                : status === 'submitting'
                  ? 'Saving your email...'
                  : 'No spam. Just launch details, fit guide updates, and product updates.'}
        </p>
      </form>
    </section>
  );
}

export default EmailSection;

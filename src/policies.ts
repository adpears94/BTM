import type { Policy } from './pages/PolicyPage/PolicyPage';

const effectiveDate = 'August 11, 2026';

export const shippingPolicy: Policy = {
  eyebrow: 'Bigger Than Most Policies',
  title: 'Shipping Policy',
  effectiveDate,
  intro:
    'This policy explains how LP Innovations LLC / Bigger Than Most processes and ships product orders.',
  sections: [
    {
      heading: 'Order Processing',
      paragraphs: [
        'Orders are processed after payment is authorized. Processing estimates will be shown at checkout or in the applicable product offer. Orders placed during launches, preorders, limited releases, weekends, or holidays may require additional processing time.',
      ],
    },
    {
      heading: 'Shipping Rates & Delivery',
      paragraphs: [
        'Available shipping methods, rates, and estimated delivery windows are displayed at checkout. Delivery dates are estimates and are not guaranteed unless expressly stated otherwise.',
        'The first JellyFish launch is expected to focus on customers in the United States. Available destinations may change as fulfillment options expand.',
      ],
    },
    {
      heading: 'Tracking',
      paragraphs: [
        'When tracking is available, it will be sent to the email address used for the order. Tracking information may take time to update after a carrier receives the package.',
      ],
    },
    {
      heading: 'Address Changes & Delivery Issues',
      paragraphs: [
        'Customers are responsible for providing a complete and accurate delivery address. Contact support@biggerthanmost.com as soon as possible if an address needs to be corrected. We cannot guarantee changes after an order enters fulfillment.',
        'If a shipment is delayed, damaged, missing, or marked delivered but cannot be located, contact the carrier and support@biggerthanmost.com so we can review the available information.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'For shipping questions, email support@biggerthanmost.com with your name and order number.',
      ],
    },
  ],
};

export const returnPolicy: Policy = {
  eyebrow: 'Bigger Than Most Policies',
  title: 'Return / Refund Policy',
  effectiveDate,
  intro:
    'This policy provides the baseline process for requesting a return, refund, or order correction from Bigger Than Most.',
  sections: [
    {
      heading: 'Return Requests',
      paragraphs: [
        'To request a return, email support@biggerthanmost.com with your name, order number, the item involved, and the reason for the request. Return eligibility and the applicable return window may be stated in the product offer or order confirmation.',
        'Do not send a product back before receiving return instructions. Unauthorized returns may delay processing or be returned to the sender.',
      ],
    },
    {
      heading: 'Return Condition',
      paragraphs: [
        'Unless an item is defective or covered by a written warranty, returned products should be unused, complete, and in their original condition and packaging. We may request photos or other information to evaluate a return request.',
      ],
    },
    {
      heading: 'Return Shipping',
      paragraphs: [
        'Customers are responsible for return shipping unless the item received was incorrect, arrived damaged, or applicable law requires otherwise. Original shipping charges are non-refundable unless stated otherwise.',
      ],
    },
    {
      heading: 'Refunds',
      paragraphs: [
        'Approved refunds are issued to the original payment method after the returned product is received and inspected. Financial institutions may require additional time to post a refund.',
        'We may reduce or decline a refund for products returned incomplete, damaged by misuse, altered, or outside the applicable return terms, except where prohibited by law.',
      ],
    },
    {
      heading: 'Damaged or Incorrect Orders',
      paragraphs: [
        'If an order arrives damaged, defective, incomplete, or incorrect, stop using the product and contact support@biggerthanmost.com promptly. Include the order number and clear photos when possible so we can review the issue.',
      ],
    },
  ],
};

export const warrantyPolicy: Policy = {
  eyebrow: 'Bigger Than Most Product Support',
  title: 'Lifetime Warranty',
  effectiveDate,
  intro:
    'Bigger Than Most stands behind JellyFish with a limited lifetime replacement warranty for the original purchaser.',
  sections: [
    {
      heading: 'Warranty Coverage',
      paragraphs: [
        'For the lifetime of the original purchaser, Bigger Than Most will replace a JellyFish product that fails due to a defect in materials or workmanship, subject to the exclusions and process below. The warranty applies only to authentic products purchased directly from Bigger Than Most or an authorized seller.',
      ],
    },
    {
      heading: 'What Is Not Covered',
      paragraphs: [
        'This warranty does not cover normal cosmetic wear, loss, theft, unauthorized modification, misuse, improper installation, use with incompatible or damaged equipment, commercial abuse, intentional damage, or damage caused by dropping, throwing, or slamming the product.',
      ],
    },
    {
      heading: 'Making a Claim',
      paragraphs: [
        'Stop using any product that appears damaged or unsafe. Email support@biggerthanmost.com with your name, proof of purchase, a description of the issue, and clear photos of the product.',
        'If the claim is approved, we will provide return instructions. The customer is responsible for return shipping. Bigger Than Most will provide the approved replacement at no product cost.',
      ],
    },
    {
      heading: 'Replacement Terms',
      paragraphs: [
        'Replacement products may be the same model or a comparable model if the original is no longer available. This warranty is limited to product replacement and does not cover connected equipment, property damage, personal injury, incidental costs, or consequential losses to the extent permitted by law.',
      ],
    },
    {
      heading: 'Legal Rights',
      paragraphs: [
        'This warranty gives you specific legal rights, and you may also have other rights that vary by state. No limitation in this warranty applies where prohibited by law.',
      ],
    },
  ],
};

export const privacyPolicy: Policy = {
  eyebrow: 'Bigger Than Most Legal',
  title: 'Privacy Policy',
  effectiveDate,
  intro:
    'This policy describes how LP Innovations LLC / Bigger Than Most collects, uses, and protects information when you visit our website or interact with us.',
  sections: [
    {
      heading: 'Information We Collect',
      paragraphs: [
        'We may collect information you provide directly, such as your name, email address, shipping and billing details, order information, support messages, survey responses, and other information you choose to submit.',
        'We may also collect technical and usage information, including device and browser details, IP address, referring pages, pages viewed, interactions, and cookies or similar technologies used to operate and improve the website.',
      ],
    },
    {
      heading: 'How We Use Information',
      paragraphs: [
        'We use information to operate the website, provide launch updates, process and fulfill orders, provide customer support, improve our products and services, prevent fraud and misuse, comply with legal obligations, and send marketing communications where permitted.',
      ],
    },
    {
      heading: 'How We Share Information',
      paragraphs: [
        'We may share information with service providers that help us operate our business, including hosting, analytics, email, payment, fraud-prevention, fulfillment, and shipping providers. We may also disclose information when required by law, to protect rights or safety, or as part of a business transaction.',
        'We do not sell personal information for money. We do not allow service providers to use personal information for purposes outside the services they provide to us.',
      ],
    },
    {
      heading: 'Data Choices & Retention',
      paragraphs: [
        'You may unsubscribe from marketing emails using the link in an email or by contacting us. Browser settings may allow you to limit cookies, although some website features may not work as intended.',
        'We retain information for as long as reasonably necessary for the purposes described in this policy, including business, warranty, tax, fraud-prevention, dispute-resolution, and legal requirements.',
      ],
    },
    {
      heading: 'Security & Children',
      paragraphs: [
        'We use reasonable safeguards designed to protect personal information, but no method of storage or transmission is completely secure. The website is not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
      ],
    },
    {
      heading: 'Contact & Updates',
      paragraphs: [
        'We may update this policy from time to time and will post the revised version with a new effective date. Questions or privacy requests may be sent to support@biggerthanmost.com.',
      ],
    },
  ],
};

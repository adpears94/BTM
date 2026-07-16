# Product Sale Page

Static React + TypeScript single-product sale page prepared for Firebase Hosting.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The production files are generated in `dist/`.

## Firebase Deploy

1. Replace `your-firebase-project-id` in `.firebaserc`.
2. Log in with Firebase CLI if needed:

```sh
firebase login
```

3. Deploy:

```sh
npm run build
npm run deploy
```

## Email Form

The form currently validates an email address and shows a placeholder success
message. Connect the submit handler in `src/App.tsx` to Firebase Functions,
Firestore, Mailchimp, Klaviyo, or your preferred email service when ready.

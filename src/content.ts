import type {
  FAQCategory,
  ProductStoryRow,
  ProductImage,
} from './types';

export const heroImage: ProductImage = {
  src: '/premium/40s_main.png',
  alt: 'JellyFish dumbbell weight add-on mounted on a fixed dumbbell head while keeping the handle clear',
};

export const productStoryRows: ProductStoryRow[] = [
  {
    id: 'details',
    eyebrow: 'Clear-handle design',
    title: 'A dumbbell weight add-on that keeps your grip open.',
    copy:
      'JellyFish adds weight at the dumbbell head instead of stacking plates on the handle. Your grip area stays open, balanced, and familiar for controlled presses, curls, rows, raises, and carries.',
    image: {
      src: '/premium/40s_grip_space.png',
      alt: 'JellyFish dumbbell add-on weight installed while leaving the grip area open',
    },
    imagePosition: 'left',
    bullets: [
      'No handle-mounted plate stack taking up grip space',
      'Designed to preserve natural hand positioning during controlled lifts',
      'Use one sleeve on each head to keep the dumbbell balanced',
    ],
  },
  {
    id: 'how-it-works',
    eyebrow: 'More weight options',
    title: 'Get more dumbbell increments from the pairs you already own.',
    copy:
      'A 4-pack upgrades a pair of compatible dumbbells by 5 lb each, helping you bridge common fixed-dumbbell jumps without buying another pair every time your training moves up.',
    image: {
      src: '/premium/40s_skip.png',
      alt: 'JellyFish dumbbell weight add-on shown as a way to create more dumbbell weight increments',
    },
    imagePosition: 'right',
    bullets: [
      'Each JellyFish adds 2.5 lb to one dumbbell head',
      'Four sleeves add 5 lb to each dumbbell in a pair',
      'Built for lifters who want more range from their current dumbbells',
    ],
  },
  {
    id: 'fit',
    eyebrow: 'Premium build',
    title: 'Steel-weighted. Stretch-fit. Patent pending.',
    copy:
      'The stretch-fit sleeve, steel weighted discs, and Chicago screw fasteners create a premium dumbbell add-on weight system designed for controlled strength training and repeated installation checks.',
    image: {
      src: '/premium/40s_details.png',
      alt: 'Close-up of JellyFish dumbbell weight add-on sleeve, steel discs, and Chicago screw fasteners',
    },
    imagePosition: 'left',
    bullets: [
      'Focused on compatible fixed dumbbells during Founder Batch testing',
      'Final fit guide and installation instructions before launch',
      'Designed for controlled lifting with inspection before use',
    ],
  },
];

export const faqCategories: FAQCategory[] = [
  {
    title: 'Product Basics',
    items: [
      {
        question: 'What is JellyFish?',
        answer:
          'JellyFish is a patent-pending dumbbell weight add-on designed to add weight at the dumbbell head while keeping the handle clear.',
      },
      {
        question: 'What is a dumbbell weight add-on?',
        answer:
          'A dumbbell weight add-on is an accessory that adds usable weight to a dumbbell without replacing the entire pair. JellyFish is designed to add weight off the handle so your grip area stays open.',
      },
      {
        question: 'How does JellyFish work?',
        answer:
          'JellyFish slides over the end of a compatible dumbbell like a fitted sleeve. Use one sleeve on each end of the dumbbell to add balanced weight while keeping the handle clear.',
      },
      {
        question: 'How much weight does JellyFish add?',
        answer:
          'Each JellyFish sleeve adds 2.5 lb to one dumbbell head. A 4-pack includes four sleeves total, which adds 5 lb to each dumbbell when used on a pair — 10 lb total across the pair.',
      },
      {
        question: 'Is JellyFish a dumbbell replacement?',
        answer:
          'No. JellyFish is a dumbbell add-on weight system built to help you get more training range from the dumbbells you already own.',
      },
    ],
  },
  {
    title: 'Why JellyFish Is Different',
    items: [
      {
        question: 'How is JellyFish different from handle-mounted dumbbell add-on plates?',
        answer:
          'Most handle-mounted add-on plates take up grip space. JellyFish adds weight at the dumbbell head instead, helping preserve the normal handle feel during controlled lifts.',
      },
      {
        question: 'Does JellyFish affect my grip?',
        answer:
          'JellyFish is designed to keep the handle area clear. Since the weight mounts away from your hand, your grip position stays more natural than with handle-mounted dumbbell weight add-ons.',
      },
      {
        question: 'Can JellyFish help with dumbbell microloading?',
        answer:
          'Yes. JellyFish is designed to help create smaller dumbbell weight jumps. Each sleeve adds 2.5 lb to one dumbbell head, and a pair of sleeves adds 5 lb to one dumbbell.',
      },
      {
        question: 'Will JellyFish change how the dumbbell feels?',
        answer:
          'Any add-on weight can slightly change the feel of a dumbbell. JellyFish is designed to be used symmetrically, with one sleeve on each head, to keep the dumbbell balanced.',
      },
      {
        question: 'Why not just buy the next dumbbell pair?',
        answer:
          'You can. JellyFish is for lifters who want more weight options from the dumbbells they already own without buying another pair every time they need a 5 lb jump.',
      },
    ],
  },
  {
    title: 'Fit and Compatibility',
    items: [
      {
        question: 'What dumbbells does JellyFish fit?',
        answer:
          'JellyFish is designed for compatible fixed dumbbells. Final fit measurements and compatibility guidance will be published before launch.',
      },
      {
        question: 'Does JellyFish fit all dumbbells?',
        answer:
          'No. Dumbbell dimensions vary by brand, style, and weight. A final fit guide will be provided before launch so customers can confirm compatibility before ordering.',
      },
      {
        question: 'Will it fit adjustable dumbbells?',
        answer:
          'No. JellyFish is not intended for adjustable dumbbells unless a specific model is tested and approved.',
      },
      {
        question: 'Can I use it on damaged dumbbells?',
        answer:
          'No. Do not use JellyFish on cracked, torn, loose, heavily worn, or damaged dumbbells.',
      },
      {
        question: 'How do I know if it will fit my dumbbells?',
        answer:
          'Before launch, Bigger Than Most will provide a fit guide with the measurements needed to confirm compatibility.',
      },
    ],
  },
  {
    title: 'Safety and Use',
    items: [
      {
        question: 'Is JellyFish safe to use?',
        answer:
          'JellyFish is designed for controlled strength training when installed correctly and used as directed. Users should inspect the sleeve, steel discs, and Chicago screws before each use.',
      },
      {
        question: 'Can I drop dumbbells with JellyFish installed?',
        answer:
          'JellyFish should be treated like most fixed dumbbell equipment: it is intended for controlled lifting, not repeated dropping, throwing, slamming, or impact abuse.',
      },
      {
        question: 'Can I use JellyFish for presses, curls, rows, and raises?',
        answer:
          'Yes. JellyFish is intended for controlled dumbbell movements such as presses, curls, rows, raises, and carries.',
      },
      {
        question: 'Should I inspect JellyFish before use?',
        answer:
          'Yes. Check for loose Chicago screws, fabric wear, disc movement, tearing, stretching, or any visible damage before every workout.',
      },
      {
        question: 'What should I do if a screw loosens?',
        answer:
          'Stop using the product immediately. Re-tighten according to the instructions and inspect the sleeve and hardware before continuing.',
      },
      {
        question: 'Is JellyFish for commercial gym use?',
        answer:
          'The first version should be considered a home-gym product unless commercial use is specifically tested and approved later.',
      },
    ],
  },
  {
    title: 'Installation',
    items: [
      {
        question: 'How do I install JellyFish?',
        answer:
          'Install one JellyFish sleeve on each head of the dumbbell. Make sure both sleeves are seated evenly and the fasteners are secure before lifting.',
      },
      {
        question: 'Why does JellyFish use Chicago screws?',
        answer:
          'Chicago screws allow the steel discs to fasten through the sleeve mechanically while keeping the dumbbell add-on weight assembly serviceable and clean.',
      },
      {
        question: 'Can I remove JellyFish and use it on another dumbbell?',
        answer:
          'Yes, if the other dumbbell is compatible. Always inspect the sleeve and fasteners before reinstalling.',
      },
      {
        question: 'Can I use only one JellyFish on one side of a dumbbell?',
        answer:
          'For normal training, use JellyFish symmetrically with one sleeve on each head of the dumbbell to keep the load balanced. Do not use an uneven setup unless you are intentionally training with asymmetrical loading and understand the change in feel.',
      },
    ],
  },
  {
    title: 'Materials',
    items: [
      {
        question: 'What is JellyFish made from?',
        answer:
          'JellyFish uses a heavy stretch-fit sleeve, steel weighted discs, and Chicago screw fasteners to create a premium dumbbell weight add-on.',
      },
      {
        question: 'How much does each steel disc weigh?',
        answer:
          'Each steel disc is 1.25 lb. Each JellyFish uses two discs for a total of 2.5 lb per sleeve.',
      },
      {
        question: 'Will the sleeve stretch out over time?',
        answer:
          'All elastic materials can wear over time. Users should inspect for looseness, tearing, or loss of recovery before use.',
      },
    ],
  },
  {
    title: 'Buying and Launch',
    items: [
      {
        question: 'When will JellyFish be available?',
        answer:
          'JellyFish is currently in sample development and testing. Join the Founder Batch list for launch updates and early access to the first dumbbell add-on weight release.',
      },
      {
        question: 'What is Founder Batch 001?',
        answer:
          'Founder Batch 001 is the first limited production run of JellyFish.',
      },
      {
        question: 'Can I join the Founder Batch list now?',
        answer:
          'Yes. The current list is for launch updates and first access. No payment is collected unless an official paid offer is opened.',
      },
      {
        question: 'How many sets will be available in the first run?',
        answer:
          'The first planned run is expected to be limited. Final quantity will be announced before launch.',
      },
      {
        question: 'What will the price be?',
        answer:
          'Final pricing will be announced before launch. Founder Batch pricing may be different from the regular retail price.',
      },
    ],
  },
  {
    title: 'Lifetime Warranty',
    items: [
      {
        question: 'Does JellyFish have a lifetime warranty?',
        answer:
          'Yes. JellyFish will include a lifetime warranty. If your JellyFish is damaged in any way during normal ownership, send it back and pay the return shipping. Bigger Than Most will replace it for free.',
      },
      {
        question: 'What does the lifetime warranty cover?',
        answer:
          'The warranty is built to keep customers confident in the product. If the sleeve, steel discs, or fasteners are damaged, contact Bigger Than Most for return instructions. After the product is received, a replacement will be sent at no product cost.',
      },
      {
        question: 'Do I have to pay for the replacement?',
        answer:
          'No. The replacement product is free. The customer is only responsible for shipping the damaged JellyFish back to Bigger Than Most.',
      },
      {
        question: 'How do I start a warranty claim?',
        answer:
          'Email Bigger Than Most with your order information and photos of the damaged product. We will provide return instructions so you can send the product back for replacement.',
      },
    ],
  },
  {
    title: 'Shipping',
    items: [
      {
        question: 'Where will JellyFish ship?',
        answer: 'The first launch is expected to focus on U.S. customers.',
      },
      {
        question: 'Will shipping be included?',
        answer: 'Shipping details will be announced before launch.',
      },
      {
        question: 'How heavy is a set?',
        answer:
          'A 4-pack contains four 2.5 lb JellyFish sleeves, so the product weight is approximately 10 lb before packaging.',
      },
    ],
  },
];
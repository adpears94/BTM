import type {
  FAQCategory,
  ProductStoryRow,
  ProductImage,
} from './types';

export const heroImage: ProductImage = {
  src: '/premium/40s_main.png',
  alt: 'Angled view of the JellyFish weighted hex dumbbell sleeve mounted on a dumbbell head',
};

export const productStoryRows: ProductStoryRow[] = [
  {
    id: 'details',
    eyebrow: 'Clear handle',
    title: 'Weight at the head. Grip stays open.',
    copy:
      'JellyFish adds weight at the dumbbell head instead of crowding the handle, so your normal grip area stays open for controlled presses, curls, rows, raises, and carries.',
    image: {
      src: '/premium/40s_grip_space.png',
      alt: 'JellyFish mounted on a dumbbell while keeping the handle clear',
    },
    imagePosition: 'left',
    bullets: [
      'No handle-mounted plate stack taking up grip space',
      'More natural hand positioning during controlled lifts',
      'One sleeve on each head keeps the dumbbell balanced',
    ],
  },
  {
    id: 'how-it-works',
    eyebrow: 'More range',
    title: 'Fewer dumbbell pairs. Smaller racks.',
    copy:
      'A 4-pack upgrades a pair of compatible dumbbells by 5 lb each, helping you bridge common fixed-dumbbell jumps without buying another pair every time your training moves up.',
    image: {
      src: '/premium/40s_skip.png',
      alt: 'JellyFish shown with a range of dumbbells to reduce the number of pairs needed',
    },
    imagePosition: 'right',
    bullets: [
      'Each JellyFish adds 2.5 lb to one dumbbell head',
      'Four sleeves add 5 lb to each dumbbell in a pair',
      'Built for lifters who want more use from the dumbbells they own',
    ],
  },
  {
    id: 'fit',
    eyebrow: 'Build and fit',
    title: 'A weighted sleeve system for compatible hex dumbbells.',
    copy:
      'The stretch-fit sleeve, steel discs, and Chicago screw fasteners create a serviceable weighted cover system designed around compatible rubber hex dumbbells.',
    image: {
      src: '/premium/40s_details.png',
      alt: 'Close-up product detail view of JellyFish sleeve, steel discs, and Chicago screw construction',
    },
    imagePosition: 'left',
    bullets: [
      'Currently focused on the tested 30-70 lb rubber hex dumbbell range',
      'Final fit guide and installation instructions before launch',
      'Designed for controlled strength training, with inspection before use',
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
          'JellyFish is a patent-pending weighted sleeve system designed to add weight to compatible rubber hex dumbbells while keeping the handle clear.',
      },
      {
        question: 'How does JellyFish work?',
        answer:
          "JellyFish slides over the end of a dumbbell head like a fitted cap. Stretch the sleeve around the edges of the dumbbell head until it sits snug and secure. Use one sleeve on each end of the dumbbell to add balanced weight.",
      },
      {
        question: 'How much weight does JellyFish add?',
        answer: 'Each JellyFish sleeve adds 2.5 lb to one dumbbell head. A 4-pack includes four sleeves total, which adds 5 lb to each dumbbell when used on a pair — 10 lb total across the pair.',
      },
      {
        question: 'Is JellyFish a dumbbell replacement?',
        answer:
          'No. JellyFish is an add-on system designed to help you get more use from the dumbbells you already own.',
      },
    ],
  },
  {
    title: 'Differentiators',
    items: [
      {
        question: 'How is JellyFish different from handle-mounted add-on plates?',
        answer:
          'JellyFish adds weight at the dumbbell head, not on the handle. The goal is to preserve the normal grip area while still adding usable weight.',
      },
      {
        question: 'Does JellyFish affect my grip?',
        answer:
          'JellyFish is designed to keep the handle area clear. Since it mounts on the dumbbell heads, your hand position stays more natural than with handle-mounted add-ons.',
      },
      {
        question: 'Will JellyFish change how the dumbbell feels?',
        answer:
          'Any add-on weight can slightly change the feel of a dumbbell. JellyFish is designed to be used symmetrically, with one sleeve on each head, to keep the dumbbell balanced.',
      },
      {
        question: 'Why not just buy the next dumbbell pair?',
        answer:
          'You can. JellyFish is for lifters who want more range from the dumbbells they already own without buying another pair every time they need a 5 lb jump.',
      },
    ],
  },
  {
    title: 'Fit and Compatibility',
    items: [
      {
        question: 'What dumbbells does JellyFish fit?',
        answer:
          'JellyFish is designed around compatible rubber hex dumbbells, currently focused on the tested 30-70 lb range.',
      },
      {
        question: 'Does JellyFish fit all hex dumbbells?',
        answer:
          'No. Hex dumbbell dimensions vary by brand and weight. A final fit guide will be provided before launch.',
      },
      // {
      //   question: 'Will it fit round dumbbells?',
      //   answer: 'No. JellyFish is designed for rubber hex dumbbells.',
      // },
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
        answer: 'Yes, those are the intended types of controlled dumbbell movements.',
      },
      // {
      //   question: 'Can I use it for CrossFit-style workouts?',
      //   answer:
      //     'Only for controlled movements. It should not be used for workouts involving dropping, throwing, swinging, or uncontrolled impact.',
      // },
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
          'Chicago screws allow the steel discs to fasten through the sleeve mechanically while keeping the assembly serviceable and clean.',
      },
      {
        question: 'Can I remove JellyFish and use it on another dumbbell?',
        answer:
          'Yes, if the other dumbbell is compatible. Always inspect the sleeve and fasteners before reinstalling.',
      },
      {
        question: 'Can I use only one JellyFish on one side of a dumbbell?',
        answer:
          'Yes, if you are training with asymmetrical loads, JellyFish is the perfect solution',
      },
    ],
  },
  {
    title: 'Materials',
    items: [
      {
        question: 'What is JellyFish made from?',
        answer:
          'JellyFish uses a heavy stretch-fit sleeve, steel weighted discs, and Chicago screw fasteners.',
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
          'JellyFish is currently in sample development and testing. Join the Founder Batch list for launch updates.',
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
    title: 'Warranty and Returns',
    items: [
      {
        question: 'Will JellyFish have a warranty?',
        answer: 'Warranty details will be published before launch.',
      },
      {
        question: 'What is the return policy?',
        answer:
          'Return policy details will be published before launch and before any orders are accepted.',
      },
      {
        question: 'Will replacement hardware be available?',
        answer:
          'Replacement hardware availability will be announced before launch.',
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

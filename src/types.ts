export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductStoryRow = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: ProductImage;
  imagePosition: 'left' | 'right';
  bullets: string[];
};

export type FAQCategory = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};


// Form types
interface FormField {
  type: string;
  name: string;
  placeholder: string;
  icon: string;
}

interface SubmitButton {
  label: string;
  link: string;
}

interface TrustBadge {
  icon: string;
  text: string;
}

export interface FormData {
  fields: FormField[];
  submit: SubmitButton;
  trust_badges: TrustBadge[];
}

// WhyChooseUs types
interface Card {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  title: string;
  subtitle: string;
  cards: Card[];
}
// Portfollio
interface Portfolio {
  image: string;
  title: string;
  points: string[];
}

export interface PortfolioSectionData {
  title: string;
  subtitle: string;
  portfolio: Portfolio[];
}
// pricing 
interface Package {
  title: string;
  price: string;
  features: string[];
  note: string;
  popular?: boolean;
}

export interface PricingData {
  title: string;
  subtitle: string;
  packages: Package[];
}

// Cta
interface CtaData {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  notice: {
    heading: string;
    text: string;
    icon?: string;
  };
}
// Process
interface Step {
  title: string;
  description: string;
  day: string;
  icon: string;
}

export interface ProcessData {
  heading: string;
  subheading: string;
  steps: Step[];
}
// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  faqs: FAQItem[];
}

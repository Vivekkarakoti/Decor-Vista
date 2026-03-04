import { ChefHat, Home, Hammer, Armchair } from 'lucide-react';

export const SERVICES = [
  {
    id: 'kitchen',
    title: 'Modular Kitchens',
    description: 'Ergonomic, stylish, and highly functional kitchen spaces tailored to your culinary lifestyle.',
    icon: ChefHat,
  },
  {
    id: 'interior',
    title: 'Full Home Interiors',
    description: 'Comprehensive design solutions that transform houses into personalized, cohesive homes.',
    icon: Home,
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Expert structural and aesthetic updates to breathe new life into your existing spaces.',
    icon: Hammer,
  },
  {
    id: 'custom',
    title: 'Custom Design Items',
    description: 'Bespoke furniture, doors, and wooden elements crafted specifically for your unique needs.',
    icon: Armchair,
  },
];

export const PROJECTS = [
  { id: 1, title: 'Modern Minimalist Kitchen', category: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e150213483de?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Luxury Penthouse Living', category: 'Interior Design', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Vintage Villa Renovation', category: 'Renovation', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Bespoke Oak Wardrobe', category: 'Custom Items', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Contemporary Studio Loft', category: 'Interior Design', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Chef\'s Dream Island', category: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556909212-d5b604d7c992?auto=format&fit=crop&q=80&w=800' },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    quote: 'Decor Vista turned our outdated kitchen into a masterpiece. Their attention to detail and commitment to our comfort was evident in every step of the process.',
  },
  {
    name: 'Michael Chen',
    role: 'Architect',
    quote: 'As a professional, I appreciate their technical precision. As a client, I love the warmth they brought to my personal study with custom woodwork.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Business Owner',
    quote: 'The renovation was seamless. They managed everything, allowing us to focus on our lives while they transformed our space into something truly inspiring.',
  },
];

export const FAQS = [
  // General Process
  { category: 'General Process', question: 'What is the typical timeline for a kitchen project?', answer: 'A standard modular kitchen project typically takes 4-6 weeks from design approval to final installation, depending on the complexity and materials chosen.' },
  { category: 'General Process', question: 'Do you handle the entire project from start to finish?', answer: 'Yes, we provide end-to-end services including consultation, design, sourcing, and installation.' },
  { category: 'General Process', question: 'Can I see a 3D model of my design before work starts?', answer: 'Absolutely. We provide high-quality 3D visualizations for all major projects to ensure you are happy with the layout and aesthetics.' },
  { category: 'General Process', question: 'How do I get started with Decor Vista?', answer: 'Simply book a free consultation through our website or call us. We will discuss your vision and requirements.' },
  { category: 'General Process', question: 'Do you provide on-site supervision?', answer: 'Yes, every project is assigned a dedicated project manager who oversees the work on-site.' },
  
  // Design & Consultation
  { category: 'Design & Consultation', question: 'Do you offer virtual consultations?', answer: 'Yes, we offer initial virtual consultations via video call for your convenience.' },
  { category: 'Design & Consultation', question: 'Is the first consultation free?', answer: 'Yes, our initial design consultation is completely free of charge.' },
  { category: 'Design & Consultation', question: 'Can you work with my existing furniture?', answer: 'Certainly. We can integrate your cherished pieces into a new design scheme.' },
  { category: 'Design & Consultation', question: 'What design styles do you specialize in?', answer: 'We are versatile and can execute styles ranging from Modern Minimalist and Industrial to Classic Contemporary and Eclectic.' },
  { category: 'Design & Consultation', question: 'How many design revisions do I get?', answer: 'We typically include up to three major revisions in our standard design package.' },

  // Budget & Pricing
  { category: 'Budget & Pricing', question: 'How do you structure your pricing?', answer: 'Our pricing is transparent and based on the scope of work, materials, and labor. We provide a detailed itemized quote after the initial design phase.' },
  { category: 'Budget & Pricing', question: 'Do you work with fixed budgets?', answer: 'Yes, we can tailor our designs and material selections to fit within a pre-defined budget.' },
  { category: 'Budget & Pricing', question: 'Are there any hidden costs?', answer: 'No, we pride ourselves on transparency. Any changes in scope that affect the price are discussed and approved by you beforehand.' },
  { category: 'Budget & Pricing', question: 'What are your payment terms?', answer: 'Typically, we require a 10% booking amount, 40% after design finalization, and the remaining 50% in stages as work progresses.' },
  { category: 'Budget & Pricing', question: 'Do you offer financing options?', answer: 'We can recommend third-party financing partners that specialize in home improvement loans.' },

  // Materials & Customization
  { category: 'Materials & Customization', question: 'What materials do you use for custom furniture?', answer: 'We use high-grade solid woods (Teak, Oak, Walnut), premium BWR/BWP plywood, and top-tier finishes like PU, Acrylic, or Veneer.' },
  { category: 'Materials & Customization', question: 'Can I choose my own hardware?', answer: 'Yes, you can select from our curated range of premium hardware brands like Hafele, Hettich, or Blum.' },
  { category: 'Materials & Customization', question: 'Are your materials eco-friendly?', answer: 'We strive to use sustainable materials and low-VOC finishes whenever possible.' },
  { category: 'Materials & Customization', question: 'Do you manufacture the custom items yourself?', answer: 'Yes, we have our own state-of-the-art workshop where skilled craftsmen bring our designs to life.' },
  { category: 'Materials & Customization', question: 'Can you match the wood finish to my existing decor?', answer: 'Yes, our polishing experts are highly skilled at color matching and finish replication.' },

  // Renovation Specifics
  { category: 'Renovation Specifics', question: 'Do I need to move out during a renovation?', answer: 'For minor renovations, you can stay. For full home renovations involving structural changes or heavy dust, we recommend temporary relocation for your comfort.' },
  { category: 'Renovation Specifics', question: 'Do you handle plumbing and electrical work?', answer: 'Yes, our renovation service includes all necessary civil, plumbing, and electrical modifications.' },
  { category: 'Renovation Specifics', question: 'How do you manage dust and debris during work?', answer: 'We use protective coverings and perform regular site cleaning to minimize disruption.' },
  { category: 'Renovation Specifics', question: 'Will you help with building permits?', answer: 'We can provide the necessary drawings and documentation required for local authority approvals.' },
  { category: 'Renovation Specifics', question: 'Can you renovate just one room?', answer: 'Yes, we take on projects of all sizes, from single-room makeovers to full-house transformations.' },

  // After-Sales Service
  { category: 'After-Sales Service', question: 'What is your warranty policy on custom items?', answer: 'We offer a 5-year warranty on our custom woodwork and a lifetime warranty on selected premium hardware.' },
  { category: 'After-Sales Service', question: 'Do you provide maintenance services?', answer: 'Yes, we offer annual maintenance packages to keep your interiors looking and functioning perfectly.' },
  { category: 'After-Sales Service', question: 'What happens if something breaks after installation?', answer: 'Simply contact our support team, and we will schedule a technician visit within 48 hours.' },
  { category: 'After-Sales Service', question: 'Is the warranty transferable?', answer: 'Our warranties are generally tied to the original purchaser but can be reviewed on a case-by-case basis.' },
  { category: 'After-Sales Service', question: 'How do I clean and maintain my new modular kitchen?', answer: 'We provide a detailed care and maintenance guide with every project completion.' },
];

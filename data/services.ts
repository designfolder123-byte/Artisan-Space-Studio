
import type { Service } from '../types';
import { KeyIcon, BrushIcon, BuildingOfficeIcon, HomeIcon, ArrowsPointingOutIcon, SparklesIcon, CogIcon } from '../components/icons/Icons';

export const services: Service[] = [
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    shortDescription: 'From concept to completion, we manage every detail of your project.',
    longDescription: 'Our turnkey solutions offer a seamless, hassle-free experience. We handle everything from the initial design blueprint to the final handover, including procurement, execution, and project management. This 360-degree service ensures perfect coordination, timely delivery, and adherence to budget, letting you enjoy the creative process without the stress of execution.',
    imageUrl: 'https://picsum.photos/seed/turnkey/800/600',
    icon: KeyIcon,
  },
  {
    id: 'consultancy',
    title: 'Design & Consultancy',
    shortDescription: 'Expert guidance and creative vision to shape your ideal space.',
    longDescription: 'For clients who prefer to manage their own execution but need professional design direction, our consultancy service is the perfect fit. We provide detailed mood boards, 3D visualizations, material selections, and a complete design narrative, empowering you with a clear and comprehensive plan to bring your vision to life.',
    imageUrl: 'https://picsum.photos/seed/consultancy/800/600',
    icon: BrushIcon,
  },
  {
    id: 'renovation',
    title: 'Renovation & Restoration',
    shortDescription: 'Breathe new life into existing spaces with thoughtful transformation.',
    longDescription: 'We specialize in transforming outdated or inefficient spaces into functional, beautiful environments. Our renovation and restoration services respect the soul of the structure while infusing it with modern functionality and aesthetics. Whether it’s a single room or a full-property overhaul, we rejuvenate your space to meet your current lifestyle.',
    imageUrl: 'https://picsum.photos/seed/renovation/800/600',
    icon: CogIcon,
  },
  {
    id: 'residential',
    title: 'Residential Interiors',
    shortDescription: 'Creating homes that are a true reflection of your personality and lifestyle.',
    longDescription: 'Your home should be your sanctuary. We design bespoke residential interiors that are both beautiful and livable. By focusing on your unique needs, style, and daily routines, we craft spaces that are not just aesthetically stunning but also deeply personal and comfortable, harmonizing luxury with everyday practicality.',
    imageUrl: 'https://picsum.photos/seed/residential/800/600',
    icon: HomeIcon,
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    shortDescription: 'Designing inspiring and functional workspaces that elevate your brand.',
    longDescription: 'We create commercial and office interiors that enhance productivity, reflect brand identity, and leave a lasting impression. From corporate offices to retail boutiques and hospitality venues, our designs are strategically planned to optimize workflow, foster collaboration, and create an environment where business can thrive.',
    imageUrl: 'https://picsum.photos/seed/commercial/800/600',
    icon: BuildingOfficeIcon,
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    shortDescription: 'Maximizing functionality and flow through intelligent layout design.',
    longDescription: 'Effective space planning is the foundation of great interior design. Our experts analyze your space to develop layouts that maximize utility, improve flow, and create a sense of harmony. We ensure every square foot serves a purpose, resulting in an environment that feels both spacious and intuitively organized.',
    imageUrl: 'https://picsum.photos/seed/planning/800/600',
    icon: ArrowsPointingOutIcon,
  },
    {
    id: 'styling',
    title: 'Styling & Décor',
    shortDescription: 'The final layer of artistry that brings your space to life.',
    longDescription: 'Our styling and décor services add the finishing touches that complete your interior narrative. We curate furniture, art, lighting, textiles, and accessories to create a cohesive and captivating atmosphere. It is in these final details that a house truly becomes a home, or a commercial space becomes a destination.',
    imageUrl: 'https://picsum.photos/seed/styling/800/600',
    icon: SparklesIcon,
  },
];

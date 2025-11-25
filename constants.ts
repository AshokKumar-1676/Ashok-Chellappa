import { MapPin, Package, Truck, CheckCircle, Factory, ShieldCheck, Leaf, Droplet, Sun } from 'lucide-react';
import { TimelineEvent, ProductAttribute } from './types';

export const PLUM_COLORS = {
  primary: '#6A1B9A',
  deep: '#4A0072',
  bg: '#F7F0FF',
  peach: '#FF8A80',
  white: '#FFFFFF',
};

export const PRODUCT_DETAILS: ProductAttribute[] = [
  { label: 'Batch No', value: 'PLM-CO-2023-X9', icon: Package },
  { label: 'Mfg Date', value: 'Oct 15, 2023', icon: Factory },
  { label: 'Expiry', value: 'Oct 14, 2025', icon: Sun },
];

export const JOURNEY_STEPS: TimelineEvent[] = [
  {
    title: 'Origin Source',
    date: 'Sep 20, 2023',
    description: 'Premium coconuts harvested from organic farms in Kerala.',
    icon: Leaf,
    location: 'Kerala, India',
    image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Crafting',
    date: 'Oct 15, 2023',
    description: 'Processed and bottled at our GMP certified Mumbai facility.',
    icon: Factory,
    location: 'Mumbai, MH',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Quality Check',
    date: 'Oct 16, 2023',
    description: 'Passed 14-point safety & purity inspection.',
    icon: ShieldCheck,
    location: 'Lab #4',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Logistics',
    date: 'Oct 20, 2023',
    description: 'Dispatched from central warehouse.',
    icon: Truck,
    location: 'Central Hub',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Delivered',
    date: 'Nov 02, 2023',
    description: 'Successfully delivered to your location.',
    icon: CheckCircle,
    location: 'Your Location',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop'
  }
];
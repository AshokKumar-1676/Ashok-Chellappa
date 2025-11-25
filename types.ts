import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  icon: LucideIcon;
  location: string;
  image?: string;
}

export interface ProductAttribute {
  label: string;
  value: string;
  icon: LucideIcon;
}

export enum AppRoute {
  LOADING = '/',
  HOME = '/home',
  AUTHENTICITY = '/authenticity',
  INFO = '/info',
  JOURNEY = '/journey',
  REWARDS = '/rewards',
  REVIEW = '/review',
  CHAT = '/chat',
  REFILL = '/refill',
  NOTIFICATIONS = '/notifications',
  AR_SCAN = '/ar-scan',
}
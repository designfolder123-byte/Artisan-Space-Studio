// FIX: Import React to provide type definitions for React.ComponentType
import React from 'react';

export type Page = 'Home' | 'About' | 'Services' | 'Portfolio' | 'Blog' | 'Design Styles' | 'Contact';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: string;
  title:string;
  category: 'Residential' | 'Commercial' | 'Makeovers' | 'Luxury Concepts';
  imageUrl: string;
  concept: string;
  materials: string;
  style: string;
  transformation: string;
  results: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  metaDescription: string;
  keywords: string[];
  imageUrl: string;
  content: string; // Full article content in Markdown or simple string format
  preview: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  suitableFor: string;
  colorPalette: string[];
  materials: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}
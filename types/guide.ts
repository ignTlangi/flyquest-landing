export interface GuideMetadata {
  title: string;
  slug: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  ogImage: string;
  collaborators?: Array<{
    name: string;
    url: string;
    description: string;
  }>;
  relatedGuides?: string[];
}

export interface Guide {
  metadata: GuideMetadata;
  content: string;
}
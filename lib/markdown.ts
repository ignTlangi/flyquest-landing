import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Guide, GuideMetadata } from '@/types/guide';

const guidesDirectory = path.join(process.cwd(), 'content/guides');

// Get all guide slugs
export function getAllGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(guidesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''));
}

// Get guide by slug
export function getGuideBySlug(slug: string): Guide {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug
    } as GuideMetadata,
    content
  };
}

// Get all guides (for listing page)
export function getAllGuides(): Guide[] {
  const slugs = getAllGuideSlugs();
  return slugs
    .map(slug => getGuideBySlug(slug))
    .sort((a, b) => 
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}
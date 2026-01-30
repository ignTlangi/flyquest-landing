import { MDXRemote } from 'next-mdx-remote/rsc';
import { getGuideBySlug, getAllGuideSlugs } from '@/lib/markdown';
import GuideLayout from '@/components/GuideLayout';
import Checklist from '@/components/Checklist';
import Timeline from '@/components/Timeline';
import CollaborationResources from '@/components/CollaborationResources';
import RelatedGuides from '@/components/RelatedGuides';
import { Metadata } from 'next';
import remarkGfm from 'remark-gfm';

// Custom components available in MDX
const components = {
  Checklist,
  Timeline,
  CollaborationResources,
  RelatedGuides,
};

// MDX options
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

// Generate static pages for all guides
export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for SEO + OG images
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const { metadata } = getGuideBySlug(params.slug);
  
  return {
    title: `${metadata.title} | FlyQuest`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
      url: `https://flyquest.co.za/playbook/${params.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
    },
  };
}

export default function GuidePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { metadata, content } = getGuideBySlug(params.slug);

  return (
    <GuideLayout metadata={metadata}>
      <MDXRemote 
        source={content} 
        components={components}
        options={mdxOptions}
      />
    </GuideLayout>
  );
}
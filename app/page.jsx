import Hero from '@/components/Hero/Hero';
import FeaturedPosts from '@/components/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '@/utils/postUtil';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={getFeaturedPosts()} />
    </>
  );
}

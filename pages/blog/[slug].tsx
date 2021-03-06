import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/mdx';

export default function Post({ source, frontmatter }) {
  return <MDXRemote {...source} />;
}

export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontMatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  console.log(posts);
  const paths = posts!.map((post) => ({
    params: {
      slug: post.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

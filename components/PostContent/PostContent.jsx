import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Markdown from 'react-markdown';
import PostHeader from '../PostHeader/PostHeader';
import Image from 'next/image';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classes from './PostContent.module.css';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <Markdown components={customComponents}>{post.content}</Markdown>
    </article>
  );
};

export default PostContent;

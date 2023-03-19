import Head from 'next/head';
import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import CodeBlock from '@/component/CodeBlock';
import Logo from '@/component/Logo';
import CommandPalette from '@/component/CommandPalette';
import fs from 'fs';
import YAML from 'yaml';
import { NextSeo } from 'next-seo';

const IndexPage: NextPage<{
  content: string;
  slugs: string[];
  keywords: string;
  description: string;
}> = ({ content, slugs, keywords, description }) => {
  return (
    <>
      <NextSeo
        title={description}
        description={description}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: keywords,
          },
        ]}
      />
      <main className="md:w-2/3 flex flex-col md:mx-auto mx-4">
        <Logo />
        <CommandPalette slugs={slugs} />
        <CodeBlock content={content} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  content: string;
  slugs: string[];
  description: string;
  keywords: string;
}> = async ({ params }) => {
  const slugs: string[] = [];
  fs.readdirSync('docker-composes').forEach((file) => {
    slugs.push(file.split('.')[0]);
  });

  const yaml = fs.readFileSync(`docker-composes/${params?.slug}.yaml`, 'utf8');
  const parsed = YAML.parse(yaml);
  const content = YAML.stringify(parsed['service']);
  const keywords = YAML.stringify(parsed['keywords']);
  const description = YAML.stringify(parsed['description']);

  return {
    props: {
      content: content,
      slugs: slugs,
      keywords: keywords,
      description: description,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string } }[] = [];

  fs.readdirSync('docker-composes').forEach((file) => {
    paths.push({ params: { slug: file.split('.')[0] } });
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export default IndexPage;

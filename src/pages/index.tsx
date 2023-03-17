import Head from 'next/head';
import React from 'react';
import Logo from '@/component/Logo';
import CommandPalette from '@/component/CommandPalette';
import CodeBlock from '@/component/CodeBlock';
import { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import YAML from 'yaml';
import { NextSeo } from 'next-seo';

const Home: NextPage<{ content: string; slugs: string[] }> = ({
  content,
  slugs,
}) => {
  return (
    <>
      <NextSeo
        title="Snippets for Docker-Compose"
        description="Docker Compose samples for various services"
        additionalMetaTags={[
          {
            property: 'keywords',
            content: 'docker-compose, docker, compose, snippets, samples',
          },
        ]}
      />
      <main className="w-2/3 ml-auto mr-auto flex flex-col">
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
}> = async ({ params }) => {
  const slugs: string[] = [];
  fs.readdirSync('docker-composes').forEach((file) => {
    slugs.push(file.split('.')[0]);
  });

  const yaml = fs.readFileSync(`docker-composes/postgres.yaml`, 'utf8');
  const parsed = YAML.parse(yaml);
  const content = YAML.stringify(parsed['service']);

  return { props: { content: content, slugs: slugs } };
};

export default Home;

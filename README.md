# <image src="./icons/compose-snippets.png" width="88" height="88"> Compose Snippets

Compose Snippets is a  collection of docker-compose for various services.

## How to contribute a snippet
To contribute a snippet you can create a new YAML file with the service name as the filename in the ```docker-compose `` directory. 

You can use ```bin/new []``` to create a new YAML file too. This will create a new YAML file with the required fields.

The ```name`` field will become a slug and search option on the website. Each YAML will be statically generated to a page with the name as the slug of the page.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to run the website

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
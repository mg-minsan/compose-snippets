import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';
import { ClipboardIcon } from '@heroicons/react/20/solid';

const CodeBlock = ({ content }: { content: string }) => {
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="mt-12 place-content-center relative z-0">
      <div className="absolute top-4 right-0">
        <button
          className="flex  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={(_) => {
            if (window != undefined) {
              navigator.clipboard.writeText(content);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }
          }}
        >
          <ClipboardIcon className="h-5 w-5 mr-3" />
          {copied ? <span>Copied</span> : <span>Copy</span>}
        </button>
      </div>
      <SyntaxHighlighter language="yaml" style={a11yDark}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

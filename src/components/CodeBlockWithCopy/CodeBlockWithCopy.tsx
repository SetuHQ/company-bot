import React, { MouseEvent } from 'react';
import { Element, CodeBlock, Button } from 'fictoan-react';

interface CodeBlockWithCopyProps {
  children: string;
  language: any;
}
const CodeBlockWithCopy = ({ language, children }: CodeBlockWithCopyProps) => {
  const copyToClipboard = (event: MouseEvent, value: string) => {
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // Updating button text

    (event.target as HTMLButtonElement).innerText = 'Copied!';
    setTimeout(() => {
      (event.target as HTMLButtonElement).innerText = 'Copy';
    }, 2000);
  };

  return (
    <Element as="div" className="code-block-container">
      <Button
        kind="tertiary"
        size="tiny"
        className="code-block-copy-btn"
        onClick={(e) => copyToClipboard(e, children)}
      >
        Copy
      </Button>
      <CodeBlock language={language} source={children} />
    </Element>
  );
};

export default CodeBlockWithCopy;

// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  language: string;
  children: string;
};

export default function CodeBlock({ language, children }: Props) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} wrapLongLines>
      {children.trim()}
    </SyntaxHighlighter>
  );
}

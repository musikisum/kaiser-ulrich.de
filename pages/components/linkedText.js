import { Fragment } from 'react';
import { Link } from '@chakra-ui/react';

// Markdown-Links im Text: [Linktext](https://example.org) oder [Linktext](/files/datei.pdf)
// Eine Ebene runder Klammern in der URL ist erlaubt, z.B. https://de.wikipedia.org/wiki/Sonate_(Musik)
const linkPattern = /\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g;

const opensInNewTab = (href) => /^https?:\/\//.test(href) || /\.pdf$/i.test(href);

export default function LinkedText({ text }) {
  if (!text) return null;
  const parts = [];
  let lastIndex = 0;
  for (const match of text.matchAll(linkPattern)) {
    const [whole, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<Link href={href} isExternal={opensInNewTab(href)} color='#6e91a1'>{label}</Link>);
    lastIndex = match.index + whole.length;
  }
  if (lastIndex === 0) return text;
  parts.push(text.slice(lastIndex));
  return <>{parts.map((part, index) => <Fragment key={index}>{part}</Fragment>)}</>;
}

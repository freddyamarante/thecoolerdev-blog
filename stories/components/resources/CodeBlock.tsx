import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Node {
  code: string
  language?: string
}

const CodeBlock = ({ node }: { node: Node }) => {
  const code = node.code

  return (
    <SyntaxHighlighter language={node.language || 'javascript'} style={dark}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

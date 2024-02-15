/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react'
// import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react'
import Article from '../../../../components/Article/Article'
import content from './synth.md'

export default function Synth() {
  console.log('content', content) // TODO: remove this
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((md) => {
        setText(md)
      })
  }, [])

  return <Article markdownContent={text} />
}
// import remarkGfm from 'remark-gfm'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

// export default function Synth() {
//   const [text, setText] = useState('')

//   useEffect(() => {
//     fetch(content)
//       .then((response) => response.text())
//       .then((md) => {
//         console.log(typeof md) // TODO: remove this

//         setText(md)
//       })
//   }, [])

//   return (
//     <div>
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         children={text}
//         components={{
//           code(props) {
//             const { children, className, node, ...rest } = props
//             const match = /language-(\w+)/.exec(className || '')
//             return match ? (
//               <SyntaxHighlighter
//                 {...rest}
//                 PreTag="div"
//                 children={String(children).replace(/\n$/, '')}
//                 language={match[1]}
//                 style={materialOceanic}
//               />
//             ) : (
//               <code {...rest} className={className}>
//                 {children}
//               </code>
//             )
//           },
//         }}></ReactMarkdown>
//     </div>
//   )
// }

/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import cn from 'classnames'
import cs from './Article.module.css'
import Link from '../Link/Link'



import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import BackLink from '../../components/BackLink/BackLink'

export default function Article({ markdownContent, className }) {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(markdownContent)
      .then((response) => response.text())
      .then((md) => {
        setText(md)
      })
  }, [markdownContent])


  return (
    <div className={cn(cs.wrap, className)}>
      <BackLink to="/projects" />

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={text}
        components={{
          a(props) {
            console.log(props)
            return <Link to={props.href}>{props.children}</Link>
          },
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={materialOceanic}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}></ReactMarkdown>
    </div>
  )
}

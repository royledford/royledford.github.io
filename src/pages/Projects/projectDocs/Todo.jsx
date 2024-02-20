import Article from '../../../components/Article/Article'
import doc from './todo.md'

export default function Todo() {
  return <Article markdownContent={doc} />
}

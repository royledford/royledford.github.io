import Article from '../../../components/Article/Article'
import doc from './salut.md'

export default function Salut() {
  return <Article markdownContent={doc} />
}

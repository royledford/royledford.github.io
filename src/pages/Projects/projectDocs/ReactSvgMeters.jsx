import Article from '../../../components/Article/Article'
import doc from './react-svg-meters.md'

export default function ReactSvgMeters() {
  console.log('doc', doc) // TODO: remove this

  return <Article markdownContent={doc} />
}

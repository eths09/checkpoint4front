import { useState } from 'react'
import '../style/article.css'
import article1 from '../img/article1.jpg'
import cappuccino from '../img/cappuccino.jpg'
const Article = () => {
  const [button, setbutton] = useState('café')
  const [img, setimg] = useState(article1)
  const [text, settext] = useState('prenez un café')

  const changearticle = () => {
    if (button === 'café') {
      setbutton('capuccino')
      setimg(cappuccino)
      settext('prenez un cappuccino')
    } else {
      setbutton('café')
      setimg(article1)
      settext('prenez un café')
    }
  }
  return (
    <div className="allArticles">
      <p className="particle">{button}</p>
      <img className="imgarticle" src={img}></img>
      <p className="particle">{text}</p>
      <button onClick={changearticle}>changer d'article</button>
    </div>
  )
}

export default Article

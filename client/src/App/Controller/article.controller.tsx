import axios from 'axios'
import ArticleInterface from "../Interfaces/articles.interfaces"

export async function getArticle() {
  const resp: any = await axios.get('http://localhost:4000/getArticle')
  const article: ArticleInterface = resp.data
  return article
}
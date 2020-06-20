import { httpClient } from '../Utils'
import ArticleInterface from "../Interfaces/articles.interfaces"

export async function getArticle() {
  const article: ArticleInterface = await httpClient.get('http://localhost:4000/getArticle').then((res: any) => res.data)
  return article
}
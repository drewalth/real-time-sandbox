import React, { useState, useEffect } from "react";
import ArticleModel from '../../Models/articles.model';
import ArticleInterface from "../../Interfaces/articles.interfaces"
import { getArticle } from "../../Controller/article.controller"

function Article() {

  const [article, setArticle] = useState<ArticleInterface>(ArticleModel)

  async function setArt() {
    let art: ArticleInterface = await getArticle()
    setArticle(art)
  }

  useEffect(() => {
    if (article === ArticleModel) {
      setArt()
    }
  }, [article])

  return (
    <div className="article-container">
      <div className="title">{article.title}</div>
      <div className="sub-title">{article.sub_title}</div>
      <div className="image-container">
        <img src={article.image} />
      </div>
      <div className="body">{article.body}</div>
      <div className="tags-container">
        {article.tags ? article.tags.map((tag, key) => {
          return (
            <div key={key} className="tag">
              { tag }
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

export default Article;
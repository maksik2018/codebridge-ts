import React from "react";
import { ArticleItem } from "..";
import s from "./ArticleList.module.css";

function ArticleList({ items,filter }) {
  
  return (

    <ul className={s.list}>
      {items.map((item) => (
        <ArticleItem key={item.id} item={item} filter={filter} />
      ))}
        
    </ul>
  );
}

export default ArticleList;

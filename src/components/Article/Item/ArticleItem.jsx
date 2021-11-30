import React from "react";
import s from "./ArticleItem.module.css";
import { FiArrowRight } from "react-icons/fi";
import {AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import Highlighter from "react-highlight-words";



function ArticleItem({ item,filter}) {
  const { title, summary, imageUrl, publishedAt, id } = item;
  const availableDate = moment(Date.parse(new Date(publishedAt))).format("MMMM Do YYYY")
   

  return (
    <li className={s.item}>
      
      <div className={s.wrapper}>
        <div className={s.overlay}>
        <img className={s.poster}
          src={imageUrl}
          alt=""
                />
        </div>
        <div className={s.dateWrapper}>
        <p className={s.icon}><AiOutlineCalendar size="13.33" /></p>
        <p className={s.date}>{availableDate}</p>
      </div>
       
 <Highlighter className={s.title}
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={title}
                           
      
        />
        
        <Highlighter className={s.description}
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={summary}
                    
          
      
  />

           
               <Link className={s.link} to={`/articles/${id}`}> <p className={s.readMore}> Read more </p>
         <FiArrowRight size="20" />
       </Link>
     
    </div>
    </li>
     
  );
}



export default ArticleItem;
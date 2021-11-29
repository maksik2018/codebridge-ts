import React from "react";
import 'material-icons/iconfont/material-icons.css'
import s from "./SearchForm.module.css";

function SearchForm({value,change}) {

  return (
    <>
      <input className={s.firstName} onChange={change} value={value} />
      <span className="material-icons-outlined">
search
</span>
      
      
      
     </>
  );
}
 

export default SearchForm;



	


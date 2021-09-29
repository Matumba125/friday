import React from "react";
import s from "./Select.module.css";

const Select = () => {

  return (
    <>
     <div className={s.selectWrap}>
        <select className={s.select} name="pages">
          <option className={s.selectItem} selected value="10">10</option>
          <option className={s.selectItem} value="20">20</option>
          <option className={s.selectItem} value="30">30</option>
        </select>
     </div>
    </>
  )
}

export default Select;

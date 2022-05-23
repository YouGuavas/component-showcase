import { useState } from 'react';

import '../styles/MyPagination.scss';

export function MyPagination(props) {
  const counter = [];
  const [page, setPage] = useState(1);
  const top = 9;
  const ceiling = 20;//Math.ceil(props.plants/props.pagination.resultsPerPage);
  const halfOfPills = Math.floor(top/2);
  const loop = (count, ceiling) => {
    if(count <= ceiling) {
      counter.push(count);
      loop(count+1, ceiling);
    } 
  }
  const arrow = (direction) => {
    if (direction === 'left') {
      if (page > 1) setPage(page - 1)
    } else {
      if (page < ceiling) {
        setPage(page+1)
      }
    }
    //for left arrow, decrease page number as long as page is greater than 1
    //for right arrow, increase page number as long as page is less than total pages
  }
  if (page <= halfOfPills+1) loop(1, ceiling)
  if(page >= ceiling-halfOfPills) loop(ceiling-top+1, ceiling)
  else loop(page-halfOfPills, ceiling)
  
  const renderClasses = (index) => {

    if (page <= 5) {
      //when page is below 5, if item is equal to index, make item active
      if (index+1 === page) return "pill-active";
      else return "pill";

    } else if (page >= ceiling - halfOfPills) {
      //when page is nearer than half toward ceiling, maintain pill length
        
      if (index+1 === top - (ceiling - page)) {
          return "pill-active";
        } else {
          return "pill";
        }
        
      } else if (index === 4) {
        //all other cases, make middle pill active
        return "pill-active";
      } else return "pill";
  }

  return (
    <ul className={props.classes}>
      <li className="pill" onClick={() => arrow('left')}><div className="center-align">{"<"}</div></li>
      {
       counter.map((item, index) => {
         if (index < top){
          return (
          <li key={index} className={renderClasses(index)} onClick={() => setPage(item)}>
            <div className="center-align">{item}</div>
          </li>)
         }
       })
      }
      <li className="pill" onClick={() => arrow('right')}><div className="center-align">{">"}</div></li>
    </ul>
  )
}
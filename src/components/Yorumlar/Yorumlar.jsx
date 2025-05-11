import React from 'react';
import './Yorumlar.css';
import Yorum from './Yorum.jsx'
/* ADIM 1: Yorum component'ini import edelim */


const Yorumlar = (props) => {
 /* ADIM 2: yorumları parent component'den prop olarak alalım */
  const {yorumlar} = props;
 return (
   <div>{
    /* ADIM 3: her Yorum için Yorum component'ini çalıştıralım. */
    yorumlar.map( (comment) => {
      return <Yorum yorum={comment} key={comment.id}/>
    })
   }</div>

 );
};


export default Yorumlar;










/*

import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = (props) => {
  const { yorumlar } = props;
  return (
    <div>
      {yorumlar.map((comment) => {
        return <Yorum key={comment.id} yorum={comment} />;
      })}
    </div>
  );
};

export default Yorumlar;

*/
import React from 'react';
import './Yorumlar.css';
/* ADIM 1: Yorum component'ini import edelim */


const Yorumlar = (props) => {
 /* ADIM 2: yorumları parent component'den prop olarak alalım */
 return (
   <div>{/* ADIM 3: her Yorum için Yorum component'ini çalıştıralım. */}</div>
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
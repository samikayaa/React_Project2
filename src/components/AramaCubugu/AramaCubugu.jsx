import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
 faHeart,
 faCircle,
 faCompass,
} from '@fortawesome/free-regular-svg-icons';
import './AramaCubugu.css';


const AramaCubugu = (props) => {
 /* ADIM 3: gönderdiğin propları buradan alabilirsin */

 const {aramaKriteri, aramaHandler} = props;

 return (
   <div className="search-bar-wrapper">
     <div className="social">
       <FontAwesomeIcon icon={faInstagram} />
     </div>
     <form className="search-form">
       <input type="text" placeholder="Arama" value={aramaKriteri} onClick={aramaHandler}/>{' '}
       {/* ADIM 4: input alanındaki, value ve hangi event'i dinleyeceksen ona göre gelen propları burada kullanabilirsin. */}
     </form>
     <div className="social-wrapper">
       <div className="social">
         <FontAwesomeIcon icon={faCompass} />
       </div>
       <div className="social">
         <FontAwesomeIcon icon={faHeart} />
       </div>
       <div className="social">
         <FontAwesomeIcon icon={faCircle} />
       </div>
     </div>
   </div>
 );
};


export default AramaCubugu;





/*

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faCircle,
  faCompass,
} from '@fortawesome/free-regular-svg-icons';
import './AramaCubugu.css';

const AramaCubugu = (props) => {
  const { aramaKriteri, aramaHandler } = props;

  const changeHandler = (event) => {
    aramaHandler(event.target.value);
  };
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Arama"
          value={aramaKriteri}
          onChange={changeHandler}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaCubugu;

*/
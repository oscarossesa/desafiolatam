import React from 'react';

const Footer = () => {
   return (
      <div>
         <h6 className="footerTitle">Fellowship of the Ring</h6>
         <ul className="list-inline">
            <li className="list-inline-item">
               <a href="https://github.com/oscarossesa/desafiolatam-react-desafio-1" target="_blank" rel="noopener noreferrer">
                  <i className="icon ion-logo-github"></i>
               </a>
            </li>
            <li className="list-inline-item">
               <a href="https://www.linkedin.com/in/oscarossesa" target="_blank" rel="noopener noreferrer">
                  <i className="icon ion-logo-linkedin"></i>
               </a>
            </li>
         </ul>
      </div>
   )
}

export default Footer;
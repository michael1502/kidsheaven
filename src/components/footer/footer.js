import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom'

export const Footer = () => {


    return (
        <div className="footer-container">

                <div>
                  <h2 className="logo">KidsHeaven</h2>
   
                </div>
                
                <div className="copyright">
                     © 2018 KidsHeaven, Inc. All rights reserved
        
                </div>

        </div>
    )
}
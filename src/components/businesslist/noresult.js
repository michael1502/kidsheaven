import React from 'react';
import noresult from '../../images/noresult.jpg'

import './noresult.scss';

export const NoResult = ()=>{

    return (

<div className='productslist-noresult-container'>
<div>
    <div className='image-container'>
    <img src={noresult} alt='no result found' />
    </div>
    
    <div className='info'>

    <p>Please ajust the location and/or serch term and try again.</p>

    </div>
</div>
</div>
    )
}


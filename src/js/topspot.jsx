import React from 'react';
import './../styles/appStyles.scss';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='button' target='_blank' href={'https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1]}>Google Location</a>        
    </div>
);
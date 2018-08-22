import React from 'react';

const Action = (props)=>(
    <div>
    <button 
        className='big-button' 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
    >
    
    
    Whom should i get a gift ?
    
    </button>
    </div>
);

export {Action as default};
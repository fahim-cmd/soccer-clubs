import React from 'react';

const NotMatch = () => {
    const noMatchStyle = {
        color: 'red'
    }
    return (
        <div>
            <h1 style={noMatchStyle}>ERROR, 404 <small>sorry page not found</small></h1>            
        </div>
    );
};

export default NotMatch;
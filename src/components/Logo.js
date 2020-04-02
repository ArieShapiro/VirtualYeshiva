import React from 'react';

const Logo = () => {
    return (
        <div>
            <img src={require("../assets/logo.png")} alt="logo" width="200"
                style={style} />
        </div>
    );
}

export default Logo;

const style = {
    display: 'block',
    margin: 'auto',
    marginTop: '10px'
}
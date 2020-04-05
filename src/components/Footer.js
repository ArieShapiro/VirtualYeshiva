import React from 'react'

const Footer = () => {
    return (
        <div style={styles.div}>
            <p style={styles.p}>© 2020 Made by Arie Shapiro</p>
        </div>
    );
}

export default Footer;

const styles = {
    div: {
        backgroundColor: '#5f5f5f',
        height: '50px',
        width: '100%',
        bottom: '0',
        position: 'fixed',
        opacity: '0.8'

    },
    p: {
        color: 'white',
        textAlign: 'center',
    }


}
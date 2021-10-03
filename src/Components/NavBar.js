import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <div style={styles.main}>
                    <Link style={styles.links} to="/">Home</Link>
                    <Link style={styles.links} to="/About">About me</Link>
                    <Link style={styles.links} to="/Projects">Projects</Link>
                    <Link style={styles.links} to="/Resume">Resume</Link>
                    <Link style={styles.links} to="/Contact">Contact</Link>
                
            </div>
        </>
    )
};

const styles ={
    main:{
        background:"#212121",
        display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "center",
    },
    links:{
        color:"#F6F6F6",
        paddingRight: "20px",
        textDecoration: "none",
    },
};

export default NavBar

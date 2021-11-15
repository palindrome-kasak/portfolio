import React from 'react'
import myPictures from '../assets/pictures/myPictures.jpg'
import CropProfile from '../assets/pictures/CropProfile.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
// import back1 from '../assets/pictures/back1.jpg'

const Home = () => {
    return (
        <>
            <div style={styles.main}>

                <div style={styles.pictureContainer}>
                    <img src={CropProfile} alt="profile" style={styles.picture} />
                </div>
                <div style={styles.aboutContainer}>
                    <div style={styles.text1}>
                        Kasak Gupta
                    </div>
                </div>
                <div style={styles.aboutContainer}>
                    <div style={styles.text2}>
                        i'm a  <Typical
                            steps={['Hello', 1000, 'Hello world!', 500]}
                            loop={Infinity}
                            wrapper="b"
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                            steps={['Developer',
                                2000,
                                'Student',
                                2000,
                                'Coder',
                                2000,
                                'Learner',
                                2000,
                                'Engineer',
                                2000,]}
                        />
                    </div>

                </div>
                <div style={styles.secAboutContainer}>
                    <p style={styles.paragraphText}>I am working as a freelance web designer and developer for 4 years. I love to design and make new web experiences for the people.</p>
                </div>
                <div style={styles.IconContainer}>
                    <div style={styles.icon}>
                        <a target="_blank" href="https://leetcode.com/Palindrome_kasak/"><SiLeetcode /></a>

                    </div>
                    <div style={styles.icon}>
                        <a target="_blank" href="https://www.linkedin.com/in/kasakgupta2051/"> <AiFillLinkedin /></a>

                    </div>
                    <div style={styles.icon}>
                        <a target="_blank" href="https://github.com/palindrome-kasak"><AiFillGithub /></a>

                    </div>
                </div>
            </div>



        </>
    )
};
const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        justifySontent: "center",
        alignItems: "center",

    },

    pictureContainer: {
        display: "flex",
        flexDirection: "column",
        justifySontent: "center",
        alignItems: "center",
    },
    picture: {
        backgroundSize: "cover",
        width: "220px",


    },
    // typeText:{
    //     color: "#6D9886",
    // },
    aboutContainer: {
        // color: "#F6F6F6",
        // flex: 1,
        // justifyContent: "flex-start",
        // paddingRight: "56px",
        // // paddingLeft: "25%",

    },
    text1: {
        fontSize: "45px",
        color: "#f6f6f6",
        padding: "10px",
    },
    text2: {
        fontSize: "25px",
        color: "#f6f6f6",
        padding: "5px",
        
    },
    IconContainer: {
        display: "flex",
        flexDirection: "row",
        justifySontent: "center",
        alignItems: "center",
        padding: "10px",
        

    },
    icon: {
        width: "60px",
        padding: "10px",
    },
    paragraphText:{
        fontSize: "15px",
        color: "#f6f6f6",
        padding: "5px",
        textAlign: "center",
    width: "50%",
    },
    secAboutContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
};

export default Home

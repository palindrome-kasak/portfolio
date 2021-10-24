import React from 'react'
import myPictures from '../assets/pictures/myPictures.jpg'
// import back1 from '../assets/pictures/back1.jpg'

const Home = () => {
    return (
        <>
            <div style={styles.main}>
        
            <div style={styles.pictureContainer}>
                    <img src={myPictures} alt="profile" style={styles.picture}/>
                </div>
                <div style={styles.aboutContainer}>
                    about Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum adipisci perspiciatis vero aspernatur. Aliquam possimus in sunt fugiat voluptatum laborum cum animi. Consequuntur itaque hic doloribus fugiat animi sed reprehenderit.
                </div>
            </div>
                
           

        </>
    )
};
const styles ={
        main:{
           
            
            display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    flex: 2,
    
        },
       
        pictureContainer:{
            display: "flex",
            /* margin: 103px; */
            flex: 1,
            justifyContent: "center",
            paddingBottom: "30px",
            // paddingRight: "25%",
        },
        picture:{
            backgroundSize: "cover",
            borderRadius: "50% 50% 50% 50%",
            width: "50%",
            // borderadius: 1000px;
            overflow: "hidden",
            backgroundColor: "#444",
            border: "18px solid #444",
            boxShadow: "0 0 25px 0 rgb(0 0 0 / 80%)",
            
            
        },
        aboutContainer:{
            color:"#F6F6F6",
            flex: 1,
            justifyContent: "flex-start",
            paddingRight: "56px",
            // paddingLeft: "25%",
            
        },
    };

export default Home

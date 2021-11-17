import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import { AiFillGithub, AiFillLinkedin,AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;
const ContactBanner = () => {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/" />
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
                    <div style={styles.icon}>
                        <a target="_blank" href="mailto:kasakgupta2051@gmail.com"><AiOutlineMail /></a>

                    </div>
                </div>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
const styles = {
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
},
icon: {
  width: "60px",
  padding: "10px",
},
};

export default ContactBanner
import React from 'react';
import styled from 'styled-components';
import PText from '../Components/PText';
import Button from '../Components/Button';
// import AboutImg from '../assets/images/about-page-img.png';
// import myPictures from '../assets/pictures/myPictures'
import myPictures from '../assets/pictures/myPictures.jpg'
// import AboutInfoItem from '../components/AboutInfoItem';
import AboutInfoItem from '../Components/AboutInfoItem'
import ContactBanner from '../Components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Kasak</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from firozabad, Uttar Pradesh. A place of beauty and
                  nature.{/* Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others. */}
                  I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have experience working with react native and react js.
Engineering professional with a bachelor of technology - Btech focused in the information of technology from J.S.S. Academy of Technical Education, Noida
Enthusiastic learner , minimal, Greatful !!✨
                  <br /> <br />
                  I started coding since I was in first year of college. Coding is also an
                  art for me. I love it and. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="https://drive.google.com/file/d/10kB9_MDjd65zeo7HNPuIduhFVhtRKNGh/view?usp=sharing" /> */}
            </div>
            <div className="right">
              <img src={myPictures} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={['SMK SENIOR SECONDARY SCHOOL']}
              />
              <AboutInfoItem
                title="College"
                items={['J.S.S. Academy of Technical Education, Noida']}
              />
              {/* <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT-JS']}
              />
                <AboutInfoItem
                title="FrameWork"
                items={['REACT-NATIVE']}
              />
              <AboutInfoItem
                title="Databases"
                items={['Firebase']}
              />
              <AboutInfoItem
                title="Library"
                items={['Material-UI', 'bootstrap']}
              />
              <AboutInfoItem
                title="languages"
                items={['JAVA', 'PYTHON','DSA']}
              />
              <AboutInfoItem
                title="Design"
                items={['figma']}
              />
              <AboutInfoItem
                title="Tools"
                items={['VsCode','intelliJ','github']}
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="june-sept 2021"
                items={['Developer at Creed essential']}
              />
              <AboutInfoItem
                title="Nov-jan 2021"
                items={['FrontEnd Developer at Contango']}
              />
               <AboutInfoItem
                title="sept-nov 2020"
                items={['Junior Developer at Here2help']}
              />

              {/* <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              /> */}
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
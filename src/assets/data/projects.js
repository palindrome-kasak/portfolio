import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';
import covid from '../pictures/covid.png'
import Contango from '../pictures/Contango.jpg'

const projects = [
  {
    id: uuidv4(),
    name: 'Covid-info',
    desc:
      'A web application which provides all updated  Covid19 resources and information of all over india.Developed all UI using reactjs and an library material ui and build all UI/UX designs in figma. Developed seperated section for each resources like oxygen, ambulance etc for easily accessible. Add firebase for dynamic data ,which helps in updating, deleting adding data.',
    img: covid,
    url:'https://optimistic-spence-85de64.netlify.app/'
  },
  {
    id: uuidv4(),
    name: 'Contango',
    desc:
      'Build a React-native expo App for grow your investment through playing game with other players. Developed wireframes and screens using REACT NATIVE frame work. Learn and use navigator to provide navigation through out the app.',
     img: Contango,
     url:'https://play.google.com/store/apps/details?id=com.contango.contango',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Coin Tracker',
  //   desc:
  //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
  //   // img: CoinTrackerImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   // img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   // img: ProjectImg,
  // },
];

export default projects;

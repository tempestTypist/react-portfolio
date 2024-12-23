import Slider from '../components/Slider'
import { Row } from 'react-bootstrap';
import dividerTop from '../assets/default-theme/images/page-divider-1.svg'
import dividerBot from '../assets/default-theme/images/page-divider-2.svg'

export default function Work() {
  const slideData = [
    {
      index: 0,
      headline: 'Vaporwave Desktop',
      dsc: 'Just a bit of fun with Jquery. A Windows 98 style desktop.',
      src: 'https://i.ibb.co/j6GKbzC/thumbnail-Vaporwave-Desktop.png',
      href: 'https://tempesttypist.github.io/vaporwave-desktop/'
    },
    {
      index: 1,
      headline: 'Drawfee Pets',
      dsc: 'Full-stack application for building pets using a variety of drawings made by Drawfee on Youtube. This is a fan-project and a sort of playground for me to test out things that Ive learned!',
      src: 'https://i.ibb.co/hCS3syj/thumbnail-Drawfee-Pets.png',
      href: 'https://drawfee-pets.herokuapp.com/'
    },
    {
      index: 2,
      headline: 'Dayplanner',
      dsc: 'An organizational tool built in React. Primarily a daily planner, but includes weather, a to-do list, and hydration tracking.',
      src: 'https://i.ibb.co/D4GZCnP/thumbnail-Dayplanner.png',
      href: 'https://react-dayplanner.herokuapp.com/'
    }
  ]

  return (
    <Row as={"section"} id="work" className="mt-4">
      <img src={dividerTop} className="work-divider-top" alt="" />
      <div>
        <h1 className="pb-3">My Work</h1>
        <Slider heading="Example Slider" slides={slideData} />
      </div>
      <img src={dividerBot} className="work-divider-bot" alt="" />
    </Row>
  );
}
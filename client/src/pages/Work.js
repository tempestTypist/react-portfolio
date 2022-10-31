import React from 'react'
import Slider from '../components/Slider'

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
      dsc: 'Full-stack application for building pets using a variety of drawings made by Drawfee on Youtube. This is a fan-project and a sort of playground for me to test out things that Ive learned.',
      src: 'https://i.ibb.co/hCS3syj/thumbnail-Drawfee-Pets.png',
      href: 'https://drawfee-pets.herokuapp.com/'
    },
    {
      index: 2,
      headline: 'Dayplanner',
      dsc: 'An organizational tool built in React. Since it was only ever intended to be used by me, it would save any changes to local storage - unfortunately Heroku does not have any persistant storage, so Ive removed the saving for demo purposes.',
      src: 'https://i.ibb.co/D4GZCnP/thumbnail-Dayplanner.png',
      href: 'https://react-dayplanner.herokuapp.com/'
    },
    {
      index: 3,
      headline: 'Spooky Sights',
      dsc: 'Our final project in coding bootcamp, this was a collaborative effort to build an API for finding haunted houses by state.',
      src: 'https://github.com/vcapella/Cobweb-coders/raw/khaleel/screenshot1.png',
      href: 'https://spooky-sights.herokuapp.com/homepage'
    }
  ]

  return (
    <section 
      id="work" 
      className="py-3"
      >
      <h1 className="pb-3">My Work</h1>
      <Slider heading="Example Slider" slides={slideData} />
    </section>
  );
}
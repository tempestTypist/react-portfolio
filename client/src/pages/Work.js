import React, { useState } from 'react'
import Slider from '../components/Slider'
// import  from '../assets/images/'

export default function Work() {
  const slideData = [
    {
      index: 0,
      headline: 'Drawfee Pets',
      dsc: 'Full-stack application for building pets using a variety of drawings made by Drawfee on Youtube.',
      src: 'https://i.ibb.co/hCS3syj/thumbnail-Drawfee-Pets.png',
      href: 'https://drawfee-pets.herokuapp.com/'
    },
    {
      index: 1,
      headline: 'Vaporwave Desktop',
      dsc: 'Just a bit of fun with Jquery. A Windows 98 style desktop.',
      src: 'https://i.ibb.co/j6GKbzC/thumbnail-Vaporwave-Desktop.png',
      href: 'https://tempesttypist.github.io/vaporwave-desktop/'
    },
    {
      index: 2,
      headline: 'Dayplanner',
      dsc: 'An organizational tool built in React - it is a dayplanner, weather tracker (my location only), to-do list builder, and hydration tracker.',
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
    // <Accordion data={data} />
    <section id="work" className="py-3">
      <h1 className="pb-3">My Work</h1>
      <Slider heading="Example Slider" slides={slideData} />
    </section>

  // <section id="work" className="vertical-accordian d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  //   <ul className="accordian">
  //     <li className="accordian-tab" style={{"--i" : 0, "--color" : "var(--color-green)"}} tabIndex="1">
  //       <img src={drawfee} />
  //     </li>
  //     <li className="accordian-tab" style={{"--i" : 1, "--color" : "var(--color-gold)"}} tabIndex="2">
  //       <img src={desktop} />
  //     </li>
  //     <li className="accordian-tab" style={{"--i" : 2, "--color" : "var(--color-purple)"}} tabIndex="3">
  //       <img src={dayplanner} />
  //     </li>
  //     <li className="accordian-tab" style={{"--i" : 3, "--color" : "var(--color-red)"}} tabIndex="4">
  //       {/* <img src={} /> */}
  //     </li>
  //   </ul>
  // </section>
  );
}
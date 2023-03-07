import React from 'react'
import About from './about';
import Navb from './Nav';

const images = [
    {
      src: 'https://nitdgp.ac.in/uploads/alll4.jpg',
      name: 'Aloke Kumar Datta (Associate Professor)',
    },
    {
      src: 'https://nitdgp.ac.in/uploads/amiya_kumar.jpg',
      name: 'Amiya Kumar Samanta (Professor)',
    },
    {
      src: 'https://nitdgp.ac.in/uploads/atul_kumar.jpg',
      name: 'Atul Krishna Banik (Professor)',
    },
    {
      src: 'https://nitdgp.ac.in/uploads/4c6f6e025454c9acb0f21ae69915f966.jpg',
      name: 'Bandhan Bandhu Majumdar (Assistant Professor)',
    },
    {
      src: 'https://nitdgp.ac.in/uploads/dilip_kumar.jpg',
      name: 'Dilip Kr. Singha Roy (Professor)',
    },
    {
      src: 'https://nitdgp.ac.in/uploads/diptesh_NIT_Profile3_Lu9AXQD.jpg',
      name: 'Diptesh Das (Associate Professor)',
    },
    {
        src: 'https://nitdgp.ac.in/uploads/12bb74d47eb283134d473807217f910d.jpg',
        name: 'Gilbert Hinge (Assistant Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/ae6befb2a04a964a6c6473604431af6c.jpg',
        name: 'Kamal Bhattacharya (Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/Photo_PT_resized.jpg',
        name: 'Pijush Topdar (Associate Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/25a0022eb5d60e18afd5ecff7732076d.jpg',
        name: 'Pronab Roy (Assistant Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/Photo.jpg',
        name: 'Purnendu Ray (Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/rpn_photo.jpg',
        name: 'Radhikesh P. Nanda (Associate Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/665c53d48cd22055cb6526d2bc7fbb2f.jpg',
        name: 'Sabyasachi Biswas (Assistant Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/492e9640b84ae649444074ec681e5eee.jpg',
        name: 'Dr. Sanku Konai (Assistant Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/soumen_saha.jpg',
        name: 'Showmen Saha (Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/6c940d990457df8870d58468125d6e93.png',
        name: 'Somnath Karmakar, Ph.D. (Assistant Professor Grade-I)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/soumay1111.jpg',
        name: 'Soumya Bhattacharyya (Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/f916695e0ab5856fc4332f00ee082d41.jpg',
        name: 'Suman Saha (Assistant Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/656e77b972453d45d1fd5a436539b367.jpg',
        name: 'Supriya Pal (Associate Professor)',
      },
      {
        src: 'https://nitdgp.ac.in/uploads/b0ee3b8fc2932ffd2a211666e18c8302.jpg',
        name: 'Sushovan Dutta (Assistant Professor)',
      },
    //   {
    //     src: 'https://nitdgp.ac.in/uploads/vijay_kumar.jpg',
    //     name: 'Vijay Kumar Dwivedi (Professor)',
    //   },
    //   {
    //     src: 'https://nitdgp.ac.in/front/assets/images/default.png',
    //     name: 'Amlan Das (Professor)',
    //   },
  ];
export default function Professors() {
  return (
    <div>
    <Navb/>
    <div className="gallery">
       
    {images.map((image) => (
      <div key={image.src} className="gallery__item">
        <img src={image.src} alt={image.name} />
        <div className="gallery__item__name">{image.name}</div>
      </div>
    ))}
  </div>
  <About/>
  </div>
  )
}

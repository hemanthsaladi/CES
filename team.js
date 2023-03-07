import React from 'react'
import CarouselFadeExample from './img'
import Navb from './Nav'
import About from './about'

const teamMembers = [
    {
      name: 'A',
      role: 'Web Developer',
      photo: 'https://nitdgp.ac.in/front/assets/images/default.png',
    },
    {
      name: 'B',
      role: 'Event Manager',
      photo: 'https://nitdgp.ac.in/front/assets/images/default.png',
    },
    {
      name: 'C',
      role: 'Graphic Designer',
      photo: 'https://nitdgp.ac.in/front/assets/images/default.png',
    },
    {
      name: 'D',
      role: 'Content Writer',
      photo: 'https://nitdgp.ac.in/front/assets/images/default.png',
    },

  ];

export default function Team() {
  return (
    <div>
      <Navb/>
      <div className="team">
      {teamMembers.map((member) => (
        <div key={member.name} className="team__member">
          <div className="team__member__photo">
            <img src={member.photo} alt={member.name} />
          </div>
          <div className="team__member__details">
            <div className="team__member__name">{member.name}</div>
            <div className="team__member__role">{member.role}</div>
          </div>
        </div>
      ))}
    </div>
      <About/>
    </div>
  )
}

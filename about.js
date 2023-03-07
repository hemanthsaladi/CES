import React from 'react';

import { BsFillEnvelopeFill,BsBuilding ,BsTelephone} from "react-icons/bs";
// import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function About() {
  return (
    <div>
       <div className="abt">
                        <h3>Contacts</h3>
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd> <BsBuilding/>  CIVIL Engineering Student Society,​NIT Durgapur,West Bengal, INDIA, 713209 </dd>
                            {/* <i className="fas fa-map-marked-alt"></i> */}
                        </dl>
                        <dl className="contact-list">
                            <dt>Email:</dt>
                            <dd><BsFillEnvelopeFill/> <a href=""> cessnitdgp@gmail.com</a></dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>Phones:</dt>
                            <dd><BsTelephone/> <a href="tel:+91 343 275 4176">  +91 343 275 4176 , 4177 </a>
                            </dd>
                        </dl>
                    </div>
    </div>
  )
}

import Link from "next/link"

import {FaLinkedinIn, FaInstagram, FaYoutube, FaVimeo} from 'react-icons/fa' 

const socials = [
  
  {icon: <FaLinkedinIn />, path: ''},
  {icon: <FaInstagram />, path: ''},
  {icon: <FaYoutube />, path: ''},
  {icon: <FaVimeo />, path: ''}, 
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
import Link from "next/link"

import {FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope} from 'react-icons/fa' 
import { FaBluesky } from "react-icons/fa6";

const socials = [
  
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/maximo-signiorini/'},
  {icon: <FaYoutube />, path: 'https://www.youtube.com/@maximosigniorini'},
  {icon: <FaBluesky />, path: 'https://bsky.app/profile/maximosigniorini.com'}, 
  {icon: <FaEnvelope />, path: 'mailto:maximosigniorini97@gmail.com'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles} target="_blank">{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
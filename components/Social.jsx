import Link from "next/link"

import {FaLinkedinIn, FaInstagram, FaYoutube, FaVimeo} from 'react-icons/fa' 

const socials = [
  
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/maximo-signiorini/'},
  {icon: <FaYoutube />, path: 'https://www.youtube.com/@maximosigniorini'},
  {icon: <FaVimeo />, path: 'https://vimeo.com/user63763181'}, 
  {icon: <FaInstagram />, path: 'https://www.instagram.com/maximosigniorini/'},
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
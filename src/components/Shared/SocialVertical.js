import { BsTwitterX } from "react-icons/bs"
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa"
import { Link } from "react-router"

const SocialVertical = () => {
  return (
    <div className="flex gap-2">
      <Link to="!#">
       <FaFacebookF/>
      </Link>
      <Link to="!#">
      <BsTwitterX/>
      </Link>
      <Link to="!#">
      <FaPinterestP/>
      </Link>
      <Link to="!#">
      <FaInstagram/>
      </Link>
      <Link to="!#">
      <FaTiktok/>
      </Link>
      
    </div>
  )
}
export default SocialVertical
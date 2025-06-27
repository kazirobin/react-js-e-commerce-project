import { BsTwitterX } from "react-icons/bs"
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa"
import { Link } from "react-router"

const SocialVertical = ({bg}) => {
  return (
    <div className="flex gap-2">
      <Link to="!#" className={`${bg? "hover:bg-yellow-600 bg-white text-green-600 h-9 w-9 flex justify-center items-center rounded-2xl p-2": ""}`}>
       <FaFacebookF/>
      </Link>
      <Link to="!#" className={`${bg? "hover:bg-yellow-600 bg-white text-green-600 h-9 w-9 flex justify-center items-center rounded-2xl p-2": ""}`}>
      <BsTwitterX/>
      </Link>
      <Link to="!#" className={`${bg? "hover:bg-yellow-600 bg-white text-green-600 h-9 w-9 flex justify-center items-center rounded-2xl p-2": ""}`}>
      <FaPinterestP/>
      </Link>
      <Link to="!#" className={`${bg? "hover:bg-yellow-600 bg-white text-green-600 h-9 w-9 flex justify-center items-center rounded-2xl p-2": ""}`}>
      <FaInstagram/>
      </Link>
      <Link to="!#" className={`${bg? "hover:bg-yellow-600 bg-white text-green-600 h-9 w-9 flex justify-center items-center rounded-2xl p-2": ""}`}>
      <FaTiktok/>
      </Link>
      
    </div>
  )
}
export default SocialVertical
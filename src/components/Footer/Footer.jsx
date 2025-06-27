import footerData from "/src/store/footer-data.json"
import images from "/src/assets/image-data.json"
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import SocialVertical from './../Shared/SocialVertical';
import { MdCallMade } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-green-800">
    <div className="flex flex-wrap lg:justify-evenly md:flex-nowrap text-white text-sm font-semibold p-4">
      {/* first part  */}
    <div className=" w-full md:w-40 flex flex-col gap-4">
      <img src={`${images[2].footerImage.lightLogo}`} className="w-25" alt="" srcset="" />
      <p >When an unknown printer took of type scrambled it to make a type specimen book.</p>
      <p className="flex items-center"> <CiLocationOn className="mt-2 me-3 text-2xl"/> 23/A Road ,Newyork city</p>
      <p className="flex"> <FiPhoneCall className="m-1 me-3 text-xl"/> +9888-256-666</p>
      <SocialVertical bg={true}/>
       </div>
      {/* middle part  */}


      {/* last part  */}
        
        <div className="md:w-50 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Sign Up Newsletter</h1>
        <p>When an unknown printer took a galley of type and scrambled</p>
        <div className="flex items-center bg-white text-black  h-10 rounded-md overflow-hidden">
          <input type="text" className="w-40 px-3 placeholder:text-gray-600 placeholder:font-normal placeholder:text-xs" name="" placeholder="Type Your E-mail" id="" />
          <div className="bg-yellow-400 ms-auto h-full w-12 flex items-center justify-center text-xl">

          <MdCallMade className="text-sm"/>
          </div>
        </div>
        <div>
          <p>Download App on MObile:</p>
          <p className="inline-block">15% discount on your first purchase</p>
          <div className="mt-4 flex gap-1">

          <img src={`${images[2].footerImage.googlePlay}`} className="rounded-sm w-30" alt="" />
          <img src={`${images[2].footerImage.appStore}`} className="rounded-sm w-30 " alt="" />
          </div>
        </div>
</div>

    </div>
    </div>
  )
}
export default Footer
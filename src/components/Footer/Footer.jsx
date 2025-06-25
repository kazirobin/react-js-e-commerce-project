import footerData from "/src/store/footer-data.json"
import images from "/src/assets/image-data.json"
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import SocialVertical from './../Shared/SocialVertical';
import { MdCallMade } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-green-600">
    <div className="flex flex-wrap lg:justify-evenly md:flex-nowrap text-white text-sm font-semibold p-4">
      {/* first part  */}
    <div className="w-40 flex flex-col gap-4">
      <img src={`${images[2].footerImage.lightLogo}`} className="w-25" alt="" srcset="" />
      <p>When an unknown printer took of type scrambled it to make a type specimen book.</p>
      <p className="flex"> <CiLocationOn className="mt-2 me-3 text-xl"/> 23/A Road ,Newyork city</p>
      <p className="flex"> <FiPhoneCall className="m-1 me-3"/> +9888-256-666</p>
      <SocialVertical bg={true}/>
       </div>
      {/* middle part  */}

      {footerData.map((mainItem,mainIndex) => (<div key={mainIndex}  className="px-5 pe-37 sm:pe-20">
        <h1 className="font-bold text-xl pb-4">{mainItem.main}</h1>
        <div className="flex flex-col gap-2">
          {mainItem.sub.map((subItem,subIndex) => (
            <Link key={subIndex} to={subItem.src}><p className="font-semibold">{subItem.link}</p></Link>
          ))}
        </div>
      </div>))}
      {/* last part  */}
        
        <div className="w-50 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Sign Up Newsletter</h1>
        <p>When an unknown printer took a galley of type and scrambled</p>
        <div className="flex items-center bg-white text-black  h-10">
          <input type="text" className="w-40 px-3 placeholder:text-gray-600" name="" placeholder="Type Your E-mail" id="" />
          <div className="bg-yellow-400 h-full w-full flex items-center justify-center text-2xl">

          <MdCallMade />
          </div>
        </div>
        <div>
          <b>Download App on MObil:</b>
          <p>15% discount on your first</p>
          <p>purchase</p>
          <div className="mt-4">

          <img src={`${images[2].footerImage.googlePlay}`} className="rounded-sm w-30" alt="" />
          <img src={`${images[2].footerImage.appStore}`} className="rounded-sm w-30 mt-1" alt="" />
          </div>
        </div>
</div>

    </div>
    </div>
  )
}
export default Footer
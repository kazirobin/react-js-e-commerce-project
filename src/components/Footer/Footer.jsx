import footerData from "/src/store/footer-data.json"
import images from "/src/assets/image-data.json"
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdCallMade } from "react-icons/md";
import SocialVertical from './../Shared/SocialVertical';
const Footer = () => {
  return (
    <div className="bg-green-800">
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-1 lg:justify-evenly text-white text-sm font-semibold p-4">
      {/* first part  */}
    <div className="lg:col-span-2">
      <img src={`${images[2].footerImage.lightLogo}`} className="w-25 mb-3" alt="" srcset="" />
      <p className="mb-3 max-w-80">When an unknown printer took of type scrambled it to make a type specimen book.</p>
      <p className="flex items-center mb-3"> <CiLocationOn className="mt-2 me-3 text-2xl"/> 23/A Road ,Newyork city</p>
      <p className="flex mb-3"> <FiPhoneCall className="m-1 me-3 text-xl"/> +9888-256-666</p>
      <SocialVertical bg={true}/>
    </div>
      {/* middle part  */}

{footerData.map((mainItem,mainIndex) => (
  <div key={mainIndex}  className="">
        <h1 className="font-bold text-xl pb-4">{mainItem.main}</h1>
        <ul className="flex flex-col gap-2 ">
          {mainItem.sub.map((subItem,subIndex) => (
            <li className="hover:list-disc hover:ms-4 transition-all" key={subIndex} >

            <Link to={subItem.src}><p className="font-semibold hover:text-yellow-400">{subItem.link}</p></Link>
            </li>
          ))}
        </ul>
      </div>
    ))}

      {/* last part  */}
        
        <div className="flex flex-col gap-4 md:col-span-2">
        <h1 className="font-bold text-xl">Sign Up Newsletter</h1>
        <p>When an unknown printer took a galley of type and scrambled</p>
        <div className="flex items-center bg-white text-black  h-10 rounded-md overflow-hidden max-w-90">
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
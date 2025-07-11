import { FaFacebookF,  FaSkype,  FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // Be sure you're using react-router-dom

const ShareProduct = () => {
  const media = [
    { name: "Facebook", src: "https://facebook.com", icon: <FaFacebookF /> ,bg:"bg-blue-900 hover:bg-blue-950"},
    { name: "Twitter", src: "https://twitter.com", icon: <FaXTwitter /> ,bg:"bg-cyan-500 hover:bg-cyan-600"},
    { name: "Skype", src: "https://skype.com", icon: <FaSkype /> ,bg:"bg-cyan-500 hover:bg-cyan-600"},
    { name: "Pinterest", src: "https://pinterest.com", icon: <FaPinterestP /> ,bg:"bg-red-700 hover:bg-red-800"},
    { name: "WhatsApp", src: "https://whatsapp.com", icon: <FaWhatsapp /> ,bg:"bg-green-500 hover:bg-green-600"},
  ];

  return (
    <div className='flex items-center gap-2 py-3'>
      <h1>Share:</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {media.map((platform, index) => (
          <Link to={platform.src} key={index} target="_blank" rel="noopener noreferrer" className={`${platform.bg} text-white size-6 flex justify-center items-center rounded-sm transform transition duration-300 hover:scale-110`}>
            {platform.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShareProduct;

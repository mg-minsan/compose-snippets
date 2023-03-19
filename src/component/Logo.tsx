import Image from 'next/image';
import icon from '../../icons/compose-snippets.png';
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-8 mb-4">
      <div className="relative w-20 h-20 md:h-32 md:w-32 mr-2">
        <Image src={icon} alt="Compose Snippet Logo" fill />
      </div>
      <h1 className="text-2xl md:text-5xl text-white font-extrabold select-none">
        Compose
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
          Snippets
        </span>
      </h1>
    </div>
  );
};

export default Logo;

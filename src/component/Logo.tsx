import Image from 'next/image';
import icon from '../../icons/compose-snippets.png';
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <Image src={icon} alt="" width={88} height={88} />
      <h1 className="text-5xl text-white font-extrabold select-none">
        Compose
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
          Snippets
        </span>
      </h1>
    </div>
  );
};

export default Logo;

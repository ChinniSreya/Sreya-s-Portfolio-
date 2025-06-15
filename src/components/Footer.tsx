
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>by Chinni Sreya Sri</span>
          </p>
          <p className="text-gray-400 mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

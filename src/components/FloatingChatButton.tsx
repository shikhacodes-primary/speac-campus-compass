
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {isHovered && (
        <div className="mr-3 bg-white py-2 px-4 rounded-full shadow-lg animate-fade-in">
          <p className="font-medium">Chat Now - We're Here to Help</p>
        </div>
      )}
      
      <Link 
        to="/chatbot"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-speac-brand shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle className="w-6 h-6 text-foreground" />
      </Link>
    </div>
  );
};

export default FloatingChatButton;

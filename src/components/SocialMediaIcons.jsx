
import Image1 from "../assets/linkedin.png";
import Image2 from "../assets/mail4.png";
import Image3 from "../assets/github.png";



const SocialMediaIcons = () => {
    return (
      
      <div className="flex justify-center md:justify-start my-6 gap-10">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/pooja-yadav-34b946246/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedIn-link" src={Image1} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="mailto:pooja71101@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Gmail-link" src={Image2} height="-500" width="48"    />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/Pooja71101"
          target="_blank"
          rel="noreferrer"
        > 
          <img alt="github" src={Image3} height="-500" width="48"/>
        </a>
        
      </div>
    );
  };
  
  export default SocialMediaIcons;
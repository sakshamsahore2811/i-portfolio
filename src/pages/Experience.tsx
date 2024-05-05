import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dawa from '../images/dawa-ai.png'
import hcl from '../images/hcl.jpg'
import agile from '../images/agile.jpg'
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
export default function Experience() {
  var settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 2000, 
    slidesToShow: 2,
    centerMode: true, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  const images = [hcl,dawa,agile];

  return (
    <>
    <Navbar/>
    <Container>
        <div className="bg-purple-500 h-screen text-white font-thin">
        <div className="text-4xl text-center p-4">Experience</div>
        <div className="m-36">
    <Slider {...settings}>
        {images.map((img, index) => (
          <div className='slidepic' key={index}>
            <img src={img} height={100}  alt={`img${index}`} />
          </div>
        ))}
      </Slider>
      </div>
      </div>
    </Container>
    </>
  );
}
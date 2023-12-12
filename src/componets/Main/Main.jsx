import React , {useEffect} from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
// animation import
import Aos from 'aos';
import 'aos/dist/aos.css'
import './main.css'

function Main() {

  // let's create a react hook to add a scroll animation......

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const Data = [
    {
      "id": 1,
      "imgsrc": img1,
      "destTitle": "Bora Bora",
      "location": "French Polynesia",
      "grade": "CULTURAL RELAX",
      "fees": "$700",
      "description": "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities."
    },
    {
      "id": 2,
      "imgsrc": img2,
      "destTitle": "Santorini",
      "location": "Greece",
      "grade": "BEACH GETAWAY",
      "fees": "$850",
      "description": "Santorini offers stunning sunsets, beautiful beaches, and rich cultural experiences. It's a perfect destination for relaxation and exploration."
    },
    {
      "id": 3,
      "imgsrc": img3,
      "destTitle": "Kyoto",
      "location": "Japan",
      "grade": "CULTURAL IMMERSION",
      "fees": "$600",
      "description": "Kyoto is a city steeped in tradition and culture. Explore ancient temples, beautiful gardens, and immerse yourself in the essence of Japan."
    },
    {
      "id": 4,
      "imgsrc": img4,
      "destTitle": "Machu Picchu",
      "location": "Peru",
      "grade": "HISTORICAL ADVENTURE",
      "fees": "$900",
      "description": "Visit the awe-inspiring Machu Picchu and trek through the Andes mountains. It's a journey back in time to the ancient Inca civilization."
    },
    {
      "id": 5,
      "imgsrc": img5,
      "destTitle": "Iceland",
      "location": "Iceland",
      "grade": "NATURE WONDERLAND",
      "fees": "$750",
      "description": "Iceland's dramatic landscapes include waterfalls, geysers, and the Northern Lights. It's a paradise for nature enthusiasts and photographers."
    },
  ]

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="setContent grid">

        {/* Map method in data */}

        {Data && Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              {/* Here will be return single destination from map */}

              <div className="imageDiv">
                <img className='img' src={imgsrc} alt="no image" />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="cantinent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>

                <div className="fees flex">
                  <div className='grade'>
                    <span className='text'>{grade}<small className='small'>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DTALIS <LuClipboardCheck className='icon' />
                </button>

              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Main

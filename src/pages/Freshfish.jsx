import React from 'react'
import '../styles/freshfish.scss'
import fishes from '../fishdata'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";

const Freshfish = () => {
  return (
    <>
      <div className="freshfish">
        <div className="freshfish-header">
          <h1>Fresh Fish</h1>
          <button>
            <Link to="/fresh-fish">View More</Link>
          </button>
        </div>
        <hr />
        <div className="freshfish-cards">
          {fishes
            .filter(fish => fish.type === "freshwater")[0]
            .items.slice(0, 4)
            .map((i, index) => (
              <div className="cards" key={index}>
                <img src={i.URL} alt={i.name} />
                <div className="rate">
                <h2>{i.name}</h2>
                  <span><IoLogoWhatsapp /></span>
                </div>
                  <p>{i.rate}</p>

              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Freshfish

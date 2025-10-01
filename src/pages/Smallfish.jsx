import React from 'react'
import '../styles/smallfish.scss'
import fishes from '../fishdata'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";

const Smallfish = () => {
  return (
    <>
      <div className="smallfish">
        <div className="smallfish-header">
          <h1>Small Fish</h1>
          <button>
            <Link to="/small-fish">View More</Link>
          </button>
        </div>
        <hr />
        <div className="smallfish-cards">
          {fishes
            .filter(fish => fish.type === "smallfish")[0]
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

export default Smallfish

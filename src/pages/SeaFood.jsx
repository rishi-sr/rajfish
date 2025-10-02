import React from 'react'
import '../styles/seafood.scss'
import fishes from '../fishdata'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io"
import { useTranslation } from 'react-i18next'

const SeaFood = () => {
  const whatsappNumber = "919241919193"
  const { t } = useTranslation()

  const seafoodData = fishes.find(fish => fish.type === "seafood")

  if (!seafoodData) {
    return <p>{t("No seafood items available")}</p>
  }

  return (
    <div className="seafood">
      <div className="seafood-header">
        <h1>{t("Sea Food")}</h1>
        <button>
          <Link to="/sea-food">{t("View More")}</Link>
        </button>
      </div>
      <hr />
      <div className="seafood-cards">
        {seafoodData.items.slice(0, 4).map((i, index) => {
          const message = `Hello! I am interested in buying ${i.name}. Can you provide more details?`
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
          return (
            <div className="cards" key={index}>
              <img src={i.URL} alt={i.name} />
              <div className="rate">
                <div className="det1">
                  <h2>{i.name}</h2>
                  <p>{i.rate}</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <span><IoLogoWhatsapp /></span>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SeaFood

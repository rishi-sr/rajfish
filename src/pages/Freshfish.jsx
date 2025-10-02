import React from 'react';
import '../styles/freshfish.scss';
import fishes from '../fishdata';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import '../i18n'
import { useTranslation } from 'react-i18next'

const Freshfish = () => {
  const whatsappNumber = "919241919193";
  const { t } = useTranslation()

  return (
    <div className="freshfish">
      <div className="freshfish-header">
        <h1>{t('freshfish.h1')}</h1>
        <button>
          <Link to="/fresh-fish">{t('global.viewmore')}</Link>
        </button>
      </div>
      <hr />
      <div className="freshfish-cards">
        {fishes
          .filter(fish => fish.type === "freshwater")[0]
          .items.slice(0, 4)
          .map((i, index) => {
            const message = `Hello! I am interested in buying ${i.name}. Can you provide more details?`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
            );
          })}
      </div>
    </div>
  );
};

export default Freshfish;

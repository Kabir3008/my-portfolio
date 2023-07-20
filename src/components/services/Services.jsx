import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Sevices</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services
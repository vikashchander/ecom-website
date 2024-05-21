'use client'
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import data from '../../../public/data.json'

export default function Carousel() {
  return (
    <MDBCarousel className='mt-3' showControls interval={3000}>
      {data.herosection.map(({externalUrl, imageUrl}) => {
        return (
          <MDBCarouselItem itemId = {imageUrl} interval={1000}>
            <a href="https://google.com" target="_blank">
              <img src={imageUrl} className='d-block w-100' alt='...' />
              </a>
          </MDBCarouselItem>
        )
      })}
    </MDBCarousel>
  );
}
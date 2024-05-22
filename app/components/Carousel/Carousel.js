'use client'
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import data from '../../../public/data.json'
import Image from 'next/image'
export default function Carousel() {
  return (
    <MDBCarousel className='mt-3' showControls interval={3000}>
      {data.herosection.map(({externalLink, imageUrl}) => {
        return (
          <MDBCarouselItem key={imageUrl} interval={1000}>
            <a key={imageUrl} href={externalLink} target="_blank">
              <Image layout="responsive"  width={800} height={500} key={imageUrl} src={imageUrl} className='d-block w-100' alt='...' />
            </a>
          </MDBCarouselItem>
        )
      })}
    </MDBCarousel>
  );
}
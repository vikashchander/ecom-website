'use client'
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <>
      <MDBNavbar sticky light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.vectorstock.com/i/1000v/97/10/gold-jewelry-vector-5909710.avif'
              height='50'
              alt='jewellery'
              loading='lazy'
            />
            <h6>Khatri Jewellers</h6>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
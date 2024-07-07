'use client'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarToggler,
  MDBIcon
} from 'mdb-react-ui-kit';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  console.log(pathname, "dsfs???")
  return (
    <>
      <MDBNavbar  expand='lg' sticky light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <Image
              src='https://cdn.vectorstock.com/i/1000v/97/10/gold-jewelry-vector-5909710.avif'
              height='50'
              alt='jewellery'
              width={70}
              loading='lazy'
            />
            <h6>Khatri Jewellers</h6>
          </MDBNavbarBrand>
              <MDBNavbarToggler
                  type='button'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setOpenNav(!openNav)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
            <MDBCollapse navbar open={openNav}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/category/lists' active={pathname === '/category/lists'} aria-current='page'>
                  Category
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink  href='/product/lists' active={pathname === '/product/lists'} aria-current='page'>
                    Products
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
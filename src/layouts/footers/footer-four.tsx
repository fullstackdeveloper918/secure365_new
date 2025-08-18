import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/secure365-logo.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer className='text-white inline-block w-full footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 footer-logo-box">
            <Link className="d-inline-block mb-3" href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <p className="text-white mb-0">Secure 365 © All rights reserved</p>
          </div>
          <div className="col-lg-6">
            <div className="foot-deatil-box flex justify-center">
            <div className="Contact-foot-data">
            <h2 className="text-white font-normal">Contact Us</h2>
            <p className="text-white">740 New South Head RD, Triple <br /> Bay SWFW 3180, New York</p>
            <p className="text-white mb-0 mt-4">P: <Link href="tel:+6314678886" className="text-white">+6 314 678 886</Link></p>
            <p className="text-white mb-0">E: <Link href="mailto:secure@gmail.com" className="text-white">secure@gmail.com</Link></p>
            </div>
            <div className="quick-foot-data">
            <h2 className="text-white font-normal">Quick Links</h2>
            <ul className="list-unstyled m-0 quick-link-list">
              <li><Link href="#">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/service">Service</Link></li>
              <li><Link href="/Why-Choose-Us">Why Choose Us</Link></li>
              <li><Link href="#">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            </div>
             </div>
          </div>

          <div className="col-lg-3">
            <div className="newsletter-foot-box">
            <h2 className="text-white font-normal">Newsletter</h2>
            <div className="d-flex align-items-center">
              <input type="text" className="form-control me-2 news-foot-input" placeholder="Enter your email" />
              <button className="btn btn-outline-primary submit-news-btn">
                <RightArrow clr='#19191A' />
              </button>
            </div>
            <div className="social-icons">
              <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
              <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
              <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
            </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <p className="mb-0">
            Secure 365 © All rights reserved
          </p>
        </div> */}
      </div>
    </footer>
  )
}

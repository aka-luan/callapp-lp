import Image from 'next/image';

import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
export default function Footer() {
  return (
    <footer id='footer' className='container mx-auto pt-24 md:pt-32 xl:pt-40  pb-5'>
      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] mb-16 md:mb-32 gap-4 gap-y-8'>
        <div className='flex flex-col col-span-2 md:col-span-1 mb-7 md:mb-0 '>
          <Image
            className='w-[170px] lg:w-[220px] xl:w-[320px] mb-7 md:mb-14'
            src='/logo-dark.svg'
            width={320}
            height={210}
            alt='chatapp writen in light green'
          />
          <small className='opacity-60'>
            The last team chat you’ll ever need.
          </small>
        </div>
        <div className='flex flex-col col-span-1'>
          <h3 className='mb-7'>Help</h3>
          <ul className='flex flex-col gap-4'>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  Support
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  Knowledgebase
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover '
                  href='#footer'>
                  Tutorials
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col col-span-1'>
          <h3 className='mb-7'>Features</h3>
          <ul className='flex flex-col gap-4'>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  Screen Sharing
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  iOS & Android Apps
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover '
                  href='#footer'>
                  File Sharing
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover '
                  href='#footer'>
                  User Management
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Company</h3>
          <ul className='flex flex-col gap-4'>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  About Us
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  Careers
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover '
                  href='#footer'>
                  Contact Us
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Contact Us</h3>
          <ul className='flex flex-col gap-4'>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='mailto:info@chatapp.com'>
                  info@chatapp.com
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover'
                  href='#footer'>
                  1-800-200-300
                </a>
              </small>
            </li>
            <li className='opacity-60'>
              <small>
                <a
                  className='underline-hover '
                  href='https://maps.app.goo.gl/3yfF3t44uskiZUsU9'
                  target='_blank'>
                  3500 Deer Creek Rd Palo A
                </a>
              </small>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid md:grid-cols-[2fr_3fr_1fr] justify-items-center md:justify-items-start items-center gap-4'>
        <small className='opacity-60'>© Copyright ChatApp Inc.</small>
        <ul className='flex gap-4 flex-wrap md:flex-nowrap place-content-center md:place-content-start'>
          <li className='opacity-60'>
            <small>
              <a
                className='underline-hover'
                href='#footer'>
                Terms of Service
              </a>
            </small>
          </li>
          <li className='opacity-60'>
            <small>
              <a
                className='underline-hover'
                href='#footer'>
                Privacy Policy
              </a>
            </small>
          </li>
          <li className='opacity-60'>
            <small>
              <a
                className='underline-hover '
                href='#footer'>
                Partners & Affiliates
              </a>
            </small>
          </li>
          <li className='opacity-60'>
            <small>
              <a
                className='underline-hover '
                href='#footer'>
                Sitemap
              </a>
            </small>
          </li>
        </ul>
        <div className='flex items-center gap-4 '>
          <a href='https://x.com' target='_blank'>
            <IconBrandX
              className='text-green h-6 w-6 xl:h-8 xl:w-8 transition-transform duration-200 ease-in-out hover:scale-95'
              
            />
          </a>
          <a href='https://facebook.com' target='_blank'>
            <IconBrandFacebook
              className='text-green h-6 w-6 xl:h-8 xl:w-8 transition-transform duration-200 ease-in-out hover:scale-95'
              
            />
          </a>
          <a href='https://linkedin.com' target='_blank'>
          <IconBrandLinkedin
              className='text-green h-6 w-6 xl:h-8 xl:w-8 transition-transform duration-200 ease-in-out hover:scale-95'
              
            /></a>
          <a href='https://instagram.com' target='_blank'>
          <IconBrandInstagram
              className='text-green h-6 w-6 xl:h-8 xl:w-8 transition-transform duration-200 ease-in-out hover:scale-95'
              
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

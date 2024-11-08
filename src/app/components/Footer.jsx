import Image from 'next/image';

export default function Footer() {
  return (
    <footer id='footer' className='pt-40 pb-5'>
      <div className='container mx-auto grid grid-cols-[2fr_1fr_1fr_1fr_1fr]'>
        <div className='flex flex-col'>
          <Image
            className='mb-7'
            src='/logo-dark.svg'
            width={160}
            height={105}
            alt='chatapp writen in light green'
          />
          <small className='opacity-80 mb-72'>
            The last team chat you’ll ever need.
          </small>
          <small className='opacity-80'>© Copyright ChatApp Inc.</small>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Help</h3>
          <ul className='flex flex-col gap-6'>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Support
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Knowledgebase
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1 '
                href='#footer'>
                Tutorials
              </a></small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Help</h3>
          <ul className='flex flex-col gap-6'>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Support
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Knowledgebase
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1 '
                href='#footer'>
                Tutorials
              </a></small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Help</h3>
          <ul className='flex flex-col gap-6'>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Support
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Knowledgebase
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1 '
                href='#footer'>
                Tutorials
              </a></small>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-7'>Help</h3>
          <ul className='flex flex-col gap-6'>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Support
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1'
                href='#footer'>
                Knowledgebase
              </a></small>
            </li>
            <li className='opacity-80'>
              <small><a
                className='hover:border-b-2 border-foreground pb-1 '
                href='#footer'>
                Tutorials
              </a></small>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

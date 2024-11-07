import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <header className='bg-green text-lightgreen text-sm'>
      <div className='flex px-12 justify-between'>
        <a href='#'>
          <Image
            src='/logo.svg'
            width={160}
            height={105}
            alt='chatapp writen in light green'
          />
        </a>

        <nav className='flex items-center'>
          <ul className='flex items-center gap-6 h-8'>
            <li>
              <a href='#product' className='hover:border-b-2 border-lightgreen pb-1'>Product</a>
            </li>
            <li>
              <a href='#product' className='hover:border-b-2 border-lightgreen pb-1'>Services</a>
            </li>
            <li>
              <a href='#contact' className='hover:border-b-2 border-lightgreen pb-1'>Contact</a>
            </li>
            <span className='w-[2px] h-[inherit] bg-lightgreen opacity-60'></span>
            <li>
              <a href='#contact' className='hover:border-b-2 border-lightgreen pb-1'>Log In</a>
            </li>
            <li>
              <Button type={'secondary1'} isNav={true}>Try it Free</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

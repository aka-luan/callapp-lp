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
            className='w-[130px] xl:w-[160px]'
            alt='chatapp writen in light green'
          />
        </a>

        <nav className='flex items-center'>
          <ul className='flex items-center gap-6 h-8'>
            <li>
              <a href='#product' className='underline-hover'>Product</a>
            </li>
            <li>
              <a href='#product' className='underline-hover'>Services</a>
            </li>
            <li>
              <a href='#contact' className='underline-hover'>Contact</a>
            </li>
            <span className='w-[2px] h-[inherit] bg-lightgreen opacity-60'></span>
            <li>
              <a href='#contact' className='underline-hover'>Log In</a>
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

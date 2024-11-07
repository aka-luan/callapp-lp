import Image from 'next/image';
import Button from './components/Button';
import Header from './components/Header';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main>
        <section id='hero' className='bg-green py-44 text-lightgreen'>
          <div className='container flex mx-auto justify-between items-center gap-28'>
            <div id='hero-text' className='flex flex-col flex-1'>
              <span className='h-[2px] w-16 bg-lightgreen opacity-60 mb-7'></span>
              <h1 className='mb-7 font-medium'>Have your<br></br> best chat</h1>
              <p className='mb-14 font-light'>Fast, easy & unlimited team chats.</p>
              <div className='flex gap-7'>
                <Button type={'primary'}>Try it Free</Button>
                <Button>Get a Demo</Button>
              </div>
            </div>
            <div id="hero-img flex-1">
              <Image src='/Hero Images.png' width={600} height={600}></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

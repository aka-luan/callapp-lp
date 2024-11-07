import Button from './components/Button';
import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main>
        <section id='hero' className='bg-green py-40 text-lightgreen'>
          <div className='container flex mx-auto'>
            <div id='hero-text' className='flex flex-col'>
              <span className='h-[2px] w-16 bg-lightgreen opacity-60 mb-7'></span>
              <h1 className='mb-7 font-medium'>
                Have your<br></br> best chat
              </h1>
              <p className='mb-14 font-light'>
                Fast, easy & unlimited team chats.
              </p>
              <div className='flex gap-7'>
                <Button type={'primary1'}>Try it Free</Button>
                <Button type={'secondary1'}>Get a Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id='about' className='py-40 text-foreground'>
          <div className='container flex flex-col mx-auto justify-center '>
            <span className='h-[2px] w-16 bg-foreground opacity-60 mb-6 self-center'></span>
            <h2 className='mb-5 font-medium text-center'>Instant Team Chats</h2>
            <p className='mb-5 font-light text-center w-1/2 self-center'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <Image
              src='/middle-section-img.png'
              width={1204}
              height={917}
              alt='chatapp interface, showing a conversation between two friends on the center and all other messages on the left'
            />
          </div>
        </section>
        <section id='cta' className='py-40 bg-lightgreen text-foreground flex'>
          <Image
            src='/cta-img.png'
            width={705}
            height={734}
            alt='two mans talking in an modern office with some people in the background working and talking'
          />
          <div className='flex container flex-col justify-center'>
            <h2 className='mb-5 font-medium'>Perfect Solution for <br></br>Small Businesses</h2>
            <p className='mb-14 font-light w-1/2 '>
              Pricing plans that fit like a glove.
            </p>
            <div className='flex gap-7'>
                <Button type={'primary2'}>Try it Free</Button>
                <Button type={'secondary2'}>Get a Demo</Button>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

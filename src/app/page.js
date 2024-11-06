import Button from './components/Button';
import Header from './components/Header';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main>
        <section id='hero' className='bg-green py-44 text-lightgreen'>
          <div className='container flex mx-auto'>
            <div id='hero-text' className='flex flex-col'>
              <span className='h-[2px] w-16 bg-lightgreen opacity-60 mb-7'></span>
              <h1 className='mb-7 font-medium'>Have your<br></br> best chat</h1>
              <p className='mb-14 font-light'>Fast, easy & unlimited team chats.</p>
              <div className='flex gap-7'>
                <Button type={'primary'}>Try it Free</Button>
                <Button>Get a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Button from './components/Button';
import Header from './components/Header';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main>
        <section id='hero' className='bg-green py-44 text-lightgreen'>
          <div className='container flex mx-auto'>
            <div id='hero-text' className='flex flex-col gap-10'>
              <span className='h-[2px] w-16 bg-lightgreen opacity-60'></span>
              <h1>Have your best chat</h1>
              <p>Fast, easy & unlimited team chats.</p>
              <div className='flex'>
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

import Image from "next/image";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <section
          id="hero"
          className="bg-green pb-24 pt-20 text-lightgreen md:pb-32 xl:pb-40"
        >
          <div className="container mx-auto flex flex-col items-center md:flex-row">
            <div
              id="hero-text"
              className="mb-14 flex flex-1 flex-col text-center md:mb-0 md:text-start"
            >
              <span className="mb-7 h-[2px] w-8 self-center bg-lightgreen opacity-60 md:w-16 md:self-start"></span>
              <h1 className="mb-7 text-3xl font-medium">
                Have your<br></br> best{" "}
                <span className="text-purple">chat</span>
              </h1>
              <p className="mb-14 font-light">
                Fast, easy & unlimited team chats.
              </p>
              <div className="flex gap-7">
                <Button type={"primary1"}>Try it Free</Button>
                <Button type={"secondary1"}>Get a Demo</Button>
              </div>
            </div>
            <div id="hero-img flex-1">
              <Image
                src="/hero-img.png"
                width={600}
                height={600}
                className="md:w-[325px] lg:w-[400px] xl:h-[600px] xl:w-[600px]"
              />
            </div>
          </div>
        </section>
        <section id="about" className="py-24 text-foreground md:py-32 xl:py-40">
          <div className="container mx-auto flex flex-col justify-center">
            <span className="mb-6 h-[2px] w-8 self-center bg-foreground opacity-60 md:w-16"></span>
            <h2 className="mb-5 text-center text-2xl font-medium">
              Instant Team Chats
            </h2>
            <p className="mb-10 w-3/4 self-center text-center font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <Button type={"secondary2"} className="mb-10 self-center md:mb-7">
              LEARN MORE
            </Button>
            <Image
              className="xl:ml-[2.095238095238095rem]"
              src="/middle-section-img.png"
              width={1204}
              height={917}
              alt="chatapp interface, showing a conversation between two friends on the center and all other messages on the left"
            />
          </div>
        </section>
        <section
          id="cta"
          className="flex flex-col-reverse gap-12 bg-lightgreen px-4 py-24 text-foreground md:flex-row md:px-8 md:py-32 lg:gap-24 lg:px-12 xl:py-40"
        >
          <Image
            src="/cta-img.png"
            width={705}
            height={734}
            className="md:w-[350px] lg:w-[455px] xl:w-[705px]"
            alt="two mans talking in an modern office with some people in the background working and talking"
          />
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <h2 className="mb-3 text-center text-2xl font-light md:text-start lg:mb-5 xl:text-3xl">
              Perfect Solution for Small Businesses
            </h2>
            <p className="mb-7 font-light lg:mb-10">
              Pricing plans that fit like a glove.
            </p>
            <div className="mb-10 flex gap-7 lg:mb-12">
              <Button type={"primary2"}>Try it Free</Button>
              <Button type={"secondary2"}>Get a Demo</Button>
            </div>
            <span className="mb-3 h-[2px] w-12 bg-foreground opacity-60 lg:mb-5"></span>
            <div className="flex items-center gap-4">
              <Image
                className=""
                src="/cta-stars.png"
                width={147}
                height={28}
                alt="five green stars"
              />
              <small className="lg:w-2/4">
                <b>5,200 businesses</b> use ChatApp and they rate it as{" "}
                <b>5-stars.</b>
              </small>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

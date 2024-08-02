import Image from "next/image";
import myPhoto from "../../../public/my-photo.jpg";
import { CreditCard, Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10  opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-card shadow-xl shadow-indigo-600/10 ring-1  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image // استبدال <img> بـ <Image>
          alt="myPhoto"
          src={myPhoto}
          className="mx-auto rounded-full w-56 h-56"
        />
        <div className="mt-2 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-foreground text-xl">
            Ahmed Ragab
          </div>
          <svg
            width={3}
            height={3}
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="fill-primary"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <div className="text-secondary-foreground">Frontend Developer</div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <Button>
            <a
              target="_blank"
              rel="noopener"
              href="https://drive.google.com/file/d/13cY6agyzFPsMhQsjA5wN7QbKcnV17SbH/view?usp=sharing"
            >
              Download CV
            </a>
          </Button>
        </div>

        <figure className="mt-4">
          <blockquote className="text-center text-[1rem]  leading-8 text-foreground sm:text-2xl sm:leading-9">
            <p>
              I am a strong communicator and a collaborative team player and
              enjoy working in a fast-paced environment. I am also comfortable
              working independently and taking ownership of projects. I am
              constantly seeking new challenges and opportunities to learn and
              grow as a software engineer.
            </p>
          </blockquote>
          <figcaption className="mt-4">
            <div className="flex justify-center items-center space-x-4">
              <Link
                className="duration-200 border-[1px] border-primary p-2 rounded-full"
                target="_blank"
                rel="noopener"
                href={"https://www.facebook.com/EngAhmedRagab24"}
              >
                <Facebook className="duration-200 hover:text-primary" />
              </Link>
              <Link
                className="duration-200 border-[1px] border-primary p-2 rounded-full"
                target="_blank"
                rel="noopener"
                href={"https://www.linkedin.com/in/ahmed-ragab-558a31209/"}
              >
                <Linkedin className="duration-200 hover:text-primary" />
              </Link>
              <Link
                className="duration-200 border-[1px] border-primary p-2 rounded-full"
                target="_blank"
                rel="noopener"
                href={"https://github.com/Ahmedragab24"}
              >
                <Github className="duration-200 hover:text-primary" />
              </Link>
              <Link
                className="duration-200 border-[1px] border-primary p-2 rounded-full"
                target="_blank"
                rel="noopener"
                href={
                  "https://www.paypal.com/paypalme/my/settings?flow=cmV0dXJuVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3QmY2FuY2VsVXJsPWh0dHBzOi8vd3d3LnBheXBhbC5jb20vbXlhY2NvdW50L3RyYW5zZmVyL2hvbWVwYWdlL3JlcXVlc3Q="
                }
              >
                <CreditCard className="duration-200 hover:text-primary" />
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default page;

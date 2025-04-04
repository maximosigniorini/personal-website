import { Button } from "@/components/ui/button"
import { BsArrowRight } from 'react-icons/bs'
import Link from "next/link"

export const runtime = "edge";

//components
import Social from "@/components/Social"
import Photo from "@/components/Photo"

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Sound Designer & Music Producer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Maximo Signiorini</span></h1>
            <p className="max-w-[600px] mb-9 text-white/80">Passionate and
              creative in constant search for learning all aspects of sound.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/portfolio" className="group">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Portfolio</span>
                  <BsArrowRight className="text-xl group-hover:-rotate-45" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
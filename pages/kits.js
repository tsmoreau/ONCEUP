import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Caro from "../components/Carousel";

export default function AboutPage() {
  return (
    <main className="bg-th-background font-roboto w-screen flex-col flex items-center">
      <Nav />
      <div className="pt-40 md:pt-48 "></div>
      <div className="mb-0.5  text-6xl tracking-tight text-center  border-b-0 w-full border-dashed border-th-primary-light">
        Maker Kits
      </div>
      <div className="border-2 border-dashed border-th-primary-light w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mb-12">
        <div className="flex flex-col items-center ">
          <span className="text-3xl mt-10 ">Vehicles & Vessels</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dotted border-th-primary-light flex justify-center"></div>
          <div className="flex w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              Join us for an introduction to tools, building, and making for
              ages 10 and up. Participants can assemble one or more boxed maker
              kits, explore the miniature kids museum or just free play with the
              provided tools and materials in a pop-up Mini-Makerspace.
              Instruction and safety orientation provided.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <span className="text-3xl mt-10">Robots & Mechs</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dotted border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              The core of many Maker programs, Project Based Learning Kits allow
              students to work toward a broad goal using a set of tools and
              materials, allowing them to expieriment, problem solve, and think
              critically, all while building fine motor skills and broad sensory
              awareness.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <span className="text-3xl mt-10">Helmets & Armor</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dotted border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              The core of many Maker programs, Project Based Learning Kits allow
              students to work toward a broad goal using a set of tools and
              materials, allowing them to expieriment, problem solve, and think
              critically, all while building fine motor skills and broad sensory
              awareness.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <span className="text-3xl mt-10">Animals & Sculptures</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dotted border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              The core of many Maker programs, Project Based Learning Kits allow
              students to work toward a broad goal using a set of tools and
              materials, allowing them to expieriment, problem solve, and think
              critically, all while building fine motor skills and broad sensory
              awareness.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

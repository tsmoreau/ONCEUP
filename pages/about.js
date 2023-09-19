import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-th-background font-roboto w-screen flex-col flex items-center">
      <Nav />
      <div className="pt-40 md:pt-48 "></div>
      <div
        id="mission"
        className="mb-0.5  text-6xl tracking-tight text-center  border-b-0 w-full border-dashed border-th-primary-light"
      >
        About Us
      </div>
      <div className="border-2 border-dashed border-th-primary-light w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 mb-12">
        <div className="flex flex-col items-center ">
          <span className="text-2xl mt-10 ">Our Mission</span>

          <div className="flex w-11/12 flex-col text-xs md:text-sm text-center px-6 py-4 md:px-8  border-2 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              Our mission is to empower people of all ages and backgrounds to
              learn and apply STEM, Maker, and Trade skills together and with
              confidence. We beleve that the confidence, agency, and expression
              that comes with ablity to physically manifest your intentions and
              understand your enviornment can ease adult burdens, bolster young
              people both psychologically and professionally, and forge lasting
              community bonds.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-2xl mt-10 ">Our Roadmap</span>

          <div className="flex w-11/12 flex-col text-xs md:text-sm text-center px-6 py-4 md:px-8  border-2 border-dashed border-th-primary-light  flex justify-center">
            <p className="py-1">
              We achieve this through Maker Events & Kits, Adult Learning
              Seminars, and in the future a full-size Community Makerspace
              wherein tools, materials, project classes, community support, and
              more, are all close at hand and readily available.
            </p>

            <p className="py-1">
              <div id="team" className=""></div>
              Our team consists of a second-generation general contractor with
              over a decade of professional expierience in Operations for the
              Non-Profit space, and an additional ten year veteran of the
              Non-Profit space with a professional focus on Development,
              Corporate Partnerships, and Administration.
            </p>
            <p className="py-1">
              For more information about what our current classes and events
              consist of, please see the{" "}
              <span className="underline font-bold">
                Maker Events, Classes & Kits
              </span>{" "}
              and{" "}
              <span className="underline font-bold">
                Trade Skill Basics Classes
              </span>{" "}
              sections of our What We Do page. Additionally, complete details of
              all Program Projects can be found in the Resources section at the
              bottom of any page.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          <span className="text-2xl mt-10 ">Our Team</span>

          <div className="flex flex-co w-11/12 items-center text-xs md:text-sm text-center  border-2 border-dashed border-th-primary-light flex justify-center">
            <div className="w-full flex justify-center ">
              <div className="w-full my-2 justify-items-center border-0 grid-flow-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
                <div className="h-96 w-64 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
                <div className="h-96 w-64 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center hidden mb-16">
          <span className="text-2xl mt-10 ">Our Board</span>

          <div className="flex flex-col items-center text-xs md:text-sm text-center px-6 py-4 md:px-8  border-2 border-dashed border-th-primary-light w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 flex justify-center">
            <div className="w-full flex justify-center ">
              <div className="w-full mt-2 justify-items-center grid-flow-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
                <div className="h-96 w-72 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
                <div className="h-96 w-72 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
                <div className="h-96 w-72 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
                <div className="h-96 w-72 md:h-56 md:w-40 border-2 border-dashed border-th-primary-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

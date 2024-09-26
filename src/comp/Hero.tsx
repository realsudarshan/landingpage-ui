import HeroCards from "./HeroCards";
const Hero=()=>{
    return(<>
    <section className="container grid lg:grid-cols-2  place-items-center py-20 md:py-32 gap-10 mx-4">
        <div className="text-center lg:text-start ">
            <main className="text-5xl lg:text-6xl font-bold" >

<span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          {" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>
        <p className="text-gray-400 text-2xl md:w-10/12 mx-auto lg:mx-0 ">Build your React landing page effortlessly with the required sections to your project.

</p>


        </div>
        <div>
            <HeroCards/>
        </div>
       
    </section>
    </>)
}
export default Hero;
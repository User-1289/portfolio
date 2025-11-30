import NavMenu from './components/NavMenu';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function Home() {
  return (
    <div id='Home' className='bg-black text-white'>
      <NavMenu  />
      <div className='relative flex flex-col p-5 md:p-10 justify-center items-center mt-10 max-w-4xl mx-auto'>
        <div className='text-center'>
          <div className='text-5xl md:text-6xl py-3 font-semibold'>
            Hey, I&apos;m<br/> Armaan Zeyad
          </div>
          <div className='text-xl md:text-2xl text-gray-400 mt-4 mb-6'>
            Full Stack Engineer • Systems Architect • Early-Stage Builder
          </div>
          <div className='text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto'>
            I&apos;m a 16-year-old engineer who loves taking ideas from zero to shipped. I design, architect, build, deploy, and scale full-stack systems — fast.
            <br/><br/>
            Right now I&apos;m building a few products and looking to work with ambitious early-stage startups where engineers own the whole stack and ship real impact.
          </div>
        </div>
      </div>
      <div className='text-center my-12 text-gray-600 text-2xl'>⸻</div>
      
      <div className='max-w-4xl mx-auto px-5 md:px-10 mt-10 mb-12'>
        <h2 className='text-2xl md:text-3xl text-center mb-6'>What I Believe</h2>
        <div className='text-gray-300 leading-relaxed text-lg space-y-4 max-w-3xl mx-auto'>
          <p>I believe small teams ship the biggest things.</p>
          <p>I like working where engineers act as PMs, designers, and operators — where the goal is to ship, learn, and iterate fast.</p>
        </div>
      </div>
      
      <div className='text-center my-12 text-gray-600 text-2xl'>⸻</div>
      <TechStack />
      <Projects  />
      <Contact/>
    </div>
  );
}

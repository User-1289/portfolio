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
            Product Engineer • Building Products • Driving Growth
          </div>
          <div className='text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto'>
            I&apos;m a product engineer. I love building things from scratch, owning them end to end, and helping them grow.
            <br/><br/>
            At Flamingo Cards, I started in engineering and moved into leading product. I helped increase MRR by 100% through hands-on product experiments, paywall testing, funnel improvements, and pricing optimization.
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

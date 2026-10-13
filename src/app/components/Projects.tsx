import React from 'react'

const Projects: React.FC = ({}) => {
    
    let projectsInfo = [
        {
            name: "Photolabs",
            details:"A suite of high-performance video generation APIs for AI developers. Focused on clean API design + scalable compute.",
            techStacks: "Python, Next.js",
            url:"https://photolabs.dev"
        },
        {
            name:"NeoClip",
            details:"Generate polished marketing videos using AI characters + user-uploaded products. Ownership: architecture, pipelines, UI, and deployment.",
            techStacks:"Next.js, Stripe",
            url:"https://neoclip.studio"
        },
        {
            name:"Learnflow",
            details:"AI-powered learning platform that creates custom study plans, interactive lessons, and progress tracking.",
            techStacks:"Next.js, OpenAI, Firebase, PayPal",
            url:"https://learnflow.study"
        },
        {
            name: "FrankLeads.io",
            details: "Searches Reddit, X, LinkedIn and finds high-intent prospects using embeddings + ranking.",
            techStacks: "Next.js, Node.js, Python, MongoDB, Firebase, Vercel",
            url: "https://frankleads.io"
        },
        {
            name: "LinkReach",
            details: "Building a B2B SaaS that identifies prospects and sends personalized outreach safely at scale. (In Development)",
            techStacks: "Node.js, Next.js, OpenAI, Redis, Puppeteer, MongoDB",
            url: "#"
        },
        {
            name: "Buildt.dev",
            details: "Platform that generated, modified, and deployed websites from prompts. Learned LLM codegen, AST parsing, auto component wiring, dependency resolution. (Scrapped, Learned Tons)",
            techStacks: "Next.js, TypeScript, Node.js, Python",
            url: "https://buildt.dev"
        },
        {
            name:"PDF Insight Extractor",
            details:"Extracts concepts, questions, and summaries from large textbooks for students + instructors.",
            techStacks:"Django, Python, Next.js, Firebase",
            url:"https://pdf-extracting-tutor.vercel.app/"
        },
        {
            name:"Memory Match",
            details:"Real-time multiplayer with Socket.io and custom lobby system.",
            techStacks:"Next.js, Typescript, Express, Socket.io",
            url:"https://memory-match-multiplayer.vercel.app/"
        },
    ]

    const experienceInfo = [
        {
            name: "Product Lead — Flamingo Cards",
            duration: "Mar 2026 – Oct 2026",
            highlights: [
                "Moved from engineering into leading product, coordinating a lean team across engineering, design, and testing.",
                "Helped increase MRR by 100% through paywall testing, product testing, funnel improvements, and pricing optimization.",
                "Owned experiments end to end: coming up with ideas, building experiments, shipping changes, working with analytics, and reporting the results."
            ]
        },
        {
            name: "Software Engineer — Flamingo Cards",
            duration: "Jan 2026 – Mar 2026",
            highlights: [
                "Built and shipped features for a consumer app used by 100k+ users, owning work from development through deployment.",
                "Developed internal web apps and analytics tools, and implemented A/B tests to support product and revenue growth.",
                "Worked across React Native, React, Node.js, Firebase, Google Cloud, and BigQuery."
            ]
        },
        {
            name: "Mobile App Developer — Freelance Contractor",
            duration: "Oct 2025 – Dec 2025",
            highlights: [
                "Provided ongoing development for a production mobile app used by 50k users.",
                "Reduced React Native app loading time from 3 seconds to 200 milliseconds by running tasks in parallel.",
                "Revamped the UI to meet client requirements and improved an existing React Native codebase with significant technical debt."
            ]
        },
        {
            name: "Software Engineering Intern — Vispero",
            duration: "Nov 2024 – Jun 2025",
            highlights: [
                "Developed a React Native library for JAWS Kiosk Android APIs, enabling accessibility features for enterprise kiosks.",
                "Designed system architectures for internal products and shipped two full-stack apps end to end, from UI/UX and React front ends to Node.js back ends.",
                "Owned Dockerization, CI/CD, and deployment on AWS ECS, working with S3, ECR, EFS, IAM, and CloudWatch."
            ]
        },
        {
            name: "Software Engineer — Freelance Contractor",
            duration: "Jul 2024 – Aug 2024",
            highlights: [
                "Built an AI chatbot SaaS for businesses using OpenAI and custom context ingestion, owning system architecture, API design, UI, and full-stack development.",
                "Redesigned a client website to improve responsiveness, UI/UX, and performance."
            ]
        }
    ]

    return (
        <div id='Projects' className='mt-5'>
            <h1 className='text-center text-3xl'>My Projects</h1>
            <h2 className='text-xl text-center mt-5 text-gray-400'>Projects I&apos;ve Built (and shipped)</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 items-center justify-around '>
                {projectsInfo.map((prj,i)=>( 
                    <div key={i} className=' bg-gray-800 col-auto flex flex-col justify-between p-5 min-h-80 rounded-xl'>
                        <div>
                            <h1 className='text-2xl text-center mb-5'>{prj.name}</h1>
                            <div className='text-base text-gray-400'>{prj.details}</div>
                            <div className='mt-5'>
                                <span className='text-1xl'>Tech Stack: </span>
                                <span className='text-base text-gray-300'>{prj.techStacks}</span>
                            </div>
                        </div>
                        <div className='self-start mt-5 flex items-center'>
                            {prj.url !== '#' && (
                                <>
                                    <svg  fill='white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                                    <a className='ml-2 underline underline-offset-1' target='_blank' href={prj.url}>{prj.name}</a>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center my-12 text-gray-600 text-2xl'>⸻</div>
            <h1 className='text-center text-3xl mt-10'>My Experience</h1>
            <div className='mt-10 space-y-8'>
                {experienceInfo.map((experience, i) => (
    <div className="bg-gray-800 p-6 rounded-xl max-w-4xl mx-auto" key={i}>
    <h2 className="text-2xl font-bold text-white">{experience.name}</h2>
    <ul className="text-gray-400 mt-4 leading-relaxed list-disc pl-5 space-y-2">
      {experience.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
    <div className="mt-4">
      <div className="mt-2">
        <span className="font-semibold text-white">Duration: </span>
        <span className="text-gray-300">{experience.duration}</span>
      </div>
    </div>
  </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;

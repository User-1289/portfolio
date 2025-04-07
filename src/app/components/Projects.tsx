import React from 'react'

const Projects: React.FC = ({}) => {

    let projectsInfo = [
        {
            name: "Frankleads.io",
            details: "AI-powered outreach to secure high-quality leads across freelance platforms.",
            techStacks: "Next.js, React, TypeScript, NodeJs, Python..., MongoDB, Firebase, Vercel",
            url: "https://frankleads.io"
        },
        {
            name: "Buildt.dev",
            details: "It's a platform to create websites from prompts. Create, modify, and deploy websites in just a second, with full access to code. (Scrapped). Learnt a lot, llm code generation and parsing, ast traversing, automating package downloads, integration of ui libriaries totally automated...",
            techStacks: "Next.js, React, TypeScript, NodeJs, Python...",
            url: "https://buildt.dev"
        },
        {
            name:"PDF data extractor",
            details:"It is a tool to extract various insights from PDF such as extracting questions or concepts from textbooks. It is mainly aimed for educating instructors and students.",
            techStacks:"Django, Python, NextJS, NextAuth, Firebase, Firebase storage",
            url:"https://pdf-extracting-tutor.vercel.app/"
        },
        {
            name:"A Multiplayer Board Game",
            details:"Memory Match Multiplayer is a multiplayer game that lets you sharpen your memory. Friends could play it online by creating a room.",
            techStacks:"NextJS, React, Typescript, Express, Socket.io",
            url:"https://memory-match-multiplayer.vercel.app/"
        },
    ]

    let experienceInfo = [
        {
            name: "Freelance Developer",
            details: "Worked on building a web platform with chatbot functionality, handling full-stack development, design, and deployment. Managed integrations for backend services and authentication.",
            duration: "2024 July - 2024 September"
        },
        {
            name: "Freelance Developer",
            details: "Involved in the redesign and development of a web application, focusing on improving the user interface and responsiveness for various device types. Collaborated with teams to integrate updates.",
            duration: "2024 August - 2024 September"
        }
    ]

    return (
        <div id='Projects' className='mt-5'>
            <h1 className='text-center text-3xl'>Projects</h1>
            <h2 className='text-xl text-center mt-5 text-gray-400'>Projects that I have done</h2>
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
                            <svg  fill='white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                            <a className='ml-2 underline underline-offset-1' target='_blank' href={prj.url}>{prj.name}</a>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='text-center text-3xl mt-16'>Experience</h1>
            <div className='mt-10 space-y-8'>
                {experienceInfo.map((experience, i) => (
    <div className="bg-gray-800 p-6 rounded-xl" key={i}>
    <h2 className="text-2xl font-bold text-white">{experience.name}</h2>
    <p className="text-gray-400 mt-4">{experience.details}</p>
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

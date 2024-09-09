import React from 'react'

const Projects: React.FC = ({}) => {

    let projectsInfo = [
        {
            name: "Buildt.dev",
            details: "It's a platform to create websites from prompts. Create, modify, and deploy websites in just a second, with full access to code. (In Development)",
            techStacks: "Next.js, React, TypeScript, NodeJs, Python...",
            url: "https://buildt.dev"
        },
        {
            name:"PDF data extractor",
            details:"It is a tool to extract various insights from PDF such as extracting questions or conceps from textbooks. It is mainly aimed for educating instructors and students. (In development)",
            techStacks:"Django, Python, NextJS, NextAuth, Firebase, Firebase storage",
            url:""
        },
        {
            name:"Vehicle Fee Manager",
            details:"Vehicle Fee Manager is an app that could be used to transform manual fee collection in schools. It acts as a system for the vehicle fee management in schools. It has a lot of features",
            techStacks:"React Native, Typescript, Lambda functions, MongoDB, Firebase",
            url:"https://play.google.com/store/apps/details?id=com.deverse.space.schoolbusfee"
        },
        {
            name:"Memory Match Multiplayer",
            details:"Memory Match Multiplayer is a multiplayer game that lets you sharpen your memory. Friends could play it online by creating a room.",
            techStacks:"NextJS, React, Typescript, Express, Socket.io",
            url:"https://memory-match-multiplayer.vercel.app/"
        },
        {
            name:"Puncture Fix App",
            details:"This is an app that lets people search their nearest puncture shops. This is really useful especially if you have got a flat tire at an unknown place",
            techStacks:"React Native, Leaflet, Lambda functions, MongoDB",
            url:"https://play.google.com/store/apps/details?id=com.deverse.space.punctureapp"
        },
        {
            name:"News Website & App",
            details:"It's a service that provides latest news in various categories",
            techStacks:"React, React Native, Lambda functions, MongoDB",
            url:"https://play.google.com/store/apps/details?id=com.webdevintoapp.news"
        },
        {
            name:"Online Quiz Website",
            details:"This website is an online quiz platform. Users could create, attend or test their knowledge with a random quiz about different topics",
            techStacks:"HTML, CSS, JS, Firebase",
            url:"https://quiz-hub-fun.netlify.app/"
        },
        {
            name:"Todo Website with sync",
            details:"It's a To-do website in which you could sign up with your google account and schedule your day with To-dos. It also has auto async",
            techStacks:"React, Firebase",
            url:"https://todowebappcom.netlify.app"
        },
    ]

    let experienceInfo = [
        {
            name: "AI Chatbot Platform",
            role: "Freelance Developer",
            details: "Developing a platform that allows businesses to create custom chatbots for their websites. The platform enables easy integration and management of AI-powered chatbots to enhance customer interactions.",
            techStacks: "React, Node.js, OpenAI API, MongoDB",
            duration: "2024 August - Present"
        }
    ]

    return (
        <div id='Projects' className='mt-5'>
            <h1 className='text-center text-3xl'>Projects</h1>
            <h2 className='text-xl text-center mt-5 text-gray-400'>Projects that i have done</h2>
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
            <div className='mt-10'>
                {experienceInfo.map((exp, i) => (
                    <div key={i} className='bg-gray-800 p-6 rounded-xl mb-8'>
                        <h2 className='text-2xl font-bold'>{exp.name}</h2>
                        <h3 className='text-xl text-gray-300 mt-2'>{exp.role}</h3>
                        <p className='text-gray-400 mt-4'>{exp.details}</p>

                        <div className='mt-2'>
                            <span className='font-semibold'>Duration: </span>
                            <span className='text-gray-300'>{exp.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
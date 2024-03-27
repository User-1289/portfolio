import React, { useEffect, useRef, useState } from 'react'

const Projects: React.FC = ({}) => {

    let projectsInfo = [
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
            url:"https://todo.deverse.space"
        },
        {
            name:"Todo Website with sync",
            details:"It's a To-do website in which you could sign up with your google account and schedule your day with To-dos. It also has auto async",
            techStacks:"React, Firebase",
            url:"https://todo.deverse.space"
        },
    ]

    return(
        <div id='Projects' className='mt-5'>
            <h1 className='text-center text-3xl'>Projects</h1>
            <h2 className='text-xl text-center mt-5 text-gray-400'>Projects that i have done</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 items-center  justify-around '>
                {projectsInfo.map((prj,i)=>(
                    <div className=' bg-gray-800 col-auto flex flex-col justify-between p-5 min-h-80 rounded-xl'>
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
        </div>
    )
}

export default Projects

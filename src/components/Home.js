import React from 'react'
import image from 'C:/udemy-node-course/portfolio/src/img/aloha-lake.jpg'
import "../App.css"

export default function Home(){
    return (
        <main>
                <img src={image} alt="Aloha Lake" className="absolute object-cover w-full h-full" />
            
                <section className="relative flex-row  justify-right px-5 h-14 lg:pt-5 ">
                    <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name"> Hi, I'm James.</h1>
                        <a className="px-8 text-2xl text-white" href="/project">
                            Thank you for visiting my page! Click here to see some of my projects.
                        </a>
                </section>

                
        </main>
        
        )
}
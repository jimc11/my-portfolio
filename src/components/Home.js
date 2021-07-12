import React from 'react'
import image from 'C:/udemy-node-course/portfolio/src/img/aloha-lake.jpg'
import "../App.css"

export default function Home(){
    return (
        <main>
                <img src={image} alt="Aloha Lake" className="absolute object-cover w-full h-full" />
            
                <section className="relative flex justify-right h-14 pt-12 lg:pt-10 ">
                    <h1 className="text-6xl text-blue-500 font-bold cursive leading-none lg:leading-snug home-name"> Hi, I'm James.</h1>
                </section>

                <article className="square rounded-lg shadow-xl bg-white p-16 opacity-75">
                    <a href="/project">
                        Thank you for visiting my page! Click here to see some of my projects.
                    </a>
                </article>
        </main>
        
        )
}
import React from 'react'
import image from '../img/aloha-lake.jpg'
import "../App.css"

export default function Home(){
    return (
    
        <main>
            <head>
                <title>James Robert Crowley</title>
                <link rel="pine" href="../img/pine.jpg"></link>
            </head>
                <img src={image} alt="Aloha Lake" className="absolute object-cover w-full h-full" />
            
                <section className="relative flex-row  justify-right px-5 h-14 lg:pt-4 ">
                    <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name"> Hi, I'm James.</h1>
                    <h2 className="text-2xl text-white  font-bold cursive leading-none">Thanks for visiting! Use the navbar to see my projects.</h2>
                </section>

                
        </main>
        
        )
}
import React, { useEffect, useState} from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder (sanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"]{
            name, 
            bio, 
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error)
    },[])

    if (!author) {
        return <div>Loading... </div>
    }
    return (
        <main className="relative bg-blue-100">
            <head>
                <title>James Robert Crowley</title>
            </head>
            {/* <img src={coast} alt="california coast" className="absolute w-full"/> */}
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-700 opacity-90 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={urlFor(author.authorImage).url()} 
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" 
                        alt={author.name} 
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-200 mb-4">
                            Hi, I'm James Crowley
                        </h1>
                        <div className="prose lg:prose-xl text-blue-300">
                            <BlockContent blocks={author.bio} projectId="a7uxaehp" dataSet="production"/>
                        </div>
                    </div>
                </section>    
            </div>
        </main>
    )
}
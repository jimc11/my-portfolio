import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'


export default function NavBar(){
   return(
       <header className="bg-blue-800">
            
            <title>James Robert Crowley</title>
            
            
           <div className="container mx-auto flex justify-between">
              <nav className ="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-3 mr-4 text-blue-100 hover:text-yellow-500 text-4xl font-bold cursive tracking-widest">
                        James Crowley
                   </NavLink>
                   <NavLink to="/post" activeClassName="text-white bg-blue-400" className="inline-flex items center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500">
                       Blog Posts
                   </NavLink>
                   <NavLink to="/project" activeClassName="text-white bg-blue-400" className="inline-flex items center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500">
                       Projects
                   </NavLink>
                   <NavLink to="/about" activeClassName="text-white bg-blue-400" className="inline-flex items center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500">
                       About Me
                   </NavLink>
               </nav>
               <div className="inline-flex py-3 px-3 my-3">
                    <SocialIcon url="https://www.linkedin.com/in/james-c-4910b08a/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://github.com/jimc11" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
               </div>

           </div>
       </header>
   )
}
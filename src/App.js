import React from "react"
import Card from "./Card"
import "./App.css"
import Footer from "./Footer"
import Instagram from "./images/instagram.png"
import Twitter from "./images/twitter.png"
import Facebook from "./images/facebook.png"
import Github from "./images/GitHub.png"

function App(){
  const socials = [{
    image : Instagram
  },
    {image : Twitter},
  
    {image : Facebook},
  
   { image : Github}
  
]

  return(
   <div>
     <Card />
     {
    socials.map((social) => (
      <Footer images={social.image} />
    ))
  }
   </div>
   
    
  )
}

export default App
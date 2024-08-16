import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleScroll(){
    window.scroll({
      top: window.innerHeight * 1,
      left: 0,
      behavior: 'smooth',
    });

  }

  return (
    <div id="site-content">

      <div id="top-content">
        <img class="cover-image"></img>
        <h1 id="hello">Hi!</h1>
        <h1 id="name-display">I'm <span id="pink-color">Sophie Walden</span> </h1>
        <h2 id="tagline">And Developing Incremental Games has taught me Web Development</h2>
        <button class="button-56" role="button" onClick={() => handleScroll()}>See How</button>
        <div class="fade-to-white"></div>
      </div>
      
      <div id="middle-content">
        <div className="question">
          <h3>How Have you Learned Through Incremental Games Development?</h3>
          <p>I had both the basics of web development and a love for incremental games beforehand. Development challenged me though to figure out unique ways to design flexible websites. Every single features of the UI in a game is a valauble tool in your arsenal you can use in professional settings</p>
        </div>

        <div className="question">
          <h3>What is your game development niche?</h3>
          <p>I have put thousands of hours into incremental games (Looking at you Antimatter Dimensions) and it leads me to having a big opinion about what is annoying in a incremental game to me. I love taking a core struggle that is usually necessary for games to function, but plagues the "good feel" of a game and going "What if we balanced a game around removing that negative concept". Find examples below!</p>
        </div>
        
        

        <div className="project-showoff">
         <h3 id="project-showoff-title">What Projects have I Worked on?</h3>
         <h4 className="project-showoff-tagline">Here are two of my games from incremental game jams!</h4>

         <div id="project-holder">
          <div className="showcase">
            <h2>Automating the Philosophers Stone</h2>
            <a href="https://soapietomato.itch.io/automating-the-philosophers-stone"><img className="showcase-image" src="https://i.imgur.com/KYEOqn2.png"></img></a>
           
            <div className="project-description"><span className="bold">Description: </span> Automating the Philosophers Stone is tackling the concepts of prestiges and resets. I believe games are at their best when there is multiple complex prestige systems interacting, but this usually takes a reset starting off with going through the same process hundreds of times.
              <br></br><br></br>

              This game encourages you to reset as many times as possible to "respec" your upgrades and continually be pushing new limits by combining different upgrades. 

              <br></br><br></br>
              This actually was my first incremental game ever! My major lessons I learned from this one is organization of data in states, how to deal with time-based features, and of course how to better organize mass text displays
            
             </div>
          </div>
          <div className="showcase">
            <h2>Incrementally Dense Kittens</h2>
            <a href="https://soapietomato.itch.io/incrementally-dense-kittens"><img className="showcase-image" src="https://img.itch.zone/aW1hZ2UvMjQ2MTg0Ny8xNDY0MDU0OS5qcGVn/original/U2TiaA.jpeg"></img></a>
            
            <div className="project-description"><span className="bold">Description: </span> Incrementally Dense Kittens is another game jam game targeting unique prestige systems! For this one I wanted to remove both the negative feeling of losing progress in prestige and of not having enough bagspace to collect new unlockables
            
              <br></br><br></br>

              For this I implemented a cat hatching system with literally unlimited bag size limits. You may ask "Okay but wouldnt cats become obselete?" and I solved that by making the prestige system a hydraulic press to compress many cats into more dense powerful cats.

              <br></br><br></br>

              This game taught me infinite about CSS transitions, creating dynamic arrays of selectable items, and a bunch more styling techniques I still use in my work today
            </div>
          </div>
         </div>
         
        </div>
        
      </div>

      <div id="bottom-content">
        <div className="bottom-content-div">
          <h3>Okay, but how does that transition to professional web development experience?</h3>
          <p>Every aspect transfers!</p>
          <p>Because of tabs-based games I know how to make navigation bars</p>
          <p>Because of support for mobile machines I know how to make visually scaling flexible applications</p>
          <p>Because of responsive effects I learned CSS transitions</p>
          <p>Because of resource displays I learned how to make flexible organizations of data</p>
          <p>AND MOST IMPORTANTLY because of making the games I gained a familarity and speed in developing websites</p>
          <p>Before it took me a month to make a static navigation site and now I made this site in a couple hours</p>
        </div>
        <br></br><br></br>

        <div className="bottom-content-div padding-top">
          <h3>Here is an example of professional contract work I have completed after making games</h3>
          <h5>Its not perfect by any means, but I was able to deliver a website for freelance work!</h5>
          <img className="development-image" src="https://i.imgur.com/ihBame3.png"></img>
        </div>
        <br></br><br></br>

        <div className="bottom-content-div padding-top">
        <h3>What are you up to currently?</h3>
        <p>I am finishing out my Senior year at University of Maine. I also just wrapped up a summer internship at Tyler Tech as I type and will be continuing part time throughout the school year. </p>
        </div>

        <br></br><br></br>

        <div className="bottom-content-div padding-top">
          <h3>Takeaway</h3>
          <p>I'm not going to sit here and say making an incremental game is easy. It can be brutal work especially in the jams I have particpated pouring 60+ hours in 2 weeks into a game. Regardless those 2 weeks have done more for my web development career then any other product I have developed. Go make games and regret nothing about learning!</p>
        </div>

        <div className="bottom-content-div padding-top">
          <h3>Like my little website?</h3>
          <p>Explore more of what I do on my <a className="link" href="https://github.com/SophieWalden">Github</a> or follow me on <a className="link" href="https://soapietomato.itch.io/">Itchio!</a></p>
        </div>

        <div className="bottom-content-div padding-top">
          <h3>Give me your definitely based incremental game recommendations</h3>
          <p>Ahh! I guess If I have to (no order)</p>
          <p>Antimatter Dimensions: Beautiful. I 100%'d it (only took 500 hours)</p>
          <p>Synergism: Played hundreds of hours, beautiful balancing</p>
          <p>Idling To Rule The Gods: Love the theme and mechanics</p>
          <p>Slurpy Derpy: Seems weird, but love the genetic evolution mechanic of this game</p>
          <p>Prestige Tree: There are so many clones for a reason</p>
          <p>DodecaDragons: Really cool UI and feels really good up until a point</p>
          <p>Grimoire Incremental: Upgrades can become a realy cool puzzle</p>
        </div>
      </div>
      
    </div>
  )
}

export default App

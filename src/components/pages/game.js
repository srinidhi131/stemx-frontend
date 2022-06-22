import React , {Component} from 'react';
import game from "../images/game.jpg"
import Tabs from "./Tabs";

class Game extends Component{
    render(){
      return(
        <div>
       <h1> Game Creation </h1>
       <img className = "page-img" src = {game} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Roblox / Minecraft is a gaming platform that truly puts the power in the hands of its users: playing games, creating games, and even earning a profit, This course is a perfect blend of coding and fun for game lovers
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Using the built-in editor, kids learn how to create games of your very own, then publish your creations live and immediately play with your friends on any platform, from desktop to mobile.<br/>
        ♦ As you take off on your way to game design mastery, you’ll expand your skills to include blueprinting and progressive planning techniques that will guide you in both envisioning your complete game from start to finish and perfecting a well-rounded player experience.<br/>
        ♦ Block based coding for Juniors & text based coding for seniors to create their games.<br/>
        ♦ And yeah, Kids build their own Game and play with their friends.<br/>  
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Game;
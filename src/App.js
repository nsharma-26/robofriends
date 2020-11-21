import React, { useState, useEffect } from 'react'
import CardList from './CardList'
//import {robots} from './robots';
import Scroll from './Scroll'
import axios from 'axios';

function App(){ 
    const [searchRobot, setSearchRobot] = useState('');
    const [robots, setRobots] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/users',
    );
 
    setRobots(result.data);
  }, []);
    //const [robots, setRobots] = useState([]);
    const handleSearch = (e) =>{
        setSearchRobot(e.target.value);
        console.log(searchRobot);
    }
    const filterName = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchRobot.toLowerCase());
    })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <div className="pa2">
            <input type="search" onChange={handleSearch} value={searchRobot} placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue"/>
                </div>
                <Scroll>
                    <CardList robots={filterName}/>  
                </Scroll>
               
            </div>
        );
   
}

export default App

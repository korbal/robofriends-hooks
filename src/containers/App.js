import React, {  useState, useEffect } from "react";
import CardList from "../components/CardList";

import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import '../containers/App.css'

import ErrorBoundry from "../components/ErrorBoundry";

function App() {

const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState("");
const [count, setCount] = useState(0);
// setCount is increased by 1 via the button onClick event. it's added to the useEffect dependency array, so the useEffect function is called again when the count is increased.

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })  
  .then(users =>{
    setRobots(users)
    console.log(count)
  })
}, [count]) // only run when count changes

  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ""
  //   };
  // }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(users =>{
  //     this.setState({robots: users})
  //   })
  // }

  const onSearchChange = (event) => {
    //this.setState({searchfield: event.target.value})
    setSearchfield(event.target.value);
  }

  
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //console.log(robots, searchfield);

    if(robots.length === 0){
      return <h1 className="tc">Loading...</h1>
    } else {
  return (
    <div className="tc container">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)} >Click me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>  
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
    }
}


export default App;
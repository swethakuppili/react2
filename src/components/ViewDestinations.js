import { Component, useState, useEffect } from "react";


function ViewDestinations(props){
    const [destinations, setDestinations] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch(" http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data)
      })
       
    }, [])

    let destinationsList = destinations.map((destination)=> {
        return <li>{destination.title}</li>
    })
    return (
        <>
        <h2>View Destinations component {count}</h2>
        <button onClick={()=>{setCount(count + 1)} }>Change State</button>
        <ul>
            {destinationsList}
        </ul>
    </>
    )
}



export default ViewDestinations;
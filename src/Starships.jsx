  import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'

  const Starships = () => {

    const [starship, setStarship] = useState([])

    useEffect (() => {
      async function getShips() {
        try{
          const url = `https://swapi.dev/api/starships`
          const response = await axios.get(url)
          setStarship(response.data.results)
        } catch (err) {
          console.log(err)
        }
      }
      getShips()
    }, [])
    console.log(starship)
    
    const starshipData = starship.map((starship, index) => {
      return (
        <div key={index}>
          <h3> StarShip: {starship.name} </h3>
          <h4> Class: {starship.starship_class} </h4>
          <p> Model: {starship.model} </p>
        </div>
      )
    })
 
    return (
      <div>
        {starshipData}
      </div>
    )
  }

  export default Starships
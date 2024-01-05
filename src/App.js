import React, {useState} from 'react';
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setlocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?lat&lon&q=${location}&units=imperial&appid=c94bcf05e3e5a3f66a4788e689d95f25`;


 const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
  setlocation('')
  }
 }

  return (
    <div className="App">
      <div className='search'>
        <input
        value={location}
        onChange={event => setlocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='Digite sua Localização'
        type='text' 
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

      {data.name != undefined &&
   
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like </p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidade</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.pressure}Km/h</p> : null}
            <p>Vento</p>
          </div>
        </div>
        
        }
        
      </div>
    </div>
  );
}

export default App;

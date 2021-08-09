import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CharacterItem({ item }) {



  const [quote, setQuote] = useState([])
  useEffect(() => {
    let substrings = item.name.split(' ');
    const fetchItems = async () => {
      if(substrings.length === 2){
      const result = await axios(`https://breakingbadapi.com/api/quote?author=${substrings[0]}+${substrings[1]}`)
      setQuote(result.data)
      }
      else
      {
        const result = await axios(`https://breakingbadapi.com/api/quote?author=${substrings[0]}+${substrings[1]}+${substrings[2]}`)
        setQuote(result.data)
      }
      
    }
    fetchItems()
  }, [item.name])

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} style={{ width: '300px', height: '400px' }} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation.join(", ")}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>

              <strong>Appreances:</strong>
              {item.appearance.join(", ")}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Quotes</h1>
        <div className='quotes'>
          {

          quote.length ? quote.map((item) =>
            <span> * {item.quote}   <br></br> </span>) : 'Not available'
         }
        </div>
      </div>
    </div>
  )
}

export default CharacterItem

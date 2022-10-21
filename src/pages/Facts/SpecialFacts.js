import React, {useState, useEffect} from 'react'
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import "./specialFacts.css"

const SPECIAL_FACTS = gql `
query {
  specialfacts {
    factabout
    factimg
    factname
    id
  }
}`

function SpecialFacts() {

  const {data, loading} = useQuery(SPECIAL_FACTS);
  const [users, setUsers] = useState([])


  useEffect(() => {
    if(data){
      setUsers(data.specialfacts);
    }
  
  }, [data])

  if(loading) {
    return <div>Loading...</div>
  }
  return (
      <div className="special-con">
      <div className='special-facts-container'>
        {
          users.map((val)=> {
            return (
              <div class="special-facts-box">
              <div class="special-facts-imgBx">
                <img src={val.factimg} alt="factImage" />
              </div>
              <div class="special-facts-content">
                <h2 className='special-facts-heading'>{val.factname}</h2>
                <p className='special-facts-para'>{val.factabout}.</p>
              </div>
            </div>
            )
          })
        }
      </div>
      
      </div>
  )
}

export default SpecialFacts
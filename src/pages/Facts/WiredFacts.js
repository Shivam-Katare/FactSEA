import React, { useState, useEffect } from 'react'
import "./WiredFacts.css"
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const WIRED_FACTS = gql`
query {
  wiredfacts {
    factiamge
    factlink
    id
    name
  }
}`
function WiredFacts() {

  const { data, loading } = useQuery(WIRED_FACTS);
  const [users, setUsers] = useState([])


  useEffect(() => {
    if (data) {
      setUsers(data.wiredfacts);
    }

  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <section class="wired-facts-blog">
        <div class="wired-facts-container">
          {/* Heder Section */}
          <div class="blog-head text-center">
            <h2 className="wired-facts-heading">FACTS</h2>
            <h6 className='wired-facts-heading-two'>Too Wired To Handle</h6>
          </div>


 <div class="know-image-gallery-image"  >
          {/* <!-- blog items --> */}
          {
            users.map((val) => {
              return (
                <>
                   <div class="know-image-gallery-img-box">
                <img src={val.factiamge} alt="galleryImage" className='know-image-gallery-grid-image' />

                 <div class="know-image-transparent-box">
                  <div class="know-image-caption">
                    <p>{val.name}</p>
                    <a href={val.factlink} target="_blank" rel="noreferrer">
                    <button class="know-image-opacity-low">Know Me</button>
                    </a>
                  </div>
                </div>
              </div>
                </>
              )
            })
          }
</div>
        </div>
      </section>
    </>
  )
}

export default WiredFacts
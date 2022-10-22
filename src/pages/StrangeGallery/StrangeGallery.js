import React, { useState, useEffect } from 'react'
import "./StrangeGallery.css"
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';


const STRANGE_IMAGE = gql`
query MyQuery {
  strangeimages {
    id
    strangedesc
    strangeimage
    strangetitle
  }
}`

function StrangeGallery() {

  const { data, loading } = useQuery(STRANGE_IMAGE);
  const [users, setUsers] = useState([])


  useEffect(() => {
    if (data) {
      setUsers(data.strangeimages);
    }

  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1 className='strange-gallery-heading'>Nature's Strange Things</h1>
      <div className='strange-gallery'>
        {
          users.map((val) => {
            return (
              <>
                <div className='strange-gallery-image-box'>
                  <img src={val.strangeimage} alt="img" />
                  <div className='strange-gallery-overlay'>
                    <div className='strange-gallery-details'>
                      <h3 className='strange-gallery-title'>
                        <a>{val.strangetitle}</a>
                      </h3>
                      <span className='strange-gallery-category'>
                        <a>{val.strangedesc}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div>
        <Link to="/">
          <button class="know-image-custom-btn know-image-gallery-btn"><span>Return Back</span></button>
        </Link>
      </div>
    </>
  )
}

export default StrangeGallery
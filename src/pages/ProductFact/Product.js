import React from 'react'
import "../Facts/p.css"
import Im from "./h.jpg"

function Product() {
  return (
  <div className="all-about">
    
    <div className='cards-product'>
    <div class="container-product">
                <img src={Im} alt="las vegas" />
            </div>
            <div class="details">
                <h3>Las Vegas</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
            </div>

            <div class="card card2">
            <div class="container">
                <img src="newyork.jpg" alt="New York" />
            </div>
            <div class="details">
                <h3>New York</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
            </div>
        </div>
    </div>
  
  </div>
  )
}

export default Product
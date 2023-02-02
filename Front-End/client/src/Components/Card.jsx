import React from 'react'

function Card() {
  const imgArray =["https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550",
  "https://via.placeholder.com/550x550"]
  return (
    <div> 

  <div class="row medium-up-3 large-up-4">
    <div class="column">
    {
      imgArray.map((e)=> 
      {
        return <img src= {e} alt=" could not be shown"/>
      })
    }
    </div>
    </div>
</div>
  )
}

export default Card
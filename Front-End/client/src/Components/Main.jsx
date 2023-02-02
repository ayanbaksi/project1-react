import React from 'react'

function Main() {
  return (
    <div style={{paddingLeft:"20rem",paddingRight:"20rem"}} >
    <div class="medium-6 columns medium-push-6">
      <img class="thumbnail" src="https://via.placeholder.com/750x350"/>
      </div>

    <div class="medium-6 columns medium-pull-6">
      <h2>Our Agency, our selves.</h2>
      <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
        diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
        sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec
        viverra auctor.</p>
    </div>
    <div class="row">
    <div class="medium-4 columns">
      <h3>Photoshop</h3>
      <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
        diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
    </div>
    <div class="medium-4 columns">
      <h3>Javascript</h3>
      <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
        diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
    </div>
    <div class="medium-4 columns">
      <h3>Marketing</h3>
      <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
        diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
    </div>
  </div>
  <div class="row column">
    <ul class="vertical medium-horizontal menu expanded text-center">
      <li><a href="#">
          <div class="stat">28</div><span>Websites</span>
        </a></li>
      <li><a href="#">
          <div class="stat">43</div><span>Apps</span>
        </a></li>
      <li><a href="#">
          <div class="stat">95</div><span>Ads</span>
        </a></li>
      <li><a href="#">
          <div class="stat">59</div><span>Cakes</span>
        </a></li>
      <li><a href="#">
          <div class="stat">18</div><span>Logos</span>
        </a></li>
    </ul>
  </div>
  </div>
  )
}

export default Main
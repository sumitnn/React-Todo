import React from 'react'

function Home() {
  return (
      <>
          
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpfMGCfU0frSa4xsp31m5irELqnlZ_U-5Jg&usqp=CAU" class="d-block w-100" alt="first"/>
                  </div>
                  <div class="carousel-item">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpfMGCfU0frSa4xsp31m5irELqnlZ_U-5Jg&usqp=CAU" class="d-block w-100" alt="second"/>
                  </div>
                  <div class="carousel-item">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVv9Cztc5YU4tQFqfW0RuqNNEyRFQl25kKZw&usqp=CAU" class="d-block w-100" alt="third"/>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>

    </>
  )
}

export default Home
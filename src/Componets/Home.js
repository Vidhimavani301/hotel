import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      {/* section one start */}
      <section className='text-center'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">

              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="assets/img-7/video-background-2.jpg" alt="" className='clouser-img'/>
                <div className="carousel-caption d-none d-md-block">
                  <h1 className='display-1'>WELCOME</h1>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                  <button className='btn1 border-0 py-2 px-5'>MAKE A RESERVASTION</button>
                </div> 
              </div>

              <div className="carousel-item">
                <img src="assets/img-7/about-title-img.jpg" alt="" className='clouser-img'/>
                <div className="carousel-caption d-none d-md-block">
                  <h1 className='display-1'>WELCOME</h1>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                  <button className='btn1 border-0 py-2 px-5'>MAKE A RESERVASTION</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon ms-5" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon me-5" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* section two start */}
        <section>
          <div>
            <h2 className='display-6 ms-5 my-5 fw-normal'>QUALITY IS OUR VALUE</h2>
          </div>
          <div className='text-center'>
            <img src="assets/img-7/single-img-1.jpg" alt="" className='clouser-img'/>
            <p className='text-Secondary mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>

        {/* section three start */}

        <section>
          <div className=" row g-0  ms-50">
              <div className="my-5 col-lg-6 col-12">
                <img src="assets/img-7/single-img-2.png" alt="" className="img-75"/>
              </div>
              <div className="col-lg-6 col-12 my-5 col-md-6">
                  <h3 className="display-6 fw-normal">AT ZOU EDOUX</h3>
                  <p className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incid <br/>idunt ut labore.</p>

                  <p className='text-color fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et dolore magna<br/> aliqua. Ut enim ad minim veniam, quis nostrudex<br/> ercitation ullamco laboris nisi ut aliquip <br/>ex ea commodo.</p>       
                    
                  <button className='btn1  py-2 px-5 mt-3'>READ MORE</button>   
                
              </div>
          </div>
        </section>
         {/* section four start */}
         <section>
         <div className="row g-0 ms-50">
        
              <div className="col-lg-6 col-12 my-5 col-md-6">
                  <h3 className="display-6 fw-normal">AT ZOU EDOUX</h3>
                  <p className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incid <br/>idunt ut labore.</p>

                  <p className='text-color fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et dolore magna<br/> aliqua. Ut enim ad minim veniam, quis nostrudex<br/> ercitation ullamco laboris nisi ut aliquip <br/>ex ea commodo.</p>       
                    
                  <button className='btn1  py-2 px-5 mt-3'>READ MORE</button>   
                
              </div>

              <div className="my-5 col-lg-6 col-12">
                <img src="assets/img-7/single-img-3.png" alt="" className="img-75"/>
              </div>
          </div>
         </section>
          {/* section five start */}
          <section className='relative'>
            <img src="assets/img-7/video-background.jpg" alt="" className='w-100'/>
            <div className='absolute'>
              <span class="material-symbols-outlined text-light" style={{fontSize:"80px"}}>smart_display</span>
            </div>
          </section>
            {/* section six start */}
          <section className='mb-5'>
            <div>
              <h4 className='display-6 ms-5 my-5 fw-normal'>OUR GALLERY SPEAK ITSELF</h4>
              <p className='fw-normal  ms-5'>Lorem dolor sit amet, consectetur adipiscingsit amet, consectetur adipiscing <br/>elit,dolor sit amet, consectetur adipiscing sed do eiusmod tempor incid <br/>idunt ut labore.</p>
            </div>
           
            <div className=" row g-0 justify-content-around">
              <div className="my-5 col-lg-3 col-12 geeks">
                <img src="assets/img-7/gallery-1.jpg" alt="" />
              </div>

              <div className="my-5 col-lg-3 col-12 geeks">
                <img src="assets/img-7/gallery-2.jpg" alt="" />
              </div>

              <div className="my-5 col-lg-3 col-12 geeks">
                <img src="assets/img-7/gallery-3.jpg" alt="" />
              </div>

            </div>
          </section>
    </div>
  )}
import React from 'react'

export default function About() {
  return (
    <div>
        {/* section one start */}
        <section className='m-4'>
            <div className=' about-bg-img'></div>
        </section>
         {/* section two start */}
        <section>
            <div className='text-center'>
                <h5 className='h2 fw-normal mt-5'>AT YOUR SERVICE</h5>
                <p className='text-Secondary mt-5 h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et<br/> dolore magna aliquat enim ad.</p>
                <p className='text-color mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt<br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudex ercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo. consequat. Duis aute irure dolor in <br/>reprehenderit in voluptate velit esse cillum dolore eu<br/> fugiat nulla pariatur.</p>
                <img src="assets/img-7/about-single-img-1.png" alt="" className='mt-3 mb-5'/>
            </div>
        </section>
        {/* section three start */}
        <section className='relative'>
            <img src="assets/img-7/video-background-2.jpg" alt="" className='w-100'/>
            <div className='absolute'>
              <span class="material-symbols-outlined text-light" style={{fontSize:"80px"}}>smart_display</span>
            </div>
          </section>
            {/* section four start */}
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
  )
}

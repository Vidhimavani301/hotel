import React from 'react'

export default function Menu() {
  return (
    <div>
    {/* section one start */}
    <section className='m-4'>
       <div className=' menu-bg-img'></div>
   </section>

    {/* section two start */}

    <section>
       <div className='text-center'>
           <h5 className='h2 fw-normal mt-5'>BREAKFAST OR BRUNCH</h5>
           <p className='text-Secondary mt-5 h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et<br/> dolore magna aliquat enim ad.</p>
       </div>
   </section>
   
   {/* section three */}
   <section className='row mt-5 mb-5 d-flex justify-content-around text-center'>
     <div className=' col-lg-5 col-12'>
       <div className="mt-5" >
           <h5>FRENCH BREAKFAST</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut .</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12'>
     <div className="mt-5" >
           <h5>HOT BEVERAGES</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut .</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12'>
     <div className="mt-5" >
           <h5>TRADITIONAL FROM THE BALKANS</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12 '>
     <div className="mt-5" >
           <h5>HOMEMADE ICED TEA</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12 '>
     <div className="mt-5" >
           <h5>CEREALS</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12 '>
     <div className="mt-5" >
           <h5>FRESHLY SQUEEZED JUICES</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12 '>
     <div className="mt-5" >
           <h5>SPREADS</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>

     <div className=' col-lg-5 col-12 '>
     <div className="mt-5" >
           <h5>BUBBLES</h5>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>
       </div>
     </div>
   </section>

            {/* section three start */}
          <section className='mb-5 text-center mt-5'>
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

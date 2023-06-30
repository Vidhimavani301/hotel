import React from 'react'
import { Link } from 'react-router-dom'

export default function Rooms() {
  return (
    <div>
         {/* section one start */}
         <section className='m-4'>
            <div className=' rooms-bg-img'></div>
        </section>

         {/* section two start */}

         <section>
            <div className='text-center'>
                <h5 className='h2 fw-normal mt-5'>AT YOUR SERVICE</h5>
                <p className='text-Secondary mt-5 h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et<br/> dolore magna aliquat enim ad.</p>
        
            </div>
        </section>
        
        {/* section three start*/}
        <section className='row mt-5 m-4 mb-5'>
          <div className=' col-lg-4 col-12'>
            <div className="card" >
            <img src="assets/img-7/rooms-img-1.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
                <h5>SUPERIOR ROOM $119</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>

          <div className=' col-lg-4 col-12'>
            <div className="card" >
              <img src="assets/img-7/rooms-img-2.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
              <h5>KING ROOM $139</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>

          <div className=' col-lg-4 col-12'>
            <div className="card">
              <img src="assets/img-7/rooms-img-3.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
              <h5>DELUXE ROOM $159</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>

          <div className=' col-lg-4 col-12 mt-5'>
            <div className="card" >
            <img src="assets/img-7/rooms-img-4.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
                <h5>SILVER ROOM $169</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>

          <div className=' col-lg-4 col-12 mt-5'>
            <div className="card" >
              <img src="assets/img-7/rooms-img-5.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
              <h5>MINIMAL ROOM $189</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>

          <div className=' col-lg-4 col-12 mt-5'>
            <div className="card">
              <img src="assets/img-7/rooms-img-6.jpg" alt="" className='card-img-top'/>
              <div className="card-body">
              <h5>WHITE ROOM $199</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut</p>

                <button className='btn1 h6 fw-normal py-2'>READ MORE</button>
              </div>
            </div>
          </div>
        </section>
        {/* section four start */}
        <section className=' mb-5'>
            <div className='text-center'>
              <Link to="#" className='btn1 py-2 px-5 text-dark' style={{textDecoration:"none"}}>BOOK NOW </Link>
            </div>
        </section>
    </div>
  )
}

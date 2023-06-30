import React from 'react'

export default function Booknow() {
  return (
    <div>
        {/* section one start */}
        <section className='m-4'>
            <div className='book-now-bg-img'></div>
        </section>

        {/* section two start */}

        <section>
            <div className='text-center'>
                <h5 className='h2 fw-normal mt-5'>MAKE A RESERVATION</h5>
                <p className='text-Secondary mt-5 h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incid idunt ut labore et<br/> dolore magna aliquat enim ad.</p>
            </div>
        </section>
   
        {/* section three */}
      <div className='d-flex justify-content-center mt-5'>
      <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control w-100" id="exampleInputPassword1"/>
            </div>
      
            <button type="submit" class="btn  py-2 px-5 btn1 rounded-0">Submit</button>
        </form>
      </div>
        
    </div>
  )
}

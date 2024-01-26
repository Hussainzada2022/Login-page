const Signup = () => {
    return (
      <div>
          <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative'>
              <h1 className='text-4xl font-bold text-center mb-6'>Sign up</h1>
              <form action="">
                  <div className='relative my-4'>
                      <input name="emial" autoComplete="false" type="email" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer focus:placeholder-transparent placeholder-white' placeholder='Your email'/>
                      <label htmlFor="email" className='absolute peer-focus:-top-3 top-3 hidden peer-focus:flex peer-placeholder-shown:opacity-100 '>Your email</label>
                  </div>
                  <div className='relative my-4'>
                      <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer focus:placeholder-transparent placeholder-white' placeholder='User name'/>
                      <label htmlFor="user" className='absolute peer-focus:-top-3 top-3 hidden peer-focus:flex peer-placeholder-shown:opacity-100 '>User name</label>
                  </div>
  
                  <div className='relative my-4'>
                      <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer focus:placeholder-transparent placeholder-white' placeholder='Your password'/>
                      <label htmlFor="password" className='absolute peer-focus:-top-3 top-3 hidden peer-focus:flex peer-placeholder-shown:opacity-100 '>Your password</label>
                  </div>
  
                  <button className='mb-4 text-[18px] mt-6 rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300 w-full px-2'>Sign up</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default Signup
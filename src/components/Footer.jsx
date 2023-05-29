import React from 'react'

function Footer() {
  const time = new Date().getFullYear();

  return (
    <div className='text-center h-30 w-full bg-[#1f0042] px-3 py-5'>
      Made with ❤️ by <a href="https://github.com/kartikjoshi267" target='_blank' className='underline hover:text-secondary transition'>Kartik Joshi</a>
      <br />
      <br />
      Want to Contribute? <a href="https://github.com/kartikjoshi267/portfolio" target='_blank' className='underline hover:text-secondary transition'>Click here</a>
      <br />
      Copyright {time} | All rights reserved
    </div>
  )
}

export default Footer
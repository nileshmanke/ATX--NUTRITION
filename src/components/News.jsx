import React from 'react'

const News = () => {
  return (
    <div className='flex justify-center'>

      <div>
      <div className="card" style={{width: '18rem'}}>
  <img src="/images/newsimg.png" className="card-img-top" alt="..."/>
  <div className="card-body flex flex-col gap-y-4">
    <h2 className="card-title text-2xl font-bold">Grand Opening Of New corporate office and the launch of Ataraxia life</h2>
    <p className="card-text">Grand Opening Of New corporate office and the launch of Ataraxia life</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    </div>
  )
}

export default News
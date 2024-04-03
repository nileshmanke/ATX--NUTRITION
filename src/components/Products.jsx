import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const notify = () => toast("Added To cart SucessFully!");


const data=[
  {

imgurl:"https://inlifehealthcare.com/cdn/shop/products/FRONT.jpg?v=1674206394&width=700",
price:"$200",
title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",



},

{
imgurl:"https://tse1.mm.bing.net/th?id=OIP.ad4c8Pf4-oa_c6Qfdc6K7AHaJQ&pid=Api&P=0&h=180",
price:"$300",
title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",



},
{
  imgurl:"https://tse4.mm.bing.net/th?id=OIP.tALWY_t2bRY6kBipr1uZkQHaHa&pid=Api&P=0&h=180",
  price:"$400",
  title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",
  
  
  
  },

  {
    imgurl:"https://tse2.mm.bing.net/th?id=OIP.x1Fe2agQAmxu5wj8hMyuSQHaHQ&pid=Api&P=0&h=180",
    price:"$500",
    title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",
    
    
    
    },


    {
      imgurl:"https://tse2.mm.bing.net/th?id=OIP.6QCC0VnlyBLC5o03_FC5cQHaHa&pid=Api&P=0&h=180",
      price:"$600",
      title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",
      
      
      
      },


      {
        imgurl:"https://tse4.mm.bing.net/th?id=OIP.ArehVLRifMqVwC7QB3EKmwHaKq&pid=Api&P=0&h=180",
        price:"$700",
        title:"INLIFE 100% WHEY PROTEIN ISOLATE POWDER SUPPLEMENT - (CHOCOLATE)",
        
        
        
        },

]


  return (
    <div>

      <h1 className='text-center text-4xl font-semibold animate-pulse'>Protein Powders</h1>

      <div className='w-11/12 m-auto grid grid-cols-1 sm:grid-cols-4 gap-4'>
        {data.map((item,i)=>(

          <div style={{border:'1px solid black'}} className='text-center p-3 flex flex-col gap-y-4' key={i}>

            <div>
<img className='w-[200px] h-[200px] m-auto' src={item.imgurl} alt=''/>


              </div>
              <div>
<h1>Price: <span className='font-semibold'>{item.price}</span></h1>


              </div>
              <div>
<h1>{item.title}</h1>


              </div>

              <div onClick={notify} className='bg-red-700 text-white font-semibold p-3 w-1/2 m-auto'>
                <button>Add To cart</button>
                </div>

              
            </div>

        ))}

<ToastContainer />
      </div>
    </div>
  )
}

export default Products
import { product } from '../project-files/data'
import './App.css'
import { loggedInUser } from '../project-files/data'
import { assetsBaseUrl } from '../project-files/data'
import { useState } from 'react'



function App() {

const picture = assetsBaseUrl + "/" + loggedInUser.profileImage;

  const [something, setSomething] = useState({
    bigImage: assetsBaseUrl + "/" + product.images.originals[0]
  })

  const [amount, setAmount] = useState({
    productAmount:0,
  })

  

  return (
    <>
      <div className='taskbar'>
        <div className='banner'><img className='logo' src="./project-files/assets/logo.svg" alt="" /></div>
        <div className='links'>
          <a href="#">Collection</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contract</a>
        </div>
        <button className='shopcart'><img className='shopcart-pic' src="./project-files/assets/icon-cart.svg" alt="" /></button>
        <div className='profile-pic'><img className='picture' src={picture} alt="" /></div>
      </div>
      <div>
        <img className='big-picture' src={something.bigImage} alt="" />
      </div>
      <div className='small-pics-div'>
        <div className='small-pics'>
          <button className='button-pic' onClick={()=>{
            setSomething(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[0]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[0]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setSomething(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[1]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[1]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setSomething(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[2]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[2]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setSomething(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[3]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[3]} alt="" ></img>
          </button>
        </div>
      </div>
      <div className='product-info'>
        <h3 className='heading-1'>SNEAKER COMPANY</h3>
        <h2 className='heading-2'>Fall Limited Edition Sneakers</h2>
        <div className='rating'>
          <div className='something'>
            <img className='star-image' src="../project-files/assets/icon-star.svg" alt="" />
            <img className='star-image' src="../project-files/assets/icon-star.svg" alt="" />
            <img className='star-image' src="../project-files/assets/icon-star.svg" alt="" />
            <img className='star-image' src="../project-files/assets/icon-star.svg" alt="" />
            <svg
              className='star-image'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentcolor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <p className='rating-grade'>4.2 out of 5</p>
        </div>
        <p className='info'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <h3 className='pricetag'>$125.00</h3>
        <del className='old-price'>$250.00</del>
      </div>
      <div className='amount-div'>
        <div className='amount' >
            <button className='less' onClick={()=>{
              if (amount.productAmount > 0){
                setAmount(
                {
                  productAmount: amount.productAmount - 1,
                }
              )
              }
              
            }}>-</button>
            <div className='product-amount' >{amount.productAmount}</div>
            <button className='more' onClick={()=>{
              setAmount(
                {
                  productAmount: amount.productAmount + 1,
                }
              )
            }}>+</button>
        </div>
      </div>
      <div className='add-to-cart'>
        <img src="../project-files/assets/icon-cart.svg" alt="" />
      </div>
    </>
  )
}


export default App

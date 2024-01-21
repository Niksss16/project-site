import { product } from '../project-files/data'
import './App.css'
import { loggedInUser } from '../project-files/data'
import { assetsBaseUrl } from '../project-files/data'
import { useState } from 'react'



function App() {

const picture = assetsBaseUrl + "/" + loggedInUser.profileImage;

  const [Mainpic, setMainpic] = useState({
    bigImage: assetsBaseUrl + "/" + product.images.originals[0]
  })

  const [amount, setAmount] = useState({
    productAmount:0,
  })

  const [list,setlist] = useState(false);
 
  return (
    <>
      <div className={!list ?'non-cart':'cart'}>
        <div className='cart-up'>
          <h4 className='cart-up-cart'>Cart</h4>
        </div>
        <div children className='cart-down'>
          <h3 className='cart-down-comment'>Your cart is empty</h3>
        </div>
      </div>
      <div className='taskbar'>
        <div className='banner'><img className='logo' src="./project-files/assets/logo.svg" alt="" /></div>
        <div className='links'>
          <a href="#">Collection</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contract</a>
        </div>
        <button className='shopcart' onClick={()=>{
          if(!list){
            setlist(true)
          }else{
            setlist(false)
          }
        }}>
          <img className='shopcart-pic' src="./project-files/assets/icon-cart.svg" alt="" />
        </button>
        <div className='profile-pic'><img className='picture' src={picture} alt="" /></div>
      </div>
      <div>
        <img className='big-picture' src={Mainpic.bigImage} alt="" />
      </div>
      <div className='small-pics-div'>
        <div className='small-pics'>
          <button className='button-pic' onClick={()=>{
            setMainpic(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[0]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[0]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setMainpic(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[1]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[1]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setMainpic(
                {
                  bigImage:assetsBaseUrl + "/" + product.images.originals[2]
                }
              )
          }}>
            <img className='small-image' src={assetsBaseUrl + "/" + product.images.thumbnails[2]} alt="" ></img>
          </button>
          <button className='button-pic' onClick={()=>{
            setMainpic(
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
      <div className='add-to-cart-div'>
        <div className='add-to-cart'>
          <div className='button-image' alt="">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
          </div>
          <p className='button-text'>Add to cart</p>
        </div>
      </div>
    </>
  )
}


export default App

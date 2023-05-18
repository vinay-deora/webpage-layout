import React from 'react'
import vg from "../assets/2.webp";
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>  
      <div className='home' id='home'>
      <main>
         <h1>Vinay Deora</h1>
         <p>solution to your all problems </p>
      </main>
    </div>
    <div className=' home2'>
      <img src={vg} alt="Graphics" />

    
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis, suscipit accusantium libero dolores ea dolore eos exercitationem sequi delectus? Vero laborum 
      </p>
    </div>
    </div>
    <div className='home3' id='about'>
      <div>

      <h1><span> who we are?</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores, eum, itaque, debitis voluptatem aliquam pariatur doloribus veritatis expedita ipsam nobis. Eaque deleniti modi rerum fuga dolores quo aliquid maxime.</p>
      </div>
    </div>
    <div className="home4" id='brand'>

      <div>
        <h1> Brands</h1>
        <article>
        <div style={{
            animationDelay:"0.3s",
             }}>
            <AiFillGoogleCircle/>
            <p>Google </p> 
        </div>

        <div style={{
            animationDelay:"0.5s",
              }}>
            <AiFillAmazonCircle/>
            <p>Amazon </p> 
        </div>

        <div style={{
            animationDelay:"0.7s",
          }}>
        <AiFillYoutube/>
         <p>Youtube </p> 
        </div>

        <div style={{
            animationDelay:"1s",
          }}>
        <AiFillInstagram/>
         <p>Instagram </p> 
        </div>
        </article>
    
      </div>
    </div>
    </>

  )
}

export default Home

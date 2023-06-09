import React from 'react'
import { motion } from "framer-motion";
import sneha from "../../assets/snehaa.jpg"


const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className='founder' >

      <motion.div {...options}>
        <img src={sneha} alt="Founder" height={200} width ={200} />
        <h3>Sneha Araseed</h3>
        <p>Hello all ! I am Sneha Araseed , the founder of Solapur's 
          Hamburgers. 
          <br />
          It's our promise to provide you all with the most delicious burger meal in lifespan!
          </p>
       
      </motion.div>
    </section>
  )
}

export default Founder
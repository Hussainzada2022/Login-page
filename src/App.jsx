import { useState } from 'react';
import background from './assets/BingWallpaper.jpg';
import {motion} from 'framer-motion'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
  const [flip, setFlip] = useState(true);
  const [animate,setIsAnimat] = useState(false);
  function handleFlip () {
    if(!animate) {
        setFlip(!flip);
        setIsAnimat(true);
    }
}
  return (
    <div className='w-full h-svh bg-cover text-white' style={{backgroundImage:`url(${background})`}}>
            <div className="flex justify-center pt-36 items-center">
        <motion.div
          initial={false}
          animate={{ rotateY: flip ? 720 : 360 }}
          transition={{ duration: 1, animateduration: "normal" }}
          onAnimationComplete={() => setIsAnimat(false)}
        >
          {
            flip
              ?
              <Signup />
              :
              <Signin />
          }
        </motion.div>
      </div>
      {
        flip
          ?
          <p className="flex justify-center">I have account <span className="cursor-pointer px-1" onClick={handleFlip}>Sign in</span></p>
          :
          <p className="flex justify-center">Dont have account <span className="cursor-pointer px-1" onClick={handleFlip}>Sign up</span></p>
      }

    </div>
  )
}

export default App

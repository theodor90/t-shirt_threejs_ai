import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                MAGIC<br className='xl:block hidden'/>T-SHIRT.
              </h1>
            </motion.div>
            <motion.div
              {...headContainerAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text base'>
              Create a truly unique shirt that reflects your personality with our innovative 3D customization tool. <br></br><strong>Let your imagination run wild</strong>{" "} and make it yours.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
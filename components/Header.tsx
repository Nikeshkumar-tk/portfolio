import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'



const Header = () => {
    return (
        <header className='sticky z-30 items-start top-0 flex justify-between max-w-7xl mx-auto p-5'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    url="https://github.com/Nikeshkumar-tk"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/nikesh-kumartk"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flow-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>

        </header>
    )
}

export default Header
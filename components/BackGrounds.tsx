import { motion } from 'framer-motion'
const BackGrounds = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
            className='relative flex justify-center items-center'>

            <div className='border absolute  h-[200px] w-[200px] border-[#333333] rounded-full animate-ping mt-52'></div>
            <div className='border absolute border-[#252121]  h-[300px] w-[300px] rounded-full  mt-52'></div>
            <div className='border absolute border-[#252121]  h-[500px] w-[500px] rounded-full   mt-52'></div>
            <div className='border absolute  h-[650px] w-[650px] border-[#403d3d] rounded-full animate-pulse  mt-52'></div>

        </motion.div>
    )
}

export default BackGrounds
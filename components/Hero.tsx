import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackGrounds from './BackGrounds'
const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi,i am Nikesh Kumar"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden'>
            <BackGrounds />
            <img src="https://avatars.githubusercontent.com/u/104181447?v=4"
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                alt="Profile pic" />

            <div className='z-20'>
                <h2 className='uppercase text-sm text-gray-500 tracking-[15px]'>web developer</h2>

                <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7AB0A' />
                </h1>
                <div className='pt-5'>
                    <button className='heroButton'>About</button>
                    <button className='heroButton'>experience</button>
                    <button className='heroButton'>skills</button>
                    <button className='heroButton'>projects</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
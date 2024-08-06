import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <div className='z-0 tracking-wide md:tracking-wide'>
            <Navbar page="home" />

            <div className='mt-[5.8rem]'>
                <div className='h-[100vh] md:h-[38rem] bg-black/60 w-full bg-hero bg-cover bg-center overflow-hidden'>
                    <div className='h-full w-full flex items-center justify-center flex-col'>
                        <div className='flex flex-col justify-center items-center tracking-widest'>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.7 }} initial={{ y: -100, opacity: 0 }} className='font-bold transition-all leading-tight relative text-[3rem] md:text-[4rem] text-white'>
                                DCM
                            </motion.div>
                            <motion.div animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 1, delay: 1.5 }} initial={{ y: 100, opacity: 0 }} className='relative text-white transition-all md:text-[2rem]'>
                                Welcome to Admin
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

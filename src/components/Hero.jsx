import React from "react";
import MyPhotos from "./../assets/img/mypotos.png";
import Scroll from "./../assets/img/scroll-down.webp";

const Hero = () => {
    return (
        <section className='relative' id='home'>
            <div className='container w-full min-h-screen -mt-[90px] flex flex-col gap-4 lg:gap-24 lg:flex-row justify-center lg:justify-between items-center'>
                {/* left area */}
                <div className='pt-12 max-w-2xl text-center lg:text-left'>
                    <h3 className='text-xl lg:text-4xl pb-2'>
                        Hi, I'm <b className='text-white'>Shuvo Sarker</b> 😎
                    </h3>
                    <h1 className='text-5xl md:text-6xl xl:text-8xl font-black animation-text'>
                        Front End
                        <br />
                        Developer
                    </h1>
                    <p className='text-xl mt-6 leading-relaxed'>
                        Passionately motivated web developer with a zest for
                        leveraging technical skills and a profound love for
                        software development. Seeking to contribute within a
                        dynamic and collaborative environment that nurtures
                        creativity and innovation.
                    </p>
                    <div className='flex gap-4'>
                        <a
                            href='#portfolio'
                            className=' h-12 group text-xl mt-4 border-b inline-block duration-300 text-white border-zinc-600 hover:border-white'
                        >
                            My Projects
                            <i className='ri-arrow-right-up-line rotate-0 group-hover:ml-4 ml-1 text-3xl group-hover:text-4xl duration-300 inline-block' />
                        </a>
                        <a
                            target='_blank'
                            href='https://drive.google.com/file/d/1XjsytL43TbMiQ6_TwLHWfHhtfg1O73eu/view?usp=sharing'
                            className=' h-12 group text-xl mt-4 border-b inline-block duration-300 text-white border-zinc-600 hover:border-white'
                        >
                            Download CV
                            <i className='ri-arrow-right-up-line rotate-0 group-hover:ml-4 ml-1 text-3xl group-hover:text-4xl duration-300 inline-block' />
                        </a>
                    </div>
                </div>

                {/* right area */}
                <img
                    src={MyPhotos}
                    alt='Shuvo Sarker'
                    className='w-full max-w-sm xl:max-w-xl pt-8 -mb-16'
                />
            </div>
            <div className='lg:flex justify-center hidden -mt-24 pb-12'>
                <a href='#portfolio'>
                    <img src={Scroll} className='w-16' />
                </a>
            </div>
        </section>
    );
};

export default Hero;
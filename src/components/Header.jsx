import React from "react";
import Headroom from "react-headroom";

const Header = () => {
    return (
        <Headroom>
            <header className='py-4 bg-[#1F1F1F]/75 backdrop-blur-sm'>
                <div className='container flex justify-between items-center'>
                    {/* logo here */}
                    <a href='#home'>
                        <h3 className='animation-text font-bold text-2xl leading-[80%]'>
                            Shuvo
                            <br />
                            Sarker.
                        </h3>
                    </a>
                    {/* menu here */}
                    <ul className='list-style-none flex gap-4 md:gap-8'>
                        <li>
                            <a
                                className='py-3 relative before:absolute before:w-0 before:h-1 before:bg-white before:bottom-0 before:duration-300 duration-300 rounded-xl hover:before:w-full hover:text-white'
                                href='#portfolio'
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className='py-3 relative before:absolute before:w-0 before:h-1 before:bg-white before:bottom-0 before:duration-300 duration-300 rounded-xl hover:before:w-full hover:text-white'
                                href='#contact'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </Headroom>
    );
};

export default Header;

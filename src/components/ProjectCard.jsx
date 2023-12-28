import React from "react";

const ProjectCard = ({ img, title, tech, live, git }) => {
    return (
        <div className='hover:-mt-4 duration-300 cursor-pointer'>
            <div className='p-2 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-2xl'>
                <img src={img} className='border-2 rounded-xl' />
                <div className='p-8'>
                    <h3 className='text-2xl font-extrabold text-black'>
                        {title}
                    </h3>
                    <div className='mt-4'>
                        <p className='font-semibold text-black'>
                            Technology Used:{" "}
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            {tech.map((e) => {
                                return (
                                    <span className='flex'>
                                        <i class='ri-arrow-right-double-line text-black'></i>
                                        <span className='ml-1 mt-1 text-black text-sm'>
                                            {e}
                                        </span>
                                    </span>
                                );
                            })}
                        </div>

                        <div className='flex gap-0'>
                            <div className='w-36'>
                                <a
                                    href={live}
                                    target='_blank'
                                    className='h-12 group text-xl mt-4 border-b inline-block duration-300 text-black border-zinc-600 hover:border-white'
                                >
                                    Live Link
                                    <i className='ri-arrow-right-up-line rotate-0 group-hover:ml-4 ml-1 text-3xl group-hover:text-4xl duration-300 inline-block' />
                                </a>
                            </div>
                            <div>
                                <a
                                    href={git}
                                    target='_blank'
                                    className=' h-12 group text-xl mt-4 border-b inline-block duration-300 text-black border-zinc-600 hover:border-white'
                                >
                                    Github
                                    <i className='ri-arrow-right-up-line rotate-0 group-hover:ml-4 ml-1 text-3xl group-hover:text-4xl duration-300 inline-block' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

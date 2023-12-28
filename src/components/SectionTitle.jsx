import React from "react";

const SectionTitle = ({ classes, mainTitle, subTitle }) => {
    return (
        <div className={classes}>
            <h1 className='text-5xl md:text-6xl xl:text-7xl font-black animation-text'>
                {mainTitle}
            </h1>

            <h3 className='text-xl lg:text-2xl pb-3 tracking-widest'>
                {subTitle}
            </h3>
        </div>
    );
};

export default SectionTitle;

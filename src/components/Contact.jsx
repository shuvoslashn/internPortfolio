import React from "react";

const Contact = () => {
    return (
        <section className='py-24' id='contact'>
            <div className='container flex flex-col text-center gap-8'>
                <h1 className='text-5xl md:text-6xl xl:text-7xl font-black animation-text'>
                    Feel Free to Contact me
                </h1>

                <h3 className='text-xl lg:text-4xl pb-3 tracking-widest'>
                    <a href='mailto:dev.shuvosarker@gmail.com'>
                        💌 dev.shuvosarker@gmail.com
                    </a>
                </h3>
                <h3 className='text-xl lg:text-4xl pb-3 tracking-widest -mt-8 lg:-mt-4'>
                    <a href='tel:+8801729517615'>📞 +880 1729 517 615</a>
                </h3>
            </div>
        </section>
    );
};

export default Contact;

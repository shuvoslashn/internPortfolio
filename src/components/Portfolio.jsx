import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
    return (
        <section className='py-16 lg:py-24 bg-zinc-900' id='portfolio'>
            <div className='container'>
                <SectionTitle
                    classes={"text-center pb-6 lg:pb-16"}
                    mainTitle={"Portfolio"}
                    subTitle={"Know about my skillset and projects"}
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <ProjectCard
                        img='https://i.ibb.co/5jmgF3C/Frame-1.png'
                        title='Figma Land'
                        tech={["Figma", "Tailwind CSS", "React JS"]}
                        live={"https://figma-land-shuvo.surge.sh/"}
                        git={
                            "https://github.com/shuvoslashn/projects/tree/main/figmaLand"
                        }
                    />
                    <ProjectCard
                        img='https://shuvo-dev-portfolio.surge.sh/project-react-landing.1592c090.png'
                        title='Landing Page'
                        tech={["Figma", "Tailwind CSS", "React JS"]}
                        live={"https://shuvo-react-landing.surge.sh/"}
                        git={
                            "https://github.com/shuvoslashn/personalProject/tree/main/frontEnd/react/react-landing"
                        }
                    />
                    <ProjectCard
                        img='https://shuvo-dev-portfolio.surge.sh/project-sdcial.a7e683e5.png'
                        title='SDCIAL'
                        tech={["Material Ui", "Tailwind CSS", "React JS"]}
                        live={"https://shuvo-social.surge.sh/"}
                        git={
                            "https://github.com/shuvoslashn/projects/tree/main/sdsocial"
                        }
                    />
                    <ProjectCard
                        img='https://i.ibb.co/pb0T223/project-mediavolt-e881e9d8.png'
                        title='File Manager app'
                        tech={["HTML", "Tailwind CSS"]}
                        live={"https://shuvo-mediavolt.surge.sh/"}
                        git={
                            "https://github.com/shuvoslashn/bongodev-projects/tree/main/mediaVolt"
                        }
                    />
                    <ProjectCard
                        img='https://shuvo-dev-portfolio.surge.sh/project-mosto-agency.2786278d.png'
                        title='Creative Agency'
                        tech={["HTML", "Tailwind CSS", "Animate CSS"]}
                        live={"https://shuvo-mosto.surge.sh/"}
                        git={
                            "https://github.com/shuvoslashn/projects/tree/main/figmaLand"
                        }
                    />
                    <ProjectCard
                        img='https://shuvo-dev-portfolio.surge.sh/project-nomad.d1416d93.png'
                        title='Figma Land'
                        tech={["Figma", "Tailwind CSS", "React JS"]}
                        live={"https://nomad-shuvo3664.surge.sh/"}
                        git={"https://github.com/shuvoslashn/nomad"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>Atualmente a linguagem que mais uso é o javaScript, tenho conhecimento em GIT,
                               deploy na Heroku e Netlify, gosto de criar um layout moderno e responsivo para minhas aplicações, esse é o meu maior diferencial. </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="meter1" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="brand identity" />
                                    <h5>React-native</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="logo design" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="web development" />
                                    <h5>Heroku</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="web development" />
                                    <h5>Netlify</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

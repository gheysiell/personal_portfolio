import Flutter from "../assets/img/flutter.png"
import React from '../assets/img/react.png'
import TypeScript from '../assets/img/typescript.png'
import Express from '../assets/img/express.png'
import LazarusIde from '../assets/img/lazarus.png'
import Firebase from '../assets/img/firebase.png'
import Heroku from '../assets/img/heroku.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
    }

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>Atualmente a tecnologia que mais uso e mais gosto é o Flutter, mas tenho esperiência em todas essas.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={Flutter} alt="Flutter" />
                                    <h5>Flutter</h5>
                                </div>
                                <div className="item">
                                    <img src={React} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={TypeScript} alt="TypeScript" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={Express} alt="Express" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={Firebase} alt="Firebase" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={LazarusIde} alt="Lazarus IDE" />
                                    <h5>Lazarus IDE</h5>
                                </div>
                                <div className="item">
                                    <img src={Heroku} alt="Heroku" />
                                    <h5>Heroku</h5>
                                </div>                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

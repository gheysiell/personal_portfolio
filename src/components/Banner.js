import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ["Dev full-stack", "Apaixonado em tecnologia"]
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) setDelta(prevDelta => prevDelta / 2)        

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(250)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bem vindo ao meu portfólio!</span>
                                    <h1 className="tittle-apresentation">{`Olá! Me chamo Gheysiell,`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Desenvolvedor full-stack", "Apaixonado por tecnologia" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Sou Gheysiell Santana, tenho 20 anos, desenvolvedor Full Stack,
                                       começei a estudar desenvolvimento de software em 10/2019, Desenvolvedor a mais de 4 anos,
                                       atuei na empresa Sicaf Sistemas por 2 anos e 6 meses desenvolvendo softwares do 0 e dando manutenção, adquirindo
                                       assim experiência em projetos Web, Mobile e Desktop, Atualmente estou atuando no Grupo Diságua.
                                       minhas tecnologias favoritas para desenvolver são
                                       Flutter, React e Express ❤, meus hobbies são jogar e fazer apps mobile.</p>
                                </div>}
                        </TrackVisibility>
                </Row>
            </Container>
        </section>
    )
}
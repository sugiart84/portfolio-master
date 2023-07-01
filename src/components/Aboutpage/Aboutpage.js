import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm Sugiarto web developer from Indonesian. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={3}>
                                    <li><h6>Backend</h6></li>
                                    <li>ASP.NET MVC</li>
                                    <li>ASP.NET CORE</li>
                                    <li>ASP.NET Web Form</li>
                                </Col>
                                <Col md={3}>
                                    <li><h6>Frontend</h6></li>
                                    <li>React Js</li>
                                    <li>Javascript</li>
                                    <li>Ajax</li>
                                </Col>
                                <Col md={3}>
                                    <li><h6>Reporting</h6></li>
                                    <li>Crystal Report</li>
                                </Col>
                                <Col md={3}>
                                    <li><h6>Other</h6></li>
                                    <li>RPA/UiPath</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
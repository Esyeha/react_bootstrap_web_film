import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import antManImage from "../assets/image/superhero/antman.jpg"
import avengerImage from "../assets/image/superhero/avenger.jpg"
import batmanImage from "../assets/image/superhero/batman.jpg"
import robinhoodImage from "../assets/image/superhero/robinhood.jpg"
import spidermanImage from "../assets/image/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/image/superhero/superman.jpg"


const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
            <h1 className='text-white'>#SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='superhero'>
                        <Card className="movieImage">
                        <Image src={antManImage} alt="Antman Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>ANTMAN</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={avengerImage} alt="Avenger Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>AVENGERS</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={batmanImage} alt="Batman Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>BATMAN</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={robinhoodImage} alt="Robinhood Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>ROBIN HOOD</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={spidermanImage} alt="Spiderman Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>SPIDERMAN</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={supermanImage} alt="Superman Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>SUPERMAN</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero
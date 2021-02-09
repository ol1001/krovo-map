import './App.css';
import {CalendarChart} from './components/CalendarChart'
import {PieChart} from './components/PieChart'
import {BubbleChart} from './components/BubbleChart'
import {Container, Row, Col} from 'react-bootstrap';

function App() {
    return (
        <Container fluid>
            <h1 className="header">Термінова доставка крові у графіках</h1>
            <Row>
                <Col>
                    <h2>Розподіл за типом запиту</h2>
                    <BubbleChart/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Календар</h2>
                    <CalendarChart/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Розподіл за локацією</h2>
                    <PieChart/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

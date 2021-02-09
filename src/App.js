import './App.css';
import { CalendarChart } from './components/CalendarChart'
import { PieChart } from './components/PieChart'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="header">KROVO Statistics in Graph</h1>
          <CalendarChart />
          <PieChart />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

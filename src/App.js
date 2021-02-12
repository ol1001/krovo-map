import './App.css';
import {CalendarChart} from './components/CalendarChart'
import {PieChart} from './components/PieChart'
import {BubbleChart} from './components/BubbleChart'
import {BulletChart} from './components/BulletChart'
import {SankeyChart} from './components/SankeyChart'
import logo from './logo_mh.png';

function App() {
    return (
        <div className="box-container">
            <img src={logo} alt="NGO Motohelp" width="156" height="156" />
            <h1>KROVO у графіках</h1>
            <div className="box">
                <h2>Календар</h2>
                <CalendarChart/>
            </div>
            <div className="box">
                <h2>Розподіл за типом запиту</h2>
                <BubbleChart/>
            </div>
            <div className="box">
                <h2>Розподіл за локацією</h2>
                <PieChart/>
            </div>
            <div className="box">
                <h2>Кількість кілометрів</h2>
                <BulletChart/>
            </div>
            <div className="box">
                <h2>Мапа</h2>
                <SankeyChart/>
            </div>
        </div>
    );
}

export default App;

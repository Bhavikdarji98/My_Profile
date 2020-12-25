import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import Inroduction from './components/Introduction'
import About from './components/About'
import Timeline from './components/Timeline';
function App() {
  return (
    <div className="App">
       <div id="colorlib-page">
        <div id="container-wrap">
          <Slider/>
        
        <div id="colorlib-main">
					<Inroduction/>
					<About/>
					<Timeline/>
          	</div>
          </div>
      	</div>
        </div>
  );
}

export default App;

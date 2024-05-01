import Header from "./Components/Header";
import './App.css';

function App() {

  return (
    <>

      <Header />
      <div className="container">
        <section>Intro content will be here</section>
        <section>
          <ul>
            <li className="randItem">cloths</li>
            <li className="randItem">electronic</li>
            <li className="randItem">Animal</li>
            <li className="randItem">Wire</li>
            <li className="randItem">Printing</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App

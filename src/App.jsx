import Header from "./Components/Header";
import './App.css';

function App() {

  return (
    <>

      <Header />
      <div className="container">
        <section className="intro-space">
          <div className="intro-image">
            image will be here
          </div>
          <div className="intro-text">
            <h3>
              Intro text will be here
            </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Consequatur nisi neque quisquam consectetur dolore eos, 
              voluptatibus perferendis molestiae commodi fugit doloremque,
              aperiam odio nemo nobis, amet magni est placeat soluta.
            </p>
          </div>
        </section>
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

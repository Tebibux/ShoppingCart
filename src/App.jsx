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
        <section className="category-slider">
            <div className="slider-wrapper">
              <ul className="slider">
                <li className="randItem">
                  <img src="/src/assets/image/sampleImage.png" alt="Electronics" />
                  <span>Electronics</span>
                </li>
                <li className="randItem">
                  <img src="/src/assets/image/sampleImage.png" alt="Jewelery" />
                  <span>Jewelery</span>
                </li>
                <li className="randItem">
                  <img src="/src/assets/image/sampleImage.png" alt="Mens Clothing" />
                  <span>Mens Clothing</span>
                </li>
                <li className="randItem">
                  <img src="/src/assets/image/sampleImage.png" alt="Womens Clothing" />
                  <span>Womens Clothing</span>
                </li>
              </ul>
            </div>
          </section>

      </div>
    </>
  )
}

export default App

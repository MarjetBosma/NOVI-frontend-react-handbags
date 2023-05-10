import React from 'react';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import './App.css';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button
              type="button"
              clickHandler={() => console.log("to the collection")}
              isDisabled={false}>
              To the collection
              </Button>
          <Button
              type="button"
              clickHandler={() => console.log("shop all bags")}
              isDisabled={false}>
              Shop all bags
              </Button>
          <Button
              type="button"
              clickHandler={() => console.log("pre-order")}
              isDisabled={true}>
              Pre-order
          </Button>
      </nav>
      <main>
          <Product
              label="Best seller"
              img={bag1}
              title="The handy bag"
              price={400}
              />
          <Product
              label="Best seller"
              img={bag2}
              title="The stylish bag"
              price={250}
              />
          <Product
              label="New collection"
              img={bag3}
              title="The simple bag"
              price={300}
              />
          <Product
              label="New collection"
              img={bag4}
              title="The trendy bag"
              price={150}
              />
      </main>
      <footer>
          <Tile
              title="The Brand">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate enim eveniet inventore praesentium quidem quisquam reprehenderit tempora unde. Dolor!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos illo incidunt iusto maiores nam perferendis quod saepe sapiente tenetur.</p>
              </Tile>
          <Tile
              img={brand}
              imgDescription="the brand logo"
              />
          <Tile
              img={our_story}
              imgDescription="the designers"
              />
          <Tile
              title="Our Story">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda debitis eaque enim, expedita magni maxime quisquam reiciendis, sit soluta tempore ut! Animi assumenda at cum deserunt doloremque nesciunt quibusdam?</p>
              </Tile>
          </footer>
      </>
  );
}

export default App;




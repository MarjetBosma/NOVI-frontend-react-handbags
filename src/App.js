import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button buttonType="button" clickHandler={() => console.log("to the collection")} isDisabled={false}>
              To the collection
              </Button>
          <Button buttonType="button" clickHandler={() => console.log("shop all bags")} isDisabled={false}>
              Shop all bags
              </Button>
          <Button buttonType="button" clickHandler={() => console.log("pre-order")} isDisabled={true}>
              Pre-order</Button>
      </nav>
          <main>
              <article>
                  <span>Best seller</span>
                  <img src="./assets/bag_1.png" alt="handy bag"/>
                  <p>The handy bag</p>
                  <h4>€400</h4>
              </article>
              <article>
                <span>Best seller</span>
                <img src="./assets/bag_2.png" alt="stylish bag"/>
                <p>The stylish bag</p>
                <h4>€250</h4>
              </article>
              <article>
                <span>New collection</span>
                <img src="./assets/bag_3.png" alt="simple bag"/>
                <p>The simple bag</p>
                <h4>€300</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img src="./assets/bag_4.png" alt="trendy bag"/>
                  <p>The trendy bag</p>
                  <h4>€150</h4>
              </article>

          </main>
      </>
  );
}

export default App;




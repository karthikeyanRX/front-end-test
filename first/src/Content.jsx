import React, { useState } from 'react'

const Content = () => {

  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      item: "practice coding",
    },
    {
      id: 2,
      checked: true,
      item: "playing Game",
    },
    {
      id: 3,
      checked: true,
      item: " playing Cricket",
    },
    {
      id: 4,
      checked: true,
      item: "practice Swimming",
    },
  ]);
  //  const handelClick = () => {
  //   console.log("Happy React");
  //  }
  //   const handelClick1 = (name) => {
  //     console.log(`Happy React ${name}`);
  //  }
  // const [count, setCount] = useState(99);

  // function decrementCount() {
  //   setCount(count => count - 1);
  // }

  // function incrementCount() {
  //   setCount(count => count + 1);
  // }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.checked} />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      {/* <p>Content</p>
      <button onClick={()=>handelClick1('karthik')}>add</button> */}
      {/* <div>
        <button onClick={decrementCount}>-</button>

        <div>
          <span>{count}</span>
        </div>

        <div>
          <button onClick={incrementCount}>+</button>
        </div>

      </div> */}
    </main>
  )
}

export default Content
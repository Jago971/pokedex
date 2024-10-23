import { useState, useEffect } from "react";
import Button from "./components/Button/index.jsx";

function App() {
  let [count, setCount] = useState(0);

  function clickBtn1() {
    setCount(count + 1);
    // calculateTotal()
  }
  
  let [count2, setCount2] = useState(0);
  function clickBtn2() {
    setCount2(count2 + 1);
  }
  let [total, setTotal] = useState(0);
  // function calculateTotal() {
  //   setTotal( count + count2);
  // }

  useEffect(() => {
    setTotal(count + count2)
  }, [count, count2])


  return (
    <>
      <Button clickHandler={clickBtn1} count={count}></Button>
      <Button clickHandler={clickBtn2} count={count2}></Button>
      <p>All clicks is {total}</p>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.initialQuantity);
  const clickHandler = () => {
    // console.log("Button CLicked");
    console.log("Before Increment: ", counterValue);
    // setCounterValue(counterValue + 1);
    // setCounterValue(counterValue + 1);
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 1;
    });
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 1;
    });
    console.log("After Increment: ", counterValue);
  };
  // useEffect(() => {
  //   console.log("After Increment: ", counterValue);
  // }, [counterValue]);
  const clickHandlerDecrement = () => {
    if (counterValue > 0) {
      console.log("Button CLicked");
      setCounterValue(counterValue - 1);
    } else {
      setCounterValue(counterValue);
    }
  };

  return (
    <>
      {/* {<h1>Counter Value: {counterValue === 0 ? "Zero" : counterValue}</h1>} */}
      {/* {counterValue === 0 ? <></> : <h1>Counter: {counterValue}</h1>} */}
      <h1>Item Name: {props.itemName}</h1>
      {counterValue !== 0 && <h1>Counter:{counterValue}</h1>}

      <button onClick={clickHandler}>Increment</button>
      {/* <button onClick={() => clickHandler(3)}>Increment</button> */}
      <button onClick={clickHandlerDecrement}>Decrement</button>
    </>
  );
};

export default Counter;

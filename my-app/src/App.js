import './App.css';
import Greeting from './Component/Greeting';
import {useState} from 'react';
import FirstComponent from './Component/FirstComp';
import SecondComponent from './Component/SecondComp';
function App() {
  const isLogin=true;
  const name="Pooja";

  const [counter, setCounter] = useState(0)

  const [mountFirst, setmountFirst] = useState(true)
  const [mountSecond, setmountSecond] = useState(false)

  const handleMountFirst = () => {
    setmountSecond(false)
    setmountFirst(true)
  }

  const handleMountsecond = () => {
    setmountSecond(true)
    setmountFirst(false)
  }
  //function message(){
  //alert("Hello pooja"); }
  
  return(
    <div className="App">
      <Greeting isLogin={isLogin} name={name}></Greeting>
      {/*<button onClick={()=>message()}>Display message</button>*/}
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        &nbsp; <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      {mountFirst && <FirstComponent/>}
        {mountSecond && <SecondComponent/>}

        <div>
          <button onClick={handleMountFirst}>First Component</button>
          <button onClick={handleMountsecond}>Second Component</button>
        </div>
    </div>
  );
}
export default App;

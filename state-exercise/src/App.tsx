import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';


type LottoNumbers = number[]

const App = () => {
  /* Your states here */
  const [isLightOn, setIsLightOn] = useState<boolean>(false)
  const [lottoNumbers, setLottoNumbers] = useState<LottoNumbers>([0, 0, 0, 0, 0, 0, 0])
  const [count, setCount] = useState<number>(1)

  const handleLightOn = () => {
    setIsLightOn(!isLightOn)
  }

  const handleLottoNumber = () => {
    setLottoNumbers(currNums => currNums.map(() => Math.floor(Math.random() * 50 + 1)
    ))
  }

  const handleCounter = () => {
    setCount(curr => curr + 1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle handleLightOn={handleLightOn} />
      <div style={isLightOn ? { backgroundColor: "white", color: "black" } : {
        backgroundColor: "black", color: "white"
      }}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers handleLottoNumber={handleLottoNumber} />
      <div className="output">{lottoNumbers.toString()}</div>

      <h2>Click Counter</h2>
      <ClickCounter handleCounter={handleCounter} />
      <div className="output">Counter {count}</div>
    </div>
  );
};

export default App;
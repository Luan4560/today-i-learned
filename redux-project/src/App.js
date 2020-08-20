import React, {useState} from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }

    const obj = {
    a: {
      c: 3
    },
    b: 2,
    }

    const obj2 = {
      ...obj,

      a: {
        ...obj.a,
        c: 42
      }
    }

    const arr = ['a', 'b'];

    const arr2 = arr.concat('c')

    const arr3 = arr.slice()
    
    arr.push('c');
    arr[1] = 'd';

    console.log(arr2, arr3)



  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

import "./App.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

// API URL: https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

function App() {

  const[counter,SetCounter] = useState(0);

  useEffect(()=>{
    console.log('...CALL USEEFFECT..')
    fetchData();
    axiosFetchData();
  },[])

  const AbstractTypes = (data) => {
    //   vegetables:3.5200000000000005, // sum of all item prices that are of type vegetables
    //   meat:7.23, // sum of all item prices that are of type  meat
    //   soup:4.78 // sum of all item prices that are of type soup
    const typeSums = data.reduce((types,item)=>{
      if (!types[item.type]) {
        types[item.type] = 0;
      }
      types[item.type] += item.price;
      return types;
    },{});
    console.log(typeSums);
  }
  const increment = () => {
    //SetCounter(prevCount => prevCount +1);
    SetCounter(counter+1);
  }

  // USING FETCH METHOD
  const fetchData = async() => {

    fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
    .then(response=> response.json())
    .then(data => {
      console.log('DATA FETCH=',data);
      AbstractTypes(data);
    })
    .catch(error => {
      console.log('..ERROR..',error)
    })
  }

  // USING AXIOS METHOD
  const axiosFetchData = async() => {
    try {
      axios
      .get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
      .then((res)=>{
        console.log('DATA AXIOS=',res.data);
        AbstractTypes(res.data);
      })
      //  --------------
    } catch (error) {
      console.error('ERROR...',error)
    }
  }


  return (
    <main>
      <div>
        <div className="CENTERIZED">
          <p>Show Count Here</p>
          <button onClick={increment}>ADDITION {counter}</button>
        </div>
      </div>
    </main>
  );
}

export default App;

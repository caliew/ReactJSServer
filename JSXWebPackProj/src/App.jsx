import React from 'react';

const styledApp = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '80%',
  margin: '50px auto',
  border: '1px solid red',
};

const styledHeader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  fontSize: '2.5em',
  margin: '25px auto 5px auto',
  border: '1px solid black',
  height: '100px',
};

const styledBlock = {
  display:'flex',
  width:'90%',
  margin: '10px auto 15px auto',
  border:'1px solid blue'
}

const styledUnordered = {
  fontSize: '1.5em',
  listStyle: 'disc',
  textAlign: 'left',
  margin: '8px 0px',
};

const App = () => {
  return (
    <div style={styledApp}>
      <div style={styledHeader}>REACT.JS JSX TRANSPILER</div>
      <div style={styledBlock}>
        <ul style={styledUnordered}>
          <li>ITEM 1</li>
          <li>ITEM 2</li>
          <li>ITEM 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;

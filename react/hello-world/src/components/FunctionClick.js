import React from 'react';

function FunctionClick() {
  function clickHandler() {
    alert('You click the button!');
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
}

export default FunctionClick;

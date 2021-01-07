import React from 'react';

const FunctionComponent = () => {
  const namesArr = ["Michael", "Matt"];
  const name = namesArr.map(name => <div>{name}</div>)

  return (
    <div>
      {name}
    </div>
  );
};

export default FunctionComponent;
import React, { Component } from 'react';

function NameList() {
  const names = ['Bryan', 'Robert', 'David', 'Moses', 'Lydia'];
  const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;

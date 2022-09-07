import React from 'react';
import List from '../src/components/List';
function App() {
  const tasks = [
    { id: 1, title: '집가고 싶다.' },
    { id: 2, title: '8시 알람' },
  ];
  return (
    <div>
      <h3>To-do</h3>
      <List tasks={tasks} />
    </div>
  );
}

export default App;

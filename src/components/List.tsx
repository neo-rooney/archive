import React from 'react';

interface listProps {
  tasks: {
    id: number;
    title: string;
  }[];
}

const List: React.FC<listProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  );
};

export default List;

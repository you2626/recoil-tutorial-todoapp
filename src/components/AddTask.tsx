import React from 'react';
import "./AddTask.css";
import { useRecoilValue } from 'recoil';
import { addTitleState } from '../states/addTitleState';

const AddTask=()=>{
  const addTitle=useRecoilValue(addTitleState);


  return (
    <div className="taskField">
      <div>5個のタスクがあります</div>
      <ul>
        {addTitle.map((task)=>(
          <li key={task.id}>{task.title}</li>

        ))}
        
      </ul>
    </div>
  );
};

export default AddTask;
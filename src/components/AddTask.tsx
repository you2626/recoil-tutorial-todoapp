import React from 'react';
import "./AddTask.css";
import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStatelength } from '../states/addTitleState';

const AddTask=()=>{
  const addTitle=useRecoilValue(addTitleState);
  const addTitleLength=useRecoilValue(addTitleStatelength);


  return (
    <div className="taskField">
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task)=>(
          <li key={task.id}>{task.title}</li>

        ))}
        
      </ul>
    </div>
  );
};

export default AddTask;
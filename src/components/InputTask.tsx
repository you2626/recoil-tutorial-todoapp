import React from 'react';
import "./InputTask.css"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputTitleState } from '../states/inputTitleState';
import { addTitleState } from '../states/addTitleState';

const getKey=()=>Math.random().toString(32).substring(2);


const InputTask = () => {
  const [inputTitle,setInputTitle]=useRecoilState(inputTitleState);
  const [addTitle,setAddtitle]=useRecoilState(addTitleState);

  const onChange= React.useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputTitle(e.target.value);
    console.log(inputTitle);
  },[inputTitle]);

  const handleClick=()=>{
    setAddtitle([...addTitle,{id:getKey(),title:inputTitle}]);
    setInputTitle("");
    console.log(addTitle);
    
  };
  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle} />
      <button type="button" className="addButton" onClick={handleClick}>追加</button>
      </div>
  );
};

export default InputTask;
import "./TodoList.css"
import Tab from './components/Tab.js'
import List from './components/List.js'
import React, { useState, useMemo } from 'react';

export default function TodoList(props) {
  const [activeVal, setVal] = useState('0')
  const dateObj = {
    date: '30',
    month: 'NOV',
    year: '2021',
    day: 'TUESDAY'
  }
  const [taskArr, setTaskArr] = useState([
    {
      label: '吃饭',
      completed: false,
    },
    {
      label: '睡觉',
      completed: true,
    },
    {
      label: '玩手机',
      completed: false,
    },
  ])
  let count = useMemo(() => {
    return taskArr.length
  }, [taskArr])
  const filterArr = useMemo(() => {
    if (activeVal === '0') {
      return taskArr
    } else if (activeVal === '1') {
      return taskArr.filter(ele => ele.completed === false)
    } else {
      return taskArr.filter(ele => ele.completed === true)
    }
  }, [activeVal, taskArr])
  const enterKeyUp = (e) => {
    if (e.keyCode === 13) {
      const taskObj = {
        label: e.target.value,
        completed: false
      }
      setTaskArr([...taskArr, taskObj])
      e.target.value = ''
    }
  }
  function setTaskStatus(obj) {
    const index = taskArr.findIndex(ele => ele.label === obj.label);
    taskArr[index].completed = obj.completed;
    setTaskArr([...taskArr])
  }
  function deleteTask(obj, e) {
    e.stopPropagation();
    const index = taskArr.findIndex(ele => ele.label === obj.label);
    taskArr.splice(index, 1)
    setTaskArr([...taskArr])
  }
  return (
    <div className="todo_list">
      <div className="top_bar">
        <div className="date_info">
          <div>
            {dateObj.date}
          </div>
          <span>
            <p>
              {dateObj.month}
            </p>
            <p>
              {dateObj.year}
            </p>
          </span>
        </div>
        <p className="day_info">
          {dateObj.day}
        </p>
      </div>
      <Tab count={count} activeVal={activeVal} setVal={setVal} />
      <input type="text" placeholder="ADD NEW TASK" className="input_area" onKeyUp={enterKeyUp} ></input>
      <List filterArr={filterArr} setTaskStatus={setTaskStatus} deleteTask={deleteTask} />
      {props.children}
    </div>
  );
}

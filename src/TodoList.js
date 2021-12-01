import "./TodoList.css"
import Tab from './components/Tab.js'
import List from './components/List.js'
import React, { useState, useMemo } from 'react';

export default function TodoList(props) {
  const [activeVal, setVal] = useState('0')
  // const now = new Date()
  const dateObj = {
    date: '30',
    month: 'NOV',
    year: '2021',
    day: 'TUESDAY'
  }
  let count = '0'
  const taskArr = useState([
    {
      label: '吃饭',
      completed: false,
    },
    {
      label: '睡觉',
      completed: false,
    },
    {
      label: '玩手机',
      completed: false,
    },
  ])
  const filterArr = useMemo(() => {
    if (activeVal === '0') {
      return taskArr
    } else if (activeVal === '1') {
      return taskArr.filter(ele => ele.completed === false)
    } else {
      return taskArr.filter(ele => ele.completed === true)
    }
  }, [activeVal, taskArr])

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
      <input type="text" placeholder="ADD NEW TASK" className="input_area" ></input>
      <List filterArr={filterArr} />
      {props.children}
    </div>
  );
}

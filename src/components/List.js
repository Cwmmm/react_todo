import './List.css';
import React, { useState } from 'react';
export default function List(props) {
  const [hoverIndex, setHover] = useState(null);
  function handleClick(item) {
    item.completed = !item.completed
    props.setTaskStatus(item)
  }
  function handleEnter(index) {
    setHover(index)
  }
  function handleDelete(obj, e) {
    props.deleteTask(obj, e)
  }
  const renderLi = props.filterArr.map((ele, index) => {
    return (
      <li
        key={ele.label}
        className={ele.completed ? 'active' : ''}
        onClick={() => handleClick(ele)}
        onMouseEnter={() => handleEnter(index)}
        onMouseLeave={() => handleEnter(null)}
      >
        <span>{ele.label}</span>
        <i className="check_box"></i>
        <i className={index == hoverIndex ? 'delete_box list_hover' : 'delete_box'}
          onClick={(e) => handleDelete(ele, e)}
        ></i>
      </li>
    )
  })
  return (
    <ul className="list">
      {renderLi}
    </ul>
  );
}

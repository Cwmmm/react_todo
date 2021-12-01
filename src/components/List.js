import './List.css';
export default function List(props) {
  console.log(props.filterArr)
  function renderLi() {
    return props.filterArr.map(ele => {
      return (
        <li>
          <span>{ele.label}</span>
          <i className={ele.complited && 'active'}></i>
        </li>
      )
    })
  }
  return (
    <ul className="list">
      {renderLi}
    </ul>
  );
}

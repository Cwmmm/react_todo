import './Tab.css';
export default function Tab(props) {
  const types = [
    {
      label: 'ALL',
      value: '0',
      active: false,
    },
    {
      label: 'ACTIVE',
      value: '1',
      active: false,
    },
    {
      label: 'COMPLETED',
      value: '2',
      active: false,
    },
  ]
  let renderList = types.map(item => {
    return (
      <span
        key={item.value}
        className={props.activeVal === item.value ? 'active' : ''}
        onClick={(e) => handleClick(item.value)}
      >{item.label}</span>
    )
  })
  function handleClick(value) {
    props.activeVal !== value && (props.setVal(value));
  }
  return (
    <div className="tab">
      <span>{props.count} tasks</span>
      {renderList}
    </div>
  );
}

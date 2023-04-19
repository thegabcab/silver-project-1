// { items [], heading":string }
interface Props {
    items: string[];
    heading: string;
  // (item: string) => void
  onSelectItem: (item:string) => void
  }

heading=""

function ListGroup({items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); 
    
  return (
    <>
    <h1>heading</h1>
      {props.items.length === 00 && <p>No item found</p>}
    <ul className="list-group">
      {props.items.map((item, index) => (
      <li 
        className={
        selectedIndex === index 
        ? "list-group-item-active"
        : "list-group-item"
        }
        key={item} 
        onClick={() => {
          setSelectedIndex(index); 
        onSelectItem(item);
        }}
        >
        {item}
      </li> 
      ))}
      </ul>
  <li className="list-group item">District 1A</li>
  <li className="list-group item">District 1B</li>
  <li className="list-group item">District 2A</li>
  <li className="list-group item">District 2B</li>
  </ul></>);
}

export default ListGroup;

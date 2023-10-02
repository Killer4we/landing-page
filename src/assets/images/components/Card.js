import './Card.css';
function Card(props){
    return (
        <div>
        <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt="TODO: TITLE" />
          <h2>TODO: {props.title}</h2>
          <p>TODO: {props.todo}</p>
        </li>
      </ul>
        </div>
    );
}
export default Card;
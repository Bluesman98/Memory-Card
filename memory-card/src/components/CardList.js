import Card from "./Card";
import '../styles/CardList.css';

function CardList(props) {
  function handler(id){
    props.handler(id)
  }
  return (
    <div className="CardList">
              {props.list.map((item) => {
        return <Card key = {item.id} cardInfo = {item} handler = {handler}/>;
      })}
    </div>
  );
}

export default CardList;
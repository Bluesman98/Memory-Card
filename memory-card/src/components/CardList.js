import Card from "./Card";
import '../styles/CardList.css';

function CardList(props) {
    console.log(props.list[0])
  return (
    <div className="CardList">
              {props.list.map((item) => {
        return <Card key = {item.id} cardInfo = {item}/>;
      })}
    </div>
  );
}

export default CardList;
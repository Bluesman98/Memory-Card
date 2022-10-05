import '../styles/Card.css';

function Card(props) {
  function handler(){
    props.handler(props.cardInfo.id)
  }

  return (
    <div className="Card"  onClick ={handler} >
   <img src={'/images/'+props.cardInfo.name+'.jpeg'} alt="image"/>
    </div>
  );
}

export default Card;
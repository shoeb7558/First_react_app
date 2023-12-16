import './ExpenceItem.css';

function ExpenceItem(props){

    return (
    
    <div className="expense-item">
        <div>{props.title}</div>
    
    <div className="expense-item__description">{props.date.toISOString()}</div>
   
    <div className="expense-item__price">{props.amount}</div>
    
    </div>
    );
}
export default ExpenceItem;

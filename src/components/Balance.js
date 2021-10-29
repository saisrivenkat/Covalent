import Card from './Card';

const Balance=(props)=>{
    const {balance} =props;
    return(
        <>
        <Card>
            <h3>Balance</h3>
            <hr />
            <h4>balance : {balance/10}</h4>
        </Card>
        
        </>
    )
};
export default Balance;
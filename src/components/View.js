import Balance from './Balance';
import Txn from './Transaction';

const View =(props)=>{
    const {balance,txn} = props
    return(
        <>
        <Balance balance={balance} />
        <Txn Txn={txn} />
        </>
    )
};
export default View;
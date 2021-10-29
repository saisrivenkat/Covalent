import Card from './Card';
const Transaction =(props)=>{
    const {Txn} = props;
    
    return(
        <Card>
        <table>
            <tr>
                <th>Txn hash</th>
                <th>From</th>
                <th>To</th>
                <th>value</th>
            </tr>
            {Txn.map(txn=>{
                    return(
                        <tr>
                            <td>{txn.tx_hash}</td>
                            <td>{txn.from_address}</td>
                            <td>{txn.to_address}</td>
                            <td>{txn.value}</td>
                        </tr>
                    )
                })} 
        </table>
        </Card>
    )
};
export default Transaction;
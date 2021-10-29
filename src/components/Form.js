const Form = (props) => {
    const {setaddress,getbalance} = props;    
    return (
        <>
            <form>
                <input type="text" placeholder="Eneter Address" onChange={(e)=>setaddress(e.target.value)} />
                <button onClick={(e)=>getbalance(e)}>Submit</button>
            </form>
        </>
    )
}
export default Form;
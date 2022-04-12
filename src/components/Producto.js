import ItemCount from '../components/ItemCount'
const Producto = (props) => {
    const onAdd = (numberProducts) =>{
        alert("Agregaste "+ numberProducts)
    }
    return (
        <>
        <div className="col-md-3 text-center">
            <img className="product_img" src={props.srcImage}/>
            <h5 className='mt-3'>{props.name}</h5>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default Producto
export default function ProductCard(props){

    console.log(props.price)

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img
                className="productImage"
                src="https://imagedelivery.net/7D3NQGy_afPWwbfcO5Acjw/celltronics.lk/2024/05/iPad-Air-M2-Chip-1.jpg/w=800,h=800,fit=crop"/>
            <button>Add to cart</button>
        </div>
    )
}
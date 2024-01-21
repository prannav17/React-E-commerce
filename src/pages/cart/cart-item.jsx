export const CartItem = (props)=>{
    const{id,productName, price,productImage}= props.data;

    return (
        <div>
            {/* <img>{productImage}</img> */}
            <div>
                <p>
                    {""}
                    <b>{productName}</b>
                </p>
                <p>{price}</p>
            </div>
        </div>
    )
}
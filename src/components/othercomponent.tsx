import { useCartStore, useCountStore } from "../store"
import Button from "./button"




function OtherComponent ({count}: {count: number}) {
    const increment = useCountStore(state => state.increment)
    const decrement = useCountStore(state => state.decrement)
    const cart = useCartStore(state => state.cart)
    const addCart = useCartStore(state => state.addCart)

    function onAdd() {
        addCart('shoe')
    }

    return (
        <div style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',
            fontSize: '40px'
        }}>
            {count}
            {/* {cart.length} */}
            <div>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>decrement</Button>
                <button onClick={onAdd}> add cart</button>
            </div>

            <div>{cart?.map(c => (
                <p>{c}</p>
            ))}</div>
        </div>
    )
}

export default OtherComponent
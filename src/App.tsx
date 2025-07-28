// import { useState } from 'react'

import { useCartStore, useCountStore } from "./store"

function App() {
    // const [count] = useState(0)
    const count = useCountStore((state) => state.count) 

    return <OtherComponent count={count} />
}


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
            {cart.length}
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={onAdd}> add cart</button>
            </div>

            <div>{cart?.map(c => (
                <p>{c}</p>
            ))}</div>
        </div>
    )
}

export default App

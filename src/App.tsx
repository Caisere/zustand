// import { useState } from 'react'
import OtherComponent from "./components/othercomponent"
import { useCountStore } from "./store"


function App() {
    // const [count] = useState(0)
    const count = useCountStore((state) => state.count) 

    return <OtherComponent count={count} />
}




export default App

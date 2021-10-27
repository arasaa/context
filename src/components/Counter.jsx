import React, {useContext} from 'react'

import MyContext from '../context/myContext'

const Counter = () => {
    const context = useContext(MyContext)
    const {setCount} = context
    return (
        <div>
            <button onClick={() =>setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() =>setCount((prevCount) => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default Counter

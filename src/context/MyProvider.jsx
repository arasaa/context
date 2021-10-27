import React, {useState} from 'react'

import MyContext from './myContext'

const MyProvider = (props) => {
    const [count , setCount] = useState(0)

    const handleSubmit = ()=>{

    }

    return(
        <MyContext.Provider value={{count , setCount , handleSubmit}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
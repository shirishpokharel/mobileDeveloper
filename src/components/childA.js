import React, {useState, useContext} from 'react'
import {Mycontext} from './contex'

export default function ChildA(props) {
   const value = useContext(Mycontext)
    return (
        <div>
            <p>{value[0].name}</p>
        </div>
    )
}

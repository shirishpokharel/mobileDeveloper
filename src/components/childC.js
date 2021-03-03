import React, {useState, useContext} from 'react'
import {Mycontext} from "./contex"
import {useSelector} from "react-redux";
export default function ChildC() {
    const value = useContext(Mycontext)
    const valueFromRedux = useSelector(state => state.name)
    return (
        <div>
            <p>{value[0].name}</p>
            <p>Value from Redux: {valueFromRedux}</p>
        </div>
    )
}

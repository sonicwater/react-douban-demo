import React from 'react'
import {increment,decrement} from '../Redux/Action'
import {connect} from 'react-redux';
const buttonStyle = {
    margin: "20px"
}

const Counter = ({caption, Increment, Decrement, value}) => {
    return (
        <div>
            <button style={buttonStyle} onClick={Increment}>+</button>
            <button style={buttonStyle} onClick={Decrement}>-</button>
            <span>{caption} count :{value}</span>
        </div>
    )
}
const mapState = (state,ownProps) => ({
    value:state[ownProps.caption]
})
const mapDispatch = (dispatch,ownProps) => ({
    Increment:()=>{
        dispatch(increment(ownProps.caption))
    },
    Decrement:()=>{
        dispatch(decrement(ownProps.caption))
    }
})

export default connect(mapState,mapDispatch)(Counter)
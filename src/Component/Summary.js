import React from 'react';
import {connect} from 'react-redux';
const Summary = ({value}) => {
    return (
        <div>Total1 Count: {value}</div>
    );
}
const mapState = (state) => {
    let sum = 0;
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
          sum += state[key];
        }
      }
    return {value: sum};
}
export default connect(mapState)(Summary)
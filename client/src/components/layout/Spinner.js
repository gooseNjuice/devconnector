import React, {Fragment} from 'react';
import spinner from '../../img/126.gif'

const Spinner = (props) => (
    <Fragment>
        <img src={spinner}
             style={{width: '128px', margin: 'auto auto', display: 'block'}}
             alt="Loading..."/>
    </Fragment>
)
export default Spinner
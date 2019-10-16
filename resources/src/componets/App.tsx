// файл frontend/components/App.tsx
import * as React from 'react';

import {connect} from 'react-redux'
import Greetings from './Greetings';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            fetch("api/v1/index").then((response) => {
                return response.json();
            }).then((json) => {
                dispatch({type: 'FETCH_GREETING', text: json.greeting})
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greetings);
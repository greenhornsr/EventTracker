import React from 'react';
import { connect } from 'react-redux';

// Components
import EventList from './EventOccurrence/EventList';
import ErrorDisplay from '../errors/ErrorDisplay';


const FormContainer = (props) => {
    return (
        <div className="form-container">
            {!props.error ? <><br/><EventList /></> : <><br/><ErrorDisplay /></>}
        </div>
    )
}

const mapStateToProps = ({error}) => ({
    error: error
})

export default connect(mapStateToProps)(FormContainer);


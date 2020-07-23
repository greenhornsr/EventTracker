import React from 'react';
import { connect } from 'react-redux';

// Components
import EventList from './eventoccurrence/EventList';
import ErrorDisplay from '../errors/ErrorDisplay';
import EventDetailsContainer from './eventdetails/EventDetailsContainer';


const FormContainer = (props) => {

    return (
        <div className="form-container">
            {props.error && <><br/><ErrorDisplay /></>}
            {!props.error && !props.occurrence && <><br/><EventList /></>}
            {!props.error && props.occurrence && <EventDetailsContainer />}
        </div>
    )
}

const mapStateToProps = ({occurrences}) => ({
    occurrence: occurrences.occurrence,
    error: occurrences.error
})

export default connect(mapStateToProps)(FormContainer);


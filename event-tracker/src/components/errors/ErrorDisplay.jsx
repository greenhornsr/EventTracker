import React from 'react'; 
import { connect } from 'react-redux';

const ErrorDisplay = (props) => {
    return (
        <section className="error-display-section">
            <p>{props.error}</p>
        </section>
    )
}

const mapStateToProps = state => ({
    error: state.error
})

export default connect(mapStateToProps)(ErrorDisplay)
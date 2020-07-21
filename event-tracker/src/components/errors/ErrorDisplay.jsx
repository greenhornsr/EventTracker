import React from 'react'; 
import { connect } from 'react-redux';
import { resetForm } from '../../redux/actions';

const ErrorDisplay = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.resetForm()
    }

    return (
        <section className="error-display-section">
            <p>{props.error}</p>
            <form onSubmit={handleSubmit} action="">
                <button>Refresh</button>
            </form>
        </section>
    )
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, { resetForm })(ErrorDisplay)
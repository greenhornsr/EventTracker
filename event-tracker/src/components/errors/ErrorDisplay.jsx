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
                <button>Try Again</button>
            </form>
        </section>
    )
}

const mapStateToProps = ({error}) => ({
    error: error
})

export default connect(mapStateToProps, { resetForm })(ErrorDisplay)
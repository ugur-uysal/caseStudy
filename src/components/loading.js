import PropTypes from 'prop-types';

const Loading = ({ value = false, fix = false }) => {

    return (value ?
        <div className={`loading ${fix ? 'fix' : ''}`}>
            <div className="spin"></div>
        </div>
        : null);
}

Loading.propTypes = {
    value: PropTypes.bool,
    fix: PropTypes.bool
}

export default Loading;
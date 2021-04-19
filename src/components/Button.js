import PropTypes from 'prop-types'

const Button = ({color,text, onClickAction}) => {
    return (
        <div>
            <button onClick={onClickAction} className="btn" style={{ backgroundColor: color}}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Button
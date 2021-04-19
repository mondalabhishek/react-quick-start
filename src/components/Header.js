import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title, onAddClick, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' 
                text={showAdd?'Close':'Add'} 
                color={showAdd?'red':'green'}
                onClickAction={onAddClick} />
        </header>
    )
}

Header.propTypes ={
    title: PropTypes.string
}

//CSS in JS style={headingStyle}
//const headingStyle ={
//    color: 'green'
//}
  
export default Header

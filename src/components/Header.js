import PropTypes from 'prop-types'
import Button from "./Button"
import {useLocation} from 'react-router-dom'

const Header = ({title, onAddClick, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' &&
                <Button 
                    text={showAdd?'Close':'Add'} 
                    color={showAdd?'red':'green'}
                    onClickAction={onAddClick} />
            }
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

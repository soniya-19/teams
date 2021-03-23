import PropTypes from 'prop-types'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps={
    title: 'Teams Overview'
}
Header.propType ={
    title: PropTypes.string.isRequired
}
//css in js
/* const headingStyle={
    color:'red',
    backgroundColor: 'black'
} */
export default Header

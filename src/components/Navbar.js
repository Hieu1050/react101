function Navbar (props){
    return (
        <nav className = "nav-bar">
            <img className = "nav-logo" src = {`images/${props.nav_logo}`} />
        </nav>
    )
}
export default Navbar
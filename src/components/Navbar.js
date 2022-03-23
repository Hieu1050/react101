import reactLogo192 from "../images/logo192.png"
function Navbar (){
    return (
        <nav className = "nav-bar">
            <img className = "nav-logo" src= {reactLogo192} alt="reactLogo192" />
            <h3 className = "">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar
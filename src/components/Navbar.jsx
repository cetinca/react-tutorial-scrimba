import scrimbaLogo from '../assets/scrimba-logo.png'


function Navbar() {
    return (
        <nav>
            <img src={scrimbaLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar
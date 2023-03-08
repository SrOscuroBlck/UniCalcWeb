import './NavBarContainer.css'

export const NavBarContainer = () => {
  return (
    <>
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="https://i.imgur.com/9Q1Z1Zm.png" alt="logo" />
                </div>
                <div className="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </>
  )
}

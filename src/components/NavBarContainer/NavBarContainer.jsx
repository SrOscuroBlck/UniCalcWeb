import './NavBarContainer.css'
import logo from "../../assets/calculator-off.svg"

export const NavBarContainer = () => {
  return (
    <>
        <div className="navbar-container">
            <div className="navbar">
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" />
                        <h1>UniCalc</h1>
                    </div>
            </div>
        </div>
    </>
  )
}

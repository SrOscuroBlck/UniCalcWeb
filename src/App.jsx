import './App.css'
import { NavBarContainer } from './components/NavBarContainer/NavBarContainer'
import { SignInContainer } from './components/SignInContainer/SignInContainer'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
      <>
        <AuthProvider>
          <NavBarContainer />
          <SignInContainer />
        </AuthProvider>
      </>
  )
}

export default App

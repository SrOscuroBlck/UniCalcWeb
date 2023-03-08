import { useState } from "react"
import "firebase/firestore";
import {db} from "../../firebase/config"
import { getFirestore, collection, addDoc } from "firebase/firestore"

export const SignInContainer = () => {
    const [orderId, setOrderId] = useState(null);

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addRegister = () => {
        const register = {
            username: username,
            email: email,
            password: password
        }

        const queryCollection = collection(db, "Registers")
        addDoc(queryCollection, register)
            .then(() => {
                console.log("Register added");
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setUsername("")
                setEmail("")
                setPassword("")
            }
        )

    }


  return (
    <>
        <div className="signin-container">
            <div className="signin">
                <div className="signin-logo">
                    <img src="https://i.imgur.com/9Q1Z1Zm.png" alt="logo" />
                </div>
                <div className="signin-form">
                    <form>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" onClick={addRegister}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

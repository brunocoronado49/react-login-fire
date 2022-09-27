import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const { signUp } = useAuth()

  const onChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await signUp(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={onChange} />
        <label>Password:</label>
        <input type="password" name="password" onChange={onChange} />
        <button>Register</button>
      </form>
    </div>
  )
}

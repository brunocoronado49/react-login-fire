import { useAuth } from '../context/authContext'

export const Home = () => {
  const authContext = useAuth()
  console.log(authContext)

  return (
    <div>Home</div>
  )
}

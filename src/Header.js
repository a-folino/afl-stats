import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>AFL Stats</h1>

      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Rounds</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header
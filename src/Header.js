import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="logo-section">
        <Link to="/"><img src="https://resources.afl.com.au/photo-resources/2019/12/05/9afccce2-87db-4a20-abcc-0c62c6516b3d/afl-logo.png?width=1200&height=630" alt="AFL logo"></img></Link>
        <h1>Stats</h1>
      </div>
    </header>
  )
}

export default Header

import Wrapper from "../sections/Wrapper"
import avatarImage from "../assets/Aakash.png"
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"
function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="profile image" className="profile-image"/>
      <h1 className="profile-text">Hi I am Aakash</h1>
      <h2 className="profile-text">The creator of this cool Pokedex</h2>
      <h4 className="profile-text">
        This project is created for Learning Purposes
      </h4>
      <div className="profile-links">
        <a href="https://www.github.com/MysticAakash07">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/MysticAakash">
          <FaLinkedin />
        </a>
        <a href="https://www.leetcode.com/Mystic_Aakash">
          <FaCode />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)

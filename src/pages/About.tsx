import Wrapper from "../sections/Wrapper"
import avatarImage from "../assets/Aakash.png"
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"

function About() {
  return (
    <div className="profile">
      <div className="profile-left">
        <img src={avatarImage} alt="Aakash" className="profile-image" />
      </div>
      <div className="profile-right">
        <h1 className="profile-title">Hey! I’m Aakash 👋</h1>
        <h2 className="profile-subtitle">The creator of this Pokédex</h2>

        <p className="profile-description">
          This project blends my love for Pokémon with my passion for web
          development. It’s built using React, Redux Toolkit, Firebase, and
          PokéAPI — and it's designed to deliver both functionality and fun.
        </p>
        <p className="profile-description">
          Whether you're browsing Pokémon stats or comparing abilities, I hope
          this project offers a seamless and interactive experience.
        </p>
        <p className="profile-description">
          Let’s connect — I'd love to share ideas or hear your thoughts!
        </p>

        <div className="profile-links">
          <a
            href="https://github.com/MysticAakash07"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/MysticAakash"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/Mystic_Aakash"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Wrapper(About)

import { NavBar } from "../../Components/NavBar/NavBar";
import css from "./About.module.css";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { BiWorld } from 'react-icons/bi'

export default function About() {
  return (
    <div className={css.section}>
      <NavBar />

      <div className={css.txt}>Our Team</div>

      <div className={css.cards}>
        <div className={css.card}>
          <div className={css.img} id={css.img1}></div>
          <h1>Marian Sofia Gutierrez</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
              <li>
                <a href=" https://github.com/Marian-Sofia" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/marian-sofia-gutierrez-76b891267/"  target="black"><CiLinkedin /></a>
              </li>
              <li>
                <a href=" https://portafolio-marian-sofia.vercel.app/" target="black">
                <BiWorld/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img} id={css.img2}></div>
          <h1>Jaider Nieto</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
          <ul>
              <li>
                <a href=" https://github.com/Jaider-Nieto" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href=" https://www.linkedin.com/in/jaider-nieto-588567238/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img} id={css.img3}></div>
          <h1>Gabriela Rodriguez</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
            <li>
                <a href="https://github.com/GabR3924" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/gabriela-rodriguez-24b4b0214/"  target="black"><CiLinkedin /></a>
              </li>
              <li>
                <a href="http://portafoliouno.s3-website.us-east-2.amazonaws.com/" target="black">
                <BiWorld/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img} id={css.img4}></div>
          <h1>Danna Goñi</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
            <li>
                <a href="https://github.com/Dannagoni" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/danna-go%C3%B1i-6aa163274/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img}></div>
          <h1>Jose Unzueta</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
              <li>
                <a href="https://github.com/JUnzuetaLuza" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/jos%C3%A9-unzueta-21689126a/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img}></div>
          <h1>Brian Cabrera</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
            <li>
                <a href="https://github.com/CabreraBrian" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/jos%C3%A9-unzueta-21689126a/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img}></div>
          <h1>Julian Attadia</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
            <li>
                <a href="https://github.com/DeepGlowing" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/juli%C3%A1n-attadia-b00a52216/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.img}></div>
          <h1>Juan Ferrando</h1>
          <h2>FullStack Developer</h2>
          <div className={css.list}>
            <ul>
            <li>
                <a href="https://github.com/JuanIFerrando" target="black"><AiFillGithub /></a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/juan-ignacio-ferrando-b3b193273/"  target="black"><CiLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

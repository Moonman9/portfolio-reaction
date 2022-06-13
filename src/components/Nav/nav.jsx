import "./nav.scss"
import { FaUserAstronaut } from 'react-icons/fa';
import { AiFillFileWord } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';


export default function nav() {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="left">
                    <a href='#home'>
                        <span className="moonman">moonm</span>
                        <FaUserAstronaut className="astronaut" />
                        <span className="moonman">n.</span>
                    </a>
                    <div className="resources">
                        <a href="mailto:zzepold97@gmail.com" className="email">
                            <MdEmail/>
                        </a>
                    </div>
                    <div className="resources">
                        <a href="https://github.com/moonman9/" className="github">
                            <BsGithub />
                        </a>
                    </div>
                    <div className="resources">
                        <a href="../../../public/Resume/Zlop-resume.docx" print>
                            <AiFillFileWord />
                        </a>
                    </div>
                </div>
                <div className="right">
                   <div className="menu">
                       <span className="about"></span>
                       <span className="skills"></span>
                       <span className="applications"></span>
                       <span className="contact"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}

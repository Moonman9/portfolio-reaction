import { AiFillHome } from 'react-icons/ai';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { AiFillAppstore } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { AiFillContacts } from 'react-icons/ai';
import "./content.scss"

export default function content({ openMenu, setOpenMenu }) {
    return (
        <div className={"content " + (openMenu && "evolve")}>
            <ul>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#home"><AiFillHome className="icon" /> home</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#about"><BsQuestionSquareFill className="icon" /> about</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#applications"><AiFillAppstore className="icon" /> apps</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#contact"><AiFillContacts className="icon" /> contact</a>
                </li>
            </ul>
        </div>
    )
}

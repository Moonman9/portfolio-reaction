import { init } from 'ityped';
import { useEffect, useRef }  from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import "./home.scss"

export default function Home() {
    const wordBank = useRef();

    useEffect(() => {
        init(wordBank.current, {
            showCursor: true,
            placeholder: false,
            backDelay: 1000,
            backSpeed: 60,
            strings: ['a photographer', 'a problem solver', 'a developer', 'limitless' ], 
        });
    }, []);

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="wrapper">
                    <h2>hello! my name is...</h2>
                    <h1>Zachary López</h1>
                    <h2>i am <span ref={wordBank} /></h2>
                </div>
                <a href="#about">
                    <BsFillArrowDownSquareFill className="down" />
                </a>
            </div>
            <div className="right">
                <div className="container">
                    <img src="assets/goldzack.jpg" alt="gold gradient profile pic" />
                </div>
            </div>
        </div>
    )
}

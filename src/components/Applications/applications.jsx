import "./applications.scss"
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import { BsGithub } from 'react-icons/bs';


export default function Applications() {
    return (
        <div className="applications" id="applications">
        <a href="https://moonman9.github.io/horiseon/">
            <CCard className="ccard">
                <CCardImage className="ccardimage" orientation="top" src="/assets/horiseon.png" />
                <CCardBody>
                    <CCardTitle className="ccardtitle">horiseon</CCardTitle>
                    <CCardText className="ccardtext">
                        HTML/CSS
                    </CCardText>
                    <CButton className="github" href="https://github.com/Moonman9/horiseon"><BsGithub /></CButton>
                </CCardBody>
            </CCard>
        </a>
        <a href="https://project1group2.netlify.app/">
            <CCard className="ccard">
                <CCardImage className="ccardimage" orientation="top" src="/assets/upcoming-concerts.png" />
                <CCardBody>
                    <CCardTitle className="ccardtitle">upcoming concerts</CCardTitle>
                    <CCardText className="ccardtext">
                        HTML/CSS/Java
                    </CCardText>
                    <CButton className="github" href="https://github.com/Moonman9/horiseon"><BsGithub /></CButton>
                </CCardBody>
            </CCard>
        </a>
        <a href="https://secret-ridge-77127.herokuapp.com/">
            <CCard className="ccard">
                <CCardImage className="ccardimage" orientation="top" src="/assets/threat-level-midnight.png" />
                <CCardBody>
                    <CCardTitle className="ccardtitle">threat level midnight</CCardTitle>
                    <CCardText className="ccardtext">
                        HTML/CSS/Java
                    </CCardText>
                    <CButton className="github" href="https://github.com/Moonman9/horiseon"><BsGithub /></CButton>
                </CCardBody>
            </CCard>
        </a>

        </div>
    )
}

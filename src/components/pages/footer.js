import React from 'react'
import Footer from '../../containers/footer'
import Icon from '../../containers/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Contact Details</Footer.Title>
                    <Footer.Text>+91-8904451122</Footer.Text>
                    <Footer.Text>+91-8050057788</Footer.Text>
                    <Footer.Text>Ramanujam@stemx.co.in</Footer.Text>
                    <Footer.Text>Naveen@stemx.co.in</Footer.Text>
                    <Footer.Text>www.stemx.co.in</Footer.Text>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Address</Footer.Title>
                    <Footer.Link href="https://goo.gl/maps/dBFc43SHNAR3Matv8" target="_blank"><b>STEMx Studio - PaiLayout</b></Footer.Link>
                    <Footer.Text>101, J villa, 13th a cross, 2nd Main Rd, Pai Layout, Bengaluru, Karnataka 560016</Footer.Text>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.instagram.com/stemx_pai_layout/" target="_blank"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/profile.php?id=100082036914397" target="_blank"><Icon className="fab fa-facebook" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UCvp8Q2o8L4XIdMkVCAJqtNw" target="_blank"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#" target="_blank"><Icon className="fab fa-linkedin" />LinkedIn</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            
            </Footer.Wrapper>
        </Footer>
    )
}
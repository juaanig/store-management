import React from 'react';
import {Card, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return(

    <>
        <Card.Footer className="bg-dark text-center text-white" id="footer">
            <Container className="p-4 pb-0">
                <section className="mb-4">
                
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/juaanig" role="button" target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        Juani
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/LucasButto" role="button" target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        Lucas
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/franmux01" role="button" target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        Fran
                    </a>
                </section>
            </Container>
            <div className="text-center p-3 bg-dark">
                © 2022 Copyright:
                <a className="text-white" href="#!"> Mulé Garnero Butto & Co.</a>
            </div>
        </Card.Footer>
    </>
    );
}

export default Footer;
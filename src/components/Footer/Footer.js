import React from 'react';
import {Card, Container} from 'react-bootstrap';

const Footer = () => {
  return (
    <Card.Footer className="mt-5 bg-dark text-center text-white" id="footer">
        <Container className="p-4 pb-0">
            <section className="mb-4">
            
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i>
                </a>
                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i>
                </a>
            </section>
        </Container>
        <div className="text-center p-3 bg-dark">
            © 2022 Copyright:
            <a className="text-white" href="#!"> Mulé Garnero Butto & Co.</a>
        </div>
    </Card.Footer>
  );
}

export default Footer;
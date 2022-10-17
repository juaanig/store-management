import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            <section className="mb-4">
            
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                ></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                ></a>
                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                ></a>
            </section>
        </div>
        <div className="text-center p-3 bg-dark">
            © 2022 Copyright:
            <a className="text-white" href="#!"> Mulé Garnero Butto & Co.</a>
        </div>
    </footer>
  );
}

export default Footer;
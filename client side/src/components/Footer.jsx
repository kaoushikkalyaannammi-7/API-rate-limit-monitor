import '../styles/main.css';

function Footer(){
    let date=new Date();
    return(
         <footer className="app-footer" data-testid="app-footer">
            <div className="footer-content">
                <div className="footer-title">API Rate Limit Monitor</div>
                <div className="footer-subtitle">
                    &copy; {date.getFullYear()} All rights reserved. Built with MERN
                </div>
            </div>
        </footer>
    );

}
export default Footer;
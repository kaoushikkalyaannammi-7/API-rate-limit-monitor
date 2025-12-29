import Navbar from "./Navbar";
import '../styles/main.css';
function Header(){
    return(
        <header className="app-header" data-testid="app-header">
            <div className="header-content">
                <h1 className="header-title" data-testid="header-title">
                    API Rate Limit Monitor
                </h1>
                <Navbar />
            </div>
        </header>
    );

}
export default Header;
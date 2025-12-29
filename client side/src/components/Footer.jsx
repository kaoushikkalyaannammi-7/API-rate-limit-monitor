function Footer(){
    let date=new Date();
    return(
        <footer>&copy; {date.getFullYear()} All rights reserved. Api Rate Limit Monitor</footer>
    );

}
export default Footer;
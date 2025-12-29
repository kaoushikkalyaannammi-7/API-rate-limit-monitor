import Header from "../components/Header";
function About(){
    return(
        <div>
            <Header></Header>
            <h1>About Page</h1>
            <p>The API Rate Limit Monitor is a full-stack web application designed to track, enforce, and visualize API usage in real time. It helps developers and teams prevent API abuse by applying request limits per user or API key and monitoring consumption across different endpoints.

The dashboard provides clear insights such as total requests made, remaining quota, reset time windows, and usage trends. Built with a modular backend and a responsive React frontend, the system demonstrates practical implementation of rate-limiting middleware, authentication, and data-driven UI design.</p>
        </div>
    );
}
export default About;
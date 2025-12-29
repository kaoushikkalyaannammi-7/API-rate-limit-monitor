import Header from "../components/Header";

function    Profile(){
    return(
        <div>
            <Header></Header>
            <h1>Profile Page</h1>
            <p>View and edit your profile information here.</p>
            <button
 className="btn-use-api"
  onClick={() => {
    localStorage.removeItem("token");
    navigate("/login");
  }}
>
  Logout
</button>

        </div>
    );
}   
export default Profile;
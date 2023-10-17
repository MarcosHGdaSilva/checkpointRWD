

export default function login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <form action="#">
                <label htmlFor="">Email:</label><br/>
                <input type="email" name="" id="" required></input><br/><br/>
                <button onClick={() => {
                    //                    alert("You have successfully logged in");
                    //                    window.location = "/";
                    //                        history.push("/");
                    }}>Submit</button>
                </form>
            </div>
    )
}
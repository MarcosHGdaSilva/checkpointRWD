import React from "react";

const LocalStorage = () => {
    const [user, setValue] = React.useState('');
    const [pass, setPass] = React.useState('');
    
    const onChange = event => {
        localStorage.setItem("myUserInLocalStorage", event.target.user);
        localStorage.setItem("myPassInLocalStorage", event.target.pass);
        
        setValue(event.target.user);
        setPass(event.target.pass);
    };
    return(
        <div>
            <form onSubmit={LocalStorage}>
                <h1>Hello React with Local Storage</h1>
                <input id="user" value={user} type="text"/>
                <p>{user}</p>
                <input id="password" value={pass} type="text"/>
                <p>{pass}</p>
                <button onClick={onChange}>Login</button>
            </form>
        </div>
    );
};
export default LocalStorage;
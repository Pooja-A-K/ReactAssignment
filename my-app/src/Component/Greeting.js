function Greeting({isLogin,name}) {
    return (
        isLogin ? <h4>Successfully Login {name} </h4> : <h4>Login Failed</h4>
    );
}
export default Greeting;


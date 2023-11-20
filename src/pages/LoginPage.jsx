import LeftSideLog from "../containers/LeftSideLog";
import logo from "./../assets/GoodiesLogo.svg";
import "./../styles/LoginPage.css";
import LoginForm from "./../containers/LoginForm";
import { NavLink } from "react-router-dom";

function LoginPage(Props) {
  const { navVisible } = Props;
  const LoginMessage = "Welcome Back";
  return (
    <div className={!navVisible ? "page" : "page page-with-navbar"}>
      <div className="flex justify-center w-full h-full">
      <div className="flex flex-col h-full w-full justify-around items-center">
          <NavLink className="block md:hidden" to="/">
            <img width={100} height={100} src={logo} alt="logo" />
          </NavLink>
        <div className="self-center w-7/12 sm:w-6/12  md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-1/3 h-3/5 flex  shadow-sm p-4 shadow-primary bg-primary rounded-2xl ">
          <LoginForm />
        </div>
      </div>
      </div>
      <div className="hidden sm:hidden md:flex  bg-primary w-2/3 h-full z-0 ">
        <LeftSideLog message={LoginMessage} />
      </div>
    </div>
  );
}

export default LoginPage;

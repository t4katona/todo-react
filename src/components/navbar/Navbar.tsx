import LinkedInLogo from "../../assets/linkedin.svg";
import GithubLogo from "../../assets/github.svg";

export const Navbar = () => {
  return (
    <nav className="w-full my-4 flex justify-between items-center">
      <h1 className="font-medium">Todo-react</h1>
      <ul className="list-none">
        <li className="inline-block mx-1 p-2 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/katonatamas-zalan"
            target="_blank"
          >
            <img src={LinkedInLogo} alt="Icon to linkedin link" />
          </a>
        </li>
        <li className="inline-block mx-1 p-2 cursor-pointer">
          <a href="https://github.com/t4katona" target="_blank">
            <img src={GithubLogo} alt="Icon to github link" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

import "./header.css";
import logoImage from "../assets/logo-rackext-svgrepo-com.svg";
export default function Header() {
  return (
    <header className="header bg-slate-50 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
      <div className="container">
        <nav className="py-4 px-12 mx-4">
          <div className="ab lx nl zf">
            <div className="aa as cg lx yz bxt"></div>
          </div>
          <div className="justify-start flex items-stretch">
            <div className="aa as cg lx yz bxt">
              <img src={logoImage} alt={logoImage} className="max-h-48" />
            </div>
            <ul className="menu-top flex items-center ml-auto text-lg leading-5">
              <li className="pl-4">
                <a href="#">Dashboard</a>
              </li>
              <li className="pl-4">
                <a href="#">FAQs</a>
              </li>
              <li className="pl-4">
                <a href="#">Support</a>
              </li>
              <li className="pl-4">
                <a href="#">user icon...</a>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

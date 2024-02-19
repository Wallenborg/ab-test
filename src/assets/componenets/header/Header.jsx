import "./Header.css";
import { LuScanFace } from "react-icons/lu";

function Header() {
  return (
    <header>
      <LuScanFace className="header-icon" alt="Logo Face" />
      <h1>- ZEN for Mobil Devices -</h1>
      <LuScanFace className="header-icon" alt="Logo Face" />
    </header>
  );
}

export default Header;

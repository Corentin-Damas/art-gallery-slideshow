import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="logo">galleria.</h1>
      <a
        className="start-slideshow u-16px"
        onClick={() => navigate("/slideshow")}
      >
        start slideshow
      </a>
      <hr className="u-flex-fullsize" />
    </header>
  );
}

export default Header;

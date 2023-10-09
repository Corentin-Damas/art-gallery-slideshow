import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SlideshowItem({ art }) {
  const navigate = useNavigate();
  const { id, year, description, name, artist, images } = art;
  const [isFocus, setIsFocus] = useState(false)

  console.log(typeof id);
  function checkIdNext() {
    const numberOfArtwork = 15;
    if (id === numberOfArtwork) {
      return true;
    } else return false;
  }
  function checkIdPrev() {
    if (id === 1) {
      return true;
    } else return false;
  }

  return (
    <>
      <main className="container-slideshow">
        {isFocus && <div className="pop-up" onClick={()=> setIsFocus(false)}>
        <button className="close-pop-up" ><p>Close</p></button>
        <img className="pop-up-img" src={`./.${images.hero.large}`} />
          </div>}
        <div className="left">
          <div className="left-img">
            <img className="img-hero" src={`./.${images.hero.large}`} />
            <button className="btn-focus-view" onClick={()=> setIsFocus(true)}>
              <svg
                height="34px"
                width="34px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polygon
                    fill="white"
                    points="22.658,14.619 24.868,12.409 27.078,10.199 29.288,7.989 29.385,7.893 32.905,11.413 33.212,1.303    23.101,1.61 26.622,5.13 26.525,5.227 24.315,7.437 22.105,9.646 19.896,11.856 19.563,12.19 22.324,14.952  "
                  />
                  <polygon
                    fill="white"
                    points="12.596,9.646 10.386,7.437 8.176,5.227 8.08,5.13 11.6,1.61 1.489,1.303 1.796,11.413 5.317,7.893    5.414,7.989 7.623,10.199 9.833,12.409 12.042,14.619 12.377,14.952 15.139,12.19 14.806,11.856  "
                  />
                  <polygon
                    fill="white"
                    points="29.385,26.436 29.288,26.34 27.078,24.13 24.868,21.92 22.658,19.709 22.324,19.376 19.563,22.139    19.896,22.472 22.105,24.682 24.315,26.892 26.525,29.102 26.622,29.198 23.101,32.719 33.212,33.025 32.905,22.916  "
                  />
                  <polygon
                    fill="white"
                    points="12.042,19.709 9.833,21.92 7.623,24.13 5.414,26.34 5.317,26.437 1.796,22.916 1.489,33.025    11.6,32.719 8.079,29.198 8.176,29.102 10.386,26.892 12.596,24.682 14.806,22.472 15.139,22.139 12.377,19.376  "
                  />
                </g>
              </svg>
              View image
            </button>
          </div>

          <div className="img-title">
            <h1 className="u-24-bottom">{name}</h1>
            <h5>{artist.name}</h5>
          </div>
          <img className="img-artist" src={`./.${artist.image}`}></img>
        </div>
        <div className="right">
          <span className="display date">{year}</span>
          <h5 className="description">{description}</h5>
        </div>
      </main>
      <footer>
        <div className="stepper">
          <hr className="footer-sep" />
          <hr
            className="footer-stepper"
            style={{
              width: `${(id / 15) * 100}%`,
              border: "2px black solid",
            }}
          />
        </div>
        <div className="footer-content">
          <div className="footer-authorDetail">
            <h3 className="u-12-bottom">{name}</h3>
            <h5>{artist.name}</h5>
          </div>
          <div className="footer-navigation">
            <button
              className="footer-nav-btn prev-btn"
              onClick={() => navigate(`/slideshow/${id - 1}`)}
              disabled={checkIdPrev()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="m18.707 4.707-1.414-1.414L8.586 12l8.707 8.707 1.414-1.414L11.414 12l7.293-7.293zM5 3h2v18H5z" />
              </svg>
            </button>
            <button
              className="footer-nav-btn next-btn "
              onClick={() => navigate(`/slideshow/${id + 1}`)}
              disabled={checkIdNext()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M17 3h2v18h-2zM5.293 4.707 12.586 12l-7.293 7.293 1.414 1.414L15.414 12 6.707 3.293 5.293 4.707z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SlideshowItem;

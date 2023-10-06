function SlideshowItem({ art }) {
  // const navigate = useNavigate();

  const { id, year, description, name, artist, images } = art;

  console.log({ id, name }, "fromSlidesshow");

  return (
    <>
      <main className="container-slideshow">
        <div className="left">
          <img className="img-hero" src={`./.${images.hero.large}`} />
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
      <footer></footer>
    </>
  );
}

export default SlideshowItem;

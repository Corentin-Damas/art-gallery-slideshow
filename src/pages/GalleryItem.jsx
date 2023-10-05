function GalleryItem({ art }) {
  const { id, name, artist, images } = art;

  return (
    <div className="gallery-element">
      <img className="gallery-thumbnail" src={images.thumbnail} alt="" />
      <span className="thumbnail-links">
        <h2 className="u-white">{name}</h2>
        <h5 >{artist.name}</h5>
      </span>
    </div>
  );
}

export default GalleryItem;

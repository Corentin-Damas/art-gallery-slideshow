function SlideshowItem({ art }) {
  // const navigate = useNavigate();

  const { id, name, artist, images } = art;



  console.log({ id, name }, "fromSlidesshow");


  return (
    <div>
        <h5>{artist.name}</h5>
    </div>
  );
}

export default SlideshowItem;

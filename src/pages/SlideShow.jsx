import Header from "../components/Header-slideshow";
import { useLoaderData, useParams } from "react-router-dom";
import { getArtWork } from "../data/apiArtwork";
import SlideShowItem from "../pages/SlideshowItem";

function SlideShow() {
  const artworks = useLoaderData();
  const {...selectedArtid} = useParams()

  return (
    <div>
      <Header />
      {
      artworks.map((art) => {
        if (art.id == selectedArtid.id) return <SlideShowItem art={art} key={art.id}/>
      })
      }
    </div>
  );
}

export async function loader() {
  const artworks = await getArtWork();
  return artworks;
}

export default SlideShow;

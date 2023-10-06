import { useLoaderData } from "react-router-dom";
import { getArtWork } from "../data/apiArtwork";
import GalleryItem from "./GalleryItem";
import Header from "../components/Header-gallery";

function Gallery() {
  const artworks = useLoaderData();

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="gallery">
          {artworks.map((art) => (
            <GalleryItem art={art} key={art.id}/>
          ))}
        </div>
      </main>
    </>
  );
}
export async function loader() {
  const artworks = await getArtWork();
  return artworks;
}

export default Gallery;

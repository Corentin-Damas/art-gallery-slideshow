import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Gallery, { loader as artworkLoader } from "./pages/Gallery";
import SlideShow from "./pages/SlideShow";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Gallery />,
          loader: artworkLoader,
        },
        {
          path: "/slideshow/:id",
          element: <SlideShow />,
          loader: artworkLoader,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

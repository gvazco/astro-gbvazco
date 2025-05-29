import { useEffect, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Post {
  title: string;
  alt: string;
  description: string;
  height: number;
  url: string;
  width: number;
}

type Props = {
  postgallery: Post[] | null | undefined;
  postId: number;
};

export const PostGallery = ({ postgallery, postId }: Props) => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const thumbnailsRef = useRef(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (postgallery && postgallery.length > 0) {
      const newSlides = postgallery.map((post) => ({
        src: post.url,
        alt: post.alt,
        width: post.width,
        height: post.height,
        title: post.title,
        description: post.description,
      }));
      // @ts-ignore
      setSlides(newSlides);
    }
  }, [postgallery]);

  console.log("POST_GALLERY", slides);

  if (!postgallery || postgallery.length === 0) {
    return (
      <div>
        La galería de imágenes no esta disponible, intente recargar el sitio.
      </div>
    );
  }

  return (
    <div className="post-gallery-container">
      <div className="post-gallery flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-5 mt-3 justify-around items-center">
        {postgallery.map((post, index) => (
          <div
            className="post-item "
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <img
              src={post.url}
              alt={post.alt}
              className="max-w-[115px]  sm:max-w-[230px] md:max-w-[277px] lg:max-w-[308px]"
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          slides={slides}
          open={open}
          index={photoIndex}
          close={() => setOpen(false)}
          plugins={[Captions, Thumbnails]}
          thumbnails={{ ref: thumbnailsRef }}
          on={{
            // @ts-ignore
            click: () => {
              if (thumbnailsRef.current) {
                // @ts-ignore
                thumbnailsRef.current.visible
                  ? // @ts-ignore
                    thumbnailsRef.current.hide()
                  : // @ts-ignore
                    thumbnailsRef.current.show();
              }
            },
            // @ts-ignore
            slideChange: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}
    </div>
  );
};

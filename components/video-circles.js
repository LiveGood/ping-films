
import WeddingImage from "../public/images/wedding-circle.png";
import CommercialImage from "../public/images/commercial-circle.png";
import styles from '../styles/quote.module.css'

const images = [{
  imageLink: WeddingImage,
  imageText: "Weddings"
}, {
  imageLink: CommercialImage,
  imageText: "Commercial"
}]

export const VideoCircles = () => {
    return (
      <div className={styles.videoCirclesContainer}>
        {images.map((image) => (
            <div className={styles.circleContainer}>
              <Image
                src={image.imageLink}
                alt="Picture of the author"
                width={373}
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.imageText}>{image.imageText}</div>
            </div>
        ))}
      </div>
    )
}
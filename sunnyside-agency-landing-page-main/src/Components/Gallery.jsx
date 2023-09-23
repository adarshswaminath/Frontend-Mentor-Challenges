import image1 from "../assets/image-gallery-milkbottles.jpg"
import image2 from "../assets/image-gallery-orange.jpg"
import image3 from "../assets/image-gallery-cone.jpg"
import image4 from "../assets/image-gallery-sugarcubes.jpg"

function Gallery() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      <img src={image1} alt="image one" />
      <img src={image2} alt="image Two" />
      <img src={image3} alt="image Three" />
      <img src={image4} alt="image Four" />

    </div>
  )
}

export default Gallery
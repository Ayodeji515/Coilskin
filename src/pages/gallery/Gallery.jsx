import Header from '../../components/Header'
import HeaderImage from '../../images/logo2.png'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  // console.log(images);


  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Our Gallery entails some of the Products we have in store 
    and the Brand identity.
    </Header>

    <section className="gallery">
      <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
      </div>
    </section>
    </>
  )
}

export default Gallery
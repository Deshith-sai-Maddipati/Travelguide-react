import { destinations } from '../data/destinations';

// Flatten to all 8 images (desktop + mobile per destination)
const galleryImages = destinations.flatMap((d) => [
  { key: `${d.id}-desktop`, src: d.desktopImage, alt: `${d.name} (desktop)`, label: d.name },
  { key: `${d.id}-mobile`, src: d.mobileImage, alt: `${d.name} (mobile)`, label: d.name },
]);

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <h2>Gallery</h2>
        <p>Explore our collection of stunning destination images.</p>
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <figure key={img.key} className="gallery-item">
              <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
              <figcaption className="gallery-caption">{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

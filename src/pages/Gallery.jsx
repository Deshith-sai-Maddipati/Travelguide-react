import styled from 'styled-components';
import { destinations } from '../data/destinations';

const galleryImages = destinations.flatMap((d) => [
  { key: `${d.id}-desktop`, src: d.desktopImage, alt: `${d.name} (desktop)`, label: d.name },
  { key: `${d.id}-mobile`, src: d.mobileImage, alt: `${d.name} (mobile)`, label: d.name },
]);

const GallerySection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.header};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const GalleryItem = styled.figure`
  margin: 0;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const GalleryCaption = styled.figcaption`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export default function Gallery() {
  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>Gallery</h2>
        <p>Explore our collection of stunning destination images.</p>
        <GalleryGrid>
          {galleryImages.map((img) => (
            <GalleryItem key={img.key}>
              <GalleryImg src={img.src} alt={img.alt} loading="lazy" />
              <GalleryCaption>{img.label}</GalleryCaption>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </GallerySection>
  );
}

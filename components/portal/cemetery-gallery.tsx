"use client";
import { useState } from 'react';
import type { CemeteryGaleria, MediaItem } from '@/data/types';
import { X, ChevronLeft, ChevronRight, Play, Camera, Video, Plane } from 'lucide-react';

type GalleryProps = {
  galeria: CemeteryGaleria;
  nazw: string;
};

function MediaTypeIcon({ typ }: { typ: string }) {
  switch (typ) {
    case 'drone': return <Plane size={14} />;
    case 'video': return <Video size={14} />;
    default: return <Camera size={14} />;
  }
}

function MediaTypeBadge({ typ }: { typ: string }) {
  const labels: Record<string, string> = {
    'photo': 'Zdjęcie',
    'drone': 'Z drona',
    'video': 'Film'
  };
  return (
    <span className="gallery-badge" data-type={typ}>
      <MediaTypeIcon typ={typ} />
      {labels[typ] || typ}
    </span>
  );
}

export function CemeteryGallery({ galeria, nazw }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Zbierz wszystkie media w jedną tablicę
  const allMedia: MediaItem[] = [
    ...(galeria.zdjecie_glowne ? [galeria.zdjecie_glowne] : []),
    ...(galeria.zdjecia_drone || []),
    ...(galeria.zdjecia || []),
    ...(galeria.filmy || [])
  ];

  if (allMedia.length === 0) {
    return (
      <section className="panel gallery-panel gallery-empty">
        <div className="gallery-placeholder">
          <Camera size={48} strokeWidth={1.5} />
          <h3>Galeria w przygotowaniu</h3>
          <p>Zdjęcia tego cmentarza zostaną dodane wkrótce.</p>
        </div>
      </section>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => setCurrentIndex((i) => (i + 1) % allMedia.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + allMedia.length) % allMedia.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  };

  const mainPhoto = galeria.zdjecie_glowne;
  const dronePhotos = galeria.zdjecia_drone || [];
  const otherPhotos = galeria.zdjecia || [];
  const videos = galeria.filmy || [];

  return (
    <>
      <section className="panel gallery-panel" id="galeria">
        <div className="gallery-header">
          <h2>Galeria</h2>
          <span className="gallery-count">{allMedia.length} {allMedia.length === 1 ? 'element' : allMedia.length < 5 ? 'elementy' : 'elementów'}</span>
        </div>

        {/* Główne zdjęcie - duże */}
        {mainPhoto && (
          <div className="gallery-main">
            <button
              className="gallery-main-btn"
              onClick={() => openLightbox(0)}
              aria-label={`Powiększ: ${mainPhoto.alt}`}
            >
              <img
                src={mainPhoto.url}
                alt={mainPhoto.alt}
                loading="lazy"
              />
              <div className="gallery-main-overlay">
                <MediaTypeBadge typ={mainPhoto.typ} />
                {mainPhoto.tytul && <span className="gallery-main-title">{mainPhoto.tytul}</span>}
              </div>
            </button>
            {mainPhoto.autor && (
              <p className="photo-credit">Zdjęcie: {mainPhoto.autor}</p>
            )}
          </div>
        )}

        {/* Zdjęcia z drona */}
        {dronePhotos.length > 0 && (
          <div className="gallery-section">
            <h3 className="gallery-section-title">
              <Plane size={18} /> Zdjęcia z drona
            </h3>
            <div className="gallery-grid">
              {dronePhotos.map((item, idx) => {
                const globalIdx = (mainPhoto ? 1 : 0) + idx;
                return (
                  <button
                    key={item.id}
                    className="gallery-thumb"
                    onClick={() => openLightbox(globalIdx)}
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.url} alt={item.alt} loading="lazy" />
                    <MediaTypeBadge typ="drone" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Pozostałe zdjęcia */}
        {otherPhotos.length > 0 && (
          <div className="gallery-section">
            <h3 className="gallery-section-title">
              <Camera size={18} /> Zdjęcia
            </h3>
            <div className="gallery-grid">
              {otherPhotos.map((item, idx) => {
                const globalIdx = (mainPhoto ? 1 : 0) + dronePhotos.length + idx;
                return (
                  <button
                    key={item.id}
                    className="gallery-thumb"
                    onClick={() => openLightbox(globalIdx)}
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.url} alt={item.alt} loading="lazy" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Filmy */}
        {videos.length > 0 && (
          <div className="gallery-section">
            <h3 className="gallery-section-title">
              <Video size={18} /> Filmy
            </h3>
            <div className="gallery-grid gallery-grid-videos">
              {videos.map((item) => (
                <a
                  key={item.id}
                  className="gallery-video-thumb"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Odtwórz film: ${item.alt}`}
                >
                  {item.thumb ? (
                    <img src={item.thumb} alt={item.alt} loading="lazy" />
                  ) : (
                    <div className="gallery-video-placeholder">
                      <Play size={32} />
                    </div>
                  )}
                  <div className="gallery-video-overlay">
                    <Play size={24} />
                    <span>{item.tytul || 'Odtwórz film'}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
          tabIndex={0}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Zamknij">
            <X size={28} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {allMedia[currentIndex].typ === 'video' ? (
              <div className="lightbox-video">
                <a href={allMedia[currentIndex].url} target="_blank" rel="noopener noreferrer" className="btn">
                  <Play size={20} /> Otwórz film w nowej karcie
                </a>
              </div>
            ) : (
              <img
                src={allMedia[currentIndex].url}
                alt={allMedia[currentIndex].alt}
              />
            )}
            <div className="lightbox-caption">
              <span className="lightbox-counter">{currentIndex + 1} / {allMedia.length}</span>
              {allMedia[currentIndex].tytul && <span>{allMedia[currentIndex].tytul}</span>}
              {allMedia[currentIndex].autor && <span className="lightbox-author">Zdjęcie: {allMedia[currentIndex].autor}</span>}
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Następne zdjęcie"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}

 const imagenes = [
        './Imagenes/Mapa_Rol.PNG',
        './Imagenes/Personajes_Rol.PNG',
        './Imagenes/Descripcion_Rol.PNG'
    ];

    let indiceActual = 0;
    const img = document.getElementById('carousel-img');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    prev.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        img.src = imagenes[indiceActual];
    });

    next.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        img.src = imagenes[indiceActual];
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    img.addEventListener('click', () => {
        lightboxImg.src = imagenes[indiceActual];
        lightbox.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
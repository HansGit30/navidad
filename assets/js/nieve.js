const body = document.querySelector('.navidad');
const cantidadCopos = 100; // Número total de copos visibles
const copos = [];

// Crear los copos inicialmente
const crearCopo = () => {
    const copo = document.createElement('i');
    const size = Math.random() * 8 + 2; // Tamaño del copo entre 2px y 10px
    const delay = Math.random() * 5; // Retardo inicial
    const duration = Math.random() * 10 + 5; // Duración de la animación

    // Estilo del copo
    copo.style.position = 'absolute';
    copo.style.top = '-10px';
    copo.style.left = `${Math.random() * window.innerWidth}px`;
    copo.style.width = `${size}px`;
    copo.style.height = `${size}px`;
    copo.style.background = '#fff';
    copo.style.borderRadius = '50%';
    copo.style.boxShadow = 'inset 0 -1px 1px rgb(114, 114, 114)';
    copo.style.animation = `nieve ${duration}s linear ${delay}s infinite`;

    // Agregar al DOM y al array
    body.appendChild(copo);
    copos.push(copo);
};

// Generar todos los copos
for (let i = 0; i < cantidadCopos; i++) {
    crearCopo();
}


const cantidadCoposMovil = 20; // Menos copos en móviles
if (window.innerWidth <= 768) {
    while (copos.length > cantidadCoposMovil) {
        const copo = copos.pop();
        copo.remove();
    }
}

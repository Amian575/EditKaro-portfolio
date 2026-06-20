
function filterVideos(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filters button');

    
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });

    // Show/hide cards
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}


function openLightbox(videoUrl, title) {
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-video-container');
    const titleEl = document.getElementById('lightbox-title');

    if (!lightbox || !container) return;

    
    container.innerHTML = '';

   
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.style.width = '100%';
    iframe.style.height = '450px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);

    // Set title
    titleEl.textContent = title || 'Video';

    // Show lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('lightbox-video-container');

    if (lightbox) {
        lightbox.style.display = 'none';
    }
    if (container) {
        container.innerHTML = '';
    }
    document.body.style.overflow = '';
}

function closeLightboxOnBackground(event) {
    if (event.target === event.currentTarget) {
        closeLightbox();
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const allBtn = document.querySelector('.filters button[data-filter="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }
});

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(styleSheet);
document.addEventListener('DOMContentLoaded', function() {
    const designViewButtons = document.querySelectorAll('.design-view-btn');
    const designModal = document.getElementById('designModal');
    const fullDesignImage = document.getElementById('fullDesignImage');
    const designModalTitle = document.getElementById('designModalTitle');
    const closeDesignModal = document.querySelector('.close-design-modal');

    designViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const designId = this.getAttribute('data-design-id');
            const designCard = this.closest('.design-card');
            const designImage = designCard.querySelector('img').src;
            const designTitle = designCard.querySelector('.design-title').textContent;

            fullDesignImage.src = designImage;
            designModalTitle.textContent = designTitle;
            designModal.style.display = 'block';
        });
    });

    closeDesignModal.addEventListener('click', function() {
        designModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === designModal) {
            designModal.style.display = 'none';
        }
    });
});

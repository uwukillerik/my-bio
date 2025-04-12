// Массив проектов с подробной информацией
const projectsData = [
    {
        id: 0,
        title: "Проект 1",
        description: "Подробное описание первого проекта. Здесь можно рассказать о технологиях, которые использовались, о целях проекта и достигнутых результатах.",
        languages: ["Python", "JavaScript", "HTML/CSS"],
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ],
        demoLink: "https://example.com/project1",
        githubLink: "https://github.com/uwukillerik/project1"
    },
    {
        id: 1,
        title: "Проект 2",
        description: "Подробное описание второго проекта. Можно упомянуть о проблемах, с которыми пришлось столкнуться, и как они были решены.",
        languages: ["TypeScript", "React", "Node.js"],
        images: [
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ],
        demoLink: "https://example.com/project2",
        githubLink: "https://github.com/uwukillerik/project2"
    },
    {
        id: 2,
        title: "Проект 3",
        description: "Подробное описание третьего проекта. Можно упомянуть о проблемах, с которыми пришлось столкнуться, и как они были решены.",
        languages: ["TypeScript", "React", "Node.js"],
        images: [
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ],
        demoLink: "https://example.com/project3",
        githubLink: "https://github.com/uwukillerik/project3"
    },
    {
        id: 3,
        title: "Проект 4",
        description: "Подробное описание четвертого проекта. Можно упомянуть о проблемах, с которыми пришлось столкнуться, и как они были решены.",
        languages: ["TypeScript", "React", "Node.js"],
        images: [
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ],
        demoLink: "https://example.com/project4",
        githubLink: "https://github.com/uwukillerik/project4"
    },
    {
        id: 4,
        title: "Проект 5",
        description: "Подробное описание пятого проекта. Можно упомянуть о проблемах, с которыми пришлось столкнуться, и как они были решены.",
        languages: ["TypeScript", "React", "Node.js"],
        images: [
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ],
        demoLink: "https://example.com/project5",
        githubLink: "https://github.com/uwukillerik/project5"
    }
];

// Инициализация модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const demoButtons = document.querySelectorAll('.demo-btn');

    // Обработчики для кнопок "Demo"
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            const project = projectsData.find(p => p.id == projectId);
            openModal(project);
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Функция открытия модального окна
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalLanguages = document.getElementById('modalProjectLanguages');
    const modalDescription = document.getElementById('modalProjectDescription');
    const demoLink = document.getElementById('demoLink');
    const githubLink = document.getElementById('githubLink');
    const projectImages = document.getElementById('projectImages');

    // Заполнение данных
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    demoLink.href = project.demoLink;
    githubLink.href = project.githubLink;

    // Языки программирования
    modalLanguages.innerHTML = '';
    project.languages.forEach(lang => {
        const langElement = document.createElement('span');
        langElement.textContent = lang;
        langElement.classList.add('tech-badge');
        modalLanguages.appendChild(langElement);
    });

    // Изображения проекта
    projectImages.innerHTML = '';
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        projectImages.appendChild(img);
    });

    // Инициализация слайдера
    initSlider(projectImages);

    // Показываем модальное окно
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция для слайдера изображений
function initSlider(container) {
    const images = container.querySelectorAll('img');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;

    // Показываем первое изображение
    images.forEach((img, index) => {
        img.style.transform = `translateX(${index * 100}%)`;
    });

    // Обработчики для стрелок
    prevArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextArrow.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    function updateSlider() {
        images.forEach((img, index) => {
            img.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
        });
    }
}

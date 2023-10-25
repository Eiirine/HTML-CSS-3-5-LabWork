const image = document.getElementById('image');
const text = document.getElementById('text');
const filters = document.querySelectorAll('input[name="filter"]');

filters.forEach(filter => {
    filter.addEventListener('change', applyFilter);
});

function applyFilter() {
    const selectedFilter = document.querySelector('input[name="filter"]:checked').value;
    switch (selectedFilter) {
        case 'none':
            image.style.filter = 'none';
            break;
        case 'grayscale':
            image.style.filter = 'grayscale(100%)';
            break;
        case 'sepia':
            image.style.filter = 'sepia(100%)';
            break;
        case 'invert':
            image.style.filter = 'invert(100%)';
            break;
    }
}

applyFilter(); // Применить фильтр по умолчанию при загрузке страницы
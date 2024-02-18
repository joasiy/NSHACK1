document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach(item => {
            item.classList.remove('active');
        });
        items[index].classList.add('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    setInterval(nextItem, 3000); // Auto-rotate every 3 seconds (adjust as needed)
});

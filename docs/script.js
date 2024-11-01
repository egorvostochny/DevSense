// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const orderProjectButton = document.getElementById('orderProject');
const formModal = document.getElementById('formModal');

// Функция для открытия меню
function openMenu() {
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.classList.add('active');
    }, 10);
}

// Функция для закрытия меню
function closeMenu() {
    menu.classList.remove('active');
    setTimeout(() => {
        menu.style.display = 'none';
    }, 300); // Задержка, чтобы анимация завершилась
}

// Обработчик клика на кнопку меню
menuToggle.addEventListener('click', openMenu);

// Обработчик клика на кнопку закрытия меню
menuClose.addEventListener('click', closeMenu);

// Функция для открытия формы
orderProjectButton.addEventListener('click', () => {
    formModal.style.display = 'flex';
});

// Закрытие формы по клику вне формы (добавь обработчик, если требуется)
window.addEventListener('click', (event) => {
    if (event.target === formModal) {
        formModal.style.display = 'none';
    }
});

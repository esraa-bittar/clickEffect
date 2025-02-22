const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

const play = document.querySelector('.play-video');
const pause = document.querySelector('.pause-video');
const video = document.getElementById('video');

play.addEventListener('click', () => {
    video.play();
});

pause.addEventListener('click', () => {
    video.pause();
});

const toggleSearch = document.querySelector('.toggle-search');
const toggleSearch1 = document.querySelector('.toggle-search1');
const searchField = document.getElementById('search-field');
const searchField1 = document.getElementById('search-field1');

toggleSearch.addEventListener('click', () => {
    searchField.classList.toggle('active');
});

toggleSearch1.addEventListener('click', () => {
    searchField1.classList.toggle('active');
});
const $menu = document.querySelector('.burder__body');
const $menuBtn = document.querySelector('.js-burder__icon');
const body = document.body;

$menuBtn.addEventListener('click', function(e) {
    $menu.classList.toggle('active');
    $menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});

$menu.addEventListener('click', function(e) {
    if (e.target.classList.contains('burder__body')) {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    } else {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    }
});
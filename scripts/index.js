const $menu = document.querySelector('.burger__body');
const $menuBtn = document.querySelector('.js-burger__icon');
const body = document.body;

$menuBtn.addEventListener('click', function(e) {
    $menu.classList.toggle('active');
    $menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});

$menu.addEventListener('click', function(e) {
    if (e.target.classList.contains('.burger__body')) {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    } else {
        $menu.classList.remove('active');
        $menuBtn.classList.remove('active');
        body.classList.remove('lock');
    }
});

// const pdfLinks = document.querySelectorAll("a[href$='.pdf']");

// pdfLinks.forEach(link => {
//     const pdfIcon = document.createElement('svg');
//     pdfIcon.setAttribute("width", "32");
//     pdfIcon.setAttribute("height", "33");
//     pdfIcon.setAttribute("class", "me-2");

//     const useElement = document.createElement('use');
//     useElement.setAttribute('href', "/svg/common.bundle.svg#news");

//     pdfIcon.appendChild(useElement);
//     link.appendChild(pdfIcon);
// });

const pdfLinks = document.querySelectorAll("a[href$='.pdf']");
const wordLinks = document.querySelectorAll("a[href$='.doc'], a[href$='.docx']");

pdfLinks.forEach(link => {
    link.insertAdjacentHTML('beforeend', `<svg class="ms-2" width="16" height="16">
        <use href = "/svg/common.bundle.svg#pdf"></use></svg >`);
});

wordLinks.forEach(link => {

    link.insertAdjacentHTML('beforeend', `<svg class="ms-2" width="16" height="16">
        <use href = "/svg/common.bundle.svg#word"></use></svg >`);
});




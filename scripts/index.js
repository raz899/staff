const $menu = document.querySelector('.burger__body');
const $menuBtn = document.querySelector('.js-burger__icon');
const body = document.body;

$menuBtn.addEventListener('click', function (e) {
    $menu.classList.toggle('active');
    $menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});

$menu.addEventListener('click', function (e) {
    if (!e.target.classList.contains('burger__list')) {
        if (e.target.classList.contains('burger__body')) {
            $menu.classList.remove('active');
            $menuBtn.classList.remove('active');
            body.classList.remove('lock');
        } else {
            $menu.classList.remove('active');
            $menuBtn.classList.remove('active');
            body.classList.remove('lock');
        }
    }
});


// добавление svg к link в классе .section-files
function addSvgIcon(selector, iconId) {
    document.querySelectorAll(selector).forEach(function (link) {
        link.insertAdjacentHTML('afterbegin', '<svg width="18" height="18"><use href="/svg/common.bundle.svg#' + iconId + '"></use></svg>');
    });
}

addSvgIcon('.section-files a[href$=".pdf"], .section-files a[href$=".PDF"], .section-files__link[href$=".pdf"]', 'pdf');
addSvgIcon('a[href$=".doc"],  a[href$=".docx"],  a[href$=".rtf"]', 'word');
addSvgIcon('.section-files a:not([href$=".pdf"]):not([href$=".PDF"]):not([href$=".doc"]):not([href$=".docx"]):not([href$=".rtf"])', 'other-links');



// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTrigger) {
    return new bootstrap.Popover(popoverTrigger);
});
document.addEventListener('shown.bs.popover', function (event) {
    var openedPopoverId = event.target.getAttribute('aria-describedby');

    popoverList.forEach(function (popover) {
        if (popover._element.getAttribute('aria-describedby') !== openedPopoverId) {
            popover.hide();
        }
    });
});

// увеличение картинки по клику
const imgsgGallery = document.querySelectorAll('.js-images-gallery img');
const popUp = document.querySelector('.pop-up span');
if (imgsgGallery.length > 0) {
    imgsgGallery.forEach(img => {
        img.addEventListener('click', function () {
            document.querySelector('.pop-up').style.display = 'block';
            document.querySelector('.pop-up img').src = this.getAttribute('src');
        });
    });
    popUp.addEventListener('click', function () {
        document.querySelector('.pop-up').style.display = 'none';
    });
}

// Установить/снять все галки для checkbox
const checkedButtonUniversal = document.querySelector('.js-btn-checked-universal');
if (checkedButtonUniversal != null) {
    checkedButtonUniversal.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('.js-checkbox-universal-report input[type="checkbox"]');

        if (checkboxes.length > 0) {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = !checkbox.checked;
            });
        }
    });
}

// Заведение машины
const selectVehicle = document.querySelector('.js-select-vehicle');
const konteinerBlock = document.querySelector('.js-konteiner-block');
const selectInKonteiner = konteinerBlock.querySelector('select');

const selectProduct = document.querySelector('.js-select-product');
const carTiresBlock = document.querySelector('.js-carTires-block');
const carDiskBlock = document.querySelector('.js-carDisk-block');
const checkboxTruck = document.querySelector('.js-checkbox-truck');

const checkboxes = document.querySelectorAll('.js-checkbox');
const textarea = document.querySelector('.js-textarea');
const select = document.querySelector('.js-select-arrival');

function updateTextarea() {
    let textToAdd = '';
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            textToAdd += checkbox.nextElementSibling.textContent.trim() + '. ';
        }
    });

    const selectedValue = select.value;
    if (selectedValue && !konteinerBlock.classList.contains('d-none')) {
        const arrivalText = `Прибытие: ${selectedValue}.`;
        textToAdd += arrivalText;
    }

    textarea.value = textToAdd;
}

selectVehicle.addEventListener('change', function () {
    if (selectVehicle.value === 'konteiner') {
        konteinerBlock.classList.toggle('d-none', false);
    } else {
        konteinerBlock.classList.toggle('d-none', true);
        // Обнуляем значения внутри select, если блок скрыт
        if (selectInKonteiner) {
            selectInKonteiner.value = '';
        }
    }

    updateTextarea();
});

selectProduct.addEventListener('change', function () {
    if (selectProduct.value === 'carTires') {
        carTiresBlock.classList.remove('d-none');
        carDiskBlock.classList.add('d-none');
        checkboxTruck.classList.remove('d-none');
    } else if (selectProduct.value === 'carDisk') {
        carDiskBlock.classList.remove('d-none');
        carTiresBlock.classList.add('d-none');
        checkboxTruck.classList.add('d-none');
    } else {
        carTiresBlock.classList.add('d-none');
        carDiskBlock.classList.add('d-none');
        checkboxTruck.classList.add('d-none');
    }

    // Обнуляем значения внутри input, если блок скрыт
    if (carTiresBlock.classList.contains('d-none')) {
        carTiresBlock.querySelector('input').value = '';
    }
    if (carDiskBlock.classList.contains('d-none')) {
        carDiskBlock.querySelector('input').value = '';
    }

    updateTextarea();
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTextarea);
});

select.addEventListener('change', updateTextarea);


// омена закрытия при клике в dropdown
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown-menu');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
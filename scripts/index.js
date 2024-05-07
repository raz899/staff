const $menu = document.querySelector('.burger__body');
const $menuBtn = document.querySelector('.js-burger__icon');
const body = document.body;

$menuBtn.addEventListener('click', function (e) {
    $menu.classList.toggle('active');
    $menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});

$menu.addEventListener('click', function (e) {
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



// pdf svg
const pdfLinks = document.querySelectorAll('.section-files a[href$=".pdf"], .section-files a[href$=".PDF"], .section-files__link[href$=".pdf"]');
// word svg
const wordLinks = document.querySelectorAll('a[href$=".doc"],  a[href$=".docx"],  a[href$=".rtf"]');
// other svg links
const otherLinks = document.querySelectorAll('.section-files a:not([href$=".pdf"]):not([href$=".PDF"]):not([href$=".doc"]):not([href$=".docx"]):not([href$=".rtf"])');

pdfLinks.forEach(link => {
    link.insertAdjacentHTML('afterbegin', `<svg width="16" height="16">
        <use href = "/svg/common.bundle.svg#pdf"></use></svg >`);
});

wordLinks.forEach(link => {
    link.insertAdjacentHTML('afterbegin', `<svg width="16" height="16">
        <use href = "/svg/common.bundle.svg#word"></use></svg >`);
});

otherLinks.forEach(link => {
    link.insertAdjacentHTML('afterbegin', `<svg width="16" height="16">
        <use href="/svg/common.bundle.svg#other-links"></use></svg>`);
});
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
const jsButtom = document.querySelectorAll('.js-button');
if (jsButtom != null) {
    document.querySelectorAll('.js-button').forEach(function (button) {
        button.addEventListener('click', function () {
            button.nextElementSibling.classList.toggle('d-none');
            // document.querySelector('.js-generate-report').classList.toggle('d-none');
        });
    });
}

// При клике на ms-select-all отмечаем все checkbox
const selectAllCheckbox = document.querySelector('.ms-select-all input');
if (selectAllCheckbox != null) {
    selectAllCheckbox.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('.ms-select input');

        if (selectAllCheckbox.checked) {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = true;
            });
        } else {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });
        }
    });
}
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


// // Заведение машины
// const selectVehicle = document.querySelector('.js-select-vehicle');
// const konteinerBlock = document.querySelector('.js-konteiner-block');
// const selectInKonteiner = konteinerBlock.querySelector('select');

// const selectProduct = document.querySelector('.js-select-product');
// const carTiresBlock = document.querySelector('.js-carTires-block');
// const carDiskBlock = document.querySelector('.js-carDisk-block');
// const checkboxTruck = document.querySelector('.js-checkbox-truck');

// const checkboxes = document.querySelectorAll('.js-checkbox');
// const textarea = document.querySelector('.js-textarea');
// const select = document.querySelector('.js-select-arrival');

// function updateTextarea() {
//     let textToAdd = '';
//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//             textToAdd += checkbox.nextElementSibling.textContent.trim() + '. ';
//         }
//     });

//     const selectedValue = select.value;
//     if (selectedValue && !konteinerBlock.classList.contains('d-none')) {
//         const arrivalText = `Прибытие: ${selectedValue}.`;
//         textToAdd += arrivalText;
//     }

//     textarea.value = textToAdd;
// }

// selectVehicle.addEventListener('change', function () {
//     if (selectVehicle.value === 'konteiner') {
//         konteinerBlock.classList.toggle('d-none', false);
//     } else {
//         konteinerBlock.classList.toggle('d-none', true);
//         // Обнуляем значения внутри select, если блок скрыт
//         if (selectInKonteiner) {
//             selectInKonteiner.value = '';
//         }
//     }

//     updateTextarea();
// });

// selectProduct.addEventListener('change', function () {
//     if (selectProduct.value === 'carTires') {
//         carTiresBlock.classList.remove('d-none');
//         carDiskBlock.classList.add('d-none');
//         checkboxTruck.classList.remove('d-none');
//     } else if (selectProduct.value === 'carDisk') {
//         carDiskBlock.classList.remove('d-none');
//         carTiresBlock.classList.add('d-none');
//         checkboxTruck.classList.add('d-none');
//     } else {
//         carTiresBlock.classList.add('d-none');
//         carDiskBlock.classList.add('d-none');
//         checkboxTruck.classList.add('d-none');
//     }

//     // Обнуляем значения внутри input, если блок скрыт
//     if (carTiresBlock.classList.contains('d-none')) {
//         carTiresBlock.querySelector('input').value = '';
//     }
//     if (carDiskBlock.classList.contains('d-none')) {
//         carDiskBlock.querySelector('input').value = '';
//     }

//     updateTextarea();
// });

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', updateTextarea);
// });

// select.addEventListener('change', updateTextarea);

// омена закрытия при клике в dropdown 
// document.addEventListener('DOMContentLoaded', function () {
//     var dropdowns = document.querySelectorAll('.dropdown-menu');

//     dropdowns.forEach(function (dropdown) {
//         dropdown.addEventListener('click', function (event) {
//             event.stopPropagation();
//         });
//     });
// });
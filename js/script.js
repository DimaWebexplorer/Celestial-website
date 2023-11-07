'use strict'
/* slider-hero */
const sliderElements = document.querySelectorAll('.hero__slider-image'),
    sliderBox = document.querySelector('.hero__slider'),
    sliderDots = document.querySelectorAll('.hero__dots-dot'),
    buttonPrevious = document.querySelector('.hero__arrow_previous'),
    buttonNext = document.querySelector('.hero__arrow_next'),
    sliderWidth = document.querySelector('.hero__slider').clientWidth;

let sliderCount = 0;

const offsetSlider = () => {
    sliderBox.style.transform = `translateX(${-sliderCount * sliderWidth / 10}rem)`;
};

const nextSlide = () => {
    buttonPrevious.style.opacity = '1';
    sliderCount++;
    if(sliderCount >= sliderElements.length -1) {
        buttonNext.style.opacity = '.3';
        sliderCount = sliderElements.length -1;
    }
    offsetSlider();
    currentSlide(sliderCount);
};

const previousSlide = () => {
    buttonNext.style.opacity = '1';
    sliderCount--;
    if(sliderCount <= 0) {
        buttonPrevious.style.opacity = '.3';
        sliderCount = 0
    }
    offsetSlider();
    currentSlide(sliderCount);
};

const currentSlide = (index) => {
    sliderDots.forEach(item => item.classList.remove('dot-active'));
    sliderDots[index].classList.add('dot-active');
};

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        offsetSlider();
        currentSlide(sliderCount);
        if(sliderCount !== 0 && sliderCount !== sliderElements.length -1) {
            buttonPrevious.style.opacity = '1';
            buttonNext.style.opacity = '1';
        } else if(sliderCount === 0) {
            buttonPrevious.style.opacity = '.3';
            buttonNext.style.opacity = '1';
        } else if(sliderCount === sliderElements.length -1) {
            buttonNext.style.opacity = '.3';
            buttonPrevious.style.opacity = '1';
        }
    })
});

buttonNext.addEventListener('click', nextSlide);
buttonPrevious.addEventListener('click', previousSlide);


/* catalog-slider-level1 */
const catalogSliderElements = document.querySelectorAll('.banner-slider__slider-image_level1'),
    catalogSliderBox = document.querySelector('.banner-slider__slider'),
    catalogSliderDots = document.querySelectorAll('.banner-slider__dots-dot'),
    catalogButtonPrevious = document.querySelector('.banner-slider__arrow_previous'),
    catalogButtonNext = document.querySelector('.banner-slider__arrow_next'),
    catalogSliderWidth = document.querySelector('.banner-slider__slider').clientWidth;

let catalogSliderCount = 0;

const catalogOffsetSlider = () => {
    catalogSliderBox.style.transform = `translateX(${-catalogSliderCount * catalogSliderWidth / 10}rem)`;
};

const catalogNextSlide = () => {
    catalogSliderCount++;
    if(catalogSliderCount >= catalogSliderElements.length -1) {
        catalogSliderCount = catalogSliderElements.length -1;
    }
    catalogOffsetSlider();
    catalogCurrentSlide(catalogSliderCount);
};

const catalogPreviousSlide = () => {
    catalogSliderCount--;
    if(catalogSliderCount <= 0) {
        catalogSliderCount = 0
    }
    catalogOffsetSlider();
    catalogCurrentSlide(catalogSliderCount);
};

const catalogCurrentSlide = (index) => {
    catalogSliderDots.forEach(item => item.classList.remove('dot-active'));
    catalogSliderDots[index].classList.add('dot-active');
};

catalogSliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        catalogSliderCount = index;
        catalogOffsetSlider();
        catalogCurrentSlide(catalogSliderCount);
    })
});

catalogButtonNext.addEventListener('click', catalogNextSlide);
catalogButtonPrevious.addEventListener('click', catalogPreviousSlide);


/* catalog-slider-level2 */
const catalogLevel2SliderElements = document.querySelectorAll('.banner-slider__slider-image_level2'),
    catalogLevel2SliderBox = document.querySelector('.banner-slider__slider_level2'),
    catalogLevel2SliderDots = document.querySelectorAll('.banner-slider__dots-dot_level2'),
    catalogLevel2ButtonPrevious = document.querySelector('.banner-slider__arrow_previous-level2'),
    catalogLevel2ButtonNext = document.querySelector('.banner-slider__arrow_next-level2'),
    catalogLevel2SliderWidth = document.querySelector('.banner-slider__slider_level2').clientWidth;

let catalogLevel2SliderCount = 0;

const catalogLevel2OffsetSlider = () => {
    catalogLevel2SliderBox.style.transform = `translateX(${-catalogLevel2SliderCount * catalogLevel2SliderWidth / 10}rem)`;
};

const catalogLevel2NextSlide = () => {
    catalogLevel2SliderCount++;
    if(catalogLevel2SliderCount >= catalogLevel2SliderElements.length -1) {
        catalogLevel2SliderCount = catalogLevel2SliderElements.length -1;
    }
    catalogLevel2OffsetSlider();
    catalogLevel2CurrentSlide(catalogLevel2SliderCount);
};

const catalogLevel2PreviousSlide = () => {
    catalogLevel2SliderCount--;
    if(catalogLevel2SliderCount <= 0) {
        catalogLevel2SliderCount = 0
    }
    catalogLevel2OffsetSlider();
    catalogLevel2CurrentSlide(catalogLevel2SliderCount);
};

const catalogLevel2CurrentSlide = (index) => {
    catalogLevel2SliderDots.forEach(item => item.classList.remove('dot-active'));
    catalogLevel2SliderDots[index].classList.add('dot-active');
};

catalogLevel2SliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        catalogLevel2SliderCount = index;
        catalogLevel2OffsetSlider();
        catalogLevel2CurrentSlide(catalogLevel2SliderCount);
    })
});

catalogLevel2ButtonNext.addEventListener('click', catalogLevel2NextSlide);
catalogLevel2ButtonPrevious.addEventListener('click', catalogLevel2PreviousSlide);


/* catalog button and catalog background and catalog menu */
const buttonCatalog = document.querySelector('.btn-catalog');
buttonCatalog.addEventListener('click', () => {
    document.querySelector('.btn-catalog').classList.toggle('btn-catalog_active');
    document.querySelector('.catalog').classList.toggle('catalog_active');
    document.querySelector('.header').classList.toggle('header_separator');
    document.querySelector('.bg-catalog').classList.toggle('bg-catalog_active');
    document.querySelector('.catalog__banner-container_level1').style.visibility = 'hidden';
    document.querySelector('.catalog__banner-container_level2').style.visibility = 'hidden';
})
const catalogBackground = document.querySelector('.bg-catalog');
catalogBackground.addEventListener('click', () => {
    document.querySelector('.btn-catalog').classList.remove('btn-catalog_active');
    document.querySelector('.catalog').classList.remove('catalog_active');
    document.querySelector('.header').classList.remove('header_separator');
    document.querySelector('.catalog__banner-container_level1').style.visibility = 'hidden';
    document.querySelector('.catalog__banner-container_level2').style.visibility = 'hidden';
    document.querySelector('.bg-catalog').classList.remove('bg-catalog_active');
})
const elementLevel1 = document.querySelector('.catalog__level1-item-text_hover');
elementLevel1.addEventListener('mouseover', () => {
    document.querySelector('.catalog__level2-items').style.display = 'flex';
    document.querySelector('.button-container').style.display = 'block';
    document.querySelector('.catalog__banner-container_level1').style.visibility = 'visible';
})
const catalog1 = document.querySelector('.catalog__level1');
catalog1.addEventListener('mousemove', (event) => {
    if(event.target.classList.contains('catalog__level1')) {
        document.querySelector('.catalog__level2-items').style.display = 'none';
        document.querySelector('.button-container').style.display = 'none';
        document.querySelector('.catalog__level3-items').style.display = 'none';
        document.querySelector('.catalog__banner-container_level1').style.visibility = 'hidden';
    }
})
const elementLevel2 = document.querySelector('.catalog__level2-item_hover')
elementLevel2.addEventListener('mouseover', () => {
    document.querySelector('.catalog__level3-items').style.display = 'flex';
    document.querySelector('.catalog__banner-container_level2').style.visibility = 'visible';
})
const catalog2 = document.querySelector('.catalog');
catalog2.addEventListener('mousemove', (event) => {
    if(!event.target.classList.contains('button-container') && !event.target.classList.contains('btn-new') && !event.target.classList.contains('btn-new__text') && !event.target.classList.contains('catalog__level2') && !event.target.classList.contains('catalog__level2-items') && !event.target.classList.contains('catalog__level2-item') && !event.target.classList.contains('catalog__level2-item-arrow') && !event.target.classList.contains('catalog__level2-item-text') && !event.target.classList.contains('catalog__level3') && !event.target.classList.contains('catalog__level3-items') && !event.target.classList.contains('catalog__level3-item') && !event.target.classList.contains('catalog__level3-item-text') && !event.target.classList.contains('catalog__banner') && !event.target.classList.contains('catalog__banner-container') && !event.target.classList.contains('banner-slider') && !event.target.classList.contains('banner-slider__arrow') && !event.target.classList.contains('banner-slider__dots') && !event.target.classList.contains('banner-slider__dots-dot') && !event.target.classList.contains('banner-slider__slider') && !event.target.classList.contains('banner-slider__slider-image')) {
        document.querySelector('.catalog__level3-items').style.display = 'none';
        document.querySelector('.catalog__banner-container_level2').style.visibility = 'hidden';
    }
})


/* form */
const formSwitch = document.querySelector('.form__input-switch');
const inputPassword = document.querySelector('.form__input_password')
formSwitch.addEventListener('click', () => {
    formSwitch.classList.toggle('form__input-switch__active');
    if(inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})
const modalWindow = document.querySelector('.modal-window');
const buttonOpenForm = document.querySelector('.btn-auhtorisation');
const buttonCloseForm = document.querySelector('.form__exit');
buttonOpenForm.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})
buttonCloseForm.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})
modalWindow.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal-window')) {
        modalWindow.style.display = 'none';
    }
})


/* to close all windows on the page */
window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        modalWindow.style.display = 'none';
        document.querySelector('.btn-catalog').classList.remove('btn-catalog_active');
        document.querySelector('.catalog').classList.remove('catalog_active');
        document.querySelector('.header').classList.remove('header_separator');
        document.querySelector('.catalog__banner-container_level1').style.visibility = 'hidden';
        document.querySelector('.catalog__banner-container_level2').style.visibility = 'hidden';
        document.querySelector('.bg-catalog').classList.remove('bg-catalog_active');
    }
})


/* select dropdown */
const dropdown = document.querySelector('.place__dropdown');
const dropdownList = document.querySelector('.place__dropdown-list');
const dropdownButton = document.querySelector('.place__arrow');
const dropdownItems = document.querySelectorAll('.place__dropdown-item');

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('place__dropdown-list_visible');
    dropdownButton.classList.toggle('place__arrow_active');
})

dropdownButton.addEventListener('click', () => {
    dropdownList.classList.toggle('place__dropdown-list_visible');
    dropdownButton.classList.toggle('place__arrow_active');
})

dropdownItems.forEach((listItem) => {
    listItem.addEventListener('click', (event) => {
        dropdown.firstChild.replaceWith(event.currentTarget.innerText);
    })
})


/* data for ymaps */
const addressChern = document.querySelector('.place__address_chern');
const addressBluch = document.querySelector('.place__address_bluch');

const places = {
    cityEKB: [56.815465986784005,60.62763609569618],
    shopBluchera: [56.86525956783924,60.66798349999997],
    shopChernyakhovskogo: [56.759720067960096,60.75236199999991],
    shopBlucheraZoomed: [56.86525956783924,60.66798349999997],
    shopChernyakhovskogoZoomed: [56.759720067960096,60.75236199999991],
}


/* ymaps init */
function init() {
    let map = new ymaps.Map('yandex-map', {
        center: places.cityEKB,
        zoom: 12,
        controls: []
    });

    let placemarkBluchera = new ymaps.Placemark(places.shopBluchera, {
        balloonContent: 
        `
        <div class="balloon">
            <h3 class="balloon__title">Магазин на Блюхера</h3>
            <p class="balloon__description">улица Блюхера, 99 <br> +7 (999) 012-34-56 (доб. 02) <br> Ежедневно с 10:00 до 21:00</p>
            <h4 class="balloon__subtitle">Построить маршрут</h4>
            <div class="balloon__buttons">
                <button class="balloon__buttons-button balloon__buttons-button_yandex">
                    <img class="balloon__buttons-img balloon__buttons-img_yandex" src="icons/yandex-navigator.svg" alt="yandex"> 
                </button>
                <button class="balloon__buttons-button balloon__buttons-button_google">
                    <img class="balloon__buttons-img balloon__buttons-img_google" src="icons/google-maps.svg" alt="google"> 
                </button>
            </div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'icons/placemark.svg',
        iconImageSize: [80, 86],
        iconImageOffset: [-40, -65],
    });

    let placemarkChernyakhovskogo = new ymaps.Placemark(places.shopChernyakhovskogo, {
        balloonContent: 
        `
        <div class="balloon">
            <h3 class="balloon__title">Магазин на Черняховского</h3>
            <p class="balloon__description">улица Черняховского, 99 <br> +7 (999) 012-34-56 <br> Ежедневно с 09:00 до 22:00</p>
            <h4 class="balloon__subtitle">Построить маршрут</h4>
            <div class="balloon__buttons">
                <button class="balloon__buttons-button balloon__buttons-button_yandex">
                    <img class="balloon__buttons-img balloon__buttons-img_yandex" src="icons/yandex-navigator.svg" alt="yandex"> 
                </button>
                <button class="balloon__buttons-button balloon__buttons-button_google">
                    <img class="balloon__buttons-img balloon__buttons-img_google" src="icons/google-maps.svg" alt="google"> 
                </button>
            </div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'icons/placemark.svg',
        iconImageSize: [80, 86],
        iconImageOffset: [-25, -50],
    });

    let zoomControl = new ymaps.control.ZoomControl ({
        options: {
            size: "small",
            position: {
                right: '2.4rem',
                bottom: '31.1rem',
            }
        }
    });

    let geolocationControl = new ymaps.control.GeolocationControl ({
        options: {
            position: {
                right: '1.2rem',
                bottom: '25.9rem',
            }
        }
    })

    map.controls.add(geolocationControl);
    map.controls.add(zoomControl);
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable('leftMouseButtonMagnifier');

    map.geoObjects.add(placemarkBluchera);
    map.geoObjects.add(placemarkChernyakhovskogo);

    addressBluch.addEventListener('click', () => {
        map.setCenter(places.shopBlucheraZoomed, 17, {
            checkZoomRange: true
        });
        setTimeout(() => placemarkBluchera.balloon.open(), 10);
    })

    addressChern.addEventListener('click', () => {
        map.setCenter(places.shopChernyakhovskogoZoomed, 17, {
            checkZoomRange: true
        });
        setTimeout(() => placemarkChernyakhovskogo.balloon.open(), 100);
    })

    placemarkBluchera.events.add('click', () => {
        map.setCenter(places.shopBlucheraZoomed, 17);
    })

    placemarkChernyakhovskogo.events.add('click', () => {
        map.setCenter(places.shopChernyakhovskogoZoomed, 17);
    })
}

ymaps.ready(init);




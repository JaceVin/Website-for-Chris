const promoCodeCaption = document.querySelector('#promo-code-caption');
const promoCode = document.querySelector('#promo-code');

const prevViewportWidth = window.innerWidth;

['DOMContentLoaded', 'resize'].forEach(eventType => {
    window.addEventListener(eventType, resizePromoCode)
})

promoCodeCaption.addEventListener('click', () => {
    navigator.clipboard.writeText(promoCode.innerText);

    temporaryMessageOn(promoCodeCaption, 'Copied!', 850);
});

function temporaryMessageOn(element, message, delay) {

    if (message == element.innerText) return;

    const originalText = element.innerText;
    element.innerText = message;
    setTimeout( () => {
        element.innerText = originalText;
    }, delay);
}

function resizePromoCode() {
    const gridWidth = promoCode.parentElement.scrollWidth;
    // const maxWidth = document.body.scrollWidth;
    
    // const minFontSize = 8;
    const maxFontSize = 48;
    const currentFontSize = getComputedStyle(promoCode).fontSize;
    
    let newFontSize = Number(currentFontSize.replace('px', ''));
    
    while (
        promoCode.scrollWidth < gridWidth &&
        newFontSize != maxFontSize
    ) promoCode.style.fontSize = (newFontSize += 2) + 'px';

    // resize code
}
// new ResizeObserver(resizePromoCode).observe(promoCode);


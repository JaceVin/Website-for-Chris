const promoCodeCaption = document.querySelector('#promo-code-caption');

promoCodeCaption.addEventListener('click', event => {
    const promoCode = document.querySelector('#promo-code');
    navigator.clipboard.writeText(promoCode.innerText);

    temporaryMessageOn(promoCodeCaption, 'Copied!', 850);
});

function temporaryMessageOn(element, message, delay) {
    const originalText = element.innerText;
    element.innerText = message;
    setTimeout( () => {
        element.innerText = originalText;
    }, delay);
}


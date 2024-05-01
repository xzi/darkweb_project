let titleBlurOptions = ['Get back here', 'We where not done!', 'Come back Daddy!'];
let docTitle = document.title;
let docFavicon = document.querySelector('link[rel="icon"]').href;


let blurFavicon = createFaviconFromEmoji('😭');

window.addEventListener('blur', () => {
    document.title = titleBlurOptions[Math.floor(Math.random() * titleBlurOptions.length)];
    document.querySelector('link[rel="icon"]').href = blurFavicon;
});

window.addEventListener('focus', () => {
    document.title = docTitle;
    document.querySelector('link[rel="icon"]').href = docFavicon;
});

function createFaviconFromEmoji(emoji) {
    let canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;
    let ctx = canvas.getContext('2d');
    ctx.font = '64px serif';
    ctx.fillText(emoji, 0, 64);
    return canvas.toDataURL();
}
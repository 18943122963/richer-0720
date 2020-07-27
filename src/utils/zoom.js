export const resize = () => {
    let windowH = window.innerHeight;
    let windowW = window.innerWidth;
    let scale = 1;
    let radio = windowW / windowH;
    if (radio > 9 / 16) {
        scale = windowH / 1920;
    } else {
        scale = windowW / 1080;
    }
    // console.log(scale);
    return scale;
};

const urlParams = new URLSearchParams(window.location.search);
const setName = (id) => {
    const name = urlParams.get(id);
    console.log(name);
    const nameHtml = document.getElementById(id);
    if (nameHtml && name) {
        nameHtml.innerText = name;
    }
};
setName('familyName');
setName('givenName');

const resize = () => {
    const rawWidth = document.querySelector('body')?.clientWidth;

    if (rawWidth) {
        const width = rawWidth - 32;
        const height = (width / 16) * 10; //WXGA

        const googleMap = document.getElementById('google-map');
        googleMap?.setAttribute('width', width.toString());
        googleMap?.setAttribute('height', height.toString());
    }
};

window.onresize = resize;
resize();

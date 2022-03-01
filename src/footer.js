let footer = (() => {
    let footer = document.createElement('div')
    footer.classList.add("footer");
    footer.innerText = "Copyright © 2021 bafox2"
    document.querySelector('body').appendChild(footer)
    document.querySelector('#content').appendChild(footer)
})();
export default footer;
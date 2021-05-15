let checkbox = document.querySelector('#btn')
let links = document.querySelectorAll('.links')

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        document.querySelector('nav').classList.add('active-menu')
    } else {
        document.querySelector('nav').classList.remove('active-menu')
    }
});


for(let link of links) {
    link.addEventListener('click', function () {
        document.querySelector('nav').classList.remove('active-menu')
        checkbox.checked= false
    })
}

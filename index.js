const toggle = document.getElementById('toggle-img');

const nav = document.getElementById('right-nav-div'); 

console.log(nav);

let x = 0;

toggle.addEventListener('click', () => {
    if (x === 0) {
        nav.style.display = 'block';
        // toggle.style.display = 'none';
        x = 1;
    } 
    else if (x === 1) {
        nav.style.display = 'none';
        toggle.style.display = 'block';
        x = 0;
    }
})

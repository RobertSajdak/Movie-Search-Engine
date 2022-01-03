const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();    
    
    li.forEach(el => {        
        if(el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'    
        } else {
            el.style.display = 'none'
        }
    })
}

search.addEventListener('keyup', searchEngine);



//============== RegExp version: ==============

// const input = document.querySelector('input');
// const liItems = document.querySelectorAll('li');

// const filterList = () => {
//     liItems.forEach(item => {
//         const match = new RegExp(input.value, 'i').test(item.textContent)
//         if(!match) {
//             item.style.display = 'none'
//         } else {
//             item.style.display = 'block'
//         }
//     })
// }

// input.addEventListener('keyup', filterList);
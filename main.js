const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const secondTabs = document.getElementById('twoTabs');
const secondContents = document.querySelectorAll('.contentTwo');


const changeClass = el => {
    console.log(el);
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if (contents[i].dataset.content === currTab) {
            contents[i].classList.add('active');
        }
    }
});

const changeClass2 = el => {
    console.log(el);
    for(let i = 0; i < secondTabs.children.length; i++) {
        secondTabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

secondTabs.addEventListener('click', e => {
    const currTab2 = e.target.dataset.tab;
    changeClass2(e.target);
    for (let i = 0; i < secondContents.length; i++) {
        secondContents[i].classList.remove('active');
        if (secondContents[i].dataset.two == currTab2) {
            secondContents[i].classList.add('active');
        }
    }
});
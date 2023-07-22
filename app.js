const exploreTabs = document.querySelectorAll('.tab-btn');
const exploreContent = document.querySelectorAll('.explore-cards');

exploreTabs.forEach((tab, index)=>{
    tab.addEventListener('click',  (e)=>{
        exploreTabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        let exploreLine = document.querySelector('.explore-line');
        exploreLine.style.width = e.target.offsetWidth + "px";
        exploreLine.style.left = e.target.offsetLeft + "px";

        exploreContent.forEach(content=>{content.classList.remove('active')});
        exploreContent[index].classList.add('active');
    })

})
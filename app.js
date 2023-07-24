const videos1 = document.getElementById('video1');
const videos2 = document.getElementById('video2');

videos1.addEventListener('ended', function(e) {
    videos1.style.display = 'none';
    videos2.style.display = 'block';

    videos2.play();
});

videos2.addEventListener('ended', function(e) {
    videos2.style.display = 'none';
    videos1.style.display = 'block';

    videos1.play();
});

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

const brandTabs = document.querySelectorAll('.tab-btn1');
const brandContent = document.querySelectorAll('.brand-cards');

brandTabs.forEach((tab, index)=>{
    tab.addEventListener('click',  (e)=>{
        brandTabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        let brandLine = document.querySelector('.brand-line');
        brandLine.style.width = e.target.offsetWidth + "px";
        brandLine.style.left = e.target.offsetLeft + "px";

        brandContent.forEach(content=>{content.classList.remove('active')});
        brandContent[index].classList.add('active');
    })

})
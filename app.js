let tabsBtn = document.querySelectorAll('.hero-form .tabContainer button');
let formDetails = document.querySelectorAll('.hero-form .form-details');

function showFormDetails(panelIndex,colorCode){
    tabsBtn.forEach(function(node) {
        node.style.backgroundColor = '';
        node.style.color = '';
    });
    tabsBtn[panelIndex].style.backgroundColor = colorCode;
    tabsBtn[panelIndex].style.color = 'black';

    formDetails.forEach(function(node) {
        node.style.display= 'none';
    });
    formDetails[panelIndex].style.display = 'block';
    formDetails[panelIndex].style.backgroundColor = colorCode;
}

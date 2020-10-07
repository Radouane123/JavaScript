function Somme(){
    
    var A = document.getElementById('A').Value;
    var B = document.getElementById('B').Value;
    if(A=='' || B==''){
    R.textContent='Veuiller saisir les deux nombres';
    return;
    }
     R.textContent=A+'+'+B+'='+(parseFloat(A)+parseFloat(B));
    }
    var R = document.getElementById('R');
    var button=document.getElementById('button');
    button.addEventListener('click',somme);
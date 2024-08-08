function toogleNav(){
    let data = document.querySelector('#navDiv .toogleButton').dataset;
    if(data.show=='false'){
        document.querySelectorAll('#navDiv a').forEach((elem , index , arr)=>{
            elem.style.display = 'block';
            if(index == arr.length-1){
                elem.style.display = 'flex';
            }
        }); 
        data.show=true;
    }

    else if(data.show=='true'){
        document.querySelectorAll('#navDiv a').forEach((elem , index , arr)=>{
            elem.style.display = 'none';
        }); 
        data.show=false;
    }  
}

window.onresize = function() {
console.log(window.innerWidth);
    if(window.innerWidth> '630'){
        document.querySelectorAll('#navDiv a').forEach((elem , index , arr)=>{
            elem.style.display = 'block';
            if(index == arr.length-1){
                elem.style.display = 'flex';
            }
        });
    }
};
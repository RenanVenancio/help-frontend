
document.getElementById('bt-right-menu').addEventListener('click', ()=>{
    let rightMenu = $( "#right-menu" );
    let list = $('#list');
    if(rightMenu.offset().left == 0){
            rightMenu.animate({ "left": "-325px" }, "fast" );

        //list.width(list.width() + 300);
    }else{
        rightMenu.animate({ "left": "0px" }, "fast" );
        //list.width(list.width() - 300);
       

    }

});

function removeState(id){
    document.getElementById(id).remove();
}

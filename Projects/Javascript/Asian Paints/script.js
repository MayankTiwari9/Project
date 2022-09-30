let flag = false;

let div_block;

let old_div_block;

let color_block;

$('#apply').click(function(){

    console.log('clicked')

    div_block = document.getElementById('wall_id').value;

    color_block = document.getElementById('wall_color').value;

    if(parseInt(div_block)>=1 && parseInt(div_block) <=9 && flag == false){

        old_div_block = div_block

        $(`#${old_div_block}`).css('background-color', `${color_block}`);

        $(`#${div_block}`).css('background-color', `${color_block}`);

        flag = true;

    }else if(parseInt(div_block)>=1 && parseInt(div_block)<=9 && flag == true){
        
        $(`#${old_div_block}`).css('background-color', `transparent`);

        $(`#${div_block}`).css('background-color', `${color_block}`);

        old_div_block = div_block

    }else{

        console.log('else');
    
    }

    $('#reset').click(()=>{

        for(let i=1;i<=9;i++){

            $(`#${i}`).css('background-color', 'transparent')
            
        }
    })
})
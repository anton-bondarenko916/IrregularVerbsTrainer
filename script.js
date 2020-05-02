let verbs_1_form = [
    'beat',
    'become',
    'begin',
    'bend',
    'bind'];

let verbs_2_form = [
    'beat',
    'became',
    'began',
    'bent',
    'bound'];

let verbs_3_form = [
    'beaten',
    'become',
    'begun',
    'bent',
    'bound']


function getRandomArbitary(min, max)
{
    return Math.random()*(max-min)+min;
}


jQuery('document').ready(function(){
    var n = 5;
    var i = 0;
    var control = 0;
    var word1 = verbs_1_form[i];
    var p = document.getElementsByClassName('easy-verb')[0];
    p.innerHTML = word1;

    jQuery('#btn-check-id').on('click',function(){
        var second_form, third_form;
        
        second_form = jQuery('#input-2-form-id').val();
        third_form = jQuery('#input-3-form-id').val();
        if (second_form == verbs_2_form[i] && third_form == verbs_3_form[i]){
            alert("Успех!");
            jQuery('#input-2-form-id').val('');
            jQuery('#input-3-form-id').val('');
            i++;
            word1 = verbs_1_form[i];
            p = document.getElementsByClassName('easy-verb')[0];
            p.innerHTML = word1;
            control = 0;
            if (i == n){
                jQuery('#btn-back-id').click();
            }
        } else if (second_form != verbs_2_form[i] || third_form != verbs_3_form[i]){
            control ++;
            alert('Ошибка! Поробуйте еще раз. \n Осталось попыток: ' + (3 - control) );
            
            if (control == 3){
                alert("Вы не справились с данным глаголом");
                control = 0;
                i++;
                word1 = verbs_1_form[i];
                p = document.getElementsByClassName('easy-verb')[0];
                p.innerHTML = word1;
                if (i == n){
                    jQuery('#btn-back-id').click();
                }
            } 
        }
    })
    

});
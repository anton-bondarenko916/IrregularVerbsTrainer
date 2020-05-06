let verbs_1_form = [
    'beat',
    'become',
    'begin',
    'bend',
    'bind',
    'break',
    'buy',
    'come',
    'cost',
    'cut',
    'do',
    'drink',
    'drive',
    'eat',
    'fall',
    'feed',
    'take',
    'say',
    'put',
    'tell',
    'Конец!'];

let verbs_2_form = [
    'beat',
    'became',
    'began',
    'bent',
    'bound',
    'broke',
    'bought',
    'came',
    'cost',
    'cut',
    'did',
    'drank',
    'drove',
    'ate',
    'fell',
    'fed',
    'took',
    'said',
    'put',
    'told'];

let verbs_3_form = [
    'beaten',
    'become',
    'begun',
    'bent',
    'bound',
    'broken',
    'bought',
    'come',
    'cost',
    'cut',
    'done',
    'drunk',
    'driven',
    'eaten',
    'fallen',
    'fed',
    'taken',
    'said',
    'put',
    'told']


jQuery('document').ready(function(){
    var right_answers = 0;
    var question_num = 0;
    var n = 20;
    var i = 0;
    var control = 0;
    var word1 = verbs_1_form[i];
    var p = document.getElementsByClassName('easy-verb')[0];
    p.innerHTML = word1;

    $('#btn-check-id').on('click',function(){
        var second_form, third_form;
        
        
        second_form = $('#input-2-form-id').val();
        second_form = $.trim(second_form);
        third_form = $('#input-3-form-id').val();
        third_form = $.trim(third_form);
        if (second_form == verbs_2_form[i] && third_form == verbs_3_form[i]){
            right_answers ++;
            question_num ++;
            swal("Good job!", " ", "success");
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
        } else if (second_form == "" || third_form=="")
        {
            swal("Attention!", "Вы не ввели глагол", "warning");
        } else if (second_form != verbs_2_form[i] || third_form != verbs_3_form[i])
        {
            control ++;
            swal("Wrong!", `Осталось попыток: ${3-control}`, "warning");
            
            if (control == 3){
                question_num ++;
                jQuery('#input-2-form-id').val('');
                jQuery('#input-3-form-id').val('');
                swal("Bad!","Вы не справились с данным глаголом", "error");
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

    jQuery('#btn-back-id').on('click',function(){
        var mark;
        mark = right_answers / question_num;
        mark = (mark*10)/2;
        mark = Math.round(mark);
        if (mark >= 4)
        {
            swal("Good!", `Ваша оценка: ${mark}`, "success");
            setTimeout(function(){document.location.href = "index.html";},2000);
        } else if (mark < 4 && mark == 3)
        {
            swal("Could be better", `Вашя оценка: ${mark}`, "warning");
            setTimeout(function(){document.location.href = "index.html";},2000);
        } else if (mark < 3)
        {
            swal("Very bad!", `Вашя оценка: ${mark}`, "error");
            setTimeout(function(){document.location.href = "index.html";},2000);
        } else document.location.href = "index.html";
    })
    

});
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



$('document').ready(function(){



    //functions
    function nextVerb(){
        i++;
        word1 = verbs_1_form[i];
        p = document.getElementsByClassName('easy-verb')[0];
        p.innerHTML = word1;
    }


    function zeroingOfInputs(){
        $('#input-2-form-id').val('');
        $('#input-3-form-id').val('');
    }


    function verbProcessing(form){
        form = $.trim(form);
        form = form.toLowerCase();
        return form;
    }


    function checkAnswer(second_form, third_form){
        if (second_form == verbs_2_form[i] && third_form == verbs_3_form[i]){
            right_answers ++;
            question_num ++;
            zeroingOfInputs();
            nextVerb();
            control = 0;
            if (i == n){
                $('#btn-back-id').click();
            }
            return 0;
        } else if (second_form == "" || third_form=="")
        {
            return 1 ;
        } else if (second_form != verbs_2_form[i] || third_form != verbs_3_form[i])
        {
            control ++;
            if (control == 3){
                question_num ++;
                zeroingOfInputs();
                control = 0;
                nextVerb();
                if (i == n){
                    $('#btn-back-id').click();
                }
                return 2;
            } 
            return 3;
        } 
    }

        var right_answers = 0;
        var question_num = 0;
        var n = 20;
        var i = 0;
        var l;
        var control = 0;
        var word1 = verbs_1_form[i];
        var p = document.getElementsByClassName('easy-verb')[0];
        p.innerHTML = word1;
    

    $('#btn-check-id').on('click',function(){
        var second_form, third_form;
        second_form = $('#input-2-form-id').val();
        second_form = verbProcessing(second_form);
        third_form = $('#input-3-form-id').val();
        third_form = verbProcessing(third_form);
        l = checkAnswer(second_form, third_form);
        switch(l){
            case 0:
                swal("Good job!", " ", "success");
                break;
            case 1:
                swal("Attention!", "Вы не ввели глагол", "warning");
                break;
            case 2:
                swal("Bad!","Вы не справились с данным глаголом", "error");
                break;
            case 3:
                swal("Wrong!", `Осталось попыток: ${3-control}`, "warning");
                break;
                
        }
        
    })

    $('#btn-back-id').on('click',function(){
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
    

})
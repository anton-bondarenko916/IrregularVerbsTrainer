
//hard lvl
let translte =[
    'писать',
    'забывать',
    'находить',
    'получать',
    'расти',
    'иметь',
    'знать',
    'покидать',
    'писать',
    'рассказывать',
    'брать',
    'плавать',
    'подметать',
    'стараться',
    'стоять',
    'приклеивать',
    'сиять',
    'трясти',
    'петь',
    'стрелять',
    'звонить',
    'Конец!'
]

let verbs_1_form_hard = [
    'write',
    'forget',
    'find',
    'get',
    'grow',
    'have',
    'know',
    'leave',
    'write',
    'tell',
    'take',
    'swim',
    'sweep',
    'strive',
    'stand',
    'stick',
    'shine',
    'shake',
    'sing',
    'shoot',
    'ring',






];

let verbs_2_form_hard = [
    'wrote',
    'forgot',
    'found',
    'got',
    'grew',
    'had',
    'knew',
    'left',
    'wrote',
    'told',
    'took',
    'swam',
    'swept',
    'strove',
    'stood',
    'stuck',
    'shone',
    'shook',
    'sang',
    'shot',
    'rang'



];

let verbs_3_form_hard = [
    'written',
    'forgotten',
    'found',
    'got',
    'grown',
    'had',
    'known',
    'left',
    'written',
    'told',
    'taken',
    'swum',
    'swept',
    'striven',
    'stood',
    'stuck',
    'shone',
    'shaken',
    'sung',
    'shot',
    'rung'];


  jQuery('document').ready(function(){
  

  //for all
    var right_answers = 0;
    var question_num = 0;
    var n = 5;
    var i = 0;
    var control = 0;

    //norm lvl
    var word2 = translte[i];
    var p2 = document.getElementsByClassName('hard-verb')[0];
    p2.innerHTML = word2;

    $('.btn-check-hard').on('click',function(){
        var first_form, second_form, third_form;
        
        
        first_form = $('.input-1-form-hard').val();
        first_form = $.trim(first_form);
        first_form = first_form.toLowerCase();
        second_form = $('.input-2-form-hard').val();
        second_form = $.trim(second_form);
        second_form = second_form.toLowerCase();
        third_form = $('.input-3-form-hard').val();
        third_form = $.trim(third_form);
        third_form  = third_form.toLowerCase();
        if (first_form == verbs_1_form_hard[i] && second_form == verbs_2_form_hard[i] && third_form == verbs_3_form_hard[i]){
            right_answers ++;
            question_num ++;
            swal("Good job!", " ", "success");
            $('.input-1-form-hard').val('');
            $('.input-2-form-hard').val('');
            $('.input-3-form-hard').val('');
            i++;
            word2 = translte[i];
            p2 = document.getElementsByClassName('hard-verb')[0];
            p2.innerHTML = word2;
            control = 0;
            if (i == n){
                $('.btn-back-hard').click();
            }
        } else if (first_form == "" || second_form =="" || third_form == "")
        {
            swal("Attention!", "Вы не ввели глагол", "warning");
        } else if (first_form != verbs_1_form_hard[i] || second_form != verbs_2_form_hard[i] || third_form != verbs_3_form_hard[i]) 
        {
            control ++;
            swal("Wrong!", `Осталось попыток: ${3-control}`, "warning");
            
            if (control == 3){
                question_num ++;
                $('.input-1-form-hard').val('');
                $('.input-2-form-hard').val('');
                $('.input-3-form-hard').val('');
                swal("Bad!","Вы не справились с данным глаголом", "error");
                control = 0;
                i++;
                word2 = translate[i];
                p2 = document.getElementsByClassName('hard-verb')[0];
                p2.innerHTML = word2;
                if (i == n){
                    $('.btn-back-hard').click();
                }
            } 
        } 
        
    })
    
    $('#btn-back-hard-id').on('click',function(){
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
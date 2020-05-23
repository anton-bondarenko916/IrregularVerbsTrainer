
//norm lvl
let verbs_1_form_normal = [
    'bite',
    'fly',
    'give',
    'hide',
    'lie',
    'bring',
    'choose',
    'cut',
    'draw',
    'upset',
    'mistake',
    'light',
    'meet',
    'build',
    'burn',
    'catch',
    'dream',
    'feel',
    'fight',
    'go',
    'let'
];

let verbs_2_form_normal = [
    'bit',
    'flew',
    'gave',
    'hid',
    'lay',
    'brought',
    'chose',
    'cut',
    'drew',
    'upset',
    'mistook',
    'lit',
    'met',
    'built',
    'burnt',
    'caught',
    'dreamt',
    'felt',
    'fought',
    'went',
    'let'
];

let verbs_3_form_normal = [
    'bitten',
    'flown',
    'given',
    'hidden',
    'lain',
    'brought',
    'chosen',
    'cut',
    'drown',
    'upset',
    'mistaken',
    'lit',
    'met',
    'built',
    'burnt',
    'caught',
    'dreamt',
    'felt',
    'fought',
    'gone',
    'let',
    'Конец!'
];


  jQuery('document').ready(function(){
  

  //for all
    var right_answers = 0;
    var question_num = 0;
    var n = 20;
    var i = 0;
    var control = 0;

    //norm lvl
    var word2 = verbs_3_form_normal[i];
    var p2 = document.getElementsByClassName('normal-verb')[0];
    p2.innerHTML = word2;

    $('.btn-check-normal').on('click',function(){
        var first_form, second_form;
        
        
        first_form = $('.input-1-form-normal').val();
        first_form = $.trim(first_form);
        first_form = first_form.toLowerCase();
        second_form = $('.input-2-form-normal').val();
        second_form = $.trim(second_form);
        second_form = second_form.toLowerCase();
        if (first_form == verbs_1_form_normal[i] && second_form == verbs_2_form_normal[i]){
            right_answers ++;
            question_num ++;
            swal("Good job!", " ", "success");
            $('.input-1-form-normal').val('');
            $('.input-2-form-normal').val('');
            i++;
            word2 = verbs_3_form_normal[i];
            p2 = document.getElementsByClassName('normal-verb')[0];
            p2.innerHTML = word2;
            control = 0;
            if (i == n){
                $('.btn-back-normal').click();
            }
        } else if (first_form == "" || second_form =="")
        {
            swal("Attention!", "Вы не ввели глагол", "warning");
        } else if (first_form != verbs_1_form_normal[i] || second_form != verbs_2_form_normal[i])
        {
            control ++;
            swal("Wrong!", `Осталось попыток: ${3-control}`, "warning");
            
            if (control == 3){
                question_num ++;
                $('.input-1-form-normal').val('');
                $('.input-2-form-normal').val('');
                swal("Bad!","Вы не справились с данным глаголом", "error");
                control = 0;
                i++;
                word2 = verbs_3_form_normal[i];
                p2 = document.getElementsByClassName('normal-verb')[0];
                p2.innerHTML = word2;
                if (i == n){
                    $('.btn-back-normal').click();
                }
            } 
        } 
        
    })
    
    $('#btn-back-normal-id').on('click',function(){
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
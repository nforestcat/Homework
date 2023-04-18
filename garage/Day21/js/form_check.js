function submit_chk(myForm){
    let reg1=/^[가-힣]{2,5}$/; //정규표현 식
    let reg2=/^(010|016|011)\d{3,4}\d{4}$/;//정규표현식
    //이름 입력하는 <input name="user_name">을 변수 name 에 참조 시킴
    let name = myForm.user_name;
    //마찬가지
    let tel = myForm.user_tel;
    let result1 = reg1.test(name.value);
    let result2 = reg2.test(tel.value);
    if(!result1){
        alert("이름 입력이 잘못되었습니다.");
        name.value="";
        name.focus();
        return false;
    } else if(!result2){
        alert("연락처 입력이 잘못되었습니다.");
        tel.value="";
        tel.focus();
        return false;
    }
}
function reset_chk(myForm){
    let result = confirm("정말로 회원가입을 취소하시겠습니까?")
    if(result){
        return false;
    }
}
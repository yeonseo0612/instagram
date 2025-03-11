// document 객체를 대상으로 이벤트 리스너 추가하기
// DOMContenteLoaded : 문서의 콘텐츠 로딩이 완료됐을 때 발생
document. addEventListener("DOMContentLoaded", function(e){
 
    let button = document.querySelector("input");
    //input 태그에 표준 이벤트 처리
    //"input" -> <input> 요소의 값이 변경될 때마다 발생
    button.addEventListener("input", function(e){
        console.log(e.target.value);
    
    })
    //<p> 태그에서 인라인  이벤트 모델로 호출할 함수를 정의
    function hi(){
        alert("hi");
    }
    let configId = document.querySelector("#id i");
    let idText = document.querySelector("#id span");

    //톱니바퀴 버튼을 눌렀을 때
    configId.addEventListener("click", (e) => {
        idText.textContent = prompt("새로운 아이디를 입력하세요");
    })


    //톱니바퀴 버튼을 누렀을 때

    //프로필 편집버튼
    let profileEditButton = document.querySelector("#profile_info button");
    //이름
    let userInfo = document.querySelector("#userInfo");
    //직업
    let summary = document.querySelector("#summary");
    //사이트
    let profileDetail = document.querySelector("#profileDetail");

    let changing = false;
    

    profileEditButton.addEventListener("click", (e) => {

        if(changing){
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail =  profileDetail.querySelector("input").value;

            userInfo.innerHTML = _userInfo
            summary.innerHTML = _summary

            if(_profileDetail.startsWith("http")){
                _profileDetail = "<a href='+_profileDetail+'>"+_profileDetail+"</a>";
            }
            
            profileDetail.innerHTML = _profileDetail;

            //버튼에 텍스트 수정
            e.target.textContent = "프로필 편집";
            changing = false;
        } else{
            let _userInfo = userInfo.textContent
            let _summary = summary.textContent
            let _profileDetail = profileDetail.textContent

            userInfo.innerHTML = "<input value="+_userInfo+">"
            summary.innerHTML = "<input value="+_summary+">"
            profileDetail.innerHTML = "<input value="+_profileDetail+">"

            e.target.textContent = "프로필 편집 완료";
            changing = true;
        }
    })


    //프로필 사진 바꾸기

    let profile_pic = document.querySelector("#profile_pic .circle_pic");


    profile_pic.addEventListener("mouseover", (e) => {
        e.target.style.filter ="grayscale(50%)"
    })
    profile_pic.addEventListener("mouseleave", (e) => {
        e.target.style.filter ="grayscale(0%)"
    })
    profile_pic.addEventListener("click", (e) => {
        profile_pic.setAttribute("src", prompt("이미지 url을 입력해주세요"))
    })



})


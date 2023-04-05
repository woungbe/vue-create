

(function(){

    
    freeLoadingPath();


})();


function freeLoadingPath(){
    
    console.log("window.location.pathname : ", window.location.pathname);
    LoadHtml('./html/otherhtml.html', 'loading')

    if(window.location.pathname === "/"){
        LoadHtml('./html/otherhtml.html', 'loading');
    }else if(window.location.pathname === "/about"){
        LoadHtml('./html/about.html', 'loading');
    }




}

//'otherhtml.html', 'loading'
function LoadHtml(src, ID){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src, true); 
    xhr.onreadystatechange = function(){

        if (xhr.readyState === 4 && xhr.status === 200) {
            // 4. HTML 코드 추출
            var htmlCode = xhr.responseText;
        
            // 5. HTML 코드를 DOM에 삽입
            var loading = document.getElementById(ID);
            loading.innerHTML = htmlCode;
        }
    }
    xhr.send();
}

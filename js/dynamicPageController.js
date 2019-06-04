function getHtmlDocName() {
    let str = window.location.href;
    str = str.substring(str.lastIndexOf("/") + 1);
    str = str.substring(0, str.lastIndexOf("."));
    return str;
}

function initSideBar() {
    let id = getHtmlDocName();
    let sideBarContent = document.getElementById("sideBarContent");
    sideBarContent.innerHTML += "<li><a id='index' href='../index.html'> 首页</a></li>";
    sideBarContent.innerHTML += "<li><a id='' href='https://github.com/qguangyao' target='_blank'>我的github</a></li>";
    sideBarContent.innerHTML += "<li><a id='favoriteWebsite' href='../pages/favoriteWebsite.html' >我的常用网站</a></li>";
    sideBarContent.innerHTML += "<li><a id='myResume' href='../pages/myResume.html'>我的简历</a></li>";
    document.getElementById(id).className = "active"
}
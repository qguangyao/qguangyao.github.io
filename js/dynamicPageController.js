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

function initCube() {
    document.getElementById("cubeContent").innerHTML="<div class='wrap'>\n" +
        "        <div class='cube'>\n" +
        "            <div class='out_front'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube01.bmp' class='pic'></div>\n" +
        "            <div class='out_back'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube02.bmp' class='pic'></div>\n" +
        "            <div class='out_left'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube03.bmp' class='pic'></div>\n" +
        "            <div class='out_right'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube04.bmp' class='pic'></div>\n" +
        "            <div class='out_top'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube05.bmp' class='pic'></div>\n" +
        "            <div class='out_bottom'><img src='https://files-cdn.cnblogs.com/files/cjsblog/cube06.bmp' class='pic'>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>"
}
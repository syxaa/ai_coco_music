<%@ page language="java" contentType="text/html; charset=UTF-8"
        pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<%=path %>/css/index.css">
    <link rel="stylesheet" href="<%=path %>/css/other.css">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_758041_cf4may8xj9.css"> <!-- 引入阿里图标库css -->
    <link rel="stylesheet" href="<%=path %>/css/Cooldog.css">
    <link rel="stylesheet" href="<%=path %>/css/media.css">
    <title>网易云音乐</title>
    <link rel="icon" type="image/x-icon" href="../../images/format.ico"/>
    <script src="<%=path %>/js/jquery-1.11.3.min.js"></script>
    <script src="<%=path %>/js/jquery.actual.min.js"></script>
</head>
<body>
<main>
    <!-- 左侧导航部分 -->
    <nav class="nav">
        <div class="nav-icon">
            <ul>
                <li data-index="0">
                    <i class="iconfont icon-liebiao1"></i>
                </li>
                <li data-index="1" type="search">
                    <i class="iconfont icon-sousuo"></i>
                    <span>搜索</span>
                </li>
                <li data-index="2" class="active" type="find">
                    <i class="iconfont icon-yinle4"></i>
                    <span>发现音乐</span>
                </li>
                <li data-index="3">
                    <i class="iconfont icon-bofang2"></i>
                    <span>MV</span>
                </li>
                <li data-index="4">
                    <i class="iconfont icon-dongtai"></i>
                    <span>动态</span>
                </li>

                <li data-index="5">
                    <i class="iconfont icon-xiangyou"></i>
                </li>
                <div class="local">
                    <div>我的音乐</div>
                    <li data-index="6">
                        <i class="iconfont icon-xiazai"></i>
                        <span>下载管理</span>
                    </li>
                    <li data-index="7">
                        <i class="iconfont icon-zuijin1"></i>
                        <span>最近播放</span>
                    </li>
                    <div>创建的歌单</div>
                    <li data-index="8" type="like">
                        <i class="iconfont icon-xihuan"></i>
                        <span>我喜欢的音乐</span>
                    </li>
                </div>
                <li data-index="9">
                    <i class="iconfont icon-play"></i>
                    <a href="../../docs/index.html">播放器</a>
                    <!-- <li><a href="docs/index.html">播放器</a></li> -->
                    <!-- <span><a href="docs/index.html"></a>播放</span> -->
                </li>
            </ul>
            <div class="user">
                <div class="login">
						<span>
							<img src="../../images/user.png" width="20">
							<span>未登录</span>
						</span>
                    <span>
							<span>注册</span>
						</span>
                    <span>
							<i class="iconfont icon-tubiaolunkuohua-"></i>
						</span>
                    <span>
							<i class="iconfont icon-shezhi"></i>
						</span>
                </div>
            </div>
        </div>
    </nav>


    <!-- 内容部分 -->
    <section>
    </section>

    <div class="loading">
        <div>
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    <div class="ajaxload">
        <div>
            <div class="lds-spinner" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <!-- audio标签部分 -->
    <audio style="display: none" id="audio" src=""></audio>

</main>

<script>
    $('.load').animate({width:'40%'},100);
</script>

<!--网页加载进度-->
<div class="load"></div>

<!--登录框-->
<div class="login-pop">
        <span class="close">
                <i class="iconfont icon-x"></i>
        </span>
    <div class="fill">
            <span class="prompt">
                <i class="iconfont icon-caution"></i>
                <span>密码错误</span>
            </span>
        <div class="user">
                <span>
                    <i class="iconfont icon-shouji"></i>
                </span>
            <span>
                    <input type="text" name="username" placeholder="请输入user_id">
                </span>
        </div>
        <div class="pass">
                <span>
                    <i class="iconfont icon-mima"></i>
                </span>
            <span>
                    <input type="password" name="pass" placeholder="请输入password">
                </span>
        </div>
    </div>

    <div class="user-img">
        <img src="../../images/def.jpg">
        <span>马大晨</span>
        <button type="button">签到</button>
    </div>
    <!--        disabled-->
    <button type="submit" >登录</button>
</div>
<!--注册框-->
<div class="register-pop">
	    <span class="close">
	            <i class="iconfont icon-x"></i>
	    </span>
    <div class="fill">
        <!-- <span class="prompt">
            <i class="iconfont icon-caution"></i>
            <span>密码错误</span>
        </span> -->
        <div class="user">
	            <span>
	                <i class="iconfont icon-shouji"></i>
	            </span>
            <span>
	                <input type="text" placeholder="请输入手机号">
	            </span>
        </div>
        <div class="pass">
	            <span>
	                <i class="iconfont icon-mima"></i>
	            </span>
            <span>
	                <input type="password" placeholder="请输入密码">
	            </span>
        </div>
    </div>
    <button type="submit" disabled>注册</button>
</div>

<!-- 歌曲弹窗 -->
<div class="music-pop">
    <div class="bg"></div>
    <div class="lyr">
        <div class="left">
            <img class="disc-o" src="../../images/disc-o.png">
            <img class="needle" src="../../images/needle.png">
            <img class="disc" src="../../images/disc.png">
            <p>
                <span>喜欢</span>
                <span>下载</span>
                <span>分享</span>
                <span>收藏</span>
            </p>
        </div>
        <div class="right">
            <p>
                <!--<span>讲真的</span>-->
                <!--<span>-->
                <!--专辑：<span>热门华语</span>-->
                <!--&nbsp;&nbsp;&nbsp;&nbsp;-->
                <!--歌手：<span>曾惜</span>-->
                <!--</span>-->
                <span></span>
                <span>
                            专辑：<span></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            歌手：<span></span>
                        </span>
                <span>
                            <i class="iconfont icon-youshang"></i>
                            <i class="iconfont icon-zuoxia"></i>
                        </span>
            </p>
            <div class="Lyrics">
                <ul>
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                    <!--<li>1111111</li>-->
                </ul>
            </div>
        </div>
    </div>
</div>


<script>
    $('.load').animate({width:'60%'},100);
</script>


<!-- 列表弹窗 -->
<div class="list-pop">
    <div class="title">
        <span>播放列表</span>
        <span><i class="iconfont icon-laji"></i> 清空</span>
        <span><i class="iconfont icon-x"></i></span>
    </div>
    <div class="list">
        <ul>
            <!-- <li data-index="0">
                <span>That Girl</span>
                <span>Olly Murs</span>
            </li>
            <li data-index="1">
                <span>学猫叫</span>
                <span>小潘潘 小峰峰</span>
            </li>
            <li data-index="2">
                <span>讲真的</span>
                <span>曾惜</span>
            </li> -->
        </ul>
    </div>
</div>

<!-- 音量弹窗 -->
<div class="sound-pop">  <!--音量弹窗-->
    <span><i class="iconfont icon-yinliang"></i></span>
    <div class="sound-bar">
        <span class="sound-schedule"></span>
        <span class="sound-control"><span></span></span>
    </div>
    <div class="triangle">
    </div>
</div>


<script>
    $('.load').animate({width:'80%'},100);
</script>


<!-- 尾部，播放部分 -->
<footer class="footer">
    <!-- 专辑封面 -->
    <div class="headimg">
        <img src="../../images/def.jpg" width="60" height="60" />
        <div>
            <span><i class="iconfont icon-zuoxia01"></i></span>
            <span><i class="iconfont icon-youshang01"></i></span>
        </div>
    </div>
    <!-- 模块左部分：上一首,播放，暂停，下一首 -->
    <div class="play">
        <div class="play-icon">
            <span><i class="iconfont icon-houtui"></i></span>
            <span><i class="iconfont icon-bofang1"></i></span>
            <span><i class="iconfont icon-qianjin"></i></span>
        </div>
    </div>
    <!-- 进度条部分 -->
    <div class="progress">
        <span class="musicName"></span>
        <span class="author"> - </span>
        <span class="musicTime">
                <span>00:00</span>
                <span> / 00:00</span>
            </span>
        <div class="progress-bar">
            <span class="bar"></span>
            <span class="control"><span></span></span>
        </div>
    </div>
    <!-- 音量部分 -->
    <div class="sound">
        <span><i class="iconfont icon-heart2"></i></span>
        <span><i class="iconfont icon-shunxu"></i></span>
        <span><i class="iconfont icon-yinliang"></i></span>
        <span><i class="iconfont icon-liebiao"></i><span>3</span></span>
    </div>
    <!-- <div class="player">
        <button>播放器</button>
        <a href="docs/login.html">播放器</a>
    </div> -->
</footer>



<!--操作成功提示框-->
<!--<div class="tips">-->
<!--<i class="iconfont icon-jifen"></i>-->
<!--<span>积分+2</span>-->
<!--</div>-->


<script src="<%=path %>/js/function.js"></script>
<script src="<%=path %>/js/play.js"></script>
<!--    <script src="/js/main.js"></script>-->
<script src="<%=path %>/js/Cooldog.js"></script>
<script>
    $('.load').animate({width:'100%'},100,function () {
        $(this).remove();
    });
</script>
<!--<script src="//vjs.zencdn.net/5.19/video.min.js"></script>-->
</body>
</html>
<script>
    // 监听浏览器关闭
    window.onbeforeunload = function() {
        if (lists){
            var music={
                musicid:lists[musicIndex].id,
                musici:musicIndex,
                musiclists:lists,
                currenttime:audio.currentTime,
                playmode:$('.sound>span:nth-child(2) i').attr('class'),
            };
            localStorage.setItem('music',JSON.stringify(music));
        }
    };

    var music=JSON.parse(localStorage.getItem('music'));
    if (music) {
        lists=music.musiclists;
        musicIndex=music.musici;
        var str='';
        if(!lists[0].al){
            for (let i=0;i<lists.length;i++){
                str+='<li data-index='+i+'>' +
                    '<span>'+lists[i].name+'</span>\n' +
                    '<span>'+lists[i].artists[0].name+'</span>\n' +
                    '</li>'
            }
        } else {
            for (let i=0;i<lists.length;i++){
                str+='<li data-index='+i+'>' +
                    '<span>'+lists[i].name+'</span>\n' +
                    '<span>'+lists[i].ar[0].name+'</span>\n' +
                    '</li>'
            }
        }
        $('.list-pop .list>ul').html(str);
        $('.list-pop .list>ul li:eq('+musicIndex+') span').css('color','rgb(198, 46, 46)');
        $('.sound span:nth-child(4) span').text(lists.length);
        musicInit();
        audio.currentTime=music.currenttime;
        $('.sound>span:nth-child(2) i').attr('class',music.playmode);
        music=null;
    }





    //音量弹窗隐藏和显示
    $('.sound>span:eq(2)').click(function(){
        $('.sound-pop').fadeToggle(200);
    });

    //点击歌曲图片，弹出歌词页面
    $('.headimg').click(function(){
        $('.music-pop').stop().fadeToggle(200);
        if($('.headimg>div>span:eq(0) i').attr('class')=='iconfont icon-zuoxia01'){
            $('.headimg>div>span:eq(0) i').attr('class','iconfont icon-youshang01');
            $('.headimg>div>span:eq(1) i').attr('class','iconfont icon-zuoxia01');
        }else{
            $('.headimg>div>span:eq(0) i').attr('class','iconfont icon-zuoxia01');
            $('.headimg>div>span:eq(1) i').attr('class','iconfont icon-youshang01');
        }
    });

    //点击按钮，关闭歌词页面
    $('.music-pop .lyr>.right>p>span:nth-child(3)').click(function(){
        $('.music-pop').stop().fadeToggle(200);
        $('.headimg>div>span:eq(0) i').attr('class','iconfont icon-zuoxia01');
        $('.headimg>div>span:eq(1) i').attr('class','iconfont icon-youshang01');
    });

    //鼠标移入歌曲图片，显示箭头,移除隐藏
    $('.headimg').mouseover(function(){
        if (browserRedirect()=='pc'){
            $('.headimg>div').show();
        }
    });
    $('.headimg').mouseout(function(){
        if (browserRedirect()=='pc') {
            $('.headimg>div').hide();
        }
    });

    //为每个nav下的li绑定点击事件
    $('.loading').show();
    $.ajax({
        url:'find.html',
        type:'get',
        success:function (res) {
            $('section').html(res);
            getBanner();
            getDayDate();
        }
    });
    // window.history.pushState({index:2}, null, 'findMusic.html');

    $('.nav-icon li').click(function(){
        if($(this).attr('data-index')!=0&&$(this).attr('data-index')!=5){
            $('.nav-icon li').removeClass("active");
            $(this).addClass("active");
            var type=$(this).attr('type');
            if ($(this).attr('data-index')==1) {
                $('.loading').show();
                $.ajax({
                    url:'search.html',
                    type:'get',
                    success:function (res) {
                        history.replaceState({text:$('section').html()}, '');
                        $('section').html(res);
                        getSearch();
                        scrollBottomTest();
                        hist(type);
                    }
                });
            }else if ($(this).attr('data-index')==2){
                $('.loading').show();
                $.ajax({
                    url:'find.html',
                    type:'get',
                    success:function (res) {
                        history.replaceState({text:$('section').html()}, '');
                        $('section').html(res);
                        getBanner();
                        getDayDate();
                        hist(type);
                    }
                });
            }else if ($(this).attr('data-index')==8){
                var type=$(this).attr('type');
                $('.loading').show();
                $.ajax({
                    url:'cd.html',
                    type:'get',
                    success:function (html) {
                        var id=$('.nav-icon .local li:nth-child(5)').attr('data-id');
                        if (id){
                            history.replaceState({text:$('section').html()}, '');
                            $('section').html(html);
                            $.ajax({
                                url:'/playlist/detail?id='+id,
                                type:'get',
                                success:function (data) {
                                    haveLists=data.playlist.tracks;
                                    $('.author-cd .top>p').text('歌单');
                                    $('.author-cd .top>div img').attr('src',data.playlist.coverImgUrl);
                                    $('.author-cd .top>div p:nth-child(2)').text('我喜欢的音乐');
                                    $('.author-cd .top>div p:nth-child(3)').text(fmtDate(data.playlist.createTime)+' 创建');
                                    $('.author-cd .top>div p:nth-child(4)').text('');
                                    var str='';
                                    for (let i=0;i<data.playlist.tracks.length;i++){
                                        str+='<li>' +
                                            '<span>'+num(i+1)+'</span>' +
                                            '<span>'+data.playlist.tracks[i].name+'</span>' +
                                            '<span>'+data.playlist.tracks[i].ar[0].name+'</span>' +
                                            '<span>热度：'+data.playlist.tracks[i].pop+'</span>' +
                                            '</li>'
                                    }
                                    $('.author-cd .bottom>ul').html(str);
                                    $('.loading').fadeOut();
                                    hist(type);
                                }
                            });
                        }else {
                            alert('请先登录');
                        }
                    }
                });
            }else if ($(this).attr('data-index')==3){
                $('.loading').show();
                $.ajax({
                    url:'mvSecond.html',
                    type:'get',
                    success:function (html) {
                        history.replaceState({text:$('section').html()}, '');
                        $('section').html(html);
                        mvOffset=0;
                        getmvsecond('top/mv?limit=20').then(function (data) {
                            $('.mv-second .paihangbang').html(data);
                            $('.loading').fadeOut();
                            hist('mvSecond');
                        });
                        mvSecondScrollBottomTest();
                    }
                });
            }

        }else{
            if($(this).width()!=50){
                $('section').stop().animate({'margin-left':'51px'},100);
                $('.loading').stop().animate({'left':'51px'},100);
                $('.ajaxload').stop().animate({'left':'51px'},100);
                $('.nav-icon li span').hide();
                $('.nav-icon li:eq(5)').css('visibility','visible');
                $('.nav-icon .local').hide();
                $('.login>span>span').hide();
                $('.nav-icon').stop().animate({'width':'50px'},100);
            }else{
                if(browserRedirect()!='phone'){
                    $('section').stop().animate({'margin-left':'201px'},300);
                }

                $('.loading').stop().animate({'left':'201px'},300);
                $('.ajaxload').stop().animate({'left':'201px'},300);
                $('.nav-icon').stop().animate({'width':'200px'},300,function(){
                    $('.nav-icon li span').show();
                    $('.nav-icon li:eq(5)').css('visibility','hidden');
                    $('.nav-icon .local').show();
                    $('.login>span>span').show();
                });
            }
        }
    });

    //按下空格。暂停歌曲
    $(document).keydown(function (e) {
        if (e.which == "32"&&!$('section .search .input input').is(':focus')) {
            if(audio.paused){
                audio.play();
            }else {
                audio.pause();
            }

        }
    });

    //搜索歌曲
    $('section').on('click','.search .input span',function () {
        var text=$('.search .input input').val();
        musicText=text;
        search(text);
    });
    $('section').keydown('.search .input span',function (e) {
        if (e.which == "13") {
            var text=$('.search .input input').val();
            musicText=text;
            search(text);
        }
    });
    //热门搜索
    $('section').on('click','.search .main .left span',function () {
        var text=$(this).text();
        musicText=text;
        $('.search .input input').attr('value',musicText);
        search(text);
        $('.search .input input').attr('value',musicText);
    });
    //搜索历史
    $('section').on('click','.search .main .right li span:nth-child(1)',function () {
        var text=$(this).text();
        musicText=text;
        $('.search .input input').attr('value',musicText);
        search(text);
        $('.search .input input').attr('value',musicText);
    });
    //删除搜索历史
    $('section').on('click','.search .main p i',function () {
        $('.search .main .right ul').animate({'marginLeft':'110%'},200,function () {
            $('.search .main .right ul li').remove();
            localStorage.removeItem('songs');
        });
    });

    $('section').on('click','.search .main .right li i',function () {
        var li=$(this).parent();
        li.animate({'marginLeft':'110%'},200,function () {
            li.remove();
            var text=li.children(':first').text();
            var songs=JSON.parse(localStorage.getItem('songs'));
            var i=songs.indexOf(text);
            songs.splice(i, 1);
            localStorage.setItem('songs',JSON.stringify(songs));
        });
    });

    //搜索歌曲列表点击
    $('section').on('click','.search .searchBody .song li',function () {
        musicIndex=$(this).attr('data-index');
        lists=haveLists;
        musicInit();
        audio.play();
    });

    //切换搜索类型
    $('section').on('click','.search .searchBody>ul li',function () {
        $(this).addClass('active').siblings().removeClass('active');
        var dataIndex=$(this).attr('data-index');
        $('.search .searchBody>div').hide();
        $('.search .searchBody>div:eq('+dataIndex+')').show();
        if (dataIndex==0){
            getSong(musicText);
        } else if (dataIndex==1) {
            getAuthor(musicText);
        }else if (dataIndex==2) {
            getCd(musicText);
        }else if (dataIndex==3) {
            getMv(musicText);
        }
    });

    //歌手页面点击
    $('section').on('click','.search .searchBody .author>ul li',function () {
        var $this=$(this);
        authorMvOffset=0;
        $('.loading').show();
        $.ajax({
            url:'author.html',
            type:'get',
            success:function (res) {
                history.replaceState({text:$('section').html()}, '');
                $('section').html(res);
                getAuthordetails($this.attr('data-authorId'));
                authorScrollBottomTest();
            }
        });
    });


    //歌手页面播放单曲
    $('section').on('click','.search-author .authorHost>ul li',function () {
        lists=haveLists;
        musicIndex=$(this).index();
        var str='';
        for (let i=0;i<lists.length;i++){
            str+='<li data-index='+i+'>' +
                '<span>'+lists[i].name+'</span>\n' +
                '<span>'+lists[i].ar[0].name+'</span>\n' +
                '</li>'
        }
        $('.list-pop .list>ul').html(str);
        $('.sound span:nth-child(4) span').text(lists.length);
        musicInit();
        audio.play();
    });

    //歌手页面切换
    $('section').on('click','.search-author .top>ul li',function () {
        var i=$(this).attr('data-index');
        $(this).attr('class','active').siblings().attr('class','');
        $('.search-author .main>div:eq('+i+')').show().siblings().hide();
        if (i==1){
            getAuthorCd();
        }else if (i==2){
            getAuthorMv();
        }else if (i==3){
            getAuthorDeta();
        }
    });




    // 点击mv播放mv
    $('section').on('click','.searchBody .mv>div',function () {
        var id=$(this).attr('data-id');
        getMvUrl(id);
    });
    $('section').on('click','.search-author .authorMv>div',function () {
        var id=$(this).attr('data-id');
        getMvUrl(id);
    });
    $('section').on('click','.find .main .recommend .recommend-mv>div',function () {
        var id=$(this).attr('data-id');
        getMvUrl(id);
    });

    //点击专辑进入专辑页面
    $('section').on('click','.searchBody .cd>ul li',function () {
        var id=$(this).attr('data-id');
        getCdDeta(id);
    });
    $('section').on('click','.search-author .authorCd>div',function () {
        var id=$(this).attr('data-id');
        getCdDeta(id);
    });

    //点击专辑列表，播放歌曲
    $('section').on('click','.author-cd .bottom>ul li',function () {
        musicIndex=$(this).index();
        lists=haveLists;
        var str='';
        for (let i=0;i<lists.length;i++){
            str+='<li data-index='+i+'>' +
                '<span>'+lists[i].name+'</span>\n' +
                '<span>'+lists[i].ar[0].name+'</span>\n' +
                '</li>'
        }
        $('.list-pop .list>ul').html(str);
        $('.sound span:nth-child(4) span').text(lists.length);
        musicInit();
        audio.play();
    });

    //登录input输入事件
    // $('.login-pop>div input').on('input',function () {
    //     var userName=$('.login-pop .user input').val();
    //     var password=$('.login-pop .pass input').val();
    //     if (userName!=''&&password!=''){
    //         $('.login-pop button').attr('class','selected');
    //         $('.login-pop button').removeAttr('disabled');
    //     }else {
    //         $('.login-pop button').attr('class','').attr('disabled','');
    //     }
    // });

    //注册input输入事件
    // $('.register-pop>div input').on('input',function () {
    //     var userName=$('.register-pop .user input').val();
    //     var password=$('.register-pop .pass input').val();
    //     if (userName!=''&&password!=''){
    //         $('.register-pop button').attr('class','selected');
    //         $('.register-pop button').removeAttr('disabled');
    //     }else {
    //         $('.register-pop button').attr('class','').attr('disabled','');
    //     }
    // });

    //点击未登录，弹出登录框
    $('.nav .user .login>span:nth-child(1)').click(function () {
        $('.login-pop').stop().slideToggle();
    });
    //关闭登录框
    $('.login-pop .close').click(function () {
        $('.login-pop').slideUp();
    });
    //点击注册，弹出注册框
    $('.nav .user .login>span:nth-child(2)').click(function () {
        $('.register-pop').stop().slideToggle();
    });
    //关闭注册框
    $('.register-pop .close').click(function () {
        $('.register-pop').slideUp();
    });
    //点击注册按钮
    $('.register-pop>button').click(function () {
        if ($(this).text()=='注册'){
            var userName=$('.register-pop .user input').val();
            var password=$('.register-pop .pass input').val();
            $.ajax({
                url:'/login/cellphone?phone='+userName+'&password='+password,
                xhrFields: {
                    withCredentials: true
                },
                type:'get',
                success:function (res) {
                    if (res.code==200){ //登陆成功
                        // $('.nav .login>span:nth-child(1) img').attr('src',res.profile.avatarUrl);
                        // $('.nav .login>span:nth-child(2) span').text(res.profile.nickname);
                        // $('.register-pop .user-img img').attr('src',res.profile.avatarUrl);
                        $('.register-pop').slideUp();
                        $('.register-pop .fill').hide();
                        $('.register-pop .user-img').show();
                        $('.register-pop>button').text('切换账号');
                        $('.register-pop>button').removeAttr('disabled');
                        $('.register-pop>button').attr('class','selected');
                        $('.register-pop .user input').val('');
                        $('.register-pop .pass input').val('');
                    }else if (res.code==400) {
                        $('.register-pop .prompt>span').text('账号不存在');
                        $('.register-pop .prompt').show();
                    }else {
                        $('.register-pop .prompt>span').text(res.msg);
                        $('.register-pop .prompt').show();
                    }
                }
            });
        }else {
            // $('.nav .login>span:nth-child(1) img').attr('src','./images/def.jpg');
            $('.nav .login>span:nth-child(2) span').text('注册');
            $('.register-pop .fill').show();
            // $('.register-pop .user-img').hide();
            $('.register-pop>button').text('注册');
            $('.register-pop>button').attr('disabled','');
        }
    });

    //点击登录按钮
    // $('.login-pop>button').click(function () {
    //     if ($(this).text()=='登录'){
    //         var userName=$('.login-pop .user input').val();
    //         var password=$('.login-pop .pass input').val();
    //         $.ajax({
    //             url:'/login/cellphone?phone='+userName+'&password='+password,
    //             xhrFields: {
    //                 withCredentials: true
    //             },
    //             type:'get',
    //             success:function (res) {
    //                 if (res.code==200){ //登陆成功
    //                     $('.nav .login>span:nth-child(1) img').attr('src',res.profile.avatarUrl);
    //                     $('.nav .login>span:nth-child(1) span').text(res.profile.nickname);
    //                     $('.login-pop .user-img img').attr('src',res.profile.avatarUrl);
    //                     $('.login-pop').slideUp();
    //                     $('.login-pop .fill').hide();
    //                     $('.login-pop .user-img').show();
    //                     $('.login-pop>button').text('切换账号');
    //                     $('.login-pop>button').removeAttr('disabled');
    //                     $('.login-pop>button').attr('class','selected');
    //                     $('.login-pop .user input').val('');
    //                     $('.login-pop .pass input').val('');
    //                 }else if (res.code==400) {
    //                     $('.login-pop .prompt>span').text('账号不存在');
    //                     $('.login-pop .prompt').show();
    //                 }else {
    //                     $('.login-pop .prompt>span').text(res.msg);
    //                     $('.login-pop .prompt').show();
    //                 }
    //             }
    //         });
    //     }else {
    //         $('.nav .login>span:nth-child(1) img').attr('src','./images/def.jpg');
    //         $('.nav .login>span:nth-child(1) span').text('未登录');
    //         $('.login-pop .fill').show();
    //         $('.login-pop .user-img').hide();
    //         $('.login-pop>button').text('登录');
    //         $('.login-pop>button').attr('disabled','');
    //     }
    // });
    //点击登录按钮（修改版）
    $('.login-pop>button').click(function () {
        if ($(this).text()=='登录'){
            var $userName=$('.login-pop .user input').val();
            var $password=$('.login-pop .pass input').val();
            if($userName=='' ){
                alert("用户名不能为空");
                return false;
            }
            else if($password==''){
                alert("密码不能为空");
                return false;
            }else{
                var datas={
                    username:$userName,
                    pass:$password
                };
                // var datas = $(".login-pop .fill").serialize();
                $.ajax({
                    url:'LoginServlet?method=loginAct',
                    type:'post',
                    dataType:'json',
                    data:datas,
                    success:function(data){
                        // console.log("mjakhskjbjaskb")
                        if("error" == data.type){
                            alert(data.msg);
                            // $("#vcodeImg").click();//切换验证码
                            // $("input[name='vcode']").val("");//清空验证码输入框
                        }else if("success" == data.type){
                            alert(data.msg);
                            // window.location.href = "SystemServlet?method=index";
                            // window.location.href = "www.baidu.com";
                        }

                        else{
                            alert(data.msg);
                        }
                    },

                    error:function(data){
                        // console.log(data.type)
                    	alert('false');
                    }
                });
            }
        }else {
            $('.nav .login>span:nth-child(1) img').attr('src','./images/def.jpg');
            $('.nav .login>span:nth-child(1) span').text('未登录');
            $('.login-pop .fill').show();
            $('.login-pop .user-img').hide();
            $('.login-pop>button').text('登录');
            $('.login-pop>button').attr('disabled','');
        }
    });


    //签到
    $('.login-pop .user-img button').click(function () {
        $.ajax({
            url:'/daily_signin',
            type:'get',
            success:function (res) {
                if(res.code==200){
                    $('body').prepend('<div class="tips">' +
                        '<i class="iconfont icon-jifen"></i>' +
                        '<span>积分+'+res.point+'</span>' +
                        '</div>');
                    $('.tips').animate({'opacity':'1'});
                    $('.login-pop .user-img button').text('已签到');
                    $('.login-pop .user-img button').attr('disabled','disabled');
                    $('.login-pop .user-img button').attr('class','detain');
                    setTimeout(function () {
                        $('.tips').animate({'opacity':'0'},function () {
                            $(this).remove();
                        });
                    },2000);
                }else {
                    alert(res.msg);
                }
            }
        });
    });


    //喜欢音乐
    $('.sound span:nth-child(1)').click(function () {
        if (islogin&&likesMusicId.indexOf(lists[musicIndex].id)==-1){
            var app=$(this);
            $.ajax({
                url:'/like?id='+lists[musicIndex].id,
                type:'get',
                success:function (res) {
                    if(res.code==200){
                        app.attr('class','like');
                        app.find('i').attr('class','iconfont icon-like');
                        likesMusicId.push(lists[musicIndex].id);
                    }
                }
            });
        }else {
            var app=$(this);
            if (islogin){
                $.ajax({
                    url:'/like?id='+lists[musicIndex].id+'&like=false',
                    type:'get',
                    success:function (res) {
                        if(res.code==200){
                            app.removeAttr('class');
                            app.find('i').attr('class','iconfont icon-heart2');
                            var i=likesMusicId.indexOf(lists[musicIndex].id)
                            if (i!=-1){
                                likesMusicId.splice(i, 1);
                            }
                        }
                    }
                });
            }
        }
    });

    // 进入歌单
    $('section').on('click','.find .main .recommend .recommend-song>div',function () {
        var id=$(this).attr('data-id');
        $('.loading').show();
        $.ajax({
            url:'/playlist/detail?id='+id,
            type:'get',
            success:function (res) {
                $.ajax({
                    url:'cd.html',
                    type:'get',
                    success:function (html) {
                        history.replaceState({text:$('section').html()}, '');
                        $('section').html(html);
                        haveLists=res.playlist.tracks;
                        $('.author-cd .top>p').text('歌单');
                        $('.author-cd .top>div img').attr('src',res.playlist.coverImgUrl);
                        $('.author-cd .top>div p:nth-child(2)').text(res.playlist.name);
                        var str='';
                        for (let i=0;i<res.playlist.tags.length;i++) {
                            if (i==res.playlist.tags.length-1) {
                                str+=res.playlist.tags[i];
                            }else {
                                str+=res.playlist.tags[i]+' / ';
                            }
                        }
                        $('.author-cd .top>div p:nth-child(3)').text('标签：'+str);
                        $('.author-cd .top>div p:nth-child(4)').text('介绍：'+res.playlist.description);

                        var str1='';
                        for (let i=0;i<res.playlist.tracks.length;i++){
                            str1+='<li>' +
                                '<span>'+num(i+1)+'</span>' +
                                '<span>'+res.playlist.tracks[i].name+'</span>' +
                                '<span>'+res.playlist.tracks[i].ar[0].name+'</span>' +
                                '<span>热度：'+res.playlist.tracks[i].pop+'</span>' +
                                '</li>'
                        }
                        $('.author-cd .bottom>ul').html(str1);
                        $('.loading').fadeOut();

                        history.pushState({}, '', '?songsheetid='+id);
                        history.replaceState({text:$('section').html()}, '');
                    }
                });
            }
        });
    });



    // 进入排行榜
    $('section').on('click','.find .main .recommend .ranking>div:nth-child(3)',function () {
        $('.loading').show();
        $.ajax({
            url:'second.html',
            type:'get',
            success:function (html) {
                history.replaceState({text:$('section').html()}, '');
                $('section').html(html);
                getSecond();
                history.pushState({}, '', '?section');
                history.replaceState({text:$('section').html()}, '');
            }
        });
    });

    $('section').on('click','.second .content .divs>div,.second .content .globalDivs>div',function () {
        var idx=$(this).attr('data-idx');
        $('.loading').show();
        $.ajax({
            url:'/top/list?idx='+idx,
            type:'get',
            success:function (res) {
                $.ajax({
                    url:'cd.html',
                    type:'get',
                    success:function (html) {
                        history.replaceState({text:$('section').html()}, '');
                        $('section').html(html);
                        haveLists=res.playlist.tracks;
                        $('.author-cd .top>p').text('排行榜');
                        $('.author-cd .top>div img').attr('src',res.playlist.coverImgUrl);
                        $('.author-cd .top>div p:nth-child(2)').text(res.playlist.name);
                        $('.author-cd .top>div p:nth-child(3)').text('最近更新：'+fmtDate(res.playlist.updateTime));
                        $('.author-cd .top>div p:nth-child(4)').text('介绍：'+res.playlist.description);
                        var str='';
                        for (let i=0;i<res.playlist.tracks.length;i++){
                            str+='<li>' +
                                '<span>'+num(i+1)+'</span>' +
                                '<span>'+res.playlist.tracks[i].name+'</span>' +
                                '<span>'+res.playlist.tracks[i].ar[0].name+'</span>' +
                                '<span>热度：'+res.playlist.tracks[i].pop+'</span>' +
                                '</li>'
                        }
                        $('.author-cd .bottom>ul').html(str);
                        $('.loading').fadeOut();
                        history.pushState({}, '', '?idx='+idx);
                        history.replaceState({text:$('section').html()}, '');
                    }
                });
            }
        });
    });

    //进入每日推荐歌曲
    $('section').on('click','.find .main .ranking>div:nth-child(2)',function () {
        $('.loading').show();
        $.ajax({
            url:'recommend.html',
            type:'get',
            success:function (html) {
                history.replaceState({text:$('section').html()}, '');
                $('section').html(html);
                getDayDate();
                getrecommend();
            }
        });
    });

    // 推荐歌曲播放音乐
    $('section').on('click','.recommend-songs ul li',function () {
        musicIndex=$(this).index();
        lists=haveLists;
        var str='';
        for (let i=0;i<lists.length;i++){
            str+='<li data-index='+i+'>' +
                '<span>'+lists[i].name+'</span>\n' +
                '<span>'+lists[i].artists[0].name+'</span>\n' +
                '</li>'
        }
        $('.list-pop .list>ul').html(str);
        $('.sound span:nth-child(4) span').text(lists.length);
        $('.recommend-songs ul li span').css('color','');
        $(this).children().css('color','#C32D2E');
        musicInit();
        audio.play();
    });

    //发现页面下导航切换
    $('section').on('click','.find .find-nav ul li',function () {
        var i=$(this).index();
        $(this).attr('class','active').siblings().removeAttr('class');
        $('.find .main>div:eq('+i+')').show().siblings().hide();
        if (i==1){
            findAuthorScrollBottomTest();
            authorOffset=0;
            getAuthors();
        }
    });

    //歌手类别切换
    $('section').on('click','.find .find-author .classify p span',function () {
        $(this).attr('class','active').siblings().removeAttr('class');
        authorOffset=0;
        getAuthors();
    });

    //进入发现音乐下的歌手页
    $('section').on('click','.find .authors>div',function () {
        var id=$(this).attr('data-id');
        authorMvOffset=0;
        $('.loading').show();
        $.ajax({
            url:'author.html',
            type:'get',
            success:function (res) {
                history.replaceState({text:$('section').html()}, '');
                getAuthordetails(id);
                $('section').html(res);
                authorScrollBottomTest();
            }
        });
    });


    //歌词页面进入专辑和歌手页
    $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').click(function () {
        var id=$(this).attr('data-id');
        authorMvOffset=0;
        $('.music-pop').hide();
        $('.loading').show();
        $.ajax({
            url:'author.html',
            type:'get',
            success:function (res) {
                history.replaceState({text:$('section').html()}, '');
                getAuthordetails(id);
                $('section').html(res);
                authorScrollBottomTest();
            }
        });
    });

    $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').click(function () {
        var id=$(this).attr('data-id');
        $('.music-pop').hide();
        $('.loading').show();
        getCdDeta(id);
    });




    // mv排行播放mv
    $('section').on('click','.mv-second .paihangbang>div,.mv-second .news>div',function () {
        var id=$(this).attr('data-id');
        getMvUrl(id);
    });


    // mv排行导航切换
    $('section').on('click','.mv-second>ul li',function () {
        $(this).attr('class','active').siblings().removeAttr('class');
        var i=$(this).index();
        $('.mv-second>div').hide();
        $('.mv-second>div:eq('+i+')').show();
        if (i=1){
            $('.ajaxload').show();
            authorMvOffset=0;
            getmvsecond('/mv/first?limit=50').then(function (data) {
                $('.mv-second .news').html(data);
                $('.ajaxload').fadeOut();
            });
        }
    });
</script>

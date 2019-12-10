

    


    //获取音频dom对象
    var audio=$('#audio').get(0);//audio标签
    var playIcon=$('.play-icon span:eq(1)').get(0);//播放图标
    var progress=$('.progress').get(0);//进度条容器
    var progressBar=$('.progress-bar').get(0);//进度条
    var bar=$('.bar').get(0);//进度条进度
    var control=$('.control').get(0);//进度条按钮
    var musicTime=$('.musicTime>span:eq(0)');//剩余时间
    var soundBar=$('.sound-bar').get(0);//音量dom
    var soundSchedule=$('.sound-schedule').get(0);//音量进度条
    var soundControl=$('.sound-control').get(0);//音量控制点

    var musicIndex=0;//歌曲列表序号
    var lyr=''; //保存歌词
    var lists='';//保存歌曲列表
    var haveLists=null;
    var likesMusicId=[];//喜欢的音乐id
    var songOffset=0;//歌曲搜索偏移量
    var authorOffset=0;//歌手搜索偏移量
    var cdOffset=0;//专辑搜索偏移量
    var mvOffset=0;//mv搜索偏移量
    var musicText='';//保存搜索内容
    var authorMvOffset=0;
    var isbool=true;//触发开关，防止多次调用事件

    //syx
    var musicrecentlists={}; //最近播放的音乐
    musicrecentlists["values"] = [];
    //


    

    //上一首
    $('.play-icon>span:eq(0)').click(function(){
        if ($('.sound>span:eq(1) i').attr('class')=='iconfont icon-shunxu') {
            pre();
        } else if($('.sound>span:eq(1) i').attr('class')=='iconfont icon-suiji'){
            randPlay();
        } else{
            audio.play();
        }
    });
    //下一首
    $('.play-icon>span:eq(2)').click(function(){
        if ($('.sound>span:eq(1) i').attr('class')=='iconfont icon-shunxu') {
            nex();
        } else if($('.sound>span:eq(1) i').attr('class')=='iconfont icon-suiji'){
            randPlay();
        } else{
            audio.play();
        }
    });
    

    //为播放列表添加点击事件
    $('.list-pop').on('click','.list li',function(){
        musicIndex=$(this).attr('data-index');
        musicInit();
        audio.play();
    });

    //列表弹窗隐藏和显示
    $('.sound>span:eq(3)').click(function(){
        $('.list-pop').fadeToggle(200);
    });

    //列表弹窗，清空列表，关闭列表
    $('.list-pop .title span:eq(1)').click(function(){
        if(confirm('确定要清空播放列表？')){
            $('#audio').attr('src','');  //audio标签变为空
            $('.headimg img').attr('src',''); //歌曲图片变为空
            $('.progress .musicName').text(''); //歌曲名字变为空
            $('.progress .author').text(' - '); //歌手变为空
            $('.progress-bar .bar').css('width','0'); //进度条变为0
            $('.progress-bar .control').css('left','-7px'); //进度条变为0
            $('.play-icon span:eq(1) i').attr('class','iconfont icon-bofang1'); //播放图标变为未播放
            $('.list-pop .list ul').html(''); //列表下的所有li删除
            $('.music-pop .lyr>.left>.needle').css('transform','rotate(-45deg)');
            $('.music-pop .lyr>.left>.disc-o').css('animation','');
            $('.music-pop .lyr>.left>.disc').css('animation','');
        }
    });
    $('.list-pop .title span:eq(2)').click(function(){
        $('.list-pop').fadeToggle(200);
    });

    //顺序播放，单曲循坏，随机播放
    $('.sound>span:eq(1)').click(function(){
        if ($('.sound>span:eq(1) i').attr('class')=='iconfont icon-shunxu') {
            $('.sound>span:eq(1) i').attr('class','iconfont icon-suiji');
        } else if($('.sound>span:eq(1) i').attr('class')=='iconfont icon-suiji'){
            $('.sound>span:eq(1) i').attr('class','iconfont icon-danquxunhuan');
        } else{
            $('.sound>span:eq(1) i').attr('class','iconfont icon-shunxu');
        }
    });
    //监听播放完毕
    audio.onended = function() {
        if ($('.sound>span:eq(1) i').attr('class')=='iconfont icon-shunxu') {
            nex();
        } else if($('.sound>span:eq(1) i').attr('class')=='iconfont icon-suiji'){
            randPlay();
        } else{
            audio.play();
        }
    };

    //第一次进入页面时，音量调为1
    audio.volume =1;
    soundControl.style.marginLeft="236px"
    soundSchedule.style.width="236px";

    // 当可以播放时,点击播放按钮播放音乐,并获取总时间,音量
    audio.addEventListener('canplay',function(){
        $('.musicTime>span:eq(1)').text(' / '+formatTime(audio.duration));
        playIcon.onclick=function(){
            if(audio.paused&&audio.getAttribute('src')!=''){//获取音乐的播放状态
                audio.play();
            }else{
                audio.pause();
            }
        }
    });
    
    //监听是否播放
    audio.addEventListener('play',function(){
        $(playIcon).find('i').attr('class','iconfont icon-bofang');
        $('.music-pop .lyr>.left>.needle').css('transform','rotate(-12deg)');
        $('.music-pop .lyr>.left>.disc-o').css('animation','musicrotate 15s linear infinite');
        $('.music-pop .lyr>.left>.disc').css('animation','musicrotate 15s linear infinite');
    });
    //监听是否暂停
    audio.addEventListener('pause',function(){
        $(playIcon).find('i').attr('class','iconfont icon-bofang1');
        $('.music-pop .lyr>.left>.needle').css('transform','rotate(-45deg)');
        $('.music-pop .lyr>.left>.disc-o').css('animation-play-state','paused');
        $('.music-pop .lyr>.left>.disc').css('animation-play-state','paused');
    });
    //监听是否静音
    audio.addEventListener('volumechange',function(){
        if(audio.volume==0){
            $('.sound>span:eq(2)').find('i').attr('class','iconfont icon-jingyin');
            $('.sound-pop>span:eq(0)').find('i').attr('class','iconfont icon-jingyin');
        }else{
            $('.sound>span:eq(2)').find('i').attr('class','iconfont icon-yinliang');
            $('.sound-pop>span:eq(0)').find('i').attr('class','iconfont icon-yinliang');
        }
    });
    // 音乐播放事件

    // getlyr(); //歌词添加到页面
    var lyrHeight=($('.music-pop .lyr>.right>.Lyrics').actual('height'))/2-30;
    window.onresize = function(){
        lyrHeight=($('.music-pop .lyr>.right>.Lyrics').actual('height'))/2-30;
    };
    audio.addEventListener('timeupdate',function(){
        musicTime.text(formatTime(audio.currentTime));
        var scales=audio.currentTime/audio.duration; //获取播放进度
        bar.style.width=progressBar.offsetWidth*scales+"px"; //设置进度条进度
        control.style.left=progressBar.offsetWidth*scales-9+"px"; //设置控制点进度
        if (lyr!=''){
            for (let i = 0, l = lyr.length; i < l; i++) {
                if (this.currentTime>lyr[i][0]) {
                    $('.Lyrics ul').css('top',-i*30+lyrHeight+'px');
                    $('.Lyrics ul li').css('color','#000');
                    $('.Lyrics ul li:eq('+i+')').css('color','#fff'); //高亮显示当前播放的哪一句歌词
                }
            }
        }
    });

    //发生错误
    audio.addEventListener('error',function () {
        if (lists!=''){
            $('body').prepend('<div class="tips">' +
                '<i class="iconfont icon-chucuoliao"></i>' +
                '<span>此歌曲无版权</span>' +
                '</div>');
            $('.tips').animate({'opacity':'1'});
            setTimeout(function () {
                $('.tips').animate({'opacity':'0'},function () {
                    $(this).remove();
                });
            },2000);
        }
    });
    //拖拽控制点控制播放进度
    control.onmousedown=function(){
        audio.pause();
        document.onmousemove=function(e){ //鼠标移动事件
            var leftv=e.clientX-progressBar.offsetLeft-progress.offsetLeft;
            if(leftv<0){
                leftv=-3;
            }
            if(leftv>progressBar.offsetWidth){
                leftv=progressBar.offsetWidth-1;
            }
            control.style.left=leftv+"px"
            bar.style.width=leftv+"px";
        }
        document.onmouseup=function(){ //鼠标松开事件
            var scales=control.offsetLeft/progressBar.offsetWidth;
            if(scales<0){
                scales=0;
            }
            audio.currentTime =audio.duration*scales;
            if(scales!=1){
                audio.play();
            }
            document.onmousemove=null;
            document.onmouseup=null;
            document.onmousedown=null;
        }
    }
    // 进度条点击控制播放进度
    progressBar.onclick=function(e){
        var leftv=e.clientX-progressBar.offsetLeft-progress.offsetLeft;
        control.style.left=leftv+"px"
        bar.style.width=leftv+"px";
        var scales=control.offsetLeft/progressBar.offsetWidth;
        audio.currentTime =audio.duration*scales;
        audio.play();
    }

    //音量拖拽
    soundControl.onmousedown=function(){
        document.onmousemove=function(e){ //鼠标移动事件
            var leftv=e.clientX-soundBar.offsetLeft-soundBar.parentNode.offsetLeft;
            if(leftv<0){
                leftv=0;
            }
            if(leftv>soundBar.offsetWidth){
                leftv=soundBar.offsetWidth-6;
            }
            soundControl.style.marginLeft=leftv-7+"px"
            soundSchedule.style.width=leftv+"px";
        }
        document.onmouseup=function(){ //鼠标松开事件
            var scales=soundControl.offsetLeft/soundBar.offsetWidth;
            // audio.muted=false;
            if(scales<0){
                scales=0;
                // audio.muted=true;
            }
            audio.volume =scales;
            document.onmousemove=null;
            document.onmouseup=null;
            document.onmousedown=null;
        }
    }

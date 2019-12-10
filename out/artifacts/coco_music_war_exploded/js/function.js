//获取歌词函数
function getlyr(){
    var lyrstr='';
    for(let i=0;i<lyr.length;i++){
        lyrstr+='<li>'+lyr[i][1]+'</li>';
    }
    $('.Lyrics ul').html(lyrstr);
    $('.Lyrics ul').css('top',lyrHeight+'px');
}


//document.querySelector('body').addEventListener('touchmove', function (ev) {
 //   event.preventDefault();
//});
//判断是什么设备
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'phone';
    }else {
        return 'pc';
    }
}

// 初始化歌曲信息函数(原生）
// function musicInit(){
//     if(!lists[0].al){
//         $('.progress .musicName').text(lists[musicIndex].name);
//         $('.progress .author').text(' - '+lists[musicIndex].artists[0].name);
//         $('.music-pop .lyr .right>p>span:eq(0)').text(lists[musicIndex].name);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').text(lists[musicIndex].artists[0].name);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').attr('data-id',lists[musicIndex].artists[0].id);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').text(lists[musicIndex].album.name);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').attr('data-id',lists[musicIndex].album.id);
//         $('.search .searchBody .song li span').css('color','');
//         $('.search .searchBody .song li:eq('+musicIndex+') span').css('color','#C62E2E');
//         $('.list-pop .list li span').css('color','');
//         $('.list-pop .list li:eq('+musicIndex+') span').css('color','#C62E2E');
//         $(audio).attr('src','http://music.163.com/song/media/outer/url?id='+lists[musicIndex].id+'.mp3');
//         // audio.play();
//         $.ajax({
//             url:'/lyric?id='+lists[musicIndex].id,
//             type:'get',
//             success:function (res) {
//                 if (res.nolyric){
//                     lyr='';
//                     $('.Lyrics ul').css('top','200px');
//                     $('.Lyrics ul').html('<li>暂无歌词，请欣赏</li>');
//                 }else {
//                     lyr=parseLyric(res.lrc.lyric);
//                     getlyr();
//                 }
//
//             }
//         });
//         $.ajax({
//             url: '/album?id='+lists[musicIndex].album.id,
//             type:'get',
//             success:function (res) {
//                 $('.headimg img').attr('src',res.album.blurPicUrl);
//                 $('.music-pop .bg').css({'background':'url('+res.album.blurPicUrl+') center no-repeat','background-size':'cover'});
//                 $('.music-pop .lyr>.left>.disc').attr('src',res.album.blurPicUrl);
//             }
//         });
//         if (likesMusicId.indexOf(lists[musicIndex].id)!=-1){
//             $('.sound span:nth-child(1)').attr('class','like');
//             $('.sound span:nth-child(1) i').attr('class','iconfont icon-like');
//         }else {
//             $('.sound span:nth-child(1)').removeAttr('class');
//             $('.sound span:nth-child(1) i').attr('class','iconfont icon-heart2');
//         }
//     }else {
//         $('.progress .musicName').text(lists[musicIndex].name);
//         $('.progress .author').text(' - '+lists[musicIndex].ar[0].name);
//         $('.music-pop .lyr .right>p>span:eq(0)').text(lists[musicIndex].name);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').attr('data-id',lists[musicIndex].ar[0].id);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').attr('data-id',lists[musicIndex].al.id);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').text(lists[musicIndex].ar[0].name);
//         $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').text(lists[musicIndex].al.name);
//         $('.list-pop .list li span').css('color','');
//         $('.list-pop .list li:eq('+musicIndex+') span').css('color','#C62E2E');
//         $('.search-author .authorHost>ul li span').css('color','');
//         $('.search-author .authorHost>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
//         $('.author-cd .bottom>ul li span').css('color','');
//         $('.author-cd .bottom>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
//         $(audio).attr('src','http://music.163.com/song/media/outer/url?id='+lists[musicIndex].id+'.mp3');
//
//         // audio.play();
//         $.ajax({
//             url:'/lyric?id='+lists[musicIndex].id,
//             type:'get',
//             success:function (res) {
//                 if (res.nolyric){
//                     lyr='';
//                     $('.Lyrics ul').css('top','200px');
//                     $('.Lyrics ul').html('<li>暂无歌词，请欣赏</li>');
//                 }else {
//                     lyr=parseLyric(res.lrc.lyric);
//                     getlyr();
//                 }
//             }
//         });
//         $.ajax({
//             url: '/album?id='+lists[musicIndex].al.id,
//             type:'get',
//             success:function (res) {
//                 $('.headimg img').attr('src',res.album.blurPicUrl);
//                 $('.music-pop .bg').css({'background':'url('+res.album.blurPicUrl+') center no-repeat','background-size':'cover'});
//                 $('.music-pop .lyr>.left>.disc').attr('src',res.album.blurPicUrl);
//             }
//         });
//         if (likesMusicId.indexOf(lists[musicIndex].id)!=-1){
//             $('.sound span:nth-child(1)').attr('class','like');
//             $('.sound span:nth-child(1) i').attr('class','iconfont icon-like');
//         }else {
//             $('.sound span:nth-child(1)').removeAttr('class');
//             $('.sound span:nth-child(1) i').attr('class','iconfont icon-heart2');
//         }
//     }
// }
//syx
function musicInit(){
    if(!lists.values[musicIndex].album_name){
        $('.progress .musicName').text(lists.values[musicIndex].song_name);
        $('.progress .author').text(' - '+lists.values[musicIndex].author_name);
        $('.music-pop .lyr .right>p>span:eq(0)').text(lists.values[musicIndex].song_name);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').text(lists.values[musicIndex].author_name);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').attr('data-id',lists.values[musicIndex].author_id);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').text(lists.values[musicIndex].album_name);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').attr('data-id',lists.values[musicIndex].album_id);
        $('.search .searchBody .song li span').css('color','');
        $('.search .searchBody .song li:eq('+musicIndex+') span').css('color','#C62E2E');
        $('.list-pop .list li span').css('color','');
        $('.list-pop .list li:eq('+musicIndex+') span').css('color','#C62E2E');
        // $('.recommend-songs .list li:eq('+musicIndex+') span').css('color','#C62E2E');
        $(audio).attr('src','http://music.163.com/song/media/outer/url?id='+lists.values[musicIndex].song_id+'.mp3');
        // audio.play();
        //syx
        var ifpush = unique1(lists.values[musicIndex].song_id)
        if(ifpush)
            musicrecentlists.values.push(lists.values[musicIndex]);
        //
        $.ajax({
            url:'http://localhost:3000/lyric?id='+lists.values[musicIndex].song_id,
            type:'get',
            success:function (res) {
                if (res.nolyric){
                    lyr='';
                    $('.Lyrics ul').css('top','200px');
                    $('.Lyrics ul').html('<li>暂无歌词，请欣赏</li>');
                }else {
                    lyr=parseLyric(res.lrc.lyric);
                    getlyr();
                }

            }
        });
        $.ajax({
            url: 'http://localhost:3000/album?id='+lists.values[musicIndex].album_id,
            type:'get',
            success:function (res) {
                $('.headimg img').attr('src',res.album.blurPicUrl);
                $('.music-pop .bg').css({'background':'url('+res.album.blurPicUrl+') center no-repeat','background-size':'cover'});
                $('.music-pop .lyr>.left>.disc').attr('src',res.album.blurPicUrl);
            }
        });
        if (likesMusicId.indexOf(lists.values[musicIndex].song_id)!=-1){
            $('.sound span:nth-child(1)').attr('class','like');
            $('.sound span:nth-child(1) i').attr('class','iconfont icon-like');
        }else {
            $('.sound span:nth-child(1)').removeAttr('class');
            $('.sound span:nth-child(1) i').attr('class','iconfont icon-heart2');
        }
    }else {
        $('.progress .musicName').text(lists.values[musicIndex].song_name);
        $('.progress .author').text(' - '+lists.values[musicIndex].author_name);
        $('.music-pop .lyr .right>p>span:eq(0)').text(lists.values[musicIndex].author_name);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').attr('data-id',lists.values[musicIndex].author_id);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').attr('data-id',lists.values[musicIndex].alnum_id);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(1)').text(lists.values[musicIndex].author_name);
        $('.music-pop .lyr .right>p>span:eq(1)>span:eq(0)').text(lists.values[musicIndex].album_name);
        $('.list-pop .list li span').css('color','');
        $('.list-pop .list li:eq('+musicIndex+') span').css('color','#C62E2E');
        $('.search-author .authorHost>ul li span').css('color','');
        $('.search-author .authorHost>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
        $('.recommend-songs  li span').css('color','');
        $('.recommend-songs  li:eq('+musicIndex+') span').css('color','#C62E2E');
        $('.author-cd .bottom>ul li span').css('color','');
        $('.author-cd .bottom>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
        $(audio).attr('src','http://music.163.com/song/media/outer/url?id='+lists.values[musicIndex].song_id+'.mp3');

        // audio.play();
        //syx
        var ifpush = unique1(lists.values[musicIndex].song_id)
        if(ifpush)
            musicrecentlists.values.push(lists.values[musicIndex]);
        // musicrecentlists.values.push(lists.values[musicIndex]);
        //
        $.ajax({
            url:'http://localhost:3000/lyric?id='+lists.values[musicIndex].song_id,
            type:'get',
            success:function (res) {
                if (res.nolyric){
                    lyr='';
                    $('.Lyrics ul').css('top','200px');
                    $('.Lyrics ul').html('<li>暂无歌词，请欣赏</li>');
                }else {
                    lyr=parseLyric(res.lrc.lyric);
                    getlyr();
                }
            }
        });
        $.ajax({
            url: 'http://localhost:3000/album?id='+lists.values[musicIndex].album_id,
            type:'get',
            success:function (res) {
                $('.headimg img').attr('src',res.album.blurPicUrl);
                $('.music-pop .bg').css({'background':'url('+res.album.blurPicUrl+') center no-repeat','background-size':'cover'});
                $('.music-pop .lyr>.left>.disc').attr('src',res.album.blurPicUrl);
            }
        });
        if (likesMusicId.indexOf(lists.values[musicIndex].song_id)!=-1){
            $('.sound span:nth-child(1)').attr('class','like');
            $('.sound span:nth-child(1) i').attr('class','iconfont icon-like');
        }else {
            $('.sound span:nth-child(1)').removeAttr('class');
            $('.sound span:nth-child(1) i').attr('class','iconfont icon-heart2');
        }
    }
}
//
// //syx
// function musicInit(){
//     $('.list-pop .list li span').css('color','');
//     $('.list-pop .list li:eq('+musicIndex+') span').css('color','#C62E2E');
//     $('.search-author .authorHost>ul li span').css('color','');
//     $('.search-author .authorHost>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
//     $('.author-cd .bottom>ul li span').css('color','');
//     $('.author-cd .bottom>ul li:eq('+musicIndex+') span').css('color','#C62E2E');
//
//     $(audio).attr('src','http://music.163.com/song/media/outer/url?id='+lists.values[musicIndex].song_id+'.mp3');
//         audio.play();
//             $.ajax({
//             url:'http://localhost:3000/lyric?id='+lists.values[musicIndex].song_id,
//             type:'get',
//             success:function (res) {
//                 if (res.nolyric){
//                     lyr='';
//                     $('.Lyrics ul').css('top','200px');
//                     $('.Lyrics ul').html('<li>暂无歌词，请欣赏</li>');
//                 }else {
//                     lyr=parseLyric(res.lrc.lyric);
//                     getlyr();
//                 }
//             }
//         });
//     $.ajax({
//             url: 'http://localhost:3000/album?id='+'3070416',
//             type:'get',
//             success:function (res) {
//                 $('.headimg img').attr('src',res.album.blurPicUrl);
//                 $('.music-pop .bg').css({'background':'url('+res.album.blurPicUrl+') center no-repeat','background-size':'cover'});
//                 $('.music-pop .lyr>.left>.disc').attr('src',res.album.blurPicUrl);
//             }
//         });
//
// }

//歌词格式化函数
function parseLyric(text) {
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[(ti\s*:\s*)?([^\]]+)\]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            value = v.replace(pattern, '');
        //提取歌词
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}

//把秒格式化成分秒函数
function formatTime(seconds) {
    return [
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
}

//syx最近播放去重
function unique1(id){
    var flag = 1
    for (var i = 0; i < musicrecentlists.values.length; i++) {
        if(musicrecentlists.values[i].song_id==id){
            flag = 0;
        }
    }
    return flag;
}
//
// 上一首函数
function pre(){
    musicIndex--;
    if(musicIndex<0){
        musicIndex=lists.values.length-1;
    }
    if(lists!=''){
        musicInit();
        audio.play();
    }
}
//下一首函数
function nex(){
    musicIndex++;
    if(musicIndex==lists.values.length&&lists!=''){
        musicIndex=0;
    }
    if(lists!=''){
        musicInit();
        audio.play();
    }
}
//生成指定范围随机数函数
function randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
}

//随机播放函数
function randPlay(){
    var rand='';//生成的随机播放随机数
    rand=randNum(0,lists.length);
    musicIndex=rand;
    musicInit();
    audio.play();
}

// 搜索歌曲
function search(val) {
    songOffset=0;
    authorOffset=0;
    cdOffset=0;
    mvOffset=0;
    if($('.search .searchBody').attr('style')){   //判断歌曲列表状态，是否隐藏
        var i=$('.search .searchBody>ul li.active').attr('data-index');
        var val=$('.search .input input').val();
        if (i==0){
            getSong(val);
        }else if (i==1){
            getAuthor(val);
        }else if (i==2){
            getCd(val);
        } else if (i==3){
            getMv(val);
        }
    }else {
        getSong(val);
    }
    //添加搜索历史
    if(JSON.parse(localStorage.getItem('songs'))){
        var newSongsArr=JSON.parse(localStorage.getItem('songs'));
        var i=newSongsArr.indexOf(val);
        if(i!=-1){
            newSongsArr.splice(i, 1);
        }
        newSongsArr.unshift(val);
        localStorage.setItem('songs',JSON.stringify(newSongsArr));
    }else {
        var songsArr=[val];
        localStorage.setItem('songs',JSON.stringify(songsArr));
    }
}



//获取搜索历史
function getSearch() {
    $.ajax({
        url:'http://localhost:3000/search/hot',
        type:'get',
        success:function (res) {
            var str='';
            for (let i=0;i<res.result.hots.length;i++){
                str+='<span>'+res.result.hots[i].first+'</span>';
            }
            $('.search .main .left>div').html(str);
            $('.loading').fadeOut();
        }
    });
    if (JSON.parse(localStorage.getItem('songs'))){
        var songs=JSON.parse(localStorage.getItem('songs'));
        var str='';
        for (let i=0;i<songs.length;i++){
            str+='<li>' +
                '<span>'+songs[i]+'</span>' +
                '<i class="iconfont icon-x"></i>' +
                '</li>';
        }
        $('.search .main .right ul').html(str);
    }
}

//滑到底部
function scrollBottomTest(){
    $('.search .searchBody .song').scroll(function(){
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            isbool=false;
            songOffset+=30;
            $.ajax({
                url:'/search?keywords='+musicText+'&offset='+songOffset,
                type:'get',
                success:function (res) {
                    var data=res.result.songs;
                    if (data!=undefined) {
                        var str = '';
                        var str1 = '';
                        for (let i = 0; i < data.length; i++) {
                            lists.push(data[i]);
                            str += '<li data-index=' + (songOffset + i) + '>' +
                                '<span>' + data[i].name + '</span>' +
                                '<span>' + data[i].artists[0].name + '</span>' +
                                '<span>' + data[i].album.name + '</span>' +
                                '</li>';
                            str1 += '<li data-index=' + (songOffset + i) + '>\n' +
                                '                    <span>' + data[i].name + '</span>\n' +
                                '                    <span>' + data[i].artists[0].name + '</span>\n' +
                                '                </li>';
                        }
                        $('.search .searchBody .song ul').append(str);
                        $('.list-pop .list ul').append(str1);
                        $('.sound span:nth-child(4) span').text(lists.values.length);
                    }
                    isbool = true;
                }
            });
        }
    });
    
    $('.search .searchBody .author').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            authorOffset+=30;
            isbool=false;
            $.ajax({
                url:'/search?keywords='+musicText+'&type=100&offset='+authorOffset,
                type:'get',
                success:function (res) {
                    if (res.result.artists){
                        var str='';
                        for (let i=0;i<res.result.artists.length;i++){
                            str+='<li>' +
                                '<img src='+res.result.artists[i].img1v1Url+'>' +
                                '<span>'+res.result.artists[i].name+'</span>' +
                                '</li>';
                        }
                        $('.search .searchBody .author>ul').append(str);
                    }
                    isbool=true;
                }
            });
        }
    });
    $('.search .searchBody .cd').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            cdOffset+=30;
            isbool=false;
            $.ajax({
                url:'/search?keywords='+musicText+'&type=10&offset='+cdOffset,
                type:'get',
                success:function (res) {
                    if (res.result.albums) {
                        var str = '';
                        for (let i = 0; i < res.result.albums.length; i++) {
                            str += '<li>' +
                                '<img src=' + res.result.albums[i].blurPicUrl + '>' +
                                '<span>' + res.result.albums[i].name + '</span>' +
                                '<span>' + res.result.albums[i].artist.name + '</span>' +
                                '</li>';
                        }
                        $('.search .searchBody .cd>ul').append(str);
                    }
                    isbool = true;
                }
            });
        }
    });
    $('.search .searchBody .mv').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            mvOffset+=30;
            isbool=false;
            $.ajax({
                url:'http://localhost:3000/search?keywords='+musicText+'&type=1004&offset='+mvOffset,
                type:'get',
                success:function (res) {
                    if (res.result.mvs){
                        var str='';
                        for (let i=0;i<res.result.mvs.length;i++){
                            str+='<div>' +
                                '<img src='+res.result.mvs[i].cover+'>' +
                                '<div>'+res.result.mvs[i].name+'</div>' +
                                '<div>'+res.result.mvs[i].artists[0].name+'</div>' +
                                '</div>';
                        }
                        $('.search .searchBody .mv').append(str);
                    }
                    isbool=true;
                }
            });
        }
    });
}
//歌手页面滑动事件
function authorScrollBottomTest() {
    $('.search-author .authorMv').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            authorMvOffset+=10;
            isbool=false;
            var id=window.location.search.split('=')[1];
            var str='';
            $.ajax({
                url:'http://localhost:3000/artist/mv?id='+id+'&offset='+authorMvOffset,
                type:'get',
                success:function (res) {
                    if (res.mvs){
                        for (let i=0;i<res.mvs.length;i++){
                            str+='<div data-id='+res.mvs[i].id+'>' +
                                '<img src='+res.mvs[i].imgurl16v9+'>' +
                                '<div>'+res.mvs[i].name+'</div>' +
                                '<div>'+res.mvs[i].publishTime+'</div>' +
                                '</div>'
                        }
                        $('.search-author .authorMv').append(str);
                    }
                    isbool=true;
                }
            });
        }
    });

    $('.search-author .authorCd').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            cdOffset+=20;
            isbool=false;
            var id=window.location.search.split('=')[1];
            var str='';
            $.ajax({
                url:'http://localhost:3000/artist/album?id='+id+'&limit=20&offset='+cdOffset,
                type:'get',
                success:function (res) {
                    for (let i=0;i<res.hotAlbums.length;i++){
                        str+='<div data-id='+res.hotAlbums[i].id+'>' +
                            '<img src='+res.hotAlbums[i].blurPicUrl+'>' +
                            '<div>'+res.hotAlbums[i].name+'</div>' +
                            '<div>'+fmtDate(res.hotAlbums[i].publishTime)+'</div>' +
                            '</div>';
                    }
                    $('.search-author .authorCd').append(str);
                    isbool=true;
                }
            });
        }
    });
}

//发现音乐页面下的歌手页面滑动事件
function findAuthorScrollBottomTest() {
    $('.find .authors').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            authorOffset+=30;
            isbool=false;
            var languageIndex=$('.find .find-author .classify p:nth-child(1) span.active').index();
            var classifyIndex=$('.find .find-author .classify p:nth-child(2) span.active').index();
            var language=['10','20','60','70','40']; //10代表华语，20欧美，60日本，70韩国，40其他
            var classify=['01','02','03']; //01代表男歌手，02女歌手，03组合
            $.ajax({
                url:'/artist/list?cat='+language[languageIndex]+classify[classifyIndex]+'&offset='+authorOffset,
                type:'get',
                success:function (res) {
                    var str='';
                    for (let i=0;i<res.artists.length;i++){
                        str+='<div data-id='+res.artists[i].id+'>' +
                            '<img src='+res.artists[i].img1v1Url+'>' +
                            '<span>'+res.artists[i].name+'</span>' +
                            '</div>';
                    }
                    $('.find .find-author .authors').append(str);
                    isbool=true;
                }
            });
        }
    });
}

//mv排行滑动事件
function mvSecondScrollBottomTest() {
    $('.mv-second .paihangbang').scroll(function () {
        if(parseInt($(this).height()+$(this)[0].scrollTop)+1>=parseInt($(this)[0].scrollHeight)&&isbool==true){
            mvOffset+=20;
            isbool=false;
            var length=$(this).children().length;
            $.ajax({
                url:'http://localhost:3000/top/mv?limit=10&offset='+mvOffset,
                type:'get',
                success:function (res) {
                    var str='';
                    for (let i=0;i<res.data.length;i++){
                        if(!res.data[i].briefDesc){
                            str+='<div data-id='+res.data[i].id+'>' +
                                '<span>'+num(length+i+1)+'</span>' +
                                '<img src='+res.data[i].cover+'>' +
                                '<div class="text">' +
                                '<span>'+res.data[i].name+'</span>' +
                                '<span>'+res.data[i].artistName+'</span>' +
                                '<span></span>' +
                                '</div>' +
                                '</div>';
                        }else {
                            str+='<div data-id='+res.data[i].id+'>' +
                                '<span>'+num(length+i+1)+'</span>' +
                                '<img src='+res.data[i].cover+'>' +
                                '<div class="text">' +
                                '<span>'+res.data[i].name+'</span>' +
                                '<span>'+res.data[i].artistName+'</span>' +
                                '<span>'+res.data[i].briefDesc+'</span>' +
                                '</div>' +
                                '</div>';
                        }

                    }
                    $('.mv-second .paihangbang').append(str);
                    isbool=true;
                }
            });
        }
    });

}

//类型切换
function getSong(val) {
    $('.ajaxload').show();
    $.ajax({
        url:'/search?keywords='+val,
        type:'get',
        success:function (res) {
            haveLists=res.result.songs;
            var str='';
            var str1='';
            for (let i=0;i<haveLists.length;i++){
                str+='<li data-index='+i+'>' +
                    '<span>'+haveLists[i].name+'</span>' +
                    '<span>'+haveLists[i].artists[0].name+'</span>' +
                    '<span>'+haveLists[i].album.name+'</span>' +
                    '</li>';
                str1+='<li data-index='+i+'>\n' +
                    '                    <span>'+haveLists[i].name+'</span>\n' +
                    '                    <span>'+haveLists[i].artists[0].name+'</span>\n' +
                    '                </li>';
            }
            $('.search .searchBody .song ul').html(str);
            $('.list-pop .list ul').html(str1);
            $('.ajaxload').fadeOut();
            $('.sound span:nth-child(4) span').text(haveLists.values.length);
            $('.search .main').hide();
            $('.search .searchBody').show();
        }
    });
}


function getAuthor(val) {
    $('.ajaxload').show();
    $.ajax({
        url:'/search?keywords='+val+'&type=100',
        type:'get',
        success:function (res) {
            var str='';
            for (let i=0;i<res.result.artists.length;i++){
                str+='<li data-authorId='+res.result.artists[i].id+'>' +
                        '<img src='+res.result.artists[i].img1v1Url+'>' +
                        '<span>'+res.result.artists[i].name+'</span>' +
                    '</li>';
            }
            $('.search .searchBody .author>ul').html(str);
            $('.ajaxload').fadeOut();
        }
    });
}

function getCd(val) {
    $('.ajaxload').show();
    $.ajax({
        url:'/search?keywords='+val+'&type=10',
        type:'get',
        success:function (res) {
            var str='';
            for (let i=0;i<res.result.albums.length;i++){
                str+='<li data-id='+res.result.albums[i].id+'>' +
                        '<img src='+res.result.albums[i].blurPicUrl+'>' +
                        '<span>'+res.result.albums[i].name+'</span>' +
                        '<span>'+res.result.albums[i].artist.name+'</span>' +
                    '</li>';
            }
            $('.search .searchBody .cd>ul').html(str);
            $('.ajaxload').fadeOut();
        }
    });
}
//原生
// function getMv(val) {
//     $('.ajaxload').show();
//     $.ajax({
//         url:'http://localhost:3000/search?keywords='+val+'&type=1004',
//         type:'get',
//         success:function (res) {
//             var str='';
//             for (let i=0;i<res.result.mvs.length;i++){
//                 str+='<div data-id='+res.result.mvs[i].id+'>' +
//                         '<img src='+res.result.mvs[i].cover+'>' +
//                         '<div>'+res.result.mvs[i].name+'</div>' +
//                         '<div>'+res.result.mvs[i].artists[0].name+'</div>' +
//                     '</div>';
//             }
//             $('.search .searchBody .mv').html(str);
//             $('.ajaxload').fadeOut();
//         }
//     });
// }
//syx
function getMv(val) {
    $('.ajaxload').show();
    $.ajax({
        url:'MvlistServelet?method=GetMvRankListData',
        type:'get',
        success:function (res) {
            var str='';
            for (let i=0;i<res.values.length;i++){
                str+='<div data-id='+res.values[i].song_id+'>' +
                    '<img src='+res.values[i].picurl+'>' +
                    '<div>'+res.values[i].mv_name+'</div>' +
                    '<div>'+res.values[i].author_name+'</div>' +
                    '</div>';
            }
            $('.search .searchBody .mv').html(str);
            $('.ajaxload').fadeOut();
        }
    });
}

//获取歌手详情单曲
function num(i) {   //返回序号
    if (i>=10){
        return i;
    }else {
        return '0'+i;
    }
}
function getAuthordetails(authorId) {
    $.ajax({
        url:'/artists?id='+authorId,
        type:'get',
        success:function (data) {
            haveLists=data.hotSongs;
            $('.search-author .top>ul li:nth-child(1) span').text(haveLists.length)
            $('.search-author .top>div img').attr('src',data.artist.img1v1Url);
            $('.search-author .top>div span:nth-child(2)').text(data.artist.name);
            $('.search-author .top>div span:nth-child(3)').text(data.artist.alias[0]);
            $('.search-author .top>div span:nth-child(4) span').text(data.artist.musicSize);
            $('.search-author .top>div span:nth-child(5) span').text(data.artist.albumSize);
            $('.search-author .top>div span:nth-child(6) span').text(data.artist.mvSize);
            var str='';
            for (let i=0;i<data.hotSongs.length;i++){
                str+='<li data-index='+i+'>' +
                        '<span>'+num(i+1)+'</span>\n' +
                        '<span>'+data.hotSongs[i].name+'</span>' +
                        '<span>'+data.hotSongs[i].ar[0].name+'</span>' +
                        '<span>'+data.hotSongs[i].al.name+'</span>' +
                    '</li>'
            }
            $('.search-author .authorHost>ul').html(str);
            $('.loading').fadeOut();

            history.pushState({}, '', '?id='+authorId);
            history.replaceState({text:$('section').html()}, '');
        }
    });
}
//获取歌手详情专辑
function fmtDate(obj){ //时间戳转日期
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}


function getAuthorCd() {
    var id=window.location.search.split('=')[1];
    var str='';
    if($('.search-author .authorCd').html()==''){
        $('.ajaxload').show();
        $.ajax({
            url:'http://localhost:3000/artist/album?id='+id+'&limit=20',
            type:'get',
            success:function (res) {
                for (let i=0;i<res.hotAlbums.length;i++){
                    str+='<div data-id='+res.hotAlbums[i].id+'>' +
                        '<img src='+res.hotAlbums[i].blurPicUrl+'>' +
                        '<div>'+res.hotAlbums[i].name+'</div>' +
                        '<div>'+fmtDate(res.hotAlbums[i].publishTime)+'</div>' +
                        '</div>';
                }
                $('.search-author .authorCd').html(str);
                $('.ajaxload').fadeOut();
            }
        });
    }
}
//获取歌手详情Mv
function getAuthorMv() {
    var id=window.location.search.split('=')[1];
    var str='';
    if($('.search-author .authorMv').html()==''){
        $('.ajaxload').show();
        $.ajax({
            url:'http://localhost:3000/artist/mv?id='+id,
            type:'get',
            success:function (res) {
                for (let i=0;i<res.mvs.length;i++){
                    str+='<div data-id='+res.mvs[i].id+'>' +
                        '<img src='+res.mvs[i].imgurl16v9+'>' +
                        '<div>'+res.mvs[i].name+'</div>' +
                        '<div>'+res.mvs[i].publishTime+'</div>' +
                        '</div>'
                }
                $('.search-author .authorMv').html(str);
                $('.ajaxload').fadeOut();
            }
        });
    }
}

//获取歌手详情
function getAuthorDeta() {
    var id=window.location.search.split('=')[1];
    if ($('.search-author .main .authorDeta').html()==''){
        $('.ajaxload').show();
        $.ajax({
            url:'/artist/desc?id='+id,
            type:'get',
            success:function (res) {
                var str='';
                var name=$('.search-author .top>div span:nth-child(2)').text();
                str+='<p class="sticky">'+name+'简介</p>' +
                    '<div class="jianjie">'+res.briefDesc+'</div>';
                for (let i=0;i<res.introduction.length;i++){
                    str+='<p class="sticky">'+res.introduction[i].ti+'</p>' +
                        '<div class="jianjie">'+res.introduction[i].txt+'</div>'
                }
                var strnew=str.replace(/(\r\n)|(\n)/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                $('.search-author .main .authorDeta').html(strnew);
                $('.ajaxload').fadeOut();
            }
        });
    }
}

//获取mv播放地址
function getMvUrl(id) {
    var url='';
    $('.loading').show();
    $.ajax({
        url:'mv.html',
        type:'get',
        success:function (res) {
            history.replaceState({text:$('section').html()}, '');
            $('section').html(res);
            // 原生
            $.ajax({
                url:'http://localhost:3000/mv/detail?mvid='+id,
                type:'get',
                success:function (data) {
                    url=data.data.brs;
                    audio.pause();
                    if(url['1080']){
                        if(url['1080'].search(/vodkgeyttp8/)==-1){
                            $('video').attr('src','/mv/url?url='+url['1080']);
                        }else {
                            $('video').attr('src',url['1080']);
                        }
                    }else if (url['720']) {
                        if(url['720'].search(/vodkgeyttp8/)==-1){
                            $('video').attr('src','/mv/url?url='+url['720']);
                        }else {
                            $('video').attr('src',url['720']);
                        }
                    }else if (url['480']) {
                        if(url['480'].search(/vodkgeyttp8/)==-1){
                            $('video').attr('src','/mv/url?url='+url['480']);
                        }else {
                            $('video').attr('src',url['480']);
                        }
                    }else {
                        if(url['240'].search(/vodkgeyttp8/)==-1){
                            $('video').attr('src','/mv/url?url='+url['240']);
                        }else {
                            $('video').attr('src',url['240']);
                        }
                    }
                    $('.loading').fadeOut();
                    history.pushState({}, '', '?mvid='+id);
                    history.replaceState({text:$('section').html()}, '');
                }
            });
            // $.ajax({
            //     url:'MvServelet?method=GetMvData',
            //     type:'post',
            //     dataType:'json',
            //     data: {id: id},
            //     success:function (data) {
            //         console.log(data)
            //         url=data.values[0].mv_url;
            //         audio.pause();
            //
            //         $('video').attr('src',url);
            //
            //         $('.loading').fadeOut();
            //         history.pushState({}, '', '?mvid='+id);
            //         history.replaceState({text:$('section').html()}, '');
            //     }
            // });
        }
    })
}

//获取专辑详情(原生)
function getCdDeta(id) {
    $('.loading').show();
    $.ajax({
        url:'cd.html',
        type:'get',
        success:function (html) {
            history.replaceState({text:$('section').html()}, '');
            $('section').html(html);
            $.ajax({
                url:'/album?id='+id,
                type:'get',
                success:function (res) {
                    haveLists=res.songs;
                    $('.author-cd .top>div img').attr('src',res.album.blurPicUrl);
                    $('.author-cd .top>div p:nth-child(2)').text(res.album.name);
                    $('.author-cd .top>div p:nth-child(3)').html('<span>歌手：'+res.album.artist.name+'</span><span>时间：'+fmtDate(res.album.publishTime)+'</span>');
                    if(res.album.description){
                        $('.author-cd .top>div p:nth-child(4)').text('介绍：'+res.album.description);
                    }else {
                        $('.author-cd .top>div p:nth-child(4)').text('介绍：暂无介绍');
                    }
                    $('.author-cd .bottom>p span').text(res.songs.length);
                    var str='';
                    for (let i=0;i<res.songs.length;i++){
                        str+='<li>' +
                            '<span>'+num(i+1)+'</span>' +
                            '<span>'+res.songs[i].name+'</span>' +
                            '<span>'+res.songs[i].ar[0].name+'</span>' +
                            '<span>热度：'+res.songs[i].pop+'</span>' +
                            '</li>'
                    }
                    $('.author-cd .bottom>ul').html(str);
                    $('.loading').fadeOut();
                    history.pushState({}, '', '?cdid='+id);
                    history.replaceState({text:$('section').html()}, '');
                }
            });
        }
    });
}
// //获取专辑详情(syx)
// function getCdDeta(id) {
//     $('.loading').show();
//     $.ajax({
//         url:'cd.html',
//         type:'get',
//         success:function (html) {
//             history.replaceState({text:$('section').html()}, '');
//             $('section').html(html);
//             $.ajax({
//                 url:'SonglistServelet?method=GetSongListDatabyid',
//                 type:'post',
//                 data: {id: id},
//                 success:function (res) {
//                     haveLists=res.songs;
//                     $('.author-cd .top>div img').attr('src',res.values[0].picurl);
//                     $('.author-cd .top>div p:nth-child(2)').text(res.album.name);
//                     $('.author-cd .top>div p:nth-child(3)').html('<span>歌手：'+res.album.artist.name+'</span><span>时间：'+fmtDate(res.album.publishTime)+'</span>');
//                     if(res.album.description){
//                         $('.author-cd .top>div p:nth-child(4)').text('介绍：'+res.album.description);
//                     }else {
//                         $('.author-cd .top>div p:nth-child(4)').text('介绍：暂无介绍');
//                     }
//                     $('.author-cd .bottom>p span').text(res.songs.length);
//                     var str='';
//                     for (let i=0;i<res.songs.length;i++){
//                         str+='<li>' +
//                             '<span>'+num(i+1)+'</span>' +
//                             '<span>'+res.songs[i].name+'</span>' +
//                             '<span>'+res.songs[i].ar[0].name+'</span>' +
//                             '<span>热度：'+res.songs[i].pop+'</span>' +
//                             '</li>'
//                     }
//                     $('.author-cd .bottom>ul').html(str);
//                     $('.loading').fadeOut();
//                     history.pushState({}, '', '?cdid='+id);
//                     history.replaceState({text:$('section').html()}, '');
//                 }
//             });
//             $.ajax({
//                 url:'/album?id='+id,
//                 type:'get',
//                 success:function (res) {
//                     haveLists=res.songs;
//                     $('.author-cd .top>div img').attr('src',res.album.blurPicUrl);
//                     $('.author-cd .top>div p:nth-child(2)').text(res.album.name);
//                     $('.author-cd .top>div p:nth-child(3)').html('<span>歌手：'+res.album.artist.name+'</span><span>时间：'+fmtDate(res.album.publishTime)+'</span>');
//                     if(res.album.description){
//                         $('.author-cd .top>div p:nth-child(4)').text('介绍：'+res.album.description);
//                     }else {
//                         $('.author-cd .top>div p:nth-child(4)').text('介绍：暂无介绍');
//                     }
//                     $('.author-cd .bottom>p span').text(res.songs.length);
//                     var str='';
//                     for (let i=0;i<res.songs.length;i++){
//                         str+='<li>' +
//                             '<span>'+num(i+1)+'</span>' +
//                             '<span>'+res.songs[i].name+'</span>' +
//                             '<span>'+res.songs[i].ar[0].name+'</span>' +
//                             '<span>热度：'+res.songs[i].pop+'</span>' +
//                             '</li>'
//                     }
//                     $('.author-cd .bottom>ul').html(str);
//                     $('.loading').fadeOut();
//                     history.pushState({}, '', '?cdid='+id);
//                     history.replaceState({text:$('section').html()}, '');
//                 }
//             });
//         }
//     });
// }

//获取banner
function getBanner() {
    var hh = ["http://p1.music.126.net/wDkE95vVjjgAY6xd-G_iTw==/109951164521089290.jpg","http://p1.music.126.net/alwEG8kzqe3JV8JiYm3z4g==/109951164521468660.jpg","http://p1.music.126.net/vVQ3cJ8BbAAwN3lwJ5t-HA==/109951164520330468.jpg","http://p1.music.126.net/67P43u_cIi6etbtCSOg-fA==/109951164521087043.jpg","http://p1.music.126.net/iqFwCK8eCl5lvhhywp4gmA==/109951164521087680.jpg","http://p1.music.126.net/nd90mbmgXGdHaakbViDrZQ==/109951164521083907.jpg","http://p1.music.126.net/UF4Zba9xbh4Ljx-G5mTUOw==/109951164521771239.jpg","http://p1.music.126.net/xr0oKsS-2mH1AxqRTjrFeQ==/109951164521091390.jpg"]
    // $.ajax({
    //     url:'/banner',
    //     type:'get',
    //     success:function (res) {
    //         var str='';
    //         for (let i=0;i<res.banners.length-1;i++){
    //             str+='<li class="p"'+i+'>'+
    //                     '<a href="#">'+
    //                     '<img src='+res.banners[i].imageUrl+'>'+
    //                     '</a>'+
    //                 '</li>';
    //         }
    //         $('.Cooldog_content>ul').html(str);
    //         $('.loading').fadeOut();
    //     }
    // });
    var str='';
    for (let i=0;i<hh.length-1;i++){
        str+='<li class="p"'+i+'>'+
            '<a href="#">'+
            '<img src='+hh[i]+'>'+
            '</a>'+
            '</li>';
    }
    $('.Cooldog_content>ul').html(str);
    $('.loading').fadeOut();
   //原生
   //  $.ajax({    //获取推荐歌单
   //      url:'http://localhost:3000/personalized',
   //      type:'get',
   //      success:function (res) {
   //          var str='';
   //          for (let i=0;i<12;i++){
   //              str+='<div data-id='+res.result[i].id+'>' +
   //                  '<img src='+res.result[i].picUrl+'>' +
   //                  '<span>'+res.result[i].name+'</span>' +
   //                  '</div>'
   //          }
   //          $('.find .main .recommend .recommend-song').html(str);
   //      }
   //  });
    //syx
    $.ajax({    //获取推荐歌单
        url:'SonglistServelet?method=GetSongListData',
        type:'post',
        dataType:'json',
        success:function (res) {
            console.log(res)
            var str='';
            for (let i=0;i<6;i++){
                str+='<div data-id='+res.values[i].songlist_id+'>' +
                    '<img src='+res.values[i].picurl+'>' +
                    '<span>'+res.values[i].songlist_name+'</span>' +
                    '</div>'
            }
            $('.find .main .recommend .recommend-song').html(str);
        }
    });

    // $.ajax({    //获取推荐歌单
    //     url:'http://localhost:3000/personalized',
    //     type:'get',
    //     success:function (res) {
    //         var str='';
    //         for (let i=0;i<12;i++){
    //             str+='<div data-id='+res.result[i].id+'>' +
    //                 '<img src='+res.result[i].picUrl+'>' +
    //                 '<span>'+res.result[i].name+'</span>' +
    //                 '</div>'
    //         }
    //         $('.find .main .recommend .recommend-song').html(str);
    //     }
    // });
    //原生
    // $.ajax({        //获取推荐mv
    //     url:'http://localhost:3000/personalized/mv',
    //     type:'get',
    //     success:function (res) {
    //         var str='';
    //         for (let i=0;i<res.result.length;i++){
    //             str+='<div data-id='+res.result[i].id+'>' +
    //                 '<img src='+res.result[i].picUrl+'>' +
    //                 '<span>'+res.result[i].name+'</span>' +
    //                 '<span>'+res.result[i].artistName+'</span>' +
    //                 '</div>'
    //         }
    //         $('.find .main .recommend .recommend-mv').html(str);
    //     }
    // });
    $.ajax({        //获取推荐mv
        url:'MvlistServelet?method=GetMvListData',
        type:'post',
        dataType:'json',
        success:function (res) {
            var str='';
            for (let i=0;i<res.values.length;i++){
                str+='<div data-id='+res.values[i].mv_id+'>' +
                    '<img src='+res.values[i].picurl+'>' +
                    '<span>'+res.values[i].mv_name+'</span>' +
                    '<span>'+res.values[i].author_name+'</span>' +
                    '</div>'
            }
            $('.find .main .recommend .recommend-mv').html(str);
        }
    });
}


//判断是否登录
var islogin=true; //for test
// var islogin=false;
refLogin().then(function (data) {
    islogin=true;
});
function refLogin() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url:'http://localhost:3000/login/status',
            type:'get',
            success:function (res) {
                resolve(res.profile.userId);
                $('.login-pop .fill').hide();
                $('.login-pop .user-img').show();
                $('.login-pop>button').text('切换账号');
                $('.login-pop>button').removeAttr('disabled');
                $('.login-pop>button').attr('class','selected');
                $('.nav .login>span:nth-child(1) img').attr('src',res.profile.avatarUrl);
                $('.nav .login>span:nth-child(1) span').text(res.profile.nickname);
                $('.login-pop .user-img img').attr('src',res.profile.avatarUrl);
                $('.login-pop .user-img span').text(res.profile.nickname);
                $.ajax({
                    url:'http://localhost:3000/user/detail?uid='+res.profile.userId,
                    type:'get',
                    success:function (data) {
                        if(data.mobileSign){
                            $('.login-pop .user-img button').text('已签到');
                            $('.login-pop .user-img button').attr('disabled','disabled');
                            $('.login-pop .user-img button').attr('class','detain');
                        }
                    }
                });

                $.ajax({
                    url:' http://localhost:3000/user/playlist?uid='+res.profile.userId,
                    type:'get',
                    success:function (su) {
                        $('.nav-icon .local li:nth-child(5)').attr('data-id',su.playlist[0].id);
                        $.ajax({
                            url:' http://localhost:3000/playlist/detail?id='+su.playlist[0].id,
                            type:'get',
                            success:function (data) {
                                for (let i=0;i<data.playlist.tracks.length;i++){
                                    likesMusicId.push(data.playlist.tracks[i].id);
                                }
                            }
                        });
                    }
                });
            },
            error:function () {
                $('.nav .login>span:nth-child(1) img').attr('src','./images/def.jpg');
                $('.nav .login>span:nth-child(1) span').text('未登录');
            }
        });
    });
}

//排行榜
function getAllSecond(idx,i) {
    $.ajax({
        url:' http://localhost:3000/top/list?idx='+idx,
        type:'get',
        success:function (res) {
            $('.second .content .divs>div:nth-child('+i+') img').attr('src',res.playlist.coverImgUrl);
            var str='';
            for (let i=0;i<3;i++){
                str+='<li><span>'+(i+1)+'.</span>'+res.playlist.tracks[i].name+'-'+res.playlist.tracks[i].ar[0].name+'</li>'
            }
            $('.second .content .divs>div:nth-child('+i+') ul').html(str);
            $('.loading').fadeOut();
        }
    });
}
function getSecond() {
    getAllSecond(3,1);
    getAllSecond(0,2);
    getAllSecond(2,3);
    getAllSecond(1,4);
}


//获取今天日期和推荐歌曲
function getDayDate() {
    var time = new Date();
    $('.find .main .recommend .ranking>div:nth-child(2)>div').text(time.getDate());
    $('.recommend-songs .coffee div').text(time.getDate());
}
//原生
// function getrecommend(){
//     $.ajax({
//         url:'/recommend/songs',
//         type:'get',
//         success:function (res) {
//             haveLists=res.recommend;
//             if (res.code!=301){
//                 var str='';
//                 for (let i=0;i<res.recommend.length;i++){
//                     str+='<li>' +
//                         '<span>'+num(i+1)+'</span>' +
//                         '<span>'+res.recommend[i].name+'</span>' +
//                         '<span>'+res.recommend[i].artists[0].name+'</span>' +
//                         '<span>'+res.recommend[i].album.name+'</span>' +
//                         '</li>'
//                 }
//             }else {
//                 alert('未登录！');
//             }
//             $('.recommend-songs ul').html(str);
//             $('.loading').fadeOut();
//             hist('recommend');
//         }
//     });
// }
//syx
function getrecommend(){
    $.ajax({
        url:'RecommendServelet?method=GetRecommendsong',
        type:'post',
        dataType:'json',
        success:function (res) {
            console.log(res)
            haveLists=res;
            // if (res.code!=301){
            var str='';
            for (let i=0;i<res.values.length;i++){
                str+='<li>' +
                    '<span>'+num(i+1)+'</span>' +
                    '<span>'+res.values[i].song_name+'</span>' +
                    '<span>'+res.values[i].author_name+'</span>' +
                    '<span>'+res.values[i].album_name+'</span>' +
                    '</li>'
            }
            // }else {
            //     alert('未登录！');
            // }
            $('.recommend-songs ul').html(str);
            $('.loading').fadeOut();
            hist('recommend');
        }
    });
}
//syx
function getrecent(){
    // $.ajax({
    //     url:'RecommendServelet?method=GetRecommendsong',
    //     type:'post',
    //     dataType:'json',
    //     success:function (res) {
    //         console.log(res)
    //         haveLists=res;
    //         // if (res.code!=301){
    haveLists = musicrecentlists
    res = haveLists
            var str='';
            for (let i=0;i<res.values.length;i++){
                str+='<li>' +
                    '<span>'+num(i+1)+'</span>' +
                    '<span>'+res.values[i].song_name+'</span>' +
                    '<span>'+res.values[i].author_name+'</span>' +
                    '<span>'+res.values[i].album_name+'</span>' +
                    '</li>'
            }
            // }else {
            //     alert('未登录！');
            // }
            $('.recommend-songs ul').html(str);
            $('.loading').fadeOut();
            hist('recommend');
        // }
    // });
}

function getAuthors() {
    var languageIndex=$('.find .find-author .classify p:nth-child(1) span.active').index();
    var classifyIndex=$('.find .find-author .classify p:nth-child(2) span.active').index();
    var language=['10','20','60','70','40']; //10代表华语，20欧美，60日本，70韩国，40其他
    var classify=['01','02','03']; //01代表男歌手，02女歌手，03组合
    $('.ajaxload').show();
    $.ajax({
        url:'/artist/list?cat='+language[languageIndex]+classify[classifyIndex]+'&offset='+authorOffset,
        type:'get',
        success:function (res) {
            var str='';
            for (let i=0;i<res.artists.length;i++){
                str+='<div data-id='+res.artists[i].id+'>' +
                    '<img src='+res.artists[i].img1v1Url+'>' +
                    '<span>'+res.artists[i].name+'</span>' +
                    '</div>';
            }
            $('.find .find-author .authors').html(str);
            $('.ajaxload').fadeOut();
        }
    });
}

//原生
// // 获取mv排行榜数据
// function getmvsecond(url) {
//         return new Promise(function(resolve, reject) {
//             $.ajax({
//                 url:url,
//                 type:'get',
//                 success:function (res) {
//                     var str='';
//                     for (let i=0;i<res.data.length;i++){
//                         if(!res.data[i].briefDesc){
//                             str+='<div data-id='+res.data[i].id+'>' +
//                                 '<span>'+num(i+1)+'</span>' +
//                                 '<img src='+res.data[i].cover+'>' +
//                                 '<div class="text">' +
//                                 '<span>'+res.data[i].name+'</span>' +
//                                 '<span>'+res.data[i].artistName+'</span>' +
//                                 '<span></span>' +
//                                 '</div>' +
//                                 '</div>';
//                         }else {
//                             str+='<div data-id='+res.data[i].id+'>' +
//                                 '<span>'+num(i+1)+'</span>' +
//                                 '<img src='+res.data[i].cover+'>' +
//                                 '<div class="text">' +
//                                 '<span>'+res.data[i].name+'</span>' +
//                                 '<span>'+res.data[i].artistName+'</span>' +
//                                 '<span>'+res.data[i].briefDesc+'</span>' +
//                                 '</div>' +
//                                 '</div>';
//                         }
//
//                     }
//                     resolve(str);
//                 }
//             });
//         });
// }
// 获取mv排行榜数据（syx）
function getmvsecond(url) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url:url,
            type:'post',
            dataType:'json',
            success:function (res) {
                var str='';
                for (let i=0;i<res.values.length;i++){

                    str+='<div data-id='+res.values[i].mv_id+'>' +
                        '<span>'+num(i+1)+'</span>' +
                        '<img src='+res.values[i].picurl+'>' +
                        '<div class="text">' +
                        '<span>'+res.values[i].mv_name+'</span>' +
                        '<span>'+res.values[i].author_name+'</span>' +
                        '<span></span>' +
                        '</div>' +
                        '</div>';
                    // }else {
                    //     str+='<div data-id='+res.data[i].id+'>' +
                    //         '<span>'+num(i+1)+'</span>' +
                    //         '<img src='+res.data[i].cover+'>' +
                    //         '<div class="text">' +
                    //         '<span>'+res.data[i].name+'</span>' +
                    //         '<span>'+res.data[i].artistName+'</span>' +
                    //         '<span>'+res.data[i].briefDesc+'</span>' +
                    //         '</div>' +
                    //         '</div>';
                    // }

                }
                resolve(str);
            }
        });
    });
}



var obj={};
function url_deal(){
//				获取url,模拟后台解码传递数据
    var url = window.location.href,
        _page = url.split("?")[1].split("&");
    _page.map(function(str){
        var arr = str.split("=");
        obj[arr[0]] = arr[1]
    })
    return obj
}

function hist(type){
    // url_deal();
    history.pushState({}, '', '?type='+type);
    history.replaceState({text:$('section').html()}, '');
}


window.addEventListener("popstate", function(event){
    var result = history.state;
    url_deal();
    if(obj.type=='search'){
        $('.nav .nav-icon>ul li').removeClass('active');
        $('.nav .nav-icon>ul li:eq(1)').addClass('active');
    }else if (obj.type=='find') {
        $('.nav .nav-icon>ul li').removeClass('active');
        $('.nav .nav-icon>ul li:eq(2)').addClass('active');
    }else if (obj.type=='mvSecond'){
        $('.nav .nav-icon>ul li').removeClass('active');
        $('.nav .nav-icon>ul li:eq(3)').addClass('active');
    }else if (obj.type=='like') {
        $('.nav .nav-icon>ul li').removeClass('active');
        $('.nav .nav-icon .local li:eq(2)').addClass('active');
    }
    if (result){
        $('section').html(result.text);
    }else {
        console.log('aa');
    }
});
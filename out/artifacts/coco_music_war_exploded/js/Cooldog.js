$(function () {
	//鼠标移入显示左右箭头和关闭按钮
	var timer = '';
	$('section').on('mouseover','.Cooldog_content'/* 改了这 */,function () {
		clearInterval(timer);//停止图片循环
	}).on('mouseleave','.Cooldog_container',function () {
		timer = setInterval(btn_right, 20000);//设置图片循环
	});

	
	var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
	var index = 0;
	
	//去掉了注释
	//上一张
	$('section').on('click', '.btn_left',function () {
		btn_left();
	});
	
	//下一张
	$('section').on('click', '.btn_right',function () {
		btn_right();
	});
	
	//图片自动轮播
	timer = setInterval(btn_right, 4000);
	
	//去掉了注释
	//点击上一张的封装函数
	function btn_left() {
		/* arr.unshift(arr[6]);
		arr.pop();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index--;
		if (index < 0) {
			index = 6;
		}
		show(); */
		arr.push(arr[0]);//数组后面插入
		arr.shift();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index--;
		if (index < 0) {
			index = 6;
		}
		show();
	}
	
	//点击下一张的封装函数
	function btn_right() {
		/* arr.push(arr[0]);
		arr.shift();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index++;
		if (index > 6) {
			index = 0;
		}
		show(); */
		arr.unshift(arr[6]);//数组前面插入
		arr.pop();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index++;
		if (index > 6) {
			index = 0;
		}
		show();
	}
	
	//去掉了注释
	//点击底部的按钮切换图片
	// $('.buttons a').each(function () {
	// 	$(this).on('click', function () {
	// 		var myindex = $(this).index();
	// 		var mindex = myindex - index;
	// 		if (mindex == 0) {
	// 			return;
	// 		}
	// 		else if (mindex > 0) {
	// 			var newarr = arr.splice(0, mindex);
	// 			//$.merge() 函数用于合并两个数组内容到第一个数组
	// 			arr = $.merge(arr, newarr);
	// 			$('.Cooldog_content li').each(function (i, e) {
	// 				$(e).removeClass().addClass(arr[i]);
	// 			})
	// 			index = myindex;
	// 			show();
	// 		}
	// 		else if (mindex < 0) {
	// 			//reverse() 方法用于颠倒数组中元素的顺序。
	// 			arr.reverse();
	// 			var oldarr = arr.splice(0, -mindex);
	// 			arr = $.merge(arr, oldarr);
	// 			arr.reverse();
	// 			$('.Cooldog_content li').each(function (i, e) {
	// 				$(e).removeClass().addClass(arr[i]);
	// 			})
	// 			index = myindex;
	// 			show();
	// 		}
	// 	})
	// })
	
	//底部按钮高亮
	function show() {
		$('.buttons a').eq(index).addClass('color').siblings().removeClass('color');
	}
})
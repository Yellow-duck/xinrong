
(function($){
	$.fn.Sonline = function(options){
        var opts = $.extend({}, $.fn.Sonline.defualts, options); 
		$.fn.setList(opts); //调用列表设置
		if(opts.DefaultsOpen == false){
			$.fn.Sonline.close(opts.Position,0);
		}
		//展开
		$("#SonlineBox > .openTrigger").live("click",function(){$.fn.Sonline.open(opts.Position);});
		//关闭
		$("#SonlineBox > .contentBoxC > .closeTrigger").live("click",function(){$.fn.Sonline.close(opts.Position,"fast");});
		//$("#SonlineBox").live("mouseenter",function(){$.fn.Sonline.open(opts.Position);});
		//关闭
		//$("#SonlineBox").live("mouseleave",function(){$.fn.Sonline.close(opts.Position,"fast");});		
		
		//Ie6兼容或滚动方式显示
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style||opts.Effect==true) {$.fn.Sonline.scrollType();}
		else if(opts.Effect==false){$("#SonlineBox").css({position:"fixed"});}
	}
	//plugin defaults
	$.fn.Sonline.defualts ={
		Position:"left",//left或right
		Top:200,//顶部距离，默认200px
		Effect:true, //滚动或者固定两种方式，布尔值：true或
		DefaultsOpen:true, //默认展开：true,默认收缩：false
		Qqlist:"", //多个QQ用','隔开，QQ和客服名用'|'隔开
		weibo:'',
		Wwlist:"" ,//多个旺旺用','隔开
		Msnlist:"" ,//多个MSN用','隔开
		Skypelist:"" ,//多个Skype用','隔开
	}
	
	//展开
	$.fn.Sonline.open = function(positionType){
		var widthValue = $("#SonlineBox > .contentBoxC").width();
		if(positionType=="left"){$("#SonlineBox > .contentBoxC").animate({left: 0},"fast");}
		else if(positionType=="right"){$("#SonlineBox > .contentBoxC").animate({right: 0},"fast");}
		$("#SonlineBox").css({width:widthValue+4});
		$("#SonlineBox > .openTrigger").hide();
	}

	//关闭
	$.fn.Sonline.close = function(positionType,speed){
		$("#SonlineBox > .openTrigger").show();
		var widthValue =$("#SonlineBox > .openTrigger").width();
		var allWidth =(-($("#SonlineBox > .contentBoxC").width())-6);
		if(positionType=="left"){$("#SonlineBox > .contentBoxC").animate({left: allWidth},speed);}
		else if(positionType=="right"){$("#SonlineBox > .contentBoxC").animate({right: allWidth},speed);}
		$("#SonlineBox").animate({width:widthValue},speed);
		
	}

	//子插件：设置列表参数
	$.fn.setList = function(opts){
		$("body").append("<div class='SonlineBox' id='SonlineBox' style='top:-600px;'><div class='openTrigger' style='display:none' title='展开'></div><div class='contentBoxC'><div class='closeTrigger'><img src='/style/images/closeBtnImg.gif' title='关闭' /></div><div class='titleBox'><span class='icon-user'></span><span>在线客服</span></div><div class='listBox'></div><div class='telBox'>"+opts.tel+"</div><div class='otherBox'><img src=\""+opts.weix+"\" border=\"0\"></div></div></div>");// usemap=\"#cMap\"<map name=\"cMap\" id=\"cMap\"><area shape=\"rect\" coords=\"38,205,98,225\" href=\""+opts.weibo+"\" target=\"_blank\" /></map>
		if(opts.Qqlist==""){$("#SonlineBox > .contentBoxC > .listBox").append("<p style='padding:15px'>暂无在线客服。</p>")}
		else{var qqListHtml = $.fn.Sonline.splitStr(opts);$("#SonlineBox > .contentBoxC > .listBox").append(qqListHtml);	}
		var WwlistHtml = $.fn.Sonline.splitwwStr(opts);$("#SonlineBox > .contentBoxC > .listBox").append(WwlistHtml);	
		var MsnlistHtml = $.fn.Sonline.splitmsnStr(opts);$("#SonlineBox > .contentBoxC > .listBox").append(MsnlistHtml);	
		var SkypelistHtml = $.fn.Sonline.splitskypeStr(opts);$("#SonlineBox > .contentBoxC > .listBox").append(SkypelistHtml);	
		if(opts.Position=="left"){$("#SonlineBox").css({left:0});}
		else if(opts.Position=="right"){$("#SonlineBox").css({right:0})}
		$("#SonlineBox").css({top:opts.Top});
		var allHeights=0;
		if($("#SonlineBox > .contentBoxC").height() < $("#SonlineBox > .openTrigger").height()){
			allHeights = $("#SonlineBox > .openTrigger").height()+4;
		} else{allHeights = $("#SonlineBox > .contentBoxC").height()+4;}
		
		$("#SonlineBox").height(allHeights);
		if(opts.Position=="left"){$("#SonlineBox > .openTrigger").css({left:0});}
		else if(opts.Position=="right"){$("#SonlineBox > .openTrigger").css({right:0});}
	}
	
	//滑动式效果
	$.fn.Sonline.scrollType = function(){
		$("#SonlineBox").css({position:"absolute"});
		var topNum = parseInt($("#SonlineBox").css("top")+"");
		$(window).scroll(function(){
			var scrollTopNum = $(window).scrollTop();//获取网页被卷去的高
			$("#SonlineBox").stop(true,true).delay(0).animate({top:scrollTopNum+topNum},"slow");
		});
	}
	
	//分割QQ
	$.fn.Sonline.splitStr = function(opts){
		var strs= new Array(); //定义一数组
		var QqlistText = opts.Qqlist;
		strs=QqlistText.split(","); //字符分割
		var QqHtml=""
		for (var i=0;i<strs.length;i++){	
			var subStrs= new Array(); //定义一数组
			var subQqlist = strs[i];
			if(subQqlist==''){}
			else{
				subStrs = subQqlist.split("|"); //字符分割
				QqHtml = QqHtml+"<div class='QQList Tlist'><a id='qq_talk_"+i+"' target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin="+subStrs[0]+"&site=qq&menu=yes'><img border=\"0\" src=\"http://wpa.qq.com/pa?p=1:"+subStrs[0]+":41\" alt=\""+subStrs[0]+"\"></a></div>";//<span>"+subStrs[1]+"：</span>
			}
		}
		return QqHtml;
	}
	
	//分割旺旺
	$.fn.Sonline.splitwwStr = function(opts){
		var strs= new Array(); //定义一数组
		var WwlistText = opts.Wwlist;
		strs=WwlistText.split(","); //字符分割
		var WwHtml=""
		for (var i=0;i<strs.length;i++){	
			var subStrs= new Array(); //定义一数组
			var subWwlist = strs[i];
			if(subWwlist==''){}
			else{
				subStrs = subWwlist.split("|"); //字符分割
				WwHtml = WwHtml+"<div class='WWList Tlist'><a id='ww_talk_"+i+"' href='http://www.taobao.com/webww/ww.php?ver=3&touid="+subStrs[0]+"&siteid=cntaobao&status=1&charset=utf-8' target='_blank'><img src='http://amos.alicdn.com/online.aw?v=2&uid="+subStrs[0]+"&site=cntaobao&s=1&charset=utf-8' alt='wangwang' /></a></div>";
			}
		}
		return WwHtml;
	}
	
	//分割Msn
	$.fn.Sonline.splitmsnStr = function(opts){
		var strs= new Array(); //定义一数组
		var MsnlistText = opts.Msnlist;
		strs=MsnlistText.split(","); //字符分割
		var MsnHtml=""
		for (var i=0;i<strs.length;i++){	
			var subStrs= new Array(); //定义一数组
			var subMsnlist = strs[i];
			if(subMsnlist==''){}
			else{
				subStrs = subMsnlist.split("|"); //字符分割
				MsnHtml = MsnHtml+"<div class='MsnList Tlist'><a id='msn_talk_"+i+"' href='msnim:chat?contact="+subStrs[0]+"' title='"+subStrs[0]+"'><img border='0' src='/themes/default/images/msn.gif' alt='"+subStrs[0]+"'></a></div>";
			}
		}
		return MsnHtml;
	}
	
	//分割Skype
	$.fn.Sonline.splitskypeStr = function(opts){
		var strs= new Array(); //定义一数组
		var SkypelistText = opts.Skypelist;
		strs=SkypelistText.split(","); //字符分割
		var SkypeHtml=""
		for (var i=0;i<strs.length;i++){	
			var subStrs= new Array(); //定义一数组
			var subSkypelist = strs[i];
			if(subSkypelist==''){}
			else{
				subStrs = subSkypelist.split("|"); //字符分割
				SkypeHtml = SkypeHtml+"<div class='SkypeList Tlist'><a id='skype_talk_"+i+"' href='callto://"+subStrs[0]+"' title='"+subStrs[0]+"'><img border='0' src='/themes/default/images/skype.gif' alt='"+subStrs[0]+"'></a></div>";
			}
		}
		return SkypeHtml;
	}
})(jQuery);    
var hotPage=chineseHDPage=internetStarPage=europePage=guessLikePage=1, page_Size=6;

mui.init({
	 swipeBack: false,

});

mui.plusReady(function(){
	plus.screen.lockOrientation("portrait-primary");    //锁定屏幕方向	
	
	initPage();
		
	//轮播=====获得slider插件对象
	mui('.mui-slider').slider({
		interval: 2000
	});
	
	//播放历史记录			
	document.querySelector('.icon-history').addEventListener('tap', function() {
		//mui.alert('history....')  
		mui.openWindow({
			url: 'home/history.html',
			id: 'history',
		});
	})
	
	//搜索			
	document.querySelector('nav').addEventListener('tap', function() {
		mui.openWindow({
			url: 'home/search.html',
			id: 'search',
		})
	})

	//点击首页更多类型
	mui('.mui-grid-9').on('tap','#moreType',function(){
		mui.openWindow({
			url: 'type.html',
			id: 'type',
		})
	})
	//进入首页类型
	mui('.mui-grid-9').on('tap','li',function(){
		var typeName = this.getAttribute("type_name");
		if (typeName!="更多类型") {
			mui.openWindow({
				url: 'home/homeType.html',
				id: 'homeType',
				extras:{
					typeName:typeName
				}
			})
		}
	})
	
	document.querySelector('nav').addEventListener('tap', function() {
		mui.openWindow({
			url: 'home/search.html',
			id: 'search',
		})
	})

	//单部影片详情页
	mui(".mui-content").on("tap", ".mui-table-view-cell", function(){
		var videoId = this.getAttribute("id");
		var videoName = this.getAttribute("name");
		var videoPic = this.querySelector(".mui-media-object").getAttribute("src");
		var videoUrl = this.getAttribute("url");
		var webview = mui.openWindow({
			id:'video.html',
			url: 'video.html',
			extras: {
				videoId: videoId,
				name: videoName,
				pic: videoPic,
				src: videoUrl
			}
		});
	});

	//热播推荐换一批
	document.getElementById("HotRecomment").addEventListener("tap", function() {
		loadHotNewData();
	});
	
	document.getElementById("ChineseHDButton").addEventListener("tap", function() {
		console.log("进入国产高清点击事件");		
		loadChineseHDNewData();
	});
		
	document.getElementById("EuropeButton").addEventListener("tap", function() {
		loadEuropeNewData();
	});

	document.getElementById("InternetStarButton").addEventListener("tap", function() {
		console.log("进入网红主播点击事件");
		loadInternetStarNewData();
	});
	
	document.getElementById("changeVod").addEventListener("tap", function(){
		console.log("执行猜你喜欢点击事件");
		loadGuessLikeNewData();
	})
	
	mui(".mui-content").on("tap", ".mui-slider-item", function(){
		plus.runtime.openURL("http://www.yh89a.com");
	});
})

function loadHotNewData(){
	var data = {
		offset : hotPage++ * page_Size,
		limit : page_Size,
		play_ranking : true
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data,
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			if(json.length <= 0){
				return; 
			}
			console.log("成功返回数据" + json.length);
			var playRankingJson = new Array();
			playRankingJson["video"] = json;
			//热播推荐部分
			var recomment1 = template('HotRecommendModel1',playRankingJson);
			document.getElementById("HotRecomment1").innerHTML=recomment1; 		 
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}

function loadChineseHDNewData(){
	var data = {
		offset : chineseHDPage++ * page_Size,
		limit : page_Size,
		type : VideoType.CHINESE_HD
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data,
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			if(json.length <= 0){
				return; 
			}
			console.log("成功返回数据" + json.length);
			var videoTypeChineseHDJson = new Array();
			videoTypeChineseHDJson["video"] = json;
			var html = template('gcgq', videoTypeChineseHDJson)
			document.getElementById("ChineseHD").innerHTML = html;		 
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadEuropeNewData(){
	var data = {
		offset : europePage++ * page_Size,
		limit : page_Size,
		type : VideoType.EUROPE
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data,
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			if(json.length <= 0){
				return; 
			}			
			console.log("成功返回数据" + json.length);
			var videoTypeEuropeJson = new Array();
			videoTypeEuropeJson["video"] = json;
			var html = template('jqom', videoTypeEuropeJson)
			document.getElementById("Europe").innerHTML = html;	 
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function loadInternetStarNewData(){
	var data = {
		offset : internetStarPage++ * page_Size,
		limit : page_Size,
		type : VideoType.INTERNET_STAR
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data,
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			if(json.length <= 0){
				return; 
			}			
			console.log("成功返回数据" + json.length);
			var videoTypeInternetStarJson = new Array();
			videoTypeInternetStarJson["video"] = json;
			var html = template('zhubo', videoTypeInternetStarJson)
			document.getElementById("InternetStar").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function loadGuessLikeNewData(){
	var data = {
		offset : guessLikePage++ * page_Size,
		limit : page_Size,
		guess_like : true
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data,
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			if(json.length <= 0){
				return; 
			}			
			console.log("成功返回数据" + json.length);
			var videoGuessListJson = new Array();
			videoGuessListJson["video"] = json;
			var html = template('guessLike1Model', videoGuessListJson)
			document.getElementById("guessLike1").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function initPage(){
	loadHotRankingVideoData();
	loadVideoTypeChineseHDData();
	loadVideoTypeInternetStarData();
	loadVideoTypeEuropeData();
	loadVideoGuessLikeData();
}

function loadHotRankingVideoData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:6, play_ranking:true},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据" + json.length);
			var playRankingJson = new Array();
			playRankingJson["video"] = json;
			//热播推荐部分
			var recomment1 = template('HotRecommendModel1',playRankingJson);
			document.getElementById("HotRecomment1").innerHTML=recomment1; 		 
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}

function loadVideoTypeChineseHDData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:6, type:VideoType.CHINESE_HD},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeChineseHDJson = new Array();
			videoTypeChineseHDJson["video"] = json;
			var html = template('gcgq', videoTypeChineseHDJson)
			document.getElementById("ChineseHD").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadVideoTypeInternetStarData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:6, type:VideoType.INTERNET_STAR},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeInternetStarJson = new Array();
			videoTypeInternetStarJson["video"] = json;
			var html = template('zhubo', videoTypeInternetStarJson)
			document.getElementById("InternetStar").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function loadVideoTypeEuropeData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:6, type:VideoType.EUROPE},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeEuropeJson = new Array();
			videoTypeEuropeJson["video"] = json;
			var html = template('jqom', videoTypeEuropeJson)
			document.getElementById("Europe").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function loadVideoGuessLikeData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:6, guess_like:true},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoGuessLikeJson = new Array();
			videoGuessLikeJson["video"] = json;
			var html = template('guessLike1Model', videoGuessLikeJson)
			document.getElementById("guessLike1").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

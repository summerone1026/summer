// mui.init({
// 	swipeBack: false,
// 	pullRefresh: {
// 		container: '#scroll1',
// 		up : { //上拉加载
// 			callback: pullupRefresh,
// 			contentrefresh : "正在加载...",
// 			contentnomore:'没有更多数据了'
// 		},
// 		down : {
// 			style: mui.os.android ? "circle" : "default",
// 			callback: pulldownRefresh,
// 		}
// 	}
// 	
// })

mui.plusReady(function() {

	initPage();
	
	
	mui(".mui-slider-group").on("tap", ".mui-table-view-cell", function(){
		var videoId = this.getAttribute("id");
		var videoName = this.querySelector(".mui-media-body").innerText;
		var videoUrl = this.querySelector("#videoURL").getAttribute("href");
		var webview = mui.openWindow({
			url: 'video.html',
			extras: {
				videoId: videoId,
				name: videoName,
				src: videoUrl
			}
		});
	});
	
// 	mui('#scroll1').pullRefresh({
// 		up: {
// 			contentrefresh: "正在加载...",
// 			contentnomore: "没有更多数据了",
// 			callback: pullupNewRefresh
// 		}
// 	});
// 
// 	mui('#scroll2').pullRefresh({
// 		up: {
// 			contentrefresh: "正在加载...",
// 			contentnomore: "没有更多数据了",
// 			callback: pullupHotRefresh
// 		}
// 	});
})

function initPage(){
	// loadPlayRankingData();
	// loadSearchRankingDate();
	// loadNewRankingDate();
}

function loadPlayRankingData(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:10, play_ranking:true},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回观影榜数据");
			var playRankingJson = new Array();
			playRankingJson["video"] = json;
			var html1 = template('guanYingBangModel', playRankingJson);
			document.getElementById("item1mobile").innerHTML = html1;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}

function loadSearchRankingDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:5, play_ranking:true},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回热搜榜数据");
			var searchRankingJson = new Array();
			searchRankingJson["video"] = json;
			var html1 = template('reSouBang', searchRankingJson)
			document.getElementById("item2mobile").innerHTML = html1;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}

function loadNewRankingDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{limit:10, new_ranking:true},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回新片榜数据");
			var newRankingJson = new Array();
			newRankingJson["video"] = json;
			var html1 = template('xinPianBang', newRankingJson)
			document.getElementById("item3mobile").innerHTML = html1;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadVideoData(typeID, offsetNum, limitNum){
	if(typeof(offsetNum)=="undefined"&&offsetNum==null){
		offsetNum = 0;
	}
	if(typeof(limitNum)=="undefined"&&limitNum==null){
		limitNum = 10;
	}
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{offset:offsetNum, limit:limitNum, type:typeID},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var playRankingJson = new Array();
			playRankingJson["video"] = json;
			var html1 = template('xxxx', playRankingJson)
			document.getElementById("xxx").innerHTML = html1;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}


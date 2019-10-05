function pullupRefresh(){
	console.log("执行上拉加载")
}

function pulldownRefresh(){
	console.log("执行下拉加载")
}

mui.plusReady(function() {
	initPage();
	mui(".mui-slider-group").on("tap", ".mui-table-view-cell", function(){
		var videoId = this.getAttribute("id");
		var videoName = this.querySelector(".mui-media-body").innerText;
		var videoPic = this.querySelector(".mui-media-object").getAttribute("src");
		var videoUrl = this.querySelector("#videoURL").getAttribute("href");
		var webview = mui.openWindow({
			url: 'video.html',
			extras: {
				videoId: videoId,
				name: videoName,
				pic: videoPic,
				src: videoUrl
			}
		});
	});
	
	document.addEventListener("click_type", function(event){
		var typeName = event.detail.typeName;
		var typeItemList = document.getElementsByClassName("mui-control-item");
		for(i=0; i< typeItemList.length; i++ ) {
			var name = typeItemList[i].innerText;
			if(typeName == name) {
				mui.trigger(typeItemList[i], "touchstart");
				mui.trigger(typeItemList[i], "tap");
				document.getElementsByClassName("mui-active")[0].setAttribute("class", "mui-control-item");
				typeItemList[i].setAttribute("class", "mui-control-item mui-active");
				return;
			}
		}
	})
})

function initPage(){
	// loadVideoAllTypeDate();
}

function loadVideoAllTypeDate(){
	loadVideoTypeChineseHDDate();
	loadVideoTypeJapanStarDate();
	loadVideoTypeEuropeDate();
	loadVideoTypeHDNoCodeDate();
	loadVideoTypeChineseFontDate();
	loadVideoTypeeAnimeDate();
	loadVideoTypeCandidDate();
	loadVideoTypeInternetStarDate();
	loadVideoTypeStarScandalDate();
	loadVideoTypeLevel3Date();
									
}

function loadVideoTypeChineseHDDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.CHINESE_HD},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeChineseHDJson = new Array();
			videoTypeChineseHDJson["video"] = json;
			var html = template('type1Model', videoTypeChineseHDJson)
			document.getElementById("item1mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}

function loadVideoTypeJapanStarDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.JAPAN_STAR},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeJapanStarJson = new Array();
			videoTypeJapanStarJson["video"] = json;
			var html = template('type2Model', videoTypeJapanStarJson)
			document.getElementById("item2mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});
}
function loadVideoTypeEuropeDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.EUROPE},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeEuropeJson = new Array();
			videoTypeEuropeJson["video"] = json;
			var html = template('type3Model', videoTypeEuropeJson)
			document.getElementById("item3mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadVideoTypeHDNoCodeDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.HD_NO_CODE},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeHDNoCodeJson = new Array();
			videoTypeHDNoCodeJson["video"] = json;
			var html = template('type4Model', videoTypeHDNoCodeJson)
			document.getElementById("item4mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadVideoTypeChineseFontDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.CHINESE_FONT},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeChineseFontJson = new Array();
			videoTypeChineseFontJson["video"] = json;
			var htm = template('type5Model', videoTypeChineseFontJson)
			document.getElementById("item5mobile").innerHTML = htm;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}

function loadVideoTypeeAnimeDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.ANIME},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeAnimeJson = new Array();
			videoTypeAnimeJson["video"] = json;
			var html = template('type6Model', videoTypeAnimeJson)
			document.getElementById("item6mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}

function loadVideoTypeCandidDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.CANDID},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeCandidJson = new Array();
			videoTypeCandidJson["video"] = json;
			var html = template('type7Model', videoTypeCandidJson)
			document.getElementById("item7mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});		
}
function loadVideoTypeInternetStarDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.INTERNET_STAR},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeInternetStarJson = new Array();
			videoTypeInternetStarJson["video"] = json;
			var html = template('type8Model', videoTypeInternetStarJson)
			document.getElementById("item8mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}
function loadVideoTypeStarScandalDate(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.STAR_SCANDAL},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeStarScandalJson = new Array();
			videoTypeStarScandalJson["video"] = json;
			var html = template('type9Model', videoTypeStarScandalJson)
			document.getElementById("item9mobile").innerHTML = html;
		},
		error:function(xhr,type,errorThrown){
			console.log("请求失败");
		}
	});	
}
function loadVideoTypeLevel3Date(){
	mui.ajax(APP_DOMAIN + "/videos",{
		data:{type:VideoType.LEVEL3},
		datatype:"json",
		type:"get",
		timeout:5000,
		success:function(json){
			console.log("成功返回数据");
			var videoTypeLevel3Json = new Array();
			videoTypeLevel3Json["video"] = json;
			var html = template('type10Model', videoTypeLevel3Json)
			document.getElementById("item10mobile").innerHTML = html;
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

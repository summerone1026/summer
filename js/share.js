//分享操作 
var shares = {};
// 初始化服务列表
mui.plusReady(function() {
	plus.share.getServices(function(s) {
		if (s && s.length > 0) {
			for (var i = 0; i < s.length; i++) {
				var t = s[i];
				shares[t.id] = t;
			}
		}
	}, function() {
		console.log("获取分享服务列表失败");
	});
	
	 //分享链接点击事件
	document.getElementById("share").addEventListener('tap', function() {
		var ids = [{
				id: "weixin",
				ex: "WXSceneSession"
			}, {
				id: "weixin",
				ex: "WXSceneTimeline"
			}, {
				id: "qq"
			}],
			bts = [{
				title: "发送给微信好友"
			}, {
				title: "分享到微信朋友圈"
			}, {
				title: "分享到QQ"
			}];
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: bts
		}, function(e) {
			var i = e.index;
			if (i > 0) {
				var s_id = ids[i - 1].id;
				var share = shares[s_id];
				if (share.authenticated) {
					shareMessage(share, ids[i - 1].ex);
				} else {
					share.authorize(function() {
						shareMessage(share, ids[i - 1].ex);
					}, function(e) {
						console.log("认证授权失败：" + e.code + " - " + e.message);
					});
				}
			}
		});
	});
});


// 分享执行动作
function shareMessage(share, ex) {
		var msg = {
			extra: {
				scene: ex
			}
		};
		msg.href = "https://sexgirl.carrd.co/";
		msg.title = "最新最全体验最好的免费视频APP";
		msg.content = "我正在体验玖玖视频，永久免费，影片很全，实时更新，高清画质，飞一般的观影体验，使君夜夜笙箫，乐不思蜀！！！";
		if (~share.id.indexOf('weibo')) {
			msg.content += "；体验地址：https://sexgirl.carrd.co/";
		}
		msg.thumbs = ["_www/images/logo.png"];
		share.send(msg, function() {
			console.log("分享到\"" + share.description + "\"成功！ ");
			var watchCount = localStorage.getItem("watchVideoCount");
			localStorage.setItem("watchVideoCount", parseInt(watchCount) + 1);
		}, function(e) {
			console.log("分享到\"" + share.description + "\"失败: " + e.code + " - " + e.message);
		});
	}

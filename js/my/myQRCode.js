// mui.init();
// 
// mui.plusReady(function() {
// 	storage.init();
// 	//二维码生成
// 	var str = "http://www.kayou110.com?playerid=" + storageUser.UId;
// 	$('#code').qrcode(str);
// });
// 激活长按按钮
mui.init({
    gestureConfig: {
        longtap: true, //默认为false
    }
});
 
mui.plusReady(function(){
	 // 使用mui的长按事件 我把我的复制元素 class 设置为copy-text
	 mui('body').on('longtap', '.copy-text', function () {
	     // 每次触发事件就会使用 innerText 获取纯文本。
	     var copy_content = this.innerText;
	     // 加了一个确认框 让用户选择是否复制
	     mui.confirm('您要复制内容吗？', '玖玖视频', ['取消', '复制内容'], function (e) {
	         if (e.index == 1) {
	             //判断是安卓还是ios
	             if (mui.os.ios) {
	                 // ios 的方法 这个我没具体研究过 直接拿来用了
	                 var UIPasteboard = plus.ios.importClass("UIPasteboard");
	                 var generalPasteboard = UIPasteboard.generalPasteboard();
	                 //设置 复制的内容也就是 触发事件 innerText 获取的内容
	                 generalPasteboard.plusCallMethod({
	                     setValue: copy_content,
	                     forPasteboardType: "public.utf8-plain-text"
	                 });
	                 generalPasteboard.plusCallMethod({
	                     valueForPasteboardType: "public.utf8-plain-text"
	                 });
	                 // 在上边都走完 给用户一个提示
	                 mui.toast('复制成功')
	             } else {
	                 //安卓 的方法 这个我没具体研究过 直接拿来用了
	                 var context = plus.android.importClass("android.content.Context");
	                 var main = plus.android.runtimeMainActivity();
	                 var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
	                 plus.android.invoke(clip, "setText", copy_content);
	                  // 在上边都走完 给用户一个提示
	                 mui.toast('复制成功')
	             }
	         }
	     })
	 })
 })

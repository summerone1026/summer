mui.init();
mui.plusReady(function() {
	//initOauth();
	storage.init();

	var btn_ok = document.getElementById("btn_ok");
	var inpt_mobile = document.getElementById("inpt_mobile");
	var nickname = document.getElementById("nickname");
	var username = document.getElementById("username");
	var password = document.getElementById("pwd");
	var repassword = document.getElementById("repwd");
	var ckb_agree = document.getElementById("ckb_agree");


	//协议勾选
	ckb_agree.addEventListener("tap", function() {
		if(this.checked) {
			appUI.showTopTip("宝宝，同意下服务条款呗");
			//mui.toast("宝宝，同意下服务条款呗");
		}
	});
	//下一步
	btn_ok.addEventListener("tap", function() {
		if(inpt_mobile.value.trim() == "") {
			appUI.showTopTip("请输入手机号");
			//mui.toast("请输入手机号");
			//inpt_mobile.focus();
		} else if(!ismobileno(inpt_mobile.value)) {
			appUI.showTopTip("手机号格式不正确");
			//mui.toast("手机号格式不正确");
		} else if(nickname.value.trim() == "") {
			appUI.showTopTip("昵称不能为空");
		} else if(!isUsernameValid(username.value)) {
			appUI.showTopTip("用户名必须由数字、字母或下划线组成,且不能低于6位");
		} else if(password.value.trim() == "" || repassword.value.trim() == "") {
			appUI.showTopTip("两次密码都不能为空");
			//mui.toast("两次密码都不能为空");
		} else if(password.value != repassword.value) {
			appUI.showTopTip("两次密码不一致");
			//mui.toast("两次密码不一致");
		} else if(password.value.length < 6) {
			appUI.showTopTip("亲，密码不能少于6位哟");
			//mui.toast("亲，密码不能少于6位");
		}else if(!ckb_agree.checked) { //当前为true点击了为false
			appUI.showTopTip("宝宝，同意下服务条款呗");
			//mui.toast("宝宝，同意下服务条款呗");
		} else {
			appUI.setDisabled(btn_ok);
			
			var data = {
				user_phone : inpt_mobile.value,
				user_name : username.value,
				user_nick_name : nickname.value,
				user_pwd : md5(password.value)
			}
			mui.ajax(APP_DOMAIN + "/members",{
				data,
				datatype:"json",
				type:"post",
				timeout:10000,
				success:function(info){
					appUI.removeDisabled(btn_ok);
					if(info.length != 0 && 	info.user_name.length > 0) {
						appUI.showTopTip("亲爱的用户，恭喜您，注册成功");
						mui.openWindow({
							url: 'login.html',
							id: 'login'
						})
						mui.back();
					}
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					if(XMLHttpRequest.status == 409) {
						appUI.showTopTip("用户名或手机号已被注册，请重新输入");
						appUI.removeDisabled(btn_ok);
					}else {
						appUI.showTopTip("服务器繁忙，请稍后再试");
						appUI.removeDisabled(btn_ok);
					}
				}
			});	
		}
	})
	//	//输入手机号
	//	inpt_mobile.addEventListener("keyup", function() {
	//		btnDisabled(false);
	//	})
	//	//手机号失去焦点
	//	inpt_mobile.addEventListener("blur", function() {
	//		btnDisabled(false);
	//	})
	//	//输入验证码
	//	inpt_validcode.addEventListener("keyup", function() {
	//		btnDisabled(false);
	//	})
	//	//验证码失去焦点
	//	inpt_validcode.addEventListener("blur", function() {
	//		btnDisabled(false);
	//	})
	//服务条款
	document.getElementById("servicedesc").addEventListener("tap", function() {
		openNew("../my/myMsgDetail.html", {
			id: 1
		});
	});
});

//function btnDisabled(isShowMsg) {
//	var btn_sendvalidcode = document.getElementById("btn_sendvalidcode");
//	var btn_ok = document.getElementById("btn_ok");
//	var val_mobileinpt = document.getElementById("inpt_mobile").value;
//	var val_validcodeinpt = document.getElementById("inpt_validcode").value;
//	var ckb_agree = document.getElementById("ckb_agree");
//
//	var ck_ok = true,
//		ck_sendvalidcode = true;
//
//	if(val_mobileinpt.length != 11) {
//		if(isShowMsg)
//			appUI.showTopTip("手机号码长度不正确");
//		//mui.toast("手机号码长度不正确");
//		ck_ok = false;
//		ck_sendvalidcode = false;
//	} else if(!ismobileno(val_mobileinpt)) {
//		if(isShowMsg)
//			appUI.showTopTip("手机号码格式不正确");
//		//mui.toast("手机号码格式不正确");
//		ck_ok = false;
//		ck_sendvalidcode = false;
//	} else if(val_validcodeinpt.length != 6) {
//		if(isShowMsg)
//			appUI.showTopTip("验证码长度不正确");
//		//mui.toast("验证码长度不正确");
//		ck_ok = false;
//	}
//	if(ck_ok) {
//		appUI.removeDisabled(btn_ok);
//	} else {
//		appUI.setDisabled(btn_ok);
//	}
//
//	if(ck_sendvalidcode && btn_sendvalidcode.innerHTML.indexOf("重新") == -1) {
//		appUI.removeDisabled(btn_sendvalidcode);
//	} else {
//		appUI.setDisabled(btn_sendvalidcode);
//	}
//
//}
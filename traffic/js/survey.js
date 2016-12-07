//跳到登录页
function studentLogin() {
	$.ajax({
		type : "post",
		url : "Login.jsp",
		dataType : "jsp",
		success : function(data) {
			$("#body").html(data);
		}
	})
}
//跳到登录页
function teacherLogin() {
	$.ajax({
		type : "post",
		url : "Login.jsp",
		dataType : "jsp",
		success : function(data) {
			$("#body").html(data);
		}
	})
}
//下拉选择学校
function changeSchool() {
	$("#searchCategory_a").empty();
	var region = $("#searchCategory option:selected").val();
	$.getJSON("js/" + region + ".js", function(json) {
		for (var i = 0; i < json.length; i++) {
			var a = "<option value=" + json[i].value + ">" + json[i].name
					+ "</option>";
			$("#searchCategory_a").append($(a));
		}
		;
		changeClass();
	});
}
//下拉选择班级
function changeClass() {
	$("#searchCategory_b").empty();
	var region = $("#searchCategory_a option:selected").val();
	$.getJSON("js/" + region + ".js", function(json) {
		for (var i = 0; i < json.length; i++) {
			var a = "<option>" + json[i].name + "</option>";
			$("#searchCategory_b").append($(a));
		}
	});
}
//登录
function login() {
	var username=$("#username").val();
	var password=$("#password").val();
	if(username!=""&&password!=""){
		$("#login").submit();
	}else{
		alert("请输入用户名或密码");
	}
	
}
//学生验证
function check(id) {
	var region = $("#searchCategory option:selected").html();
	var school = $("#searchCategory_a option:selected").html();
	var classes = $("#searchCategory_b option:selected").val();
	var student = $("#student" + id).val();
	$.ajax({
		type : "post",
		url : "json/checkAction.action",
		data : "region=" + region + "&school=" + school + "&classes=" + classes
				+ "&student1=" + student,
		success : function(data) {
			if (student != null) {
				$("#check" + id).html(data.alert);
			}
		}
	})

}


//修改地址
function modify(id) {
	var modifylivein = $("#modifylivein").val();
	var r = confirm("确认修改？");
	if (r == true) {
		$.ajax({
			type : "post",
			url : "json/modifyAction.action",
			data : "modifylivein=" + modifylivein + "&id=" + id,
			success : function(data) {
				$("#modifylive").html(data.alert);
			}
		})
	} else {
		alert("修改取消！");
	}
}


// 触发填写说明出现
function mouseOver(id) {
	$("#" + id).html("<div class='tsi_say_box'>填写说明填写说明填写说明填写说明填写说明填写说明</div>");
}
// 触发填写说明消失
function mouseOut(id) {
	$("#" + id).html("");
}
//提交问卷
function insure() {
	var alerts = "未填入数据或勾选！";
	var startTime = $("input[name='startTime']").val();
	var endTime = $("input[name='endTime']").val();
	var transaction = $("input[name='transaction']:checked").val();
	var takeoff = $("input[name='takeoff']:checked").val();
	var leaveTime = $("input[name='leaveTime']").val();
	var reachTime = $("input[name='reachTime']").val();
	var leaveMethod = $("input[name='leaveMethod']:checked").val();
	var takein = $("input[name='takein']:checked").val();
	var eatAtHome = $("input[name='eatAtHome']:checked").val();
	var liveinSplace = $("input[name='liveinSplace']:checked").val();
	if (startTime != "" && endTime != "" && transaction != null
			&& takeoff != null && leaveTime != "" && reachTime != ""
			&& leaveMethod != null && takein != null && eatAtHome != null
			&& liveinSplace != null) {
		$("#insure").submit();
	}
	if(startTime==""){
		$("#startTime").append(alerts);
	}
	if(endTime==""){
		$("#endTime").append(alerts);
	}
	if(transaction==null){
		$("#transaction").append(alerts);
	}
	if(takeoff==null){
		$("#takeoff").append(alerts);
	}
	if(leaveTime==""){
		$("#leaveTime").append(alerts);
	}
	if(reachTime==""){
		$("#reachTime").append(alerts);
	}
	if(leaveMethod==null){
		$("#leaveMethod").append(alerts);
	}
	if(takein==null){
		$("#takein").append(alerts);
	}
	if(eatAtHome==null){
		$("#eatAtHome").append(alerts);
	}
	if(liveinSplace==null){
		$("#liveinSplace").append(alerts);
	}

}
//确认提交
function question() {
	$("#question").submit();
}
//返回修改
function backRoll() {
	window.history.back();
}
//取得学籍号放入学籍号输入框中
function queRule(){
	var region = $("#searchCategory option:selected").html();
	var school = $("#searchCategory_a option:selected").html();
	var classes = $("#searchCategory_b option:selected").val();
	var username=$("#username").val();
	$("#queRule").submit();
	$.ajax({
		type:"post",
		url:"json/question.action",
		data:"region="+region+"&school="+school+"&classes="+classes+"&username="+username,
		success:function(data){
			if(data.userid!=null){
				$("#password").val(data.userid);
			}else{
				$("#password").val(data.alert);
			}
		}
	});
}


















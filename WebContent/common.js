
var _url = function(url) {
//	return "http://4bf17888.ngrok.natapp.cn/wj/" + url;
//	return "http://localhost:8081/wj/" + url;
//	return "http://112.124.52.129/vcbbs/" + url;
	return vcbbsURLPath + url;
};

var post = function(url, val, callback) {
	_ajaxSubmit(_url(url), val, callback);
};

var postForm = function(url, formId, callback) {
	_ajaxForm(_url(url), $("#"+formId), callback);
};

function _ajaxSubmit(_url, _data, _callBack) {
	try {
		$.ajax({
			url: _url,
			async: false,
			dataType: "json",
			data: _data,
			type: "POST",
//			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			success: function(data) {
				if (_callBack != null) {
					if(data != null)
					{
						if(data.code == 0)
						{
							_callBack(data)
						}
						else
						{
							//mui.alert(data.message, '温馨提示', null);
						}
					}
				}
			},
			error : function(data)
			{
				mui.alert('数据获取异常', '温馨提示', null);
			}
		});
	} catch (e) {
		mui.alert('异常', '温馨提示', null);
	}
}

function _ajaxForm(_url, _frmJQObj, _callBack) {
	if (_frmJQObj == null || _frmJQObj.length != 1) {
		return false;
	}

	try {
		$.ajax({
			url: _url,
			async: false,
			dataType: "json",
			data: _frmJQObj.serialize(),
			type: "POST",
//			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			success: function(data) {
				if (_callBack != null) {
					if(data != null)
					{
						if(data.code == 0)
						{
							_callBack(data)
						}
						else
						{
							//mui.alert(data.message, '温馨提示', null);
						}
					}
				}
			},
			error : function(data)
			{
//				{readyState: 4, responseText: "", status: 404, statusText: "Not Found"}
				mui.alert('数据获取异常', '温馨提示', null);
//				if(data.status != "200")
//				{
//					alert("["+data.status+"]"+data.statusText, data.responseText, "error");
//				}
			}
		});
	} catch (e) {
		mui.alert('异常', '温馨提示', null);
	}
}


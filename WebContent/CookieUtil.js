
/***********************cookie 处理*********************/
var CookieUtil = {};
CookieUtil.setItem = function(name, value)
{
	this.setCookie(name, value, 1);
};
CookieUtil.getItem = function(name)
{
	try {
		if (document.cookie.length > 0) {
			var c_start = document.cookie.indexOf(name + "=")
			if (c_start != -1) {
				c_start = c_start + name.length + 1;
				var c_end = document.cookie.indexOf("^", c_start);
				if (c_end == -1)
					c_end = document.cookie.length;
				var c_end2 = document.cookie.indexOf(";", c_start);
				if (c_end2 == -1)
					c_end2 = document.cookie.length;
				c_end = c_end > c_end2 ? c_end2 : c_end;
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
	} catch (e) {
	}
	return "";
};
CookieUtil.setCookie = function(name, value, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

CookieUtil.cleanCookie = function(name) { // 使cookie过期
	this.setCookie(name, "", -1);
};

/***********************cookie 处理*********************/

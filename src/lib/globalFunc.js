/*
* @Author: worldzb
* @Date:   2018-01-19 18:51:15
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-22 17:17:30
*/


/**
 * 全局函数
 */
class GlobalFunc{
	construtor(){

	}
	static getUrlValue(name){
		var reg = new RegExp(""+name+"/([a-zA-z0-9]|[^\u4e00-\u9fa5])*$");
		var r = window.location.href;
		var Kv=r.match(reg);
		var res="";
		if(Kv!=null){
			Kv=Kv[0];
			res=Kv.split('/')[1];//从找出的键值对当中找到值。切割字符串
			//console.log(r);
			return decodeURIComponent(res);
		}else{
			console.log("error!没找到书名");
			return false;
		}
	}

	static heightSyn(objA,objB){
		$(objA).css('height',$(window).height()-$(objB).height()+20);
	}
	
	static focus(className,index){
		$(`${className} input`).eq(index).focus();
		//console.log(index);
	}

}
export default GlobalFunc;
function getByClass(className, context, tagName){
	context = context || document;
	tagName = tagName || "*";
	var result = [];
	var arr = context.getElementsByTagName(tagName);
	var reg = new RegExp("\\b"+className+"\\b");
	for(var i=0; i<arr.length; i++){
		if(reg.test(arr[i].className)){
			result.push(arr[i]);
		}
	}
	return result;
}
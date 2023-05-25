function threeSum(num) {
// write your code here
  var str ="";
	while(num){
		if(num&1)
			str+='1';
		else
			str+='0';
		num>>=1;//right shift
	}
	return str;
}
function rev(str){
	var res="";
	for(var i=str.length-1;i>=0;i--)
		res+=(str[i]);
	doucment.wite(res);
}

module.exports = threeSum;

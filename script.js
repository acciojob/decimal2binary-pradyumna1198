function threeSum(num) {
// write your code here
 /* var str ="";
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
*/
	let bnum = new Array(32);
	let i=0;
	while (n>0)
		{
			bnum[i]=n%2;
			n=Math.floor(n/2);
			i++;
			}
	for(let j=i-1;j>=0;j--)
		document.write(bnum[j]);
}

module.exports = threeSum;

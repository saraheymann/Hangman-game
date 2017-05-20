var reguloid$ = function(text){
	return{
		sayBars: function(){
			console.log("I got bars for days" + text);
		},
		sayBye: function(){
			console.log("Peace Out" + text);
		},
		verson: function(){
			console.log('OVER 9000');
		}
	}
}
// similar to an object.
// can use 'text' inside the function because it's in the local scope
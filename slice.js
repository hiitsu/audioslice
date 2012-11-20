var exec = require('child_process').exec,
	async = require('async')
	_ = require('underscore');

var a = _.range(10);
async.forEachSeries(a,function(b,done){
	var from = ('00000'+b*5).slice(-2);
	var duration = '02';
	var output = b+'.wav';
	var c = 'ffmpeg -ss 00:00:'+from+'.0 -t 00:00:'+duration+'.0 -i input.mp3 -y -ac 2 '+output;
	console.log(c);
	var child = exec(c,function (error, stdout, stderr) {
		console.log(output+' done!');
		//console.log('stdout: ' + stdout);
		//console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log(output+' exec error: ' + error);
		}
		return done();
	});
},function() {
	console.log('done!');
});

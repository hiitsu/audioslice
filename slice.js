var exec = require('child_process').exec,
	async = require('async')
	_ = require('underscore');

var a = _.range(48);
async.forEachSeries(a,function(b,done){
	var from = ('00000'+b).slice(-2);
	var duration = '00.95';
	//var output = 'n'+b+'.ogg';
	//var c = 'ffmpeg -ss 00:00:'+from+'.0 -t 00:00:'+duration+' -i octaves.wav -y -acodec libvorbis '+output;
	var wav = 'n'+b+'.wav',
		ogg = 'n'+b+'.ogg';
	var c = 'ffmpeg -ss 00:00:'+from+'.0 -t 00:00:'+duration+' -i octaves.wav -y '+wav;
	console.log(c);
	var child = exec(c,function (error, stdout, stderr) {
		console.log(wav+' done!');
		if( error ) {
			console.log(output+' exec error: ' + error);
		}
		var d = 'ffmpeg -i '+wav +' -acodec libvorbis -y '+ogg;
		var convert = exec(d,function(error) {
			console.log(wav+' to '+ogg+' done!');
			return done();
		});
	});
},function() {
	console.log('all done!');
});

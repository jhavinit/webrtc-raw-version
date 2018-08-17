var userAgent = new SIP.UA({                            // creating user agent 
    traceSip: true,
   // uri: '7020@192.168.54.112',
   // authorizationUser: '7020',
   // password: '1234',
   // wsServers: 'ws://192.168.54.112:5066',
   uri:'bob.111@sipjs.onsip.com',
    displayName: 'Bob'
});

var session1;

userAgent.on('invite', function(session) {
  session1 = session;
  session.accept();
});

var remoteVideo = document.getElementById('remoteVideo');        // getting elements from html
var localVideo = document.getElementById('localVideo');


function  startAudioCall(){
    var pc = session1.sessionDescriptionHandler.peerConnection;
	// Gets remote tracks
	var remoteStream = new MediaStream();
	pc.getReceivers().forEach(function(receiver) {
	remoteStream.addTrack(receiver.track);
	});
	remoteVideo.srcObject = remoteStream;
	remoteVideo.play();

	// // Gets local tracks
	var localStream = new MediaStream();
	pc.getSenders().forEach(function(sender) {
	localStream.addTrack(sender.track);
	});
	localVideo.srcObject = localStream;
	localVideo.play();
}
function endcall(){
	session1.terminate();
}

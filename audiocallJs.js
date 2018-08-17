var i=1;

var userAgent = new SIP.UA({                // creating the user agent
    traceSip: true,
    //uri: '7015@192.168.54.112',
    //authorizationUser: '7015',
    //password: '1234',
    //wsServers: 'ws://192.168.54.112:5066',
   uri: 'alice.123@sipjs.onsip.com',
   displayName: 'Alice'
});

var session = userAgent.invite('bob.111@sipjs.onsip.com');    // sending the invite request

var remoteVideo = document.getElementById('remoteVideo');        // getting elements from html
var localVideo = document.getElementById('localVideo');

function startAudioCall(){
    var pc = session.sessionDescriptionHandler.peerConnection;      // creating a peer connection with client

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
  session.terminate();
 }




  var arr=[];
  var Carr=[];

var messageRender = document.getElementById("displayArea");

function addContact(){
  var name = document.getElementById("newMessage1");
  var callerId = document.getElementById("newMessage2");
  Carr.push(callerId.value);
  arr.push(name.value);
  var msgTag = createMsgTag(name.value,callerId.value);
    messageRender.appendChild(msgTag);
    name.value = ""; 
    callerId.value = "";

}

function createMsgTag(name, callerId) {
    var msgTag = document.createElement('p');
    msgTag.className = 'message';
    // Create the "from" section
    var fromTag = document.createElement('span');
    fromTag.className = 'message-from';
    
    fromTag.appendChild(document.createTextNode(i +". " + name));
    i++;
    // Create the message body
    var msgBodyTag = document.createElement('span');
    msgBodyTag.className = 'message-body';
    msgBodyTag.appendChild(document.createTextNode("   "+ callerId));
    // Put everything in the message tag
    msgTag.appendChild(fromTag);
    msgTag.appendChild(msgBodyTag);
    return msgTag;
}
function searchIt(){
var find=document.getElementById('search');
for(var i=0;i<=arr.length;i++)
{
  if(find.value==arr[i])
  {
   alert(Carr[i]);
  }
}
}

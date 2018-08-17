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
  alert("INCOMING MESSAGE SESSION REQUEST FROM ----!");
  var cho=prompt('Accept session?(Y/N)');
  if(cho=='Y')
{  session1 = session;
   session.accept();
}
else{alert("Call Terminated");}
});

userAgent.on('message', function(msg){
	var msgTag = createMsgTag(msg.remoteIdentity.displayName, msg.body);
	messageRender.style.color="red";
    messageRender.appendChild(msgTag);
});

var messageRender = document.getElementById("bob-message-display");

function msg(){
	var text = document.getElementById("newMessage");
	userAgent.message("alice.123@sipjs.onsip.com", text.value);
	var msgTag = createMsgTag("Bob", text.value);
	messageRender.style.color="green";
    messageRender.appendChild(msgTag);
    text.value = ""; 
}

function createMsgTag(from, msgBody) {
    var msgTag = document.createElement('p');
    msgTag.className = 'message';
    // Create the "from" section
    var fromTag = document.createElement('span');
    fromTag.className = 'message-from';
    fromTag.appendChild(document.createTextNode(from + ':'));
    // Create the message body
    var msgBodyTag = document.createElement('span');
    msgBodyTag.className = 'message-body';
    msgBodyTag.appendChild(document.createTextNode(' ' + msgBody));
    // Put everything in the message tag
    msgTag.appendChild(fromTag);
    msgTag.appendChild(msgBodyTag);
    return msgTag;
}

function endcall(){
	session.terminate();
}
 

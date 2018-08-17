// function Startmessage(){
// 	var msgName=prompt("Whom Do You Want TO Message?");	
// }
var userAgent = new SIP.UA({                // creating the user agent
    traceSip: true,
    //uri: '7015@192.168.54.112',
    //authorizationUser: '7015',
    //password: '1234',
    //wsServers: 'ws://192.168.54.112:5066',
   uri: 'alice.123@sipjs.onsip.com',
   displayName: 'Alice'
});

var session = userAgent.invite('bob.111@sipjs.onsip.com');    

var messageRender = document.getElementById("alice-message-display");


userAgent.on('message', function(msg){                                    // recieving msgs from bob
	var msgTag = createMsgTag(msg.remoteIdentity.displayName, msg.body);   // createmsgtag recieves display name and msg of bob.
	messageRender.style.color="red";
    messageRender.appendChild(msgTag);                          // append the recieved messages by whom and msg to  log area    
});

function message(){
	var text = document.getElementById("newMessage");                 //textarea id
	userAgent.message("bob.111@sipjs.onsip.com", text.value);         
	var msgTag = createMsgTag("Alice", text.value);                      //appending alices own text to log
    messageRender.style.color="green";
    messageRender.appendChild(msgTag);                                //appending alices own text to log
    text.value = "";
                           
}

function createMsgTag(from, msgBody) {
    var msgTag = document.createElement('p');
    msgTag.className = 'message';
    // Create the "from" section
    var fromTag = document.createElement('span');
    fromTag.className = 'message-from';
    fromTag.style.fontSize="xx-large";
    fromTag.style.font="30"; 
    fromTag.appendChild(document.createTextNode(from + ':'));
    // Create the message body
    var msgBodyTag = document.createElement('span');
    msgBodyTag.className = 'message-body';
    msgBodyTag.appendChild(document.createTextNode(' ' + msgBody));
    // Put everything in the message tag
    msgTag.style.fontSize="x-large";
    msgTag.style.backgroundColor="Lightgrey";
    msgTag.style.borderRadius="30px";
    msgTag.style.height="50px";
    msgTag.appendChild(fromTag);
    msgTag.appendChild(msgBodyTag);
    return msgTag;
}
function endcall(){
	session.terminate();
}
// simple.on('ended', function() {
//         remoteVideoElement.style.visibility = 'hidden';
//         button.firstChild.nodeValue = 'video';
//     });



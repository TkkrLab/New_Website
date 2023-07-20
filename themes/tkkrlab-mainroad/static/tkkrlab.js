"use strict";

const state_prefix = "Space state: ";

var progress = {};
var client = null;
var subtitleSwapped = false;

setTimeout(fadeSubtitleText, 5000);

function mqttClientCreate() {
  client = new Paho.MQTT.Client("mqtt."+window.location.host.split('.').slice(-2).join('.'), Number(443), "website-"+String(Math.floor((Math.random() * 10000) + 1)));
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
}

function mqttOnConnect() {
  console.log("Connected to MQTT server");
  client.subscribe("#");
}

function mqttDoFail(e){
  //alert("MQTT subsystem has encountered an error: "+e);
  console.log("MQTT subsystem has encountered an error:",e);
}

function mqttClientConnect() {
  var options = {
    useSSL: true,
    onSuccess:mqttOnConnect,
    onFailure:mqttDoFail
  }
  client.connect(options);
}

function send() {
  var topic = document.getElementById('topic').value;
  var message = document.getElementById('message').value;
  sendMessage(topic, message);
}

function chatSend() {
  var nick = document.getElementById('chat-nick').value;
  var message = document.getElementById('chat-message').value;
  sendMessage('chat/send', "<"+nick+"> "+message);
}

function sendMessage(topic, content) {
  var message = new Paho.MQTT.Message(content);
  message.destinationName = topic;
  client.send(message);
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function stripHtmlTags(str)
{
  if ((str===null) || (str==='')) {
    return "";
  } else {
    str = str.toString();
  }
  //console.log("strip",str);
  str = str.replace('<','&lt;');
  str = str.replace('>','&gt;');
  str = str.replace('\r','');
  str = str.replace('\n','');
  return str;
}

var chat = [];

/*function drawChat(newMsg="") {
    while (chat.length < 20) {
      chat.push("< > ");
    }
    if (newMsg.length>0) {
      chat.push(newMsg);
    }
    while (chat.length > 20) {
      chat.shift(1);
    }
    var chatLines = "";//"<table>";
    for (var i = 0; i<chat.length; i++) {
      var sender = "";
      var message = "<i>Failed to parse message.</i>";
      try {
        var sender = stripHtmlTags(chat[i].split("<")[1].split(">")[0]);
        var message = stripHtmlTags(chat[i].split(">").slice(1).join('>'));
      } catch(err) {
        console.log('chat parse error',err);
      }
      //chatLines = chatLines + "<tr><td class='sender'>" + sender + "</td><td class='message'>" + message + "</td></tr>";
      chatLines = chatLines + "<strong>" + sender + "</strong " + message + "<br />";
    }
    //chatLines = chatLines + "</table>";
    var elem = document.getElementById("chat-content");
    elem.innerHTML = chatLines;  
}*/

var lastSpacestate = "UNKNOWN";
var temperature = null;
var humidity = null;
var printer = [{}, {}];
var printerName = ["Prusa Mini #1", "Prusa Mini #2"];

function escapeHtml(unsafe) {
    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function setSpaceState(state=null) {
        console.log("Spacestate changed to ", state);
        if (state != null) lastSpacestate = state;
        var elem = document.getElementById("space-status");
        var text = "";
        if (lastSpacestate=="1") {
                text = state_prefix+"<span class='open'>open</span>";
        } else if (lastSpacestate=="0") {
                text = state_prefix+"<span class='closed'>closed</span>";
        } else {
                text = state_prefix + "<span class='unknown'>unknown</span>";
        }
        if (temperature) text += "<br />T: "+escapeHtml(String(temperature).substring(0, 6))+"&deg;c";
        if (humidity)    text += " / H: "+escapeHtml(String(humidity).substring(0, 6))+"%"
        elem.innerHTML = text;
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:",message.destinationName,message.payloadString);

  if (message.destinationName=="tkkrlab/spacestate") {
          setSpaceState(message.payloadString);
  } else if (message.destinationName=="tkkrlab/sensors/temperature") {
          temperature = message.payloadString;
          setSpaceState();
  } else if (message.destinationName=="tkkrlab/sensors/humidity") {
          humidity = message.payloadString;
          setSpaceState();
  } else if (message.destinationName=="tkkrlab/sensors/3d/1") {
          printer[0] = JSON.parse(message.payloadString);
          showPrintStatus();
  } else if (message.destinationName=="tkkrlab/sensors/3d/2") {
          printer[1] = JSON.parse(message.payloadString);
          showPrintStatus();
  } else {
          //Ignore.
  }
}

function showPrintStatus() {
  var output = "";
  for (let i = 0; i < printer.length; i++) {
    output += printerName[i] + "<table><tbody>";
    if ("state" in printer[i]) {
      output += "<tr><td>State</td><td>" + escapeHtml(String(printer[i].state)) + "</td></tr>";
    }
    if ("progress" in printer[i] && printer[i].progress !== null) {
      output += "<tr><td>Progress</td><td>" + escapeHtml(String(printer[i].progress.completion * 100)) + "%</td></tr>";
      output += "<tr><td>Time remaining</td><td>" + escapeHtml(String(Math.round(printer[i].progress.printTimeLeft / 60))) + " minutes</td></tr>";
    }
    if ("job" in printer[i] && printer[i].job !== null) {
      output += "<tr><td>File</td><td>" + escapeHtml(String(printer[i].job.file.name)) + "</td></tr>";
    }
    output += "</tbody></table>";
  }
  document.getElementById("3dprinter").innerHTML = output;
}

/*function progressCreate() {
  if (document.getElementById("progress1")!=null) {
    console.log("Found progress1!");
    progress['test1'] = new ProgressBar.Line('#progress1', {
      strokeWidth: 4,
      color: '#F3ED18',
      duration: 1400,
      easing: 'easeInOut',
      trailColor: '#F0F0F0',
      trailWidth: 1 
    });
    progress['test1'].animate(0);
  } else {
    console.log("No progress #1!");
  }

  if (document.getElementById("progress2")!=null) {
    console.log("Found progress2!");
    progress['test2'] = new ProgressBar.SemiCircle('#progress2', {
      strokeWidth: 8,
      color: '#F3ED18',
      duration: 1400,
      easing: 'easeInOut',
      trailColor: '#F0F0F0',
      trailWidth: 1,
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('');
        } else {
          bar.setText(value);
        }
        bar.text.style.color = state.color;
      }
    });
    progress['test2'].animate(0);
  } else {
    console.log("No progress #2!");
  }
}*/

function fadeSubtitleText() {
        $(".logo__tagline").fadeOut(function() {
                $(this).text("Hackerspace Enschede").fadeIn();
        });
}

window.onload = function onLoad() {
  /*if (initial_status) {
    document.getElementById("space-status").innerHTML = state_prefix+"<span class='open'>open</span>";
  } else {
    document.getElementById("space-status").innerHTML = state_prefix+"<span class='closed'>gesloten</span>";
  }*/
  mqttClientCreate();
  mqttClientConnect();
  //progressCreate();
  //drawChat();
}

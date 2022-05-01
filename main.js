function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json", modelReady);
}
 function modelReady(){
 classifier.classify(gotResults);
 }
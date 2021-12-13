function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WWHPp8lWL/model.json',modelready)
}
function modelready(){
classifier.classify(gotresults);
}
function gotresults(error,results){
    if (error) {
        console.error(error)
    }else{
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="i can hear-"+results[0].label
        document.getElementById("result_confidence").innerHTML="Accuracy-"+Math.floor(results[0].confidence * 100)+"%";
        img1=document.getElementById('aliens-01')
        img2=document.getElementById('aliens-02')
        img3=document.getElementById('aliens-03')
        img4=document.getElementById('aliens-04')
if (results[0].label=="clap") {
 img1.src='aliens-01.gif' 
 img2.src='aliens-02.png'
 img3.src='aliens-03.png'  
 img4.src='aliens-04.png'
}
else if (results[0].label=="snapping") {
    img1.src='aliens-01.png' 
    img2.src='aliens-02.gif'
    img3.src='aliens-03.png'  
    img4.src='aliens-04.png'   
}
else if (results[0].label=="bell") {
    img1.src='aliens-01.png' 
    img2.src='aliens-02.png'
    img3.src='aliens-03.gif'  
    img4.src='aliens-04.png'   
}
 else if (results[0].label=="Background Noise") {
    img1.src='aliens-01.png' 
    img2.src='aliens-02.png'
    img3.src='aliens-03.png'  
    img4.src='aliens-04.gif'   
    }
}}
require('@tensorflow/tfjs');
const tmImage  =require('@teachablemachine/image');

require('dotenv').config()
    const URL = "https://teachablemachine.withgoogle.com/models/VnLQoAhGN/";
    const btn = document.getElementById("onInit")
    let model, webcam, labelContainer, maxPredictions;
    btn.addEventListener('click',init)


async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    const flip = true; 
    webcam = new tmImage.Webcam(376,367, flip);
    await webcam.setup({ facingMode: "environment" }); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { 
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {

    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

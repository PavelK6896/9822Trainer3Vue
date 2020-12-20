let audioChunks;
export const startRecord = e => {
    startRecord.disabled = true;
    stopRecord.disabled = false;
    // This will prompt for permission if not allowed earlier
    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {
            audioChunks = [];
            let rec = new MediaRecorder(stream);
            rec.ondataavailable = e => {
                audioChunks.push(e.data);
                if (rec.state == "inactive") {
                    let blob = new Blob(audioChunks, {type: 'audio/x-mpeg-3'});
                    recordedAudio.src = URL.createObjectURL(blob);
                    recordedAudio.controls = true;
                    recordedAudio.autoplay = true;
                    audioDownload.href = recordedAudio.src;
                    audioDownload.download = 'mp3';
                    audioDownload.innerHTML = 'download';
                }
            }
            rec.start();
        })
        .catch(e => console.log(e));
}

export const stopRecord = e => {
    startRecord.disabled = false;
    stopRecord.disabled = true;
    rec.stop();
}


const rv = () => {
    //11
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    //22
    // const colors = {
    //     красный: 'red',
    //     оранжевый: 'orange',
    //     желтый: 'yellow',
    //     зеленый: 'green',
    //     голубой: 'blue',
    //     синий: 'darkblue',
    //     фиолетовый: 'violet'
    // };
    //
    // const colorsList = Object.keys(colors);
    //
    // const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colorsList.join(' | ') + ' ;';

    //3
    const recognition = new SpeechRecognition();
    // const speechRecognitionList = new SpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);


    //44
    // recognition.grammars = speechRecognitionList;
    //recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start()

    recognition.onaudiostart = (e) => {
        console.log("начал  start ", e)
    }

    recognition.onaudioend = (e) => {
        console.log("закончил end ", e)
    }

    recognition.onend = (e) => {
        console.log("отключилилась onend", e)
    }

    recognition.onerror = (e) => {
        console.log(" ошибка  onerror", e)
    }

    recognition.onnomatch = (e) => {
        console.log("без существенного распознавания. onnomatch", e)
    }

    recognition.onresult = (e) => {
        console.log("возвращает результат onresult ", e)
    };

    recognition.onsoundstart = (e) => {
        console.log("при любом звуке ", e)
    };

    recognition.onsoundend = (e) => {
        console.log("перестал onsoundend ", e)
    };

    recognition.onspeechstart = (e) => {
        console.log("как речевой сигнал  onspeechstart ", e)
    };

    recognition.onspeechend = (e) => {
        console.log("прекращается обнаружение речи  onspeechend ", e)
    };

    recognition.onstart = (e) => {
        console.log("грамматики  onstart", e)
    };

}

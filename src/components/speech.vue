<template>
    <router-link style="margin: 0; padding: 0" to="/">home</router-link>

    <div class="div1">
        <p>{{resultArr}}</p>
        <p>{{timeSec}}</p>
        <textarea class="textarea1" v-model="message">
    </textarea>
        <button class="button1" @click="start">start</button>
        <button class="button1" @click="stop">stop</button>
    </div>

    <div style="display: flex; flex-wrap: wrap">
<!--        <button class="button1" @click="getVoice">getVoice</button>-->
        <button class="button1" @click="setVoice(v)" v-for="v in voice1">{{v.name}}</button>
    </div>

</template>

<script>
    const engine3 = new SpeechSynthesisUtterance();

    export default {
        name: "speech",
        data() {
            return {
                message: text,
                timeSec: 0,
                voice1: speechSynthesis.getVoices(),
                timer: {},
                resultArr: []
            }
        },
        created() {
            setTimeout(() => {
                this.voice1 = speechSynthesis.getVoices()
            }, 20)
        },
        methods: {
            start() {
                engine3.text = this.message
                window.speechSynthesis.speak(engine3);
                this.timeSec = 0;
                this.timer = setInterval(() => {
                    this.timeSec++
                }, 1000)

                engine3.onend = () => {
                    this.resultArr.push(this.timeSec)
                    this.timeSec = 0;
                    clearTimeout(this.timer)
                }
            },
            stop() {
                window.speechSynthesis.cancel()
                clearTimeout(this.timer)
            },
            setVoice(v) {
                engine3.voice = v
                engine3.rate = 100
                engine3.volume = 0.9
                console.log(engine3)
            },
            getVoice() {
                this.voice1 = speechSynthesis.getVoices()
            }
        }
    }

    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae est expedita illum
    inventore neque nesciunt quidem tempore. Ad aut consequatur dolores eius esse in incidunt ipsa minima nemo nesciunt
     quam ratione, recusandae rerum tempora unde. Atque aut consectetur consequatur cumque eum harum laudantium nam,
     necessitatibus officia, quaerat, quas vitae.`
</script>

<style scoped>
    .textarea1 {
        width: 50vw;
        height: 20vh;
    }

    .div1 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>

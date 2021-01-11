<template>
    <div class="div1">
    <div class="info1">
        <button class="button1" @click="back">back</button>
        <div> {{ index1 }} / {{length1}}</div>
        <button class="button1" @click="next">next</button>
    </div>

    <h1>{{ text1En }}</h1>
    <h1>{{ text2Ru }}</h1>
    </div>
</template>

<script>
    import * as data1 from "../data/data1";
    import {voiceSay} from "../util/speech";

    let arr = [...data1.data1, ...data1.data2, ...data1.data3]

    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        data() {
            return {
                index1: 1,
                length1: arr.length,
                text1En: arr[0][0],
                text2Ru: arr[0][1],
            }
        },
        methods: {
            next() {
                if (this.index1 >= arr.length) {
                    return
                }
                this.index1++
                this.show1()
            },

            back() {
                if (this.index1 === 1) {
                    return
                }
                this.index1--
                this.show1()
            },

            show1() {
                this.text1En = arr[this.index1 - 1][0]
                this.text2Ru = arr[this.index1 - 1][1]
                voiceSay(this.text1En, this.text2Ru, 5)
            }
        }
    }
</script>

<style scoped>
    .div1{
        text-align: center;
        margin-top: 60px;
    }

</style>

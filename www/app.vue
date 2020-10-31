<template>
    <div>
        <div class="container">

            <header>
                <h1>Vue Video Embed</h1>
                <h4>This is a component for Vue.js to utilize YouTube, Vimeo, DailyMotion, Coub iframe embed API easily.
                </h4>
            </header>

            <div class="form-group">
                <h2 class="text-center"><a href="https://morioh.com" title="Social Network for Developers">Social
                        Network for Developers</a></h2>
            </div>


            <div class="form-group">

                <video-embed :params="{autoplay: 1}" ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE&list=PLOtXQ1m0FkHBRg_6v8lJfX9AKKamgYrjC">
                </video-embed>


            </div>

            <div class="form-group">
                <button class="btn btn-primary" v-on:click="change">Change Url</button>
            </div>


            <div class="form-group">
                <video-embed src="https://vimeo.com/370293725"></video-embed>
            </div>

            <div class="form-group">
                <video-embed src="https://dai.ly/x7n7y06"></video-embed>
            </div>

            <div class="form-group">
                <video-embed src="https://coub.com/embed/22eztb"></video-embed>
            </div>

            <div class="form-group"> Wistia
                <video-embed src="https://fast.wistia.net/embed/iframe/lhr14k41n2"></video-embed>
            </div>



        </div>


    </div>
</template>


<script>


    export default {

        methods: {

            change() {

                this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

            }
        }

    }
</script>
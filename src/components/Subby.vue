<template>
    <div class="subby" v-if="subbyVisible" @click="isSubbyClicked">

        <div v-if="!subbyClicked" class="subby__caption">
            <p>Our newsletter will be available soon!</p> 

            <button class="subby__close" @click="subbyVisible = false"><img src="/svg/Close.svg" alt=""></button>
        </div>

        <div v-else class="subby__caption--clicked">
           
            <input class="subby__textfield" name="email" type="email" placeholder="enter your e-mail" v-model="email">

            <input type="submit" class="subby__submit" value="subscribe" for="email">
            <!-- <button type="submit" class="subby__submit">subscribe</button> -->

            <button class="subby__close" @click="subbyVisible = false"><img src="/svg/Close.svg" alt=""></button>
          
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            subbyVisible: true,
            subbyClicked: false,
            email: ''
        }
    },
    methods: {
        isSubbyClicked() {
            this.subbyClicked = true;
        }
    },
    computed: {
        backgroundColor() {
            console.log(this.subbyVisible);
            let thingy = document.querySelector(".subby");
            this.subbyVisible === true
                ? thingy.classList.add(".subbyBackground") 
                : thingy.classList.remove(".subbyBackground");
        }
    }
}
</script>

<style>
    .subby {
        padding: 7px;
        border-radius: 5px;
        background: lightgray;
        text-align: center;
        position: sticky;
        bottom: 10px;
        margin: var(--outside-margin);
    }

    .subby * {
        font-size: var(--caption);
    }

    .subbyBackground {
        background: var(--highlight);
        }

    .subby img {
        width: 0.9rem;
    }

    .subby__caption {
        height: 0.8rem;
        /* width: 100%; */
        position: relative;
    }

    .subby__caption:hover {
        background: var(--hightlight);
    }

    .subby__caption--clicked {
        height: 0.8rem;
        /* width: 100%; */
        position: relative;
    }

    .subby__textfield {
        margin-right: 20px;
        border: none;
        background: inherit;
        border-bottom: 2px solid black;
    }
    .subby_textfield:hover {
        background: lightgray;
    }

    .subby__submit {
        /* text-decoration: line-through; */
        border: none;
        background: var(--highlight);
        outline: 3px solid var(--highlight);
        border-radius: 3px;
        padding: 0 20px;
    }

    .subby__close {
        position: absolute;
        top: 0;
        right: 0; 
    }
</style>
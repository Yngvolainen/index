<template>
    <div class="subby" v-if="subbyVisible" @click="isSubbyClicked">
        <div v-if="!subbyClicked" class="subby__caption">
            <p>Our newsletter might be available soon!</p> 

            <button class="subby__close" @click="subbyVisible = false"><img src="/svg/Close.svg" alt=""></button>
        </div>

        <div v-else class="subby__caption--clicked">
            <input class="subby__textfield" name="email" type="email" placeholder="enter your e-mail" v-model="email">

            <input type="submit" class="subby__submit" value="subscribe" for="email">

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
    }
}
</script>

<style>
    .subby {
        padding: 7px;
        border-radius: 5px;
        background: var(--secondary);
        text-align: center;
        position: sticky;
        bottom: var(--bottom-small);
        margin: var(--outside-margin);
    }

    .subby * {
        font-size: var(--caption);
        font-family: "JetBrainsMono";
    }

    .subbyBackground {
        background: var(--highlight);
    }

    .subby img {
        width: 0.9rem;
    }

    .subby__caption {
        height: 0.8rem;
        position: relative;
    }

    .subby__caption:hover {
        background: var(--hightlight);
    }

    .subby__caption--clicked {
        height: 0.8rem;
        position: relative;
    }

    .subby__textfield {
        margin-right: 20px;
        border: none;
        background: inherit;
        border-bottom: 2px solid black;
    }

    .subby__submit {
        cursor: pointer;
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
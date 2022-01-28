<template>
    <div class="subby" v-if="subbyVisible" @click="subbyClicked = !subbyClicked">
        <div v-if="!subbyClicked" class="subby__caption">
            Our newsletter will be available soon!
            <button class="subby__close" @click="subbyVisible = !subbyVisible"><img src="/svg/Close.svg" alt=""></button>
        </div>

        <div v-else class="subby__caption--clicked">
            <span class="subby__textfield"> <input type="email" placeholder="Hodl yer horsies" v-model="email"></span>
            <button class="subby__submit">submit</button>
            <button class="subby__close" @click="subbyVisible = !subbyVisible"><img src="/svg/Close.svg" alt=""></button>
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

    .subby:hover {
        background: var(--highlight);
        }

    .subby img {
        width: 0.9rem;
    }

    .subby__caption {
        position: relative;
    }



    .subby__caption:hover {
        background: var(--hightlight);
    }

    .subby__textfield {
        margin-right: 20px;
    }
    .subby_textfield:hover {
        background: lightgray;
    }

    .subby__textfield input {
        border: none;
        background: inherit;
        border-bottom: 2px solid black;
    }

    .subby__submit {
        text-decoration: line-through;
        background: var(--highlight);
        outline: 3px solid var(--highlight);
        border-radius: 3px;
        padding: 0 20px;
    }

    .subby__close {
        position: absolute;
        right: 0px; 
    }
</style>
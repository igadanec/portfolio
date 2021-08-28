<template>
    <div class="progress-bar">
        <div v-for="item in grade" :key="item" class="grade" />
    </div>
</template>

<script>
    export default {
        props: {
            grade: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
.progress-bar {
    margin-top: 10px;
    display: flex;
    align-items: center;
    border: 2px solid $secondary-color;
    padding: 2px;
    border-radius: 20px;
    width: fit-content;
    min-width: 166px;
    box-sizing: border-box;
    .grade {
        width: 30px;
        height: 10px;
        background-color: $secondary-color;
        &:not(:last-child) {
            margin-right: 2px;
        }
        &:first-child {
            border-radius: 20px 0 0 20px;
        }
        &:nth-child(5) {
            border-radius: 0 20px 20px 0;
        }
    }
}
</style>
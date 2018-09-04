<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:"my-li"
}
</script>

<style scoped>
    .grid li{
        list-style: none;
        float: left;
        width: 33.3%;
        text-align: center;
        line-height: 100px;
        background: yellowgreen;
    }
</style>

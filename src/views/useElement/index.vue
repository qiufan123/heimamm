<template>
    <div>
        <h1>使用Element</h1>
        <h3>1.0 使用输入框</h3>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1">
        </el-input>
    </div>
</template>

<script>
export default {
  data () {
    return {
        input1: ''
    }
  }
}
</script>

<style>

</style>

<template>
    <div id="container">
        <ul class="tree">
            <tree :itemData="item" v-for="item in treeData" :key="treeData.id"></tree>
        </ul>
    </div>
</template>

<script>
import Tree from './Tree.vue'
export default {
    name: 'app',
    data: function() {
        return {
            treeData: [{"id":"1","name":"基础管理","id":"10","children":[{"name":"用户管理","id":"11"},{"name":"角色管理","id":"12","children":[{"name":"管理员","id":"121"},{"name":"CEO","id":"122"},{"name":"CFO","id":"123"},{"name":"COO","id":"124"},{"name":"普通人","id":"125"}]},{"name":"权限管理","id":"13"}]},{"id":"2","name":"商品管理"},{"id":"3","name":"订单管理","id":"30","children":[{"name":"订单列表","id":"31"},{"name":"退货列表","id":"32","children":[]}]},{"id":"4","name":"商家管理","children":[]}],
        }
    },
    components: {
        Tree
    },
}
</script>

<style>
    li  {
        list-style: none;
    }
</style>

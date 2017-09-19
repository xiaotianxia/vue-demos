<template>
    <div class="main ui">
        <div class="ui input">
            <input type="text" placeholder="请选择行业..." @focus="onFocus" :value="picked_industries">
        </div>
        <div class="industry-content" :class="{hide: isHide}">
            <div class="ui top attached tabular menu">
                <a class="item active" data-tab="first">一级行业</a>
                <a class="item" data-tab="second">二级行业</a>
                <a class="item" data-tab="third">三级行业</a>
            </div>
            <div class="ui bottom attached tab segment active" data-tab="first">
                <ul>
                    <li v-for="item in indudtries_firstLevel" :data-id="item.id" @click="onChooseFirstLevel(item.id, item.name)">{{item.name}}</li>
                </ul>
            </div>
            <div class="ui bottom attached tab segment" data-tab="second">
                <ul>
                    <li v-for="item in indudtries_secondLevel" :data-id="item.id" @click="onChooseSecondLevel(item.id, item.name)">{{item.name}}</li>
                </ul>
            </div>
            <div class="ui bottom attached tab segment" data-tab="third">
                <ul>
                    <li v-for="item in indudtries_thirdLevel" :data-id="item.id" @click="onChooseThirdLevel(item.id, item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'underscore';
export default {
    name: 'hello',
    props: ['industries'],
    data () {
        return {
            isHide: true,
            indudtries_firstLevel: this.industries,
            indudtries_secondLevel: [],
            indudtries_thirdLevel: [],
            picked_firstLevel_id: '',
            picked_secondLevel_id: '',
            picked_thirdLevel_id: '',
            picked_firstLevel_name: '',
            picked_secondLevel_name: '',
            picked_thirdLevel_name: '',
        }
    },

    computed: {
        picked_industries () {
            let picked;
            if(this.picked_firstLevel_name) {
                picked =  this.picked_firstLevel_name;
            }
            if(this.picked_secondLevel_name) {
                picked =  this.picked_firstLevel_name + '-' + this.picked_secondLevel_name;
            }
            if(this.picked_thirdLevel_name) {
                picked =  this.picked_firstLevel_name + '-' + this.picked_secondLevel_name + '-' + this.picked_thirdLevel_name;
            }
            return picked;
        }
    },

    methods: {
        onFocus (e) {
            this.isHide = false;
        },

        onChooseFirstLevel (id, name) {
            this.picked_firstLevel_id = id;
            this.picked_firstLevel_name = name;

            this.picked_secondLevel_id = '';
            this.picked_thirdLevel_id = '';

            this.picked_secondLevel_name = '';
            this.picked_thirdLevel_name = '';

            this.indudtries_secondLevel = [];
            this.indudtries_thirdLevel = [];

            this.indudtries_secondLevel = _.find(this.indudtries_firstLevel, function(item) {
                return item.id === id;
            }).children;
        },

        onChooseSecondLevel (id, name) {
            this.picked_secondLevel_id = id;
            this.picked_secondLevel_name = name;

            this.picked_firstLevel_id = '';
            this.picked_secondLevel_id = '';

            this.picked_thirdLevel_name = '';

            this.indudtries_thirdLevel = [];

            this.indudtries_thirdLevel = _.find(this.indudtries_secondLevel, function(item) {
                return item.id === id;
            }).children;
        },

        onChooseThirdLevel (id, name) {
            this.picked_thirdLevel_id = id;
            this.picked_thirdLevel_name = name;
        },
    },

    mounted() {
        $('.menu .item').tab();
    }
}
</script>

<style scoped>
    .hide {
        display: none;
    }
    .ui .ui.input {
        width: 400px;
    }
    .attached.tab.segment {
        max-height: 300px;
        overflow: auto;
    }
    .top.attached.tabular.menu {
        border: 1px solid #D4D4D5;
    }
    .attached.tab.segment {
        padding: 0;
        margin: 0;
    }
    .attached.tab.segment ul {
        padding: 10px;
    }
    .ui.tabular.menu .active.item {
        background-color: rgba(165, 139, 47, 0.15);
    }
    .industry-content {
        width: 400px;
    }
    .industry-content li {
        cursor: pointer;
        display: inline-block;
        min-width: 105px;
        text-align: center;
        height: 28px;
        line-height: 28px;
        margin: 0 8px 5px;
        background-color: #eee;
    }
    .industry-content li:hover {
        background-color: #aaa;
    }
</style>

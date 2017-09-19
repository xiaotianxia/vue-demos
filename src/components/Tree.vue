<template>
        <li>
            <div class="open-trigger" @click='toggle'>
                <div v-if='isFolder'>
                    <i class="folder icon" :class="[open ? 'open': '']"></i>
                    <label>
                        <span>{{itemData.name}}</span>   
                    </label>
                </div>
                <div v-else>
    				<label>
                        <input type="radio" :value="itemData.id" :name="$parent._uid" v-model="selectedItem" @change="onChoose">
                        <span>{{itemData.name}}</span>
                    </label>
                </div> 
            </div>
            <ul v-show="open" v-if='isFolder'>
                <tree v-for='childItem in itemData.children' :itemData='childItem' :key="itemData.children.id"></tree>
            </ul>
        </li>
</template>
<script type="text/javascript">
    export default {
        name: 'tree',
        props: ['itemData'],
        data() {
            return {
                open: false,
                selectedItem: ''
            }
        },
        computed: {
            isFolder: function() {
                return !!(this.itemData.children && this.itemData.children.length);
            }
        },
        methods: {
            toggle () {
                if(this.isFolder) {
                    this.open = !this.open
                }
            },
            onChoose () {
                console.log('selected: ' + this.selectedItem);
            }
        }
    }
</script>
<style>
	li {
		list-style: none;
	}
    label {
        user-select: none;
    }
    input[type=radio] {
        margin-right: 5px;
    }
    input[type=radio]:checked + span {
        background-color: #111;
        color: #fff;
    }
    .open-trigger,
    .open-trigger i,
    .open-trigger label {
        cursor: pointer;
    }
    .top {

    }
	.folder-open {
		
	}
	.folder {
		
	}
	
</style>
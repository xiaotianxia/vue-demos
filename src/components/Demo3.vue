<template>
    <div id="container">
        <upload txt="点击上传" 
                url="/upload" 
                types="jpg|jpeg|png|gif|html" 
                :max-size="10*1024*1024" 
                :extroData="extroData"
                @upload-success="onUploadSuccess"
        ></upload>
        <!-- 子组件回调给父组件的数据 -->
        <div v-if="fileUrl !=''"><a :href="fileUrl" target="_blank">预览</a></div>  
    </div>
</template>

<script>
import Upload from './Upload.vue'
export default {
    name: 'app',
    components: {
        Upload
    },
    data: function () {
        return {
            //formData里提交的其他参数
            extroData: {
                id: 123,
                name: 'mick'
            },
            fileUrl: '' 
        }
    },
    methods: {
        onUploadSuccess (e) {
            console.log(e);
            this.fileUrl = e.fileUrl;
        }
    }
}
</script>

<style>
    
</style>

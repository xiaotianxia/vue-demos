<template>
    <div class="upload">
        <button class="upload-btn" ref="uploadBtn" @click="onShowUpload">{{txt}}</button>
        <div v-show="show" class="upload-dropdown" ref="dropdown" @click.stop :style="dropdownStyle">
            <div class="upload-main">
                <div class="upload-trigger" @click="onSelectTrigger">+选择文件</div>
                <input type="file" ref="fileInput" style="display: none;" @change="onSelect">
            </div>
            <div class="upload-tip">
                <div v-if="status==0" class="upload-tip-error">上传失败</div>
                <div v-if="status==1" class="upload-tip-progress">上传中...{{percent}}%</div>
                <div v-if="status==2" class="upload-tip-success">上传成功<br>{{name}}</div>
                <div v-if="status==4" class="upload-tip-error">{{errorMsg}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'upload',
    props: {
        txt: {
            type: String,
            default: '上传文件'
        },
        url: {
            type: String,
            default: ''
        },
        types: {
            type: String,
            default: 'image'
        },
        maxSize: {
            type: Number,
            default: '1*1024*1024'
        },
        extroData: {
            default: {}
        }
    },
    data () {
        return {
            status: 3,  //1：上传中，2：成功，0：失败，3：未上传，4：其他错误提示
            show: false,
            errorMsg: '',
            percent: '0',
            name: '',
            dropdownStyle: {}
        }
    },
    methods: {
        onShowUpload () {
            this.reset();
            this.show = !this.show;
            let dropdownWidth = 200,
                $uploadBtn = this.$refs.uploadBtn,
                $dropdown = this.$refs.dropdown,
                btnOffset = $uploadBtn.getBoundingClientRect(),
                btnWidth = $uploadBtn.offsetWidth,
                btnHeight = $uploadBtn.offsetHeight;
            this.dropdownStyle = {
                top: btnOffset.top + btnHeight + 8 + 'px',
                left: btnOffset.left + btnWidth / 2 - dropdownWidth / 2 + 'px',
            };
        },
        onSelectTrigger () {
            this.reset();
            this.$refs.fileInput.click();
        },
        reset () {
            this.errorMsg = '';
            this.status = 3;
        },
        onSelect (e) {
            let file = e.target.files[0];
            this.onCheckFile(file);
        },
        onCheckFile (file) {
            if(file.size > this.maxSize) {
                this.status = 4;
                this.errorMsg = '文件过大';
                return false;
            }
            let typeValid = false;
            this.types.split('|').forEach(function(item) {
                typeValid = typeValid || file.type.indexOf(item) != -1;
            })
            if(!typeValid) {
                this.status = 4;
                this.errorMsg = '文件类型错误';
                return false;
            }

            this.onUpload(file);
        },
        onUpload (file) {
            let that = this,
                formData = new FormData();
                formData.append('file', file);
            Object.keys(this.extroData).forEach((key) => {
                formData.append(key, this.extroData[key]);
            });
            let uploadProgress = function (event) {
                if(event.lengthComputable) {
                    this.status = 1;
                    that.percent = 100 * Math.round(event.loaded) / event.total;
                    if(that.percent == 100) {
                        that.status = 2;
                    }
                }
            };

            new Promise(function (resolve, reject) {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', that.url, true);
                xhr.onreadystatechange = function () {
                    if (this.readyState !== 4) {
                        return;
                    }
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText));
                    } else {
                        reject(JSON.parse(this.responseText));
                    }
                };
                xhr.upload.addEventListener("progress", uploadProgress, false);
                xhr.send(formData);
            }).then(
                // 成功
                function (res) {
                    that.status = 2;
                    that.name = file.name;
                    that.$emit('upload-success', res);
                    setTimeout(() => {
                        that.show = false;
                    }, 1 * 1000);
                },
                // 失败
                function (res) {
                    that.status = 0;
                    console.log(res);
                    that.errorMsg = res.errorMsg;
                }
            );
        }
    }
}
</script>

<style scoped>
    .upload-btn {
        width: 100px;
    }
    .upload-dropdown {
        position: fixed;
        width: 200px;
        border: 1px solid #ccc;
        border-top: 4px solid #000;
        text-align: center;
        z-index: 9999;
        background-color: #fff;
        box-shadow: 0 2px 10px #d2cbcb, 
                    -2px 0 10px #d2cbcb,
                    2px 0 10px #d2cbcb;
    }
    .upload-dropdown:before {
        position: absolute;
        top: -20px;
        left: 100px;
        margin-left: -8px;
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #000 transparent;
    }
    .upload-trigger {
        cursor: pointer;
        width: 90%;
        height: 50px;
        margin: 5px auto;
        line-height: 50px;
        background-color: #eee;
        border: 1px dashed #ccc;

    }
    .upload-trigger:hover {
        background-color: #aaa;
    }
    .upload-tip {
        padding: 0 10px 5px;
        font-size: 12px;
    }
    .upload-tip-success {
        color: green;
    }
    .upload-tip-error {
        color: red;
    }
</style>

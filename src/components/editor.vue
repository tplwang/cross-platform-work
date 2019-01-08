<template>
    <div class="indexContainer">
        <!-- <div class="btnsContainer">
            <div class="btn" @click="getMdValueFn">获取mdValue</div>
            <div class="btn" @click="getHtmlValueFn">获取htmlValue</div>
        </div>
        <div class="maskContainer" v-if="dilogStatus">
            <div class="contentContainer">
            <div class="closeBtnContainer" @click="closeMaskFn"></div>
                <textarea class="showAreaContainer" v-model="msgShow" readonly></textarea>
            </div>
        </div> -->
        <div class="side-bar">
            <sideBar></sideBar>
        </div>
        <div class="editor-title">
            <input v-model="title" />
        </div>
        <div class="editorContainer">
            <markdown 
            :mdValuesP="msg.mdValue"  
            :fullPageStatusP="false" 
            :editStatusP="true" 
            :previewStatusP="true" 
            :navStatusP="true"
            :icoStatusP="true"  
            @childevent="childEventHandler"
            ></markdown>
        </div>
    </div>
</template>

<script>
import markdown from './markdown'
import sideBar from './sideBar'

export default {
    name: 'index',
    data() {
        return {
            msgShow:'我要显示的内容',
            dilogStatus:false,
            msg: {
                mdValue:'## Vue-markdownEditor'
            },
            title: '我要显示的内容'
        }
    },
    components: {
        markdown,
        sideBar
    },
    methods: {
        childEventHandler:function(res){
            // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
            this.msg=res;
        },
        getMdValueFn:function(){
            this.msgShow=this.msg.mdValue;
            this.dilogStatus=true;
        },
        getHtmlValueFn:function(){
            this.msgShow=this.msg.htmlValue;
            this.dilogStatus=true;
            
        },
        closeMaskFn:function(){
            this.msgShow='';
            this.dilogStatus=false;
        }
    }
}
</script>

<style lang="scss" scoped>
.indexContainer {
    width: 100%;
    height: 100%;
    background: #ddd;
    position: relative;

    .side-bar {
        float: left;
        width: 20%;
        height: 100%;
    }
}

.editorContainer {
    float: left;
    width: 79.8%;
    height: 100%;
    margin-left: 2px;
    border: 1px solid #ddd;
}

.editor-title {
    height: 50px;
    width: 80%;
    float: right;
    position: relative;
    left: 3px;
    background-color: #ffffff;
    text-align: left;
    font-size: 20px;
    padding-left: 50px;
    padding-top: 10px;
}

.editor-title input {
    border: none;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.editor-title input:focus {
    border: none;
    outline: none;
}
</style>
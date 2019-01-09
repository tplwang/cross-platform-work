<template>
    <div class="indexContainer">
        <div class="editor-title">
            <input v-model="note.title" />
            <Button type="primary" @click="saveNote">保存</Button>
        </div>
        <div class="editorContainer">
            <markdown 
            :mdValuesP="note.content"  
            :fullPageStatusP="false" 
            :editStatusP="true" 
            :previewStatusP="true" 
            :navStatusP="true"
            :icoStatusP="true"  
            @childevent="childEventHandler"
            :key="this.$route.params.id"
            ></markdown>
        </div>
    </div>
</template>

<script>
import markdown from './markdown'

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
    computed: {
        note: function() {
            return this.$store.state.notes[this.$route.params.id]
        }
    },
    components: {
        markdown
    },
    methods: {
        childEventHandler: function(res){
            // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
            this.msg=res;
        },
        getMdValueFn: function(){
            this.msgShow=this.msg.mdValue;
            this.dilogStatus=true;
        },
        getHtmlValueFn: function(){
            this.msgShow=this.msg.htmlValue;
            this.dilogStatus=true;
            
        },
        closeMaskFn: function(){
            this.msgShow='';
            this.dilogStatus=false;
        },
        saveNote: function() {
            this.$Message.success('保存成功！');
        }
    }
}
</script>

<style lang="scss" scoped>
.indexContainer {
    width: 100%;
    height: 95%;
    background: #ddd;
    position: relative;
}

.editorContainer {
    float: right;
    width: 100%;
    height: 100%;
    margin-left: 2px;
    border: 1px solid #ddd;
}

.editor-title {
    height: 50px;
    width: 100%;
    float: right;
    position: relative;
    left: 1px;
    background-color: #ffffff;
    text-align: left;
    font-size: 20px;
    padding-left: 50px;
    padding-top: 10px;
}

.editor-title input {
    border: none;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.editor-title input:focus {
    border: none;
    outline: none;
}

.editor-title button {
    margin-left: 8%;
    border-radius: 2em;
}
</style>
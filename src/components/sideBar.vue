<template>
    <div class="side-bar-content">
       <div class="add-note-icon" @click="addNote">
           <Icon type="md-add" size='35' color="#398dee"/>
           <span>新增文档</span>
       </div>
        <div class="note-lsit-content">
            <div class="note-list" v-for="(note, index) in notes" :key="index"
                @mouseover="showDeleteBtn(index)"
                @mouseleave="unShowDeleteBtn(index)">
                <img src="../../public/note-blue.png" @click="showEditor(index)">
                <p class="note-title" @click="showEditor(index)">{{ note.title }}</p>
                <span v-show="!note.showBtn">·  {{ note.time }}</span>
                <Button v-show="note.showBtn" type="error" class="delete" @click="deleteNote(index)">删除</Button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store'
import util from '../util'

export default {
    name: 'sideBar',
    data() {
    return {

    }
    },
    computed: {
        notes: () => { return store.state.notes }
    },
    methods: {
        addNote: function() {
            let time = util.getNowTime()
            store.state.notes.unshift({
                'title': '新建笔记',
                'time': time,
                'showBtn': false,
                'content': 'hhhhhhhh'
            })
        },
        showDeleteBtn: function(index) {
            this.notes[index].showBtn = true;
        },
        unShowDeleteBtn: function(index) {
            this.notes[index].showBtn = false;
        },
        showEditor: function(index) {
            this.$router.push({
                path: `/home/editor/${index}`
            })
        },
        deleteNote: function(index) {
            store.state.notes.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.side-bar-content {
    height: 100%;
    width: 100%px;
    background-color: white;
}

.add-note-icon {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgb(97, 95, 95);
    cursor: pointer;
}

.add-note-icon span {
    font-size: 16px;
    position: relative;
    top: 2px;
}

.note-list {
    height: 60px;
    background-color: white;
    border-bottom: 1px solid rgb(97, 95, 95);
    text-align: left;
    cursor: pointer;
}

.note-list:hover {
    background-color: #eeeeee;
}

.note-list img {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-top: 15px;
}

.note-title {
    font-size: 14px;
    margin-top: -30px;
    margin-left: 60px;
    width: 140px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.note-list span {
    font-size: 8px;
    float: right;
    margin-right: 5px;
    position: relative;
    top: -18px;
    width: 95px;
}

.delete {
    float: right;
    position: relative;
    right: 30px;
    top: -25px;
}
</style>

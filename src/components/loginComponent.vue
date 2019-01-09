<template>
  <div id="login-component">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="邮箱" style="width: 300px">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码" style="width: 300px">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <br>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" style="width: 300px" >登&nbsp;&nbsp;录</Button>
        </FormItem>
    </Form>
    <p @click="modal1 = true" class="no-count-btn">&nbsp;&nbsp;还没有账号？</p>
    <Modal v-model="modal1" width="360">
        <p slot="header" style="text-align:center">
            <span>注  册  云  笔  记  账  号</span>
        </p>
        <div style="text-align:center">
            <Input v-model="registerName" placeholder="邮箱" style="width: 300px" /><br/><br/>
            <Input v-model="regiserPwd" placeholder="密码" style="width: 300px" /><br/><br/>
            <Input v-model="registerPwdCheck" placeholder="确认密码" style="width: 300px" />
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long :loading="modal_loading" @click="register">注&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
        </div>
    </Modal>
  </div>

</template>

<script>
// import api from '../../api/api'
/* eslint-disable */ 

export default {
  name: 'LoginComponent',
  data () {
    return {
      modal1: false,
      registerName: '',
      regiserPwd: '',
      registerPwdCheck: '',
      formInline: {
          user: '',
          password: ''
      },
      ruleInline: {
          user: [
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
              this.$router.push({
                path: `/home/`
              })
          } else {
              this.$Message.error('Fail!');
          }
      })
    },
    ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style lang="scss" scoped>
#login-component {
  width: 400px;
  display: block;
  margin: auto;
}

.input {
  width: 300px;
  margin: 20px auto;
  border-radius: 2em;
}

.no-count-btn {
  margin: -10px auto;
  text-align: center;
  cursor: pointer;
}

.no-count-btn:hover {
  text-decoration: underline;
}

.regist-input {
  width: 300px;
  margin: 10px;
  margin-left: -100px;
  border-radius: 2em;
}

.veri-code-input {
  width: 200px;
  float: left;
}

.radio {
  width: 150px;
}
</style>

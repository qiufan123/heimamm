<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/title-logo.png" alt="">
        <span class="titlename">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>
      <!-- 使用表单元素完成结构 -->
      <el-form :rules="rules" class="loginform" ref="form" :model="form" label-width="0px">
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop="logincode">
          <!-- 使用栅格系统来添加内容 -->
          <el-row>
            <el-col :span="16">
              <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="form.logincode"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="loginCode" src="../../assets/login_captcha.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck" class="checkboxheight">
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbnt" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbnt" type="primary" @click="openregister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="rightimg" src="../../assets/login_banner_ele.png" alt="">
    <register ref="register" />
  </div>
</template>

<script>
// 导入注册组件
import register from './components/register.vue'
export default {
  data() {
    return {
      form: {
        // 手机号
        phone: '',
        // 密码
        password: '',
        // 验证码
        logincode: '',
        // 是否阅读
        isCheck: []
      },
      // 当前页面上 form 的验证规则
      rules: {
        phone:[
         { required: true, message: '号码不能为空', trigger: 'blur' },
          // 长度
          { min: 5, max: 10, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        password: [
          // 非空：
          { required: true, message: '密码不能为空', trigger: 'blur' },
          // 长度
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        logincode: [
          // 非空：
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          // 长度
          { min: 4, max: 4, message: '验证的长度应该为 4', trigger: 'blur' }
        ],
        isCheck: [
          // isCheck 的类型应该是一个数组
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 点击登录按钮时触发
    onSubmit() {
      // 调用 form 的验证方法
      this.$refs.form.validate(valid => {
        // valid 就是验证后返回的数据
        if (valid) {
          // 验证通过的逻辑
          this.$message({
            message: '验证通过',
            type: 'success'
          })
        } else {
          // 验证不通过的逻辑
          this.$message.error('验证不通过')
        }
      })
    },
    // 打开注册面板
    openregister () {
      // 使用 $refs 传参的方式将注册组件中的属性进行修改
      this.$refs.register.dialogFormVisible = true
    }
  },
  // 注册组件
  components: {
    register
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  background: linear-gradient(225deg, rgba(20, 147, 250, 1), rgba(1, 198, 250, 1));
  /* 使用 flex 布局 */
  display: flex;
  /* 让两者左右间隔相等 */
  justify-content: space-around;
  /* 设置上下居中 */
  align-items: center;
  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    /* padding 不会计入盒子的宽高中 */
    box-sizing: border-box;
    .title {
      display: flex;
      /* 上下对齐 */
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlename {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .loginform {
      margin-top: 29px;
    }
    .loginCode {
      width: 100%;
      height: 40px;
    }
    .checkboxheight {
      .el-form-item__content {
        line-height: 20px;
      }
    }
    .loginbnt {
      width: 100%;
    }
  }
  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>


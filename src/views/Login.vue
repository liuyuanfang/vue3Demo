<template>
   <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

     <el-form-item label="Password">
      <el-input  type="password" v-model="form.pwd"></el-input>
    </el-form-item>

     <el-form-item>
      <el-button type="primary" @click="submitForm('form')"
        >Login</el-button
      >
     
    </el-form-item>
   </el-form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data(){
      return {
          form:{
              name:"",
              pwd:""
          }
      }
  },
   methods: {
    submitForm() {
        this.$router.push({
            path:"home"
        });
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

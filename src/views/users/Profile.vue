<template>
  <div class="col-md-9 left-col">
    <div class="panel panel-default padding-md">
      <div class="panel-body">
        <h2><i class="fa fa-cog"></i>编辑个人资料</h2>
        <hr>
        <div class="form-horizontal" data-validator-form>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-6">
              <input v-model.trim="username" v-validator:input.required="{ title: '用户名', regex:/^[a-zA-Z]+\w*\s?\w*$/, error: '用户名要求以字母开头的单词字符' }" type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">性别</label>
            <div class="col-sm-6">
              <select v-model="sex" name="" id="" class="form-control">
                <option value="">未选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">兴趣</label>
            <div class="col-sm-6">
              <label for="" class="checkbox-inline">
                <input v-model="hobbies" type="checkbox" value="泡网">泡网
              </label>
              <label for="" class="checkbox-inline">
                <input v-model="hobbies" type="checkbox" value="运动">运动
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
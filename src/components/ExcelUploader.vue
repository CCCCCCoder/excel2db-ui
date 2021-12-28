<template>
  <el-upload
      :before-remove="beforeRemove"
      :file-list="fileList"
      :limit="3"
      :multiple="false"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      action="/api/excel/upload"
      class="upload-demo">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: "ExcelUploader"
}
</script>

<style scoped>

</style>

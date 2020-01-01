<template>
  <div>
    <h3>课程{{isNew ? '创建' : '编辑'}}</h3>
    <ele-form
      :form-data="data"
      :form-desc="fields"
      :submitBtnText="'保存'"
      :request-fn="save"
    ></ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!: string;
  data = {};

  fields = {
    name: { label: "课程名称", type: 'input' },
    cover: { label: "课程封面图", type: 'input' }
  };

  get isNew() {
    return !this.id;
  }

  async save(data) {
    const url = this.isNew ?  `courses` : `courses/${this.id}`
    const method = this.isNew ?  'post' : 'put'
    await this.$http[method](url, data)
    this.$message.success('保存成功')
    this.data = {}
    this.$router.go(-1)
  }

  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`);
    this.data = res.data;
  }

  created() {
    !this.isNew && this.fetch();
  }
}
</script>

<style>
  .ele-form > div {
    justify-content: flex-start !important
  }
</style>
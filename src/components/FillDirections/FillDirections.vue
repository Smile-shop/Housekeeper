<template>
	<div class="FillDirections_container">
		<p class="FillDirections_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>表格填写说明</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>项目</th>
		          <th>说明</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>商标名</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>通用名</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>购买城市</td>
		          <td>必填。国内购买填写具体的省市信息，如“广东省”，“广州市”。</td>
		        </tr>
		        <tr>
		          <td>批准文号（备案号）</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>生产厂家</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>生产批号</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>有效期致</td>
		          <td>必填。</td>
		        </tr>
		         <tr>
		         <td>购买商家</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>有无化妆品过敏史</td>
		          <td>“有”，“无”，“不详”三选一，选“有”须填写具体信息</td>
		        </tr>
				<tr>
		          <td>有无药物过敏史</td>
		          <td>“有”，“无”，“不详”三选一，选“有”须填写具体信息</td>
		        </tr>
		        <tr>
		          <td>有无食物过敏史</td>
		          <td>“有”，“无”，“不详”三选一，选“有”须填写具体信息</td>
		        </tr>
		        <tr>
		          <td>有无其他接触物过敏史</td>
		          <td>“有”，“无”，“不详”三选一，选“有”须填写具体信息</td>
		        </tr>
		        <tr>
		          <td>开始使用日期</td>
		          <td>必填。</td>
		        </tr>
		        <tr>
		          <td>化妆品不良反应发生日期</td>
		          <td>“有”，“无”，“不详”三选一，选“有”须填写具体信息</td>
		        </tr>
		        <tr>
		          <td>病情描述</td>
		          <td>必填，请填写产品使用后相应部位出现的症状，如：使用产品后颊部、眼周旁边出现红斑、丘疹等。</td>
		        </tr>
		        <tr>
		          <td>皮损部位</td>
		          <td>
		          	<span class="tips">勾选具体部位或者其他</span><br>
					<el-checkbox-group v-model="checkList">
					    <el-checkbox label="面部"></el-checkbox>
					    <el-checkbox label="额部"></el-checkbox>
					    <el-checkbox label="颊部"></el-checkbox>
					    <el-checkbox label="眼周"></el-checkbox>
					    <el-checkbox label="鼻部"></el-checkbox>
					    <el-checkbox label="口唇"></el-checkbox>
					    <el-checkbox label="口周"></el-checkbox>
					    <el-checkbox label="颏部"></el-checkbox>
					    <el-checkbox label="头皮"></el-checkbox>
					    <el-checkbox label="颈部"></el-checkbox>
					    <el-checkbox label="全身"></el-checkbox>
					    <el-checkbox label="胸部"></el-checkbox>
					    <el-checkbox label="腹部"></el-checkbox>
					    <el-checkbox label="背部"></el-checkbox>
					    <el-checkbox label="腋窝"></el-checkbox>
					    <el-checkbox label="上肢"></el-checkbox>
					    <el-checkbox label="下肢"></el-checkbox>
					    <el-checkbox label="手部"></el-checkbox>
					    <el-checkbox label="甲周"></el-checkbox>
					    <el-checkbox label="甲板"></el-checkbox>
					    <el-checkbox label="外耳廓"></el-checkbox>
					    <el-checkbox label="腹股沟"></el-checkbox>
					 </el-checkbox-group>
					 <el-form label-width="50px">
						  <el-form-item label="其他">
						    <el-input v-model="qt"></el-input>
						  </el-form-item>
					 </el-form>
		          </td>
		        </tr>
		        <tr>
		          <td>采取过何种处理措施</td>
		          <td>
		          	<span class="cai">
		          		<span>(1).停用可疑化妆品，“已停”或“未停”二选一，选“已停”须填写停用日期；</span><br>
						<span>(2).是否就诊，“是”或“否”二选一，选“是”须填写具体的就诊医院；</span><br>
						<span>(3).化妆品不良反应结果：“治愈”、“好转”、“未好转”、“有后遗症”、“不详”五选一；</span><br>
						<span>(4).补充说明：填写文字说明，非必填；</span><br>
						<span>(5).拍照上传附件：非必填；</span><br>
		          	</span>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
		<mt-button type="primary" class="send" @click="fill">填写</mt-button>
	</div>
</template>

<script type="text/javascript">
	// import './FillDirections.scss'
	export default {
		data(){
			return {
		        data:'',
		        cpmc:'',
		        cppc:'',
		        checkList:[],
		        qt:'',
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
 			fill(){
 				this.$router.push({name:'FillTable'})
 			},
		}
	}
</script>
<style lang="scss" src="./FillDirections.scss"></style>
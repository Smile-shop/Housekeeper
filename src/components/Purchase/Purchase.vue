<template>
	<div class="Purchase_container">
		<p class="Purchase_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click="goback">
			<span>进货管理</span>
		</p>
		<div class="main">
			<div class="select">
				<span class="label1">供货企业：</span>
				<el-select v-model="companyName" placeholder="请选择供货企业"  @change="getCompany">
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]" ></el-option>
			    </el-select><br>
			    <span class="label1">产品名称：</span>
				<el-select v-model="pname" placeholder="请选择产品名称" @change="getpname">
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]" ></el-option>
			    </el-select><br>
			    <span class="label1">批准文号：</span>
				<el-select v-model="wenhao" placeholder="请选择批准文号" @change="getwenhao">
			      <el-option v-for="arr in jod" :label="arr[0]" :value="arr[0]" ></el-option>
			    </el-select><br>
			</div>
			<div class="inputall">
				<p class="title">进货工作记录表<br><span>(记录保存期限不得少于两年)</span></p>
				<el-form :label-position="labelPosition" label-width="95px">
				  <el-form-item v-for="item in inputName" :label="item[0]">
				    <el-input :v-model="item[1]"></el-input>
				  </el-form-item>
				</el-form>
			</div>
			<mt-button type="primary" class="search">提交</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './Purchase.scss'
	export default {
		data(){
			return {
		        jod:[['店长'],['进货岗'],['销售岗'],['质量安全负责岗'],['质量安全追踪岗']],
		        inputName:[['检验人:','testname'],
		        		   ['检验日期:','jyrq'],
		        		   ['产品名称*:','cpmc'],
		        		   ['进货日期*:','jhrq'],
		        		   ['供货企业*:','ghqy'],
		        		   ['批准文号*:','pzwh'],
		        		   ['生产厂商*:','sccs'],
		        		   ['卫生许可证号*:','wsxkzh'],
		        		   ['规格:','gg'],
		        		   ['数量:','sl'],
		        		   ['生产日期:','scrq'],
		        		   ['生产批号:','scph'],
		        		   ['有效期:','yxq'],
		        		   ['批次检查报告:','jybg'],
		        		   ['合格证:','hgz'],
		        		   ['标签与文宣:','bqywx'],
		        		   ['质量情况:','zlqk'],
		        		   ['包装情况:','bzqk'],
		        		   ['外观质量:','wgzl'],
		        		   ['联系方式:','Tel'],
		        		   ['验收结论:','jl'],
		        		   ['备注:','Notes'],],
		        labelPosition:'right',		   
		        companyName:'',
		        pname:'',
		        wenhao:'',
		        testname:'',
		        jyrq:'',
		        cpmc:'',
		        jhrq:'',
		        ghqy:'',
		        pzwh:'',
		        sccs:'',
		        wsxkzh:'',
		        gg:'',
		        sl:'',
		        scrq:'',
		        scph:'',
		        yxq:'',
		        jybg:'',
		        hgz:'',
		        bqywx:'',
		        zlqk:'',
		        bzqk:'',
		        wgzl:'',
		        Tel:'',
		        jl:'',
		        Notes:'',
			}
		},
		created(){
			this.getdata();
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			getCompany(){
				console.log(this.companyName)
			},
			getpname(){
				console.log(this.pname)
			},
			getwenhao(){
				console.log(this.wenhao)
			},
 			getdata(){
 				this.$http.post(baseUrl+'/searchUser').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		        });
 			},
		}
	}
</script>
<style lang="scss" src="./Purchase.scss"></style>
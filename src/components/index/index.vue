<template>
	<div class="index_container">
		<div class="mmm" v-show="show" @click="isshow"></div>
		<img src="../../assets/imgs/person.png" alt="" class="person" @click="isshow">
		<transition name="el-zoom-in-top">
			<div class="all" v-show="show">
				<div class="jian"></div>
				<div class="menu">
					<ul>
						<li @click = "EditPsw"><a href="javascript:;"><i class="el-icon-edit edit"></i>密码修改</a></li>
						<li @click = "exit"><a href="javascript:;"><i class="el-icon-upload2 exit"></i>退出</a></li>
					</ul>
				</div>
			</div>
		</transition>
		<p class="index_text">
			<span>主页</span>
		</p>
		<div class="main">
			<ul class="mchli">
	    		
		    		<li @click = "housekeeper"><img src="../../assets/imgs/housekeeper (3).png" alt="" class="indeximg1"><br>激活管家</li>
		    	
		    	
		    		<li @click = "MonitoringManagement"><img src="../../assets/imgs/Supervision (3).png" height="91" width="68" alt="" class="indeximg2"><br>监管记录</li>
		    	
		    	
		    		<li @click = "EnterpriseSelfExamination"><img src="../../assets/imgs/Self-examination (3).png" height="91" width="68" alt="" class="indeximg3"><br>企业自查</li>
		    	
		    	
		    		<li @click = "AuditsManagement"><img src="../../assets/imgs/Auditmanagement (3).png" height="91" width="68" alt="" class="indeximg4"><br>审核管理</li>
		    	
		
		    		<li @click = "JobMonitoring"><img src="../../assets/imgs/monitor (3).png" height="91" width="68" alt="" class="indeximg5"><br>工作监控</li>
		    	
		    	<router-link to="FileManagement">
		    		<li><img src="../../assets/imgs/file (3).png" height="91" width="68" alt="" class="indeximg6"><br>档案管理</li>
		    	</router-link>
		    		<li @click = "Purchase"><img src="../../assets/imgs/Purchasemanagement (3).png" height="91" width="68" alt="" class="indeximg7"><br>进货管理</li>
		    		
		    		<li @click = "FirstSelf"><img src="../../assets/imgs/Inspection (3).png" height="91" width="68" alt="" class="indeximg8"><br>首营企业与产品自检</li>
		    	
		    		<li @click = "Sale"><img src="../../assets/imgs/Salesmanagement (3).png" height="91" width="68" alt="" class="indeximg9"><br>销售管理</li>
		    	
		    		<li @click = "QualityTracking"><img src="../../assets/imgs/Qualitytracking (3).png" height="91" width="68" alt="" class="indeximg10"><br>质量追踪</li>
		    	
		    	<!-- <router-link to="TraceabilityFile"> -->
		    		<li><img src="../../assets/imgs/file-19@3x.png" height="91" width="68" alt="" class="indeximg14"><br>追溯档案</li>
		    	<!-- </router-link> -->
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Cheats (3).png" height="91" width="68" alt="" class="indeximg11"><br>秘籍</li>
		    	</router-link>
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Auditorium (3).png" height="91" width="68" alt="" class="indeximg12"><br>大讲堂</li>
		    	</router-link>
		    	<router-link to="">	
		    		<li class="bott"><img src="../../assets/imgs/Messagetree (3).png" height="91" width="68" alt="" class="indeximg13"><br>消息树</li>
		    	</router-link>	
	    	</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './index.scss'
	export default {
		data(){
			return {
				show:false,
				juese:''
			}
		},
		created(){
			this.$indicator.close('加载中...'); 
			this.juese = JSON.parse(sessionStorage.getItem('juese'))
		},
		methods:{
			isshow(){
				this.show = !this.show;
				console.log(this.show)
			},
			exit(){
				this.$messagebox.confirm('确定退出该账号?').then(action => {
					sessionStorage.removeItem('user')
					sessionStorage.removeItem('juese')
					this.$router.push({name:'login'})
				});
			},
			EditPsw(){
				this.$router.push({name:'EditPsw'})
			},
			housekeeper(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(a == 0){
					this.$router.push({name:'housekeeper'})
				}
				
			},
			MonitoringManagement(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d == 0){
					this.$router.push({name:'MonitoringManagement'})
				}
				
			},
			EnterpriseSelfExamination(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d == 0){
					this.$router.push({name:'EnterpriseSelfExamination'})
				}
				
			},
			AuditsManagement(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d == 0){
					this.$router.push({name:'AuditsManagement'})
				}
				
			},
			JobMonitoring(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(a == 0 || d == 0){
					this.$router.push({name:'JobMonitoring'})
				}
				
			},
			Purchase(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(c == 0){
					this.$router.push({name:'Purchase'})
				}
				
			},
			FirstSelf(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(c == 0){
					this.$router.push({name:'FirstSelf'})
				}
				
			},
			Sale(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b == 0){
					this.$router.push({name:'Sale'})
				}
				
			},
			QualityTracking(){
				let a = this.juese.indexOf('店长')
				let b = this.juese.indexOf('销售岗')
				let c = this.juese.indexOf('进货岗')
				let d = this.juese.indexOf('质量安全负责岗')
				let e = this.juese.indexOf('质量安全追踪岗')
				if(a != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(b != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					return false;
					
				}else if(c != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(d != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
					
				}else if(e != 0){
					this.$messagebox.alert("您没有权限访问该功能！");
				}else if(e == 0){
					this.$router.push({name:'QualityTracking'})
				}
				
			},
			
		},
	
	}
</script>
<style lang="scss" src="./index.scss"></style>
<template>
	<div class="index_container">
		<div class="mmm" v-show="show" @click=isshow></div>
		<p class="index_text">
			<span>主页</span>
			<img src="../../assets/imgs/person.png" alt="" class="person" @click=isshow>
			<transition name="el-fade-in-linear">
				<div class="all" v-show="show">
					<div class="jian"></div>
					<div class="menu">
						<ul>
							<li><a href="javascript:;"><i class="el-icon-edit edit"></i>密码修改</a></li>
							<li @click = exit><a href="javascript:;"><i class="el-icon-upload2 exit"></i>退出</a></li>
						</ul>
					</div>
				</div>
			</transition>
		</p>
		<div class="main">
			<ul class="mchli">
	    		<router-link to="housekeeper">
		    		<li><img src="../../assets/imgs/housekeeper (3).png" alt="" class="indeximg1"><br>激活管家</li>
		    	</router-link>
		    	<router-link to="MonitoringManagement">
		    		<li><img src="../../assets/imgs/Supervision (3).png" height="91" width="68" alt="" class="indeximg2"><br>监管记录</li>
		    	</router-link>
		    	<router-link to="EnterpriseSelfExamination">	
		    		<li><img src="../../assets/imgs/Self-examination (3).png" height="91" width="68" alt="" class="indeximg3"><br>企业自查</li>
		    	</router-link>
		    	<router-link to="AuditsManagement">	
		    		<li><img src="../../assets/imgs/Auditmanagement (3).png" height="91" width="68" alt="" class="indeximg4"><br>审核管理</li>
		    	</router-link>
		    	<router-link to="JobMonitoring">	
		    		<li><img src="../../assets/imgs/monitor (3).png" height="91" width="68" alt="" class="indeximg5"><br>工作监控</li>
		    	</router-link>
		    	<router-link to="FileManagement">	
		    		<li><img src="../../assets/imgs/file (3).png" height="91" width="68" alt="" class="indeximg6"><br>档案管理</li>
		    	</router-link>
		    	<router-link to="regist">	
		    		<li><img src="../../assets/imgs/Purchasemanagement (3).png" height="91" width="68" alt="" class="indeximg7"><br>进货管理</li>
		    	</router-link>
		    	<router-link to="regist">	
		    		<li><img src="../../assets/imgs/Inspection (3).png" height="91" width="68" alt="" class="indeximg8"><br>首营企业与产品自检</li>
		    	</router-link>
		    	<router-link to="regist">	
		    		<li><img src="../../assets/imgs/Salesmanagement (3).png" height="91" width="68" alt="" class="indeximg9"><br>销售管理</li>
		    	</router-link>
		    	<router-link to="regist">
		    		<li><img src="../../assets/imgs/Qualitytracking (3).png" height="91" width="68" alt="" class="indeximg10"><br>质量追踪</li>
		    	</router-link>
		    	<router-link to="regist">
		    		<li><img src="../../assets/imgs/file-19@3x.png" height="91" width="68" alt="" class="indeximg14"><br>追溯档案</li>
		    	</router-link>
		    	<router-link to="regist">	
		    		<li class="bott"><img src="../../assets/imgs/Cheats (3).png" height="91" width="68" alt="" class="indeximg11"><br>秘籍</li>
		    	</router-link>
		    	<router-link to="regist">	
		    		<li class="bott"><img src="../../assets/imgs/Auditorium (3).png" height="91" width="68" alt="" class="indeximg12"><br>大讲堂</li>
		    	</router-link>
		    	<router-link to="regist">	
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
			}
		},
		created(){
			this.$indicator.close('加载中...'); 
		},
		methods:{
			isshow(){
				this.show = !this.show;
				console.log(this.show)
			},
			exit(){
				this.$messagebox.confirm('确定退出该账号?').then(action => {
					sessionStorage.removeItem('user')
					this.$router.push({name:'login'})
				});
			}
		},
	
	}
</script>
<style lang="scss" src="./index.scss"></style>
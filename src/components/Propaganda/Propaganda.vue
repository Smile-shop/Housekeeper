<template>
	<table class="listtable">
	    <tbody>
	         <tr>
	          <td>所经营的化妆品是否宣传疗效。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':c1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':c1s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>所经营的化妆品是否使用医疗术语。</td>
	          <td>
	          	<mt-button type="primary" @click="choose3()" class="yes" :class="{'yesActive':c2}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose4()" class="yes" :class="{'yesActive1':c2s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>所经营的化妆品是否标注有适应症。</td>
	          <td>
	          	<mt-button type="primary" @click="choose5()" class="yes" :class="{'yesActive':c3}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose6()" class="yes" :class="{'yesActive1':c3s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>所经营的化妆品是否存在虚假或夸大宣传。</td>
	          <td>
	          	<mt-button type="primary" @click="choose7()" class="yes" :class="{'yesActive':c4}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose8()" class="yes" :class="{'yesActive1':c4s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>检查店内宣传资料是否存在宣称预防、治疗疾病功能等违规行为。</td>
	          <td>
	          	<mt-button type="primary" @click="choose9()" class="yes" :class="{'yesActive':c5}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose10()" class="yes" :class="{'yesActive1':c5s}">否</mt-button><br>
	          </td>
	        </tr>
	    </tbody>
	</table>
</template>

<script type="text/javascript">
	// import './legitimate.scss'
	export default {
		data(){
			return {
				c1:'',
				c1s:'',
				c2:'',
				c2s:'',
				c3:'',
				c3s:'',
				c4:'',
				c4s:'',
				c5:'',
				c5s:'',
				xuanchuanliaoxiao:'',
				yiliaoshuyu:'',
				shiyingzheng:'',
				kuada:'',
				weigui:'',
			}
		},
		created(){
			let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.xuanchuanliaoxiao = 1;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.xuanchuanliaoxiao = 0;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose3(){
				this.c2 = true;
				this.c2s = false;
				this.yiliaoshuyu = 1;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose4(){
				this.c2 = false;
				this.c2s = true;
				this.yiliaoshuyu = 0;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose5(){
				this.c3 = true;
				this.c3s = false;
				this.shiyingzheng = 1;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose6(){
				this.c3 = false;
				this.c3s = true;
				this.shiyingzheng = 0;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose7(){
				this.c4 = true;
				this.c4s = false;
				this.kuada = 1;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose8(){
				this.c4 = false;
				this.c4s = true;
				this.kuada = 0;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose9(){
				this.c5 = true;
				this.c5s = false;
				this.weigui = 1;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
			choose10(){
				this.c5 = false;
				this.c5s = true;
				this.weigui = 0;
				let pro = JSON.stringify({xuanchuanliaoxiao:this.xuanchuanliaoxiao,yiliaoshuyu:this.yiliaoshuyu,shiyingzheng:this.shiyingzheng,kuada:this.kuada,weigui:this.weigui})
				sessionStorage.setItem('pro',pro)
			},
		},
	}
</script>

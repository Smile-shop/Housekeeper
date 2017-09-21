<template>
	<table class="listtable">
	    <tbody>
	        <!-- <tr v-for="(item,index) in list">
	          <td>{{item[0]}}</td>
	          <td>
	          	<mt-button type="primary" @click="choose(index,indexs)" class="yes" :class="{'yesActive': active == indexs&&actives == index}" v-for="(arr,indexs) in item[1]">{{arr}}</mt-button><br>
	          </td>
	        </tr> -->
	         <tr>
	          <td>所经营的国产化妆品是否由取得有效的《化妆品生产企业卫生许可证》的企业生产。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':c1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':c1s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>国产特殊用途化妆品是否取得“国产特殊用途化妆品批准文号”。</td>
	          <td>
	          	<mt-button type="primary" @click="choose3()" class="yes" :class="{'yesActive':c2}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose4()" class="yes" :class="{'yesActive1':c2s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>进口非特殊用途化妆品是否取得“进口非特殊用途化妆品备案凭证”（查看复印件）。</td>
	          <td>
	          	<mt-button type="primary" @click="choose5()" class="yes" :class="{'yesActive':c3}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose6()" class="yes" :class="{'yesActive1':c3s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>进口特殊用途化妆品是否取得“进口特殊用途化妆品卫生许可批件”（查看复印件）。</td>
	          <td>
	          	<mt-button type="primary" @click="choose7()" class="yes" :class="{'yesActive':c4}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose8()" class="yes" :class="{'yesActive1':c4s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>经营的进口化妆品是否在卫生许可批件或备案凭证有效期内入境。</td>
	          <td>
	          	<mt-button type="primary" @click="choose9()" class="yes" :class="{'yesActive':c5}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose10()" class="yes" :class="{'yesActive1':c5s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>进口化妆品是否经过检验检疫部门检验。</td>
	          <td>
	          	<mt-button type="primary" @click="choose11()" class="yes" :class="{'yesActive':c6}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose12()" class="yes" :class="{'yesActive1':c6s}">否</mt-button><br>
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
				c6:'',
				c6s:'',
				xukezheng:'',
				pizhunwenhao:'',
				beianpingzheng:'',
				xukepingjian:'',
				youxiaoqi:'',
				jianyan:''
			}
		},
		created(){
			let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.xukezheng = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.xukezheng = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose3(){
				this.c2 = true;
				this.c2s = false;
				this.pizhunwenhao = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose4(){
				this.c2 = false;
				this.c2s = true;
				this.pizhunwenhao = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose5(){
				this.c3 = true;
				this.c3s = false;
				this.beianpingzheng = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose6(){
				this.c3 = false;
				this.c3s = true;
				this.beianpingzheng = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose7(){
				this.c4 = true;
				this.c4s = false;
				this.xukepingjian = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose8(){
				this.c4 = false;
				this.c4s = true;
				this.xukepingjian = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose9(){
				this.c5 = true;
				this.c5s = false;
				this.youxiaoqi = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose10(){
				this.c5 = false;
				this.c5s = true;
				this.youxiaoqi = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose11(){
				this.c6 = true;
				this.c6s = false;
				this.jianyan = 1;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
			choose12(){
				this.c6 = false;
				this.c6s = true;
				this.jianyan = 0;
				let leg = JSON.stringify({xukezheng:this.xukezheng,pizhunwenhao:this.pizhunwenhao,beianpingzheng:this.beianpingzheng,xukepingjian:this.xukepingjian,youxiaoqi:this.youxiaoqi,jianyan:this.jianyan})
				sessionStorage.setItem('leg',leg)
			},
		},
	}
</script>
<style lang="scss" src="./legitimate.scss"></style>
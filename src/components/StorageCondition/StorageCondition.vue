<template>
	<table class="listtable">
	    <tbody>
	         <tr>
	          <td>检查化妆品经营企业经营场所和仓库是否保持内外整洁。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':c1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':c1s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>是否有通风、防尘、防潮、防虫、防鼠等设施。</td>
	          <td>
	          	<mt-button type="primary" @click="choose3()" class="yes" :class="{'yesActive':c2}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose4()" class="yes" :class="{'yesActive1':c2s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>散装和供顾客试用的化妆品是否有防污染设施。</td>
	          <td>
	          	<mt-button type="primary" @click="choose5()" class="yes" :class="{'yesActive':c3}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose6()" class="yes" :class="{'yesActive1':c3s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>是否按规定的储存条件储存化妆品。</td>
	          <td>
	          	<mt-button type="primary" @click="choose7()" class="yes" :class="{'yesActive':c4}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose8()" class="yes" :class="{'yesActive1':c4s}">否</mt-button><br>
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
				neiwaizhengjie:'',
				shesi1:'',
				wuranshesi:'',
				huazhuangpin:'',
			}
		},
		created(){
			let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
			sessionStorage.setItem('sto',sto)
		},
		methods: {
			choose1(){
				this.c1 = true;
				this.c1s = false;
				this.neiwaizhengjie = 1;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose2(){
				this.c1 = false;
				this.c1s = true;
				this.neiwaizhengjie = 0;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose3(){
				this.c2 = true;
				this.c2s = false;
				this.shesi1 = 1;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose4(){
				this.c2 = false;
				this.c2s = true;
				this.shesi1 = 0;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose5(){
				this.c3 = true;
				this.c3s = false;
				this.wuranshesi = 1;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose6(){
				this.c3 = false;
				this.c3s = true;
				this.wuranshesi = 0;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose7(){
				this.c4 = true;
				this.c4s = false;
				this.huazhuangpin = 1;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
			choose8(){
				this.c4 = false;
				this.c4s = true;
				this.huazhuangpin = 0;
				let sto = JSON.stringify({neiwaizhengjie:this.neiwaizhengjie,shesi1:this.shesi1,wuranshesi:this.wuranshesi,huazhuangpin:this.huazhuangpin})
				sessionStorage.setItem('sto',sto)
			},
		},
	}
</script>

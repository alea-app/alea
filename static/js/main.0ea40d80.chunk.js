(this.webpackJsonpalea=this.webpackJsonpalea||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var s=a(3),i=a(4),n=a(2),d=a(6),c=a(5),l=a(1),h=a.n(l),u=a(8),o=a.n(u),r=(a(13),a.p,a(14),a(0));var b=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,s=e.getFID,i=e.getFCP,n=e.getLCP,d=e.getTTFB;a(t),s(t),i(t),n(t),d(t)}))},j=function(t){Object(d.a)(a,t);var e=Object(c.a)(a);function a(t){var i;return Object(s.a)(this,a),(i=e.call(this,t)).state={value:""},i.handleChange=i.handleChange.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(t){this.setState({value:t.target.value}),this.props.updateAlea(t.target.value)}},{key:"render",value:function(){return this.props.diceNumber>1?Object(r.jsxs)("div",{className:"RollModRadio",onChange:this.handleChange,children:[Object(r.jsx)("input",{type:"radio",value:"Advantage",name:"rollMod"})," Advantage",Object(r.jsx)("input",{type:"radio",value:"Disadvantage",name:"rollMod"})," Disadvantage"]}):null}}]),a}(h.a.Component),p=function(t){Object(d.a)(a,t);var e=Object(c.a)(a);function a(t){var i;return Object(s.a)(this,a),(i=e.call(this,t)).state={value:""},i.handleChange=i.handleChange.bind(Object(n.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(t){this.setState({value:t.target.value}),this.props.updateAlea(t.target.value)}},{key:"handleSubmit",value:function(t){t.preventDefault()}},{key:"render",value:function(){return Object(r.jsx)("form",{className:"NumberForm",onSubmit:this.handleSubmit,children:Object(r.jsxs)("label",{children:[this.props.label,Object(r.jsx)("input",{type:"number",value:this.state.value,onChange:this.handleChange})]})})}}]),a}(h.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsx)("button",{onClick:this.props.onClick,children:this.props.label})}}]),a}(h.a.Component),O=function(t){Object(d.a)(a,t);var e=Object(c.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.showResults?this.props.percentFlag?Object(r.jsxs)("div",{className:"ShowResults",children:[" ",this.props.results.toFixed(2),"% \xa0\xa0\xa0\xa0","With -5 to hit: "," \xa0\xa0\xa0\xa0",this.props.moddedResults.toFixed(2),"%"]}):Object(r.jsxs)("div",{className:"ShowResults",children:["  ",this.props.results.toFixed(2)," \xa0\xa0\xa0\xa0","With +10 to damage: "," \xa0\xa0 \xa0\xa0",this.props.moddedResults.toFixed(2)]}):null}}]),a}(h.a.Component),g=function(t){Object(d.a)(a,t);var e=Object(c.a)(a);function a(t){var i;return Object(s.a)(this,a),(i=e.call(this,t)).state={d20s:1,attackMod:"",ac:"",attackCalcReady:!1,hitChance:100,d4s:0,d6s:0,d8s:0,d10s:0,d12s:0,damageMod:0,damageCalcReady:!1,damageTotal:0,rollMod:"",moddedHitChance:0,moddedDamageTotal:0},i}return Object(i.a)(a,[{key:"updateD20s",value:function(t){var e=Object.assign({},this.state);e.d20s=t,e.attackCalcReady=!1,e.hitChance=100,this.setState(e)}},{key:"updateAttack",value:function(t){var e=Object.assign({},this.state);e.attackMod=t,e.attackCalcReady=!1,e.hitChance=100,this.setState(e)}},{key:"updateAc",value:function(t){var e=Object.assign({},this.state);e.ac=t,e.attackCalcReady=!1,e.hitChance=100,this.setState(e)}},{key:"updateD4s",value:function(t){var e=Object.assign({},this.state);e.d4s=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateD6s",value:function(t){var e=Object.assign({},this.state);e.d6s=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateD8s",value:function(t){var e=Object.assign({},this.state);e.d8s=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateD10s",value:function(t){var e=Object.assign({},this.state);e.d10s=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateD12s",value:function(t){var e=Object.assign({},this.state);e.d12s=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateDamageMod",value:function(t){var e=Object.assign({},this.state);e.damageMod=t,e.damageCalcReady=!1,this.setState(e)}},{key:"updateRollMod",value:function(t){var e=Object.assign({},this.state);e.rollMod=t,this.setState(e)}},{key:"handleAttackClick",value:function(){var t=Object.assign({},this.state);t.attackCalcReady=!0;var e=.05*(20-(this.state.ac-this.state.attackMod)+1),a=e-.25;e>.95&&(e=.95),e<.05&&(e=.05),a>.95&&(a=.95),a<.05&&(a=.05);var s=e,i=a;if(this.state.d20s>1){if("Advantage"===this.state.rollMod)for(var n=1;n<this.state.d20s;n++)e=e+s-e*s,a=a+i-a*i;if("Disadvantage"===this.state.rollMod)for(var d=1;d<this.state.d20s;d++)e*=s,a*=i}e*=100,a*=100,t.hitChance=e,t.moddedHitChance=a,this.setState(t)}},{key:"handleDamageClick",value:function(){var t=Object.assign({},this.state);t.damageCalcReady=!0;var e=2.5*this.state.d4s+3.5*this.state.d6s+4.5*this.state.d8s+5.5*this.state.d10s+6.5*this.state.d12s+1*this.state.damageMod,a=e+10;e*=this.state.hitChance/100,a*=this.state.moddedHitChance/100,t.damageTotal=e,t.moddedDamageTotal=a,this.setState(t)}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"alea",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:" Accuracy Calculation "})}),Object(r.jsx)(p,{updateAlea:this.updateD20s.bind(this),label:"Number of d20s:"}),Object(r.jsx)(j,{updateAlea:this.updateRollMod.bind(this),diceNumber:this.state.d20s}),Object(r.jsx)(p,{updateAlea:this.updateAttack.bind(this),label:"Attack Mod:"}),Object(r.jsx)(p,{updateAlea:this.updateAc.bind(this),label:"Target AC:"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{onClick:this.handleAttackClick.bind(this),label:"Calculate Attack Chance!"}),Object(r.jsx)(O,{showResults:this.state.attackCalcReady,results:this.state.hitChance,percentFlag:!0,moddedResults:this.state.moddedHitChance})]}),Object(r.jsx)("br",{}),Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:" Damage Calculation "})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{updateAlea:this.updateD4s.bind(this),label:"D4s:"}),Object(r.jsx)(p,{updateAlea:this.updateD6s.bind(this),label:"D6s:"}),Object(r.jsx)(p,{updateAlea:this.updateD8s.bind(this),label:"D8s:"}),Object(r.jsx)(p,{updateAlea:this.updateD10s.bind(this),label:"D10s:"}),Object(r.jsx)(p,{updateAlea:this.updateD12s.bind(this),label:"D12s:"}),Object(r.jsx)(p,{updateAlea:this.updateDamageMod.bind(this),label:"Damage Mod:"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{onClick:this.handleDamageClick.bind(this),label:"Calculate Average Damage!"}),Object(r.jsx)(O,{showResults:this.state.damageCalcReady,results:this.state.damageTotal,percentFlag:!1,moddedResults:this.state.moddedDamageTotal})]})]})}}]),a}(h.a.Component);o.a.render(Object(r.jsx)(g,{}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.0ea40d80.chunk.js.map
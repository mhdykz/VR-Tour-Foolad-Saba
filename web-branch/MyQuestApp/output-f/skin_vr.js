// Garden Gnome Software - VR - Skin
// Pano2VR 7.1.12/21036
// Filename: myskin.ggsk
// Generated 2026-05-17T12:13:05

function pano2vrVrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var vrSkinAdded=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.vrSkinObj=this;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,geometry,material;
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.skinGroup);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.userData.ggId)) r.push(e);
			} else {
				if (e.userData.ggId==id) r.push(e);
			}
			if (e.children.length > 0) {
				for(var i=0;i<e.children.length;i++) {
					stack.push(e.children[i]);
				}
			}
		}
		return r;
	}
	
	this.posInSkin=function(el, clonerParent) {
		var curParent = el.parent;
		var pos = {x: el.position.x, y: el.position.y};
		while (curParent && curParent != me.skinGroup) {
			pos.x += curParent.position.x;
			pos.y += curParent.position.y;
			if (curParent.parent) {
				curParent = curParent.parent;
			} else {
				curParent = clonerParent
			}
		}
		return pos;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	this.languageChanged=function() {
		if (!me.skinGroup) return;
		var stack=[];
		stack.push(me.skinGroup);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.userData && e.userData.ggUpdateText) {
				e.userData.ggUpdateText();
			}
			for(var i=0;i<e.children.length;i++) {
				stack.push(e.children[i]);
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.skin_nodechangeCallback = function() {
		me.ggUserdata=player.userdata;
	};
	this.addSkin=function() {
		if (me.vrSkinAdded) return;
		me.vrSkinAdded = true;
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this.skinGroup=player.getSkinGroup();
		geometry = new THREE.PlaneGeometry(0.46, 0.47, 5, 5 );
		geometry.name = 'Svg 4_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABeCAYAAACuJ3NTAAAFnklEQVR4nO2cXagVVRiG35VhlkoZgT9oUh0Ng1CiVBIlCqWIMLoIKi9E6yKDvKk0ApGgoh+6MyE1hbwoSAgLJMSQoxFEPwZR0B9CaglZmlkeU58uZg4c9/nW7Nlr7z1nb/f3XH6z1jfvfs8636yZWWskx3Ecx3Ecx3Ecx3Ecx3Ecx3GcXgOYA7wF7ACWAaGi8wZgDXAEOA5sBK6o4twjBrACGOBCnqvo3CsZzgfApVWcv1KA0cAbxg8GOAFcUoGG3ZHzb6rqv6wSgEnAvsiPHeSqCnTsLDj/+nafvxKAecChOmYDjKtAy2LgfIGGpe3W0Faw6/WIGZ5rerJAwzFgWhU6WgrF9XpEDc/1vVCgo59uuoiS1ev9DZpdteGBbFoa45mqtDQFWb0+nGB2pY'+
	'bnWscAX0W0nAQmV6mnYcjmuPXq9T7g804wPNc8IzfXYlvVekpB+Xq9IW/7YacYnutfVqB57khoikK5ej0ArBjSp9MMD8CeiKadI6HJBJhP/Xp9qHaUdJrhuaZZwH8RXbNGStdQgY9Srl5PMvq2zHCyP/pqYAlN3poDr0d0bW4mb1OQ1eCNdYyGrKaPjuRoieHASzX936WJ5zHAROBfQ9cAcE1R3+ikHbhe0u1FbQqYLOnFOm3OSFoVQtiSkL80QJ+ktTXhByV9J2l9Ss4QwlFgi6Qnag6NlvSApDcbFbkcOFtidKZyGJhXQkfTIxy4t0BH8vMQYDq2Rx83muhK4J8mzKzHfox6HdHSCsOnEL/I/QXc2JBBF+beZeQ8T8GNkFXH+iRdniqiDhsl3RlC+K1N+YcRQjgiaU3k8HhJrzaRfrt1Skn3lc4A3NrkCLYYAFY2'+
	'+mto3UUzAFsK9N3WqLY871jglJHv7Viftr85kXRY0qJ2XxyLCCEg6XFJ/ZEmzyfmPSVpj3FoYaxPIzOQY5KealDTCUm7Qwh/N9iv5YQQzgAPS/pBw0vm3cDcEMJnCan3angJmQ5MCyH8Urc38ZLyWoKYpmhVSanJGXu+/XJivlsi+cwZUBUlpdN4RdLvRvyexHxfSzptxG+wGvec4SGEE7JnFzcDUxPynVNWpmrps9r3nOE570fiSxLzfW/EfIQP4RNlk4BazFFZAmuEmzc/PWl4COGspP3GoVJ3wAZHjdhYq2FPGp5z0IhNTMx13IiZM6leNvxPI5Y6wgeM2HirYS8bbkG7T9DLhl9txFIfql1mxE5aDXvZ8OuMmHXxK4O1uNR8nNGThpMtT1tgHEod4dbF9pTVsCcNl7RIdkmx5tNlmGHEfrUa9qrh90fiHyXmm2'+
	'nEfrIa9pzhwARJy4xDB0II5qisk2+U7BH+o9W+5wxX9gZ/ghHflZhvtqQxRtwc4Y28gFgOfNOgmI55ASFJwLWSVkcOv5eY9o5I/MtSvQteQDTDIym/hNauvBoDfBrJl7wuEHsv0MFY+6pKynYSXiK3CrKlbZskzY80WZeYd5yku4xD+2J9LMPbdXu7mYJlbW1mrewLpSTtCCEcSMy7VJK1WTZq+DC4+BYCTSW+iuwPsiV9SdCKhUD5K6hVks6lCqnDAklfUGKpW4uYLWmUET8v6aEQws8pSYHpkhYbh/YWTS/NWUoIYRvQr/TFnH2SirZoT5HUD7R9Maekb5WVydolys+GEFJvdCTpadl/yHeayJkO5beXVLFceV1N/600sUacbDfHaUNX3eXKbYdyG6jMut4qw/Ncc4DHgIXNmJ3n6rwF+UOh/JaTeTX9OnHLyU10'+
	'8paTQfBNVdVDg3W9Aw3vnm2DQ6E7N8bOpNs2xg6F7tv6fSCipfO3fg9C93zcYGuBlu74uMEgZLV6QwcbfvF8vmMo+AdqqgeYi3+CqVoo95GxKgy/+D8yNgjFdd0/o9cu8A9FVg/+KVTHcRzHcRzHcRzHcRzHcRzHcZxi/gcBGZYOoPY2vAAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'Svg 4_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(-3.71);
		el.translateY(2.725);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 46;
		el.userData.height = 47;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Svg 4';
		el.userData.x = -3.71;
		el.userData.y = 2.725;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._svg_4.material) me._svg_4.material.opacity = v;
			me._svg_4.visible = (v>0 && me._svg_4.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._svg_4.visible
			let parentEl = me._svg_4.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._svg_4.userData.opacity = v;
			v = v * me._svg_4.userData.parentOpacity;
			me._svg_4.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_4.children.length; i++) {
				let child = me._svg_4.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._svg_4.userData.parentOpacity = v;
			v = v * me._svg_4.userData.opacity
			me._svg_4.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_4.children.length; i++) {
				let child = me._svg_4.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._svg_4 = el;
		el.userData.ggId="Svg 4";
		me._svg_4.userData.onclick=function (e) {
			player.toggleMuted("_main");
		}
		me._svg_4.userData.ggUpdatePosition=function (useTransition) {
		}
		me.skinGroup.add(me._svg_4);
		geometry = new THREE.PlaneGeometry(0.4, 0.38, 5, 5 );
		geometry.name = 'Svg 5_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABMCAYAAAD6BTBNAAAFTElEQVR4nO2czYtWVRzHf8eeUctGwgFTZ3AhNQhGa5GCajMiTJEEbYYSN5XzP1Q262xwZRKOi1zItE4EJ4Jc2gjRYqIpHgalaQZkxGI0Z+bT4pzBp/P87stzz32buB8Qvee5v5fz9dx7Xu6510gNAYyI7BOR/a7oDxFZNMZQXVZbAOAo8BWwSDeL7rejVedZO4BDwDVFtCiuAYeqzrsWACPA/R7E22QFGKk6/0oBxoD1DOJtsg6MVVkHU1Vg4BUR+U5E+pSfl0TkBxG5446HRORVEdmrnPtYRN4wxtwsIs9aAuxB7yjawDtAS7Fpud/ait0isKeKulQCMKmIcCuNCE78W4r9ZBm5V44TYNWr/H1gsAcfg3R3PKtVtMJtZQcUkZMistMrmzTG3E3rwJ'+
	'3rt7idIvJ2YG71B7iiXH6HM/g5rPi5UkTOtQK47VX6L+zUrVc/xtl2cruInOOo4hJ+zju+l2WO62zuJfgunCoE9FvbRoAv37b0cW0VAv6vaAQMpBEwkEbAQBoBA2kEDKQRMJBGwEAaAQNpBAykETCQRsBAGgEDaQQMpBEwkGABsTsLpoELwME8kioS4KDLdZqqdzZgNwNtdCyp/wpoD8o7bfznuu2A+D35AvpcjptsELhZKbQFviX/XQV+QUSOBPoskiNic9zEiMibIQ5DBdRaW9eughqh5bY9xGHTiQTSCBhII2AgjYCBNAIGEirgulL2bILNmnccO25MwLf1ffv0K2VaHVITKuDfStl+payTRe94L7Cj18DO5vkE3z5ablodUhMq4J9K2b4Em1nvuCUixzLEPiYiTyX49tFy0+qQmlAB20pZUgv8Vin7IEPsD1P6'+
	'7kTLrZ0hdj4AB5Q9etcTbFrKHBbgeA9xjyv2bZS91Z7ddcXuQNq4hQAseAk9AmI7EuC0UpEHaUR04j1Q7E8n2PW73DpZ6LW+uQNcUioTu9UW2AbMKHYAV4HX6ehYgB2u7GqEzQwQezsCTip2l/LSITPAqJLYVAq7AWA+QhCANeCu+7MWc948MJAi3pRiO5qPCgEA24FlL7FVUuy6B4aB32LESWIeeDFFnEG63wxYBoJWYnIDmFAqdyGl7QDRl3McM6RoeS7Gl4r9RFitcwTYDSx5Ca6laR3Ofhu2Y9F6Z5+2OzfVEAzbyv1bwBKwO6zWOQOMK5W9QcLQwvPRwvay54Gb2Et03v37vPutV39a6z6TrZYFgn3e8IuS7OcV5nROyWeOhOc2lQGciLjs3qsgl/cjcjlRdi49AZxVkn5UpohOPH/QDPBpWTlkBtshfBPxv3'+
	'+OHu5hGWK3gC8iYk+TsuOpHGAXMBtRkRvAcAExh4keDv0IPJN3zELBLjREibiGHZulfsU1Js4QcJHo2cosVS8YZMW1xKjLGezsYAo7T9VWi6P89jubKbpnGJ1MA7uKrGPh75Zh7zufiMjHCaf+IyLfi8hP4j60I0/yQ558iOdlEXlNkh+InxWRz4wxIe/i1QfsEGcuprXkxRx1H6pkBTvYPkP3tC8PloCPqOsgOU+wc+cJuldxsrDsfNVrblsG2KWwUeyirL+yHceCsxmlLktSdQA79BkBLiuiXXa/bc0hSZkApxQBT1Wdl8bWmNrUmEbAQBoBA2kEDKQRMJBGwEBK2VGPXUQdE/uaQZoFDO1ViXeBl1KG/FlEvjbGJO0X3Bpg1+vK5mIZdStjOatPRFaley9f0ayLyNPGmMdFBinjHrguIislxPFZkcDtu2koXEC3'+
	'oDkuIg+LjtXBQxEZL2MxtbSvnWE/z9nrx7OH3N93Ys/q5ndjjP9pvEL4F9BM7daRFxF8AAAAAElFTkSuQmCC');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'Svg 5_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(-3.24);
		el.translateY(2.7);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 40;
		el.userData.height = 38;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Svg 5';
		el.userData.x = -3.24;
		el.userData.y = 2.7;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.020);
		el.renderOrder = 2;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._svg_5.material) me._svg_5.material.opacity = v;
			me._svg_5.visible = (v>0 && me._svg_5.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._svg_5.visible
			let parentEl = me._svg_5.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._svg_5.userData.opacity = v;
			v = v * me._svg_5.userData.parentOpacity;
			me._svg_5.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_5.children.length; i++) {
				let child = me._svg_5.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._svg_5.userData.parentOpacity = v;
			v = v * me._svg_5.userData.opacity
			me._svg_5.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_5.children.length; i++) {
				let child = me._svg_5.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._svg_5 = el;
		el.userData.ggId="Svg 5";
		me._svg_5.userData.ggUpdatePosition=function (useTransition) {
		}
		me.skinGroup.add(me._svg_5);
		geometry = new THREE.PlaneGeometry(0.86, 0.24, 5, 5 );
		geometry.name = 'Text 1_geometry';
		material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : true } ); 
		material.name = 'Text 1_material';
		el = new THREE.Mesh( geometry, material );
		width = 0.86;
		height = 0.24;
		borderShape = new THREE.Shape();
		borderShape.moveTo((-width / 2.0) - 0.01 + 0, (height / 2.0) + 0.01);
		borderShape.lineTo((width / 2.0) + 0.01 - 0, (height / 2.0) + 0.01);
		borderShape.lineTo((width / 2.0) + 0.01, (-height / 2.0) - 0.01 + 0);
		borderShape.lineTo((-width / 2.0) - 0.01 + 0, (-height / 2.0) - 0.01);
		borderShape.lineTo((-width / 2.0) - 0.01, (height / 2.0) + 0.01 - 0);
		innerShape = new THREE.Path();
		innerShape.moveTo((-width / 2.0), (height / 2.0));
		innerShape.lineTo((width / 2.0), (height / 2.0));
		innerShape.lineTo((width / 2.0), (-height / 2.0));
		innerShape.lineTo((-width / 2.0), (-height / 2.0));
		borderShape.holes.push(innerShape);
		borderGeometry = new THREE.ShapeGeometry(borderShape);
		borderGeometry.name = 'Text 1_borderGeometry';
		borderMaterial = new THREE.MeshBasicMaterial( {color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side: THREE.DoubleSide, transparent: true } );
		borderMaterial.name = 'Text 1_borderMaterial';
		el.userData.border = new THREE.Mesh( borderGeometry, borderMaterial );
		el.userData.border.name = 'Text 1_borderMesh';
		el.add(el.userData.border);
		el.userData.backgroundColorAlpha = 0.882353;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._text_1.material.opacity = v;
			if (me._text_1.userData.hasScrollbar) {
				me._text_1.userData.scrollbar.material.opacity = v;
				me._text_1.userData.scrollbarBg.material.opacity = v;
			}
			me._text_1.userData.border.material.opacity = v * me._text_1.userData.borderColorAlpha;
			if (me._text_1.userData.ggSubElement) {
				me._text_1.userData.ggSubElement.material.opacity = v
				me._text_1.userData.ggSubElement.visible = (v>0 && me._text_1.userData.visible);
			}
			me._text_1.visible = (v>0 && me._text_1.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._text_1.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._text_1.userData.backgroundColorAlpha = v;
			me._text_1.userData.setOpacity(me._text_1.userData.opacity);
		}
		el.userData.setBorderColor = function(v) {
			me._text_1.userData.border.material.color = v;
		}
		el.userData.setBorderColorAlpha = function(v) {
			me._text_1.userData.borderColorAlpha = v;
			me._text_1.userData.setOpacity(me._text_1.userData.opacity);
		}
		el.translateX(-3.5);
		el.translateY(2.22);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 86;
		el.userData.height = 24;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Text 1';
		el.userData.x = -3.5;
		el.userData.y = 2.22;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.030);
		el.renderOrder = 3;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._text_1.visible
			let parentEl = me._text_1.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._text_1.userData.opacity = v;
			v = v * me._text_1.userData.parentOpacity;
			me._text_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._text_1.children.length; i++) {
				let child = me._text_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._text_1.userData.parentOpacity = v;
			v = v * me._text_1.userData.opacity
			me._text_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._text_1.children.length; i++) {
				let child = me._text_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._text_1 = el;
		el.userData.textLines = [];
		el.userData.backgroundColor = new THREE.Color(1, 1, 1).convertSRGBToLinear();
		el.userData.textColor = new THREE.Color(0, 0, 0).convertSRGBToLinear();
		el.userData.textColorAlpha = 1;
		var canvas = document.createElement('canvas');
		canvas.width = 172;
		canvas.height = 48;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		el.userData.ggStripTags = function(text) {
			let doc = new DOMParser().parseFromString(text, 'text/html');
			return doc.body.textContent || '';
		}
		el.userData.ggWrapText = function(scrollbar) {
			me._text_1.userData.totalHeightCanv = 2 * (3);
			me._text_1.userData.textLines = [];
			var ctx = me._text_1.userData.textCanvasContext;
			var words = [];
			let tmpText = String(me._text_1.userData.ggText);
			let whiteSpaceIndex = -1;
			do {
				whiteSpaceIndex = tmpText.search(/[\s]/);
				if (whiteSpaceIndex != -1) {
					words.push(tmpText.substr(0, whiteSpaceIndex));
					tmpText = tmpText.substr(whiteSpaceIndex);
					if (tmpText.charAt(0) == '\n') {
						words.push('\n');
					}
					tmpText = tmpText.substr(1);
				} else {
					words.push(tmpText);
				}
			} while (whiteSpaceIndex != -1);
			var line = '';
			for (var i = 0; i < words.length; i++) {
				if (words[i] == '\n') {
					me._text_1.userData.textLines.push(line);
					line = '';
					me._text_1.userData.totalHeightCanv += me._text_1.userData.lineHeightCanv;
					continue;
				}
				var testLine;
				if (line == '') {
					testLine = words[i]
				} else {
					testLine = line + ' ' + words[i];
				}
				var metrics = ctx.measureText(testLine);
				var testWidth = metrics.width;
				if (testWidth > (2 * (me._text_1.userData.width - 0 - (scrollbar ? 25 : 0))) && i > 0) {
					me._text_1.userData.textLines.push(line);
					line = words[i];
					me._text_1.userData.totalHeightCanv += me._text_1.userData.lineHeightCanv;
				} else {
					line = testLine;
				}
			}
			me._text_1.userData.textLines.push(line);
			me._text_1.userData.totalHeightCanv += me._text_1.userData.lineHeightCanv;
		}
		el.userData.ggPaintCanvasText = function() {
			var canv = me._text_1.userData.textCanvas;
			var ctx = me._text_1.userData.textCanvasContext;
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.fillStyle = 'rgba(' + me._text_1.userData.backgroundColor.r * 255 + ', ' + me._text_1.userData.backgroundColor.g * 255 + ', ' + me._text_1.userData.backgroundColor.b * 255 + ', ' + me._text_1.userData.backgroundColorAlpha + ')';
			ctx.fillRect(0, 0, canv.width, canv.height);
			ctx.fillStyle = 'rgba(' + me._text_1.userData.textColor.r * 255 + ', ' + me._text_1.userData.textColor.g * 255 + ', ' + me._text_1.userData.textColor.b * 255 + ', ' + me._text_1.userData.textColorAlpha + ')';
			ctx.textBaseline = 'top';
			var x = (me._text_1.userData.boxWidthCanv - (me._text_1.userData.hasScrollbar ? 50 : 0)) / 2;
			ctx.textAlign = 'center';
			var y = 2 * 3;
			for (var i = 0; i < me._text_1.userData.textLines.length; i++) {
				ctx.fillText(me._text_1.userData.textLines[i], x, y);
				y += me._text_1.userData.lineHeightCanv;
			}
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'Text 1_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._text_1.material.map) {
				me._text_1.material.map.dispose();
			}
			me._text_1.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			for (let i = 0; i < me._text_1.children.length; i++) {
				let child = me._text_1.children[i];
				if (child.name.includes('scrollbar')) me._text_1.remove(child);
			}
			var canv = me._text_1.userData.textCanvas;
			var ctx = me._text_1.userData.textCanvasContext;
			ctx.font = '28px Verdana';
			me._text_1.userData.lineHeightCanv = 33.6;
			me._text_1.userData.textLines = [];
			me._text_1.userData.textLines.push(me._text_1.userData.ggText);
			me._text_1.userData.totalHeightCanv = 2 * (3);
			me._text_1.userData.totalHeightCanv += me._text_1.userData.lineHeightCanv;
			me._text_1.userData.boxWidthCanv = 2 * me._text_1.userData.width;
			me._text_1.userData.boxHeightCanv = 2 * me._text_1.userData.height;
			me._text_1.userData.hasScrollbar = false;
			canv.width = me._text_1.userData.boxWidthCanv;
			canv.height = me._text_1.userData.boxHeightCanv;
			ctx.font = '28px Verdana';
			me._text_1.userData.ggPaintCanvasText();
		}
		me._text_1.userData.ggUpdateText=function(force) {
			var params = [];
			var hs = player._("\u0637\u0628\u0642\u0647 \u0647\u0645\u06a9\u0641\n\n", params);
			if (hs!=this.ggText || force) {
				this.ggText=me._text_1.userData.ggStripTags(hs);
				this.ggRenderText();
			}
		}
		me._text_1.userData.ggUpdateText();
		el.userData.setBackgroundColor = function(v) {
			me._text_1.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._text_1.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._text_1.userData.textColor = v;
		}
		el.userData.setTextColorAlpha = function(v) {
			me._text_1.userData.textColorAlpha = v;
		}
		el.userData.ggId="Text 1";
		me._text_1.userData.ggUpdatePosition=function (useTransition) {
		}
		me.skinGroup.add(me._text_1);
		me._svg_4.userData.setOpacity(1.00);
		me._svg_5.userData.setOpacity(1.00);
		me._text_1.userData.setOpacity(1.00);
		me.eventchangenodeCallback = function() {
			me.skin_nodechangeCallback();
		};
		player.addListener('changenode', me.eventchangenodeCallback);
	};
	this.removeSkin=function() {
	};
	function SkinHotspotClass_hotspot_video_of(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'Hotspot_video_of';
		el.userData.x = 1.49;
		el.userData.y = -0.22;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.000);
		el.renderOrder = 0;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._hotspot_video_of.visible
			let parentEl = me._hotspot_video_of.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._hotspot_video_of.userData.opacity = v;
			v = v * me._hotspot_video_of.userData.parentOpacity;
			me._hotspot_video_of.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_video_of.children.length; i++) {
				let child = me._hotspot_video_of.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._hotspot_video_of.userData.parentOpacity = v;
			v = v * me._hotspot_video_of.userData.opacity
			me._hotspot_video_of.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_video_of.children.length; i++) {
				let child = me._hotspot_video_of.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._hotspot_video_of = el;
		el.userData.ggId="Hotspot_video_of";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_video_of.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.title),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_of.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_of.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_video_of']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_of.userData.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_video_of']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot_video_of.userData.ggUpdatePosition=function (useTransition) {
		}
		geometry = new THREE.PlaneGeometry(0.98, 0.97, 5, 5 );
		geometry.name = 'Svg 3_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,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'+
	'AABJRU5ErkJggg==');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'Svg 3_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(0.11);
		el.translateY(-0.005);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 98;
		el.userData.height = 97;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Svg 3';
		el.userData.x = 0.11;
		el.userData.y = -0.005;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._svg_3.material) me._svg_3.material.opacity = v;
			me._svg_3.visible = (v>0 && me._svg_3.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._svg_3.visible
			let parentEl = me._svg_3.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._svg_3.userData.opacity = v;
			v = v * me._svg_3.userData.parentOpacity;
			me._svg_3.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_3.children.length; i++) {
				let child = me._svg_3.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._svg_3.userData.parentOpacity = v;
			v = v * me._svg_3.userData.opacity
			me._svg_3.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_3.children.length; i++) {
				let child = me._svg_3.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._svg_3 = el;
		el.userData.ggId="Svg 3";
		me._svg_3.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._svg_3.userData.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_video_of.add(me._svg_3);
		me._hotspot_video_of.userData.setOpacity(1.00);
		me.elementMouseOver['hotspot_video_of']=false;
		me._svg_3.userData.setOpacity(1.00);
			me.__obj = me._hotspot_video_of;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_hotspot_video_on(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'Hotspot _video_on';
		el.userData.x = 1.68;
		el.userData.y = 0.87;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._hotspot_video_on.visible
			let parentEl = me._hotspot_video_on.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._hotspot_video_on.userData.opacity = v;
			v = v * me._hotspot_video_on.userData.parentOpacity;
			me._hotspot_video_on.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_video_on.children.length; i++) {
				let child = me._hotspot_video_on.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._hotspot_video_on.userData.parentOpacity = v;
			v = v * me._hotspot_video_on.userData.opacity
			me._hotspot_video_on.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_video_on.children.length; i++) {
				let child = me._hotspot_video_on.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._hotspot_video_on = el;
		el.userData.ggId="Hotspot _video_on";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_video_on.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.title),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_on.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_on.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_video_on']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_video_on.userData.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_video_on']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot_video_on.userData.ggUpdatePosition=function (useTransition) {
		}
		geometry = new THREE.PlaneGeometry(1.47, 0.99, 5, 5 );
		geometry.name = 'Svg 2_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAADGCAYAAAB/9y3sAAAJrUlEQVR4nO3dXegldR3H8fd3XdaHxGAhEyLULhYJXdDqRi1X3RAtr9SMXIxSXCHysrQrkXI3oYsewB5MkSQ2NAjxQmQtH7DQFYR1LyQxkFw1kwWT//rst4s5wqr7f5g5M/M7M/N+gXfn/Pwe5uzn/5vPmTMHJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSgETpARZFZh4LnAecDWwGTgI2AhsKjjVF7wGvAS8A+4DHgQci4qWiU6lXkw6mzAxgK3ANcDFwZNmJtIJHgduBXRHxZulh1K1JBtMskC4EfgycXngc1fMycDPw64h4p/Qw6sbkgikzTwRupQomDdczwPaIeKT0IGrfutID9C'+
	'kzLweexlAag1OAhzLz5sxcX3oYtWsSO6bMXEe1/f9h6VnUid3ApRHxWulB1I7RB9Psr+kdwLbSs6hTe4GvRsQrpQfR/EYdTLOd0p0YSlOxDzgnIg6UHkTzGXvH9BMMpSk5FfhLZnrt2cCNNpgy81Lg+tJzqHdfBn5WegjNZ5Sncpn5WapP3z5ZehYVc3FE3Fd6CDUz1mC6l+pKbk3Xi8ApEfF66UFU3+iCKTMvAO6fY4kl4DGqIvUV4K025tKaraf6juIm4CzghDnW2hkRN7QyldRUZkZm7slmns3MbZl5VOnXoUpmrsvMczNzd8NjejAzjy/9OjRxmbml4Rv4NgNpcWX1B+fazHy3wbG9sfT8mrjM3NUwlEZ3SjtGWe1o69qfmUeUnl31jOYfZGYeA7wKHF3jac8Bp0XEG91MpbZl5l3AFTWftiUiHu5inj5l5nHA'+
	'Fqp7hS0Be4CnIyILjqWVZOZFDf6aXll6btWTmSdn5vs1j/MtpeeeR2ZuyMybMnPpMK/ticw8o/SMWkZm7qj5Zl3KapelgcnMv9Y81v8oPXNTmbkpM59c5fW9kZlbS8/apjFd+b255uP/HhEHO5lEXXuw5uNPy4H1iFkV/lcDTwFfWOXhRwF/ysxPdT9ZP8YUTJ+r+fh9nUyhPtQ9dp8ABnPZQGZuBO4GfgesdVe/Efh+Z0P1bEzBtLHm4//TyRTqQ5NjV/f9UURmnkt1C5dLGjz96y2PU8yYgqnuDwl4Q/vhanLsFvqHJrIquHdSnaZ+puEyn29xpKK8JalUWGZuAv7I6l3SahY6fOsY045JGpSaBfekuGOSCpgV3L+lWZc0egaT1LNZwf0HmndJy/lfy+sV46mc1JOWCu4V/xcdrFmEOyapBy0W3JPgjknqkAV3M+'+
	'6YpI5YcDdnMEkd6LDgngRP5aQW9VBwT4I7JqklFtztccckzcmCu30GkzSHhrcoWXVZYAfwg5bWGxyDSWpozluULGc/cF5E/Ah4p8V1B8VgkmrqsOC+B9gcEQ+1uOYgWX5LNXRUcC8B1wF3+IsnFYNJWoPZPcOvAn5Oe10SwJPAtyLi2RbXHDxP5aRVdFxwn2kofZw7JmkFHV3BvR/YZpe0PHdM0mFYcJfljkn6CAvu8gwmacaCe3F4Kidhwb1o3DFp8iy4F487Jk2WBfficsekSbLgXmwGkybFgnsYPJXTZFhwD4c7Jk3Fl4D7sOAeBINJU/EbIFpc7x5ge0QcaHFNzXgqp6loK5SWqDqqbxhK3XHHJK2dBXdP3DFJq7Pg7pk7JmllFtwFuGOSlucV3IUYTNLHWXAX5qmc9GEW3AvAHZNUseBeIO6YJAvuheOOSUO0'+
	'ocW1LLgXkDsmDVFb33e7Cm9RspDcMWnK2vzunFpkMGmI9re0zm3A3bPboWiBGEwaordbXOsSYO/svt9aEAaTVHVWD2bmjsxss1hXQwaTVAngeuCx2f3AVZDBJH3YF4GnMvOq2f3BVYDBJH3cMViMF2UwScuzGC/EYJJWZjFegMEkrc5ivGcGk7R2FuM9MZg0FW19H85ivAcGk6ZiO+19lQUsxjtlMGkq9gCbgT+3uKbFeEcMJk3G7P7dlwFXAwfbWhaL8dYZTJqUiMiI+D1wOtX9vdtiMd4ig0mTFBH/BM4CdmIxvnAMJk1WRLwdETcA52MxvlAMJk1eRPwNi/GFYjBJWIwvGoNJmrEYXxwGk/QRFuPlGUzSYViMl2UwSSuwGC/DYJJWYTHeP4NJWgOL8X4ZTFINFuP9MJikmizGu2cwSQ11XYwDky3G15ceQBqyiD'+
	'iQmZcB3wV+QXVaNveyVMX4ZLljkubUYTE+WQaT1JKOivFJMpikFnVYjE+KwSR1oKNifDIMJqkjHV0xPgkGk9Qhi/FmDCapBxbj9RhMUk8sxtfOYJJ6ZjG+OoNJKsBifGUGk1SIxfjyDCapsBaL8ffamai8MQXTWzUff1QnU6gPTY5d3fdHr1oqxp9vcaSixhRMB2o+/tOdTKE+NDl2dd8fRcxZjN/X8jjFjCmY/lXz8ad2MoX6UPfYLQGvdDFIFxoW4weAX3Y2VM/GFEx7az7+zMxs49456t/5NR//dEQM6qLGmsX4m8DlEfHf7idTLZl5UdZ3Zem5VU9mnpyZ79c8zreUnnsembkhM2/KzKXDvLYnMvOM0jO2bTS/yjDb/bwKHF3jac8Bp0XEG91MpbZl5l3AFTWftiUiHu5inj5l5nHAFuAkqtPTPQxwNzg5mbmr'+
	'wa7ptvRncwYhM7c1OL77M/OI0rNrwjJzS4M37gfh5OUDCyozIzOvzcx3GxzbG0vPr4mbvYH3NAynZ7P6i2xALYjMXJeZ52bm7obH9GBmHl/6dai+0Z3CZOYFwP1zLLEEPAbso/qIeaEvzBuh9cBGYBPV1dAnzLHWztlFixqY0QUTQGbeC1xceg4V9SJwSkS8XnoQ1Tem65gO9T3gtdJDqKjthtJwjTKYIuLfVFfNapp+FRGj+XrGFI3yVO4DWf3M8qR/0XSCHgW2RsTbpQdRc2MPpnXAncC20rOoF/uAc2bfNdOAjfJU7gMR8T7wHeCu0rOoc3uB8w2lcRh1MAFExLvAt4Gflp5FndkNfCUiBnMHAa1s9MEE1c4pIq4Hvgn4Sc14JLADuDAi/BR2REbdMR1OZp4I3ApcWHoWzeUZqksCHik9iNo3iR3ToSLieeBrs/'+
	'+eKjyO6nsZuA7YbCiN1+R2TIfK6q4CW4FrqK4UP7LsRFrBo8DtwK6IeLP0MOrWpIPpUJl5LHAecDbVPZdPovrO1oaCY03Re1RX7b9A9fH/48ADEfFS0akkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZK0nP8DRT5ngwvmw4gAAAAASUVORK5CYII=');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'Svg 2_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(0.145);
		el.translateY(-0.015);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 147;
		el.userData.height = 99;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Svg 2';
		el.userData.x = 0.145;
		el.userData.y = -0.015;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._svg_2.material) me._svg_2.material.opacity = v;
			me._svg_2.visible = (v>0 && me._svg_2.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._svg_2.visible
			let parentEl = me._svg_2.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._svg_2.userData.opacity = v;
			v = v * me._svg_2.userData.parentOpacity;
			me._svg_2.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_2.children.length; i++) {
				let child = me._svg_2.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._svg_2.userData.parentOpacity = v;
			v = v * me._svg_2.userData.opacity
			me._svg_2.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_2.children.length; i++) {
				let child = me._svg_2.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._svg_2 = el;
		el.userData.ggId="Svg 2";
		me._svg_2.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._svg_2.userData.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_video_on.add(me._svg_2);
		me._hotspot_video_on.userData.setOpacity(1.00);
		me.elementMouseOver['hotspot_video_on']=false;
		me._svg_2.userData.setOpacity(1.00);
			me.__obj = me._hotspot_video_on;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'Hotspot 1';
		el.userData.x = 1.56;
		el.userData.y = 2.19;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._hotspot_1.visible
			let parentEl = me._hotspot_1.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._hotspot_1.userData.opacity = v;
			v = v * me._hotspot_1.userData.parentOpacity;
			me._hotspot_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_1.children.length; i++) {
				let child = me._hotspot_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._hotspot_1.userData.parentOpacity = v;
			v = v * me._hotspot_1.userData.opacity
			me._hotspot_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hotspot_1.children.length; i++) {
				let child = me._hotspot_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._hotspot_1 = el;
		el.userData.ggId="Hotspot 1";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.title),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.userData.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot_1.userData.ggUpdatePosition=function (useTransition) {
		}
		geometry = new THREE.PlaneGeometry(1.32, 1.17, 5, 5 );
		geometry.name = 'Svg 1_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load(basePath + 'images_vr/svg_1.png');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'Svg 1_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(0);
		el.translateY(-0.015);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 132;
		el.userData.height = 117;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Svg 1';
		el.userData.x = 0;
		el.userData.y = -0.015;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._svg_1.material) me._svg_1.material.opacity = v;
			me._svg_1.visible = (v>0 && me._svg_1.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._svg_1.visible
			let parentEl = me._svg_1.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._svg_1.userData.opacity = v;
			v = v * me._svg_1.userData.parentOpacity;
			me._svg_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_1.children.length; i++) {
				let child = me._svg_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._svg_1.userData.parentOpacity = v;
			v = v * me._svg_1.userData.opacity
			me._svg_1.userData.setOpacityInternal(v);
			for (let i = 0; i < me._svg_1.children.length; i++) {
				let child = me._svg_1.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._svg_1 = el;
		el.userData.ggId="Svg 1";
		me._svg_1.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._svg_1.userData.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.add(me._svg_1);
		me._hotspot_1.userData.setOpacity(1.00);
		me.elementMouseOver['hotspot_1']=false;
		me._svg_1.userData.setOpacity(1.00);
			me.__obj = me._hotspot_1;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot _video_on') {
			hotspot.skinid = 'Hotspot _video_on';
			hsinst = new SkinHotspotClass_hotspot_video_on(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot_video_of') {
			hotspot.skinid = 'Hotspot_video_of';
			hsinst = new SkinHotspotClass_hotspot_video_of(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	me.skinTimerEvent=function() {
		if (!player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	player.addListener('vrconfigloaded', function() { me.addSkin();if (me.eventconfigloadedCallback) me.eventconfigloadedCallback();if (me.eventchangenodeCallback) me.eventchangenodeCallback();});
	player.addListener('exitvr', function() { me.removeSkin(); });
	me.skinTimerEvent();
};
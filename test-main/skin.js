// Garden Gnome Software - Skin
// Pano2VR 7.1.12/21036
// Filename: entervr4.ggsk
// Generated 2026-07-06T19:33:12

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
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
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._containermenu=document.createElement('div');
		el.ggId="Container-menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 92px;';
		hs+='left : 394px;';
		hs+='position : absolute;';
		hs+='top : 730px;';
		hs+='visibility : inherit;';
		hs+='width : 455px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containermenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containermenu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu=document.createElement('div');
		el.ggId="Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='height : 92px;';
		hs+='left : 0px;';
		hs+='opacity : 0.60002;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 455px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		me._containermenu.appendChild(me._menu);
		el=me._soundicon=document.createElement('div');
		els=me._soundicon__img=document.createElement('img');
		els.className='ggskin ggskin_soundicon';
		hs='data:image/webp;base64,UklGRl4bAABXRUJQVlA4WAoAAAAwAAAAqwEAqwEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound-icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 76px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._soundicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._soundicon.onclick=function (e) {
			me._containersounds.ggVisible = !me._containersounds.ggVisible;
			var flag=me._containersounds.ggVisible;
			me._containersounds.style.transition='none';
			me._containersounds.style.visibility=((flag)&&(Number(me._containersounds.style.opacity)>0||!me._containersounds.style.opacity))?'inherit':'hidden';
			me._containerlanguage.style.transition='none';
			me._containerlanguage.style.visibility='hidden';
			me._containerlanguage.ggVisible=false;
			me._containermap.style.transition='none';
			me._containermap.style.visibility='hidden';
			me._containermap.ggVisible=false;
			me._containervideo.style.transition='none';
			me._containervideo.style.visibility='hidden';
			me._containervideo.ggVisible=false;
		}
		me._soundicon.ggUpdatePosition=function (useTransition) {
		}
		me._containermenu.appendChild(me._soundicon);
		el=me._languageicon=document.createElement('div');
		els=me._languageicon__img=document.createElement('img');
		els.className='ggskin ggskin_languageicon';
		hs='data:image/webp;base64,UklGRvIfAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="language-icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 67px;';
		hs+='left : 353px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languageicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languageicon.onclick=function (e) {
			me._containerlanguage.ggVisible = !me._containerlanguage.ggVisible;
			var flag=me._containerlanguage.ggVisible;
			me._containerlanguage.style.transition='none';
			me._containerlanguage.style.visibility=((flag)&&(Number(me._containerlanguage.style.opacity)>0||!me._containerlanguage.style.opacity))?'inherit':'hidden';
			me._containermap.style.transition='none';
			me._containermap.style.visibility='hidden';
			me._containermap.ggVisible=false;
			me._containersounds.style.transition='none';
			me._containersounds.style.visibility='hidden';
			me._containersounds.ggVisible=false;
			me._containervideo.style.transition='none';
			me._containervideo.style.visibility='hidden';
			me._containervideo.ggVisible=false;
		}
		me._languageicon.ggUpdatePosition=function (useTransition) {
		}
		me._containermenu.appendChild(me._languageicon);
		el=me._mapicon=document.createElement('div');
		els=me._mapicon__img=document.createElement('img');
		els.className='ggskin ggskin_mapicon';
		hs='data:image/webp;base64,UklGRugfAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map-icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 249px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mapicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapicon.onclick=function (e) {
			me._containermap.ggVisible = !me._containermap.ggVisible;
			var flag=me._containermap.ggVisible;
			me._containermap.style.transition='none';
			me._containermap.style.visibility=((flag)&&(Number(me._containermap.style.opacity)>0||!me._containermap.style.opacity))?'inherit':'hidden';
			me._containerlanguage.style.transition='none';
			me._containerlanguage.style.visibility='hidden';
			me._containerlanguage.ggVisible=false;
			me._containersounds.style.transition='none';
			me._containersounds.style.visibility='hidden';
			me._containersounds.ggVisible=false;
			me._containervideo.style.transition='none';
			me._containervideo.style.visibility='hidden';
			me._containervideo.ggVisible=false;
		}
		me._mapicon.ggUpdatePosition=function (useTransition) {
		}
		me._containermenu.appendChild(me._mapicon);
		el=me._videoicon=document.createElement('div');
		els=me._videoicon__img=document.createElement('img');
		els.className='ggskin ggskin_videoicon';
		hs='data:image/webp;base64,UklGRhwYAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'jZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t//9BTFBIdQIAABFHoKBtFDh3LyowhSEiInC/M1IgR7Jt1062hNsh4Q8V/pAhKPxDICQkZAjnmxJ73t+8ex9m6T6ZF9H/CdDNIak/sUJzdiE6r0Cd0Z5KPJcK2JkE7SyObOJ+FbruFr7u9BVQ3KcIxV3C2B0KUjocKaVdMG9aFacYXxoFNT/jS4uC9RNfjC/Tgtv4ws/4ws/4ws/4ws/4wu8zPuMLP+PL+DO+jD/jy/gzvu/4ws/DL+PPwy/jz4u/jD8v'+
			'/rL884u/vPzzq3+r/1f/r/5f/b/6f/X/6v/V/6v/V/+v/n9feL36p5d/9eJPy79a/Gn81eJP46+Gn8ZfDT/xe8JX+DT+Cp/GX+HT+Ct84lf4fuATv8InfoVP/Aqf+BU+8St8wuVphU9P+ARLLQuf+ImUGxU+FSc1x7RpJ0ru8A2SehYid1ER+tBHBUi9C4+7qeBsNEc2micZz0SFZaP5UtGskWjuOKw/EYVW/6/+B5ur1Co3GlkmAstkXIdpW1iVhmaVpqgObbagfqWxOf1uFUwPaX5PqdqZUjpCqh5mdOixZZSuiKqPR1g6L+Cql5dv6f62UjC3qoB2k8BuENyTTrx2EyrAfVuQ33RitruhAt3Xgv3KI7ePl4qbLwX8hSLnsxO53VnQSyp2fg4I/AVA0fP4y+r/oufxJ3paABQ7PweInSSdyO3OipzPRE4Xi5svPX'+
			'L7eEncdLWo+ZpOzHa6lZluLmK+TSdeO03lpem01LJIWY05CWU/4X37p3p5+aZeWsBVH48w9RHiQ48to+phRuohyNXOlB7a3VNSO2GuVuakQ5utSLcR6mphVjpM24r2NPGeIuJ1iwX9mmYNAFZQOCAwCQAAcHAAnQEqAAIAAj4xGItEIiGhEXnkUCADBLO3cLtPAH8A9+/QH4AfoB/ZtUA/AD9AP7Na/+UBfgH4AQrX8m/L3ZH+I/ib+1vTg6Bduf2S/yWY9+E/gf8i/Mv+p//////n/nAP4B/A/5B+TX9C/////4wH8u/kf+//kP7/8YB/af6H9//y0f132IvQA/WX//+w9/Sv+B/nv/J///oE/YP/0f2b///IB+ov6l/73///IB6AHqVfwD1b+i38+7RK0n4AHgDrm7wOAP//+JMOp/1n63eYv6Y9gD8pfUA9Xf7g'+
			'ewB+6wRrfwy+QVObXcB6l8gorldB3enPcBY6fsnDTN6l8gqc2u4D1L43YPqnE6pZBU5tdwHqXyCpza7gPQkyE/X07hU5tdwHqXyCpza7gPUt2PoWe7gPUvkFTm13AepfIKlDyEFTm13AepfIKnNruA9S+QVObXcAZOTvNghBng+N0zepfIKnNruA9S+QUP+babTa5/k1B1UHFquGmb1L5BU5tdwHPYu+sLd6pEyj+GBkvkFTm13AepfIKnMvpA2lhn4YkIiuX/nmxarhpm9S+QVObXYc2tdgJLeZQjjbkLa6oKnNruA9S+QVODLnyA85NjquPtKBiXyCpza7gPUvkCJc+NhF8e/IjQ8OGXyCpza7gPUvkFSZwZ3uhJ87LSM35GIKnNruA9S+QVOZfRIVXhIFDC15YC4aZvUvkFTm13AeowDS6f70dLFtgmYIqZvUvk'+
			'FTm13AepfIKIZxEvkFTm13AdIOGmb1L5BU5tdwHqXyCpLoWY0k1JEvkFTm13AepfIKnMu6wZS+QVObXcB6l8gqc2u4rS7xOSZNrXcB6l8gqc2u4D1L5BQ2pHZqN5Zsuw46kiXyCpza7gPUvbC+7XKgIkZ6NnOVY3g1+3dbdmV9T9GznKsbwa/butuzK+p+jZzlWN4mKCpza7gPUvkFTm13AepfIKnNruA9S+QVObN7jAtNVBh89ASRL5BU5tdwHqXyCpwZ2WWqXPc+VARMowlhsgImUYSw2QETKMJYbICJlF88fe7g40P36RekTJHtyuzRDTN6l8gqc2u4EaWCSjm1ruA9S+QVObXcB6mgGCSjm1nehSuQPqc2u4D1L5BU5vE9IG6KUdW8YyvusTKMJYbICJlGEsNkBEyjCWGyAiZP0cggSKmEr/SRL5BU5tdwHqXx'+
			'sNDXq9NN4cdAAYAA/uSRmG4QsuGfd2STocaG3/nUudnywhL0Wj1IkvohCg1iqc/RGY4EVNM5pCTQshCQBiseyH2agUSXsypFs58wwTIKv7vn+GtOrYfIoL1gXhQNKkTNNXx4F4D1I6CpXJ2T6BRI1f9hyaAQRD6wPfWewtC9SpxzRNKIrMLU9HZWg+c3327z3f5HADWdcXtpG+Sm0IOZ2BTTWEnX5dPqpbbeIFfp9q20JOZYIdw8aMeMoCEwPbuJaI/JP1Ytcx4PASeCYue8Ji46aQFemzWQXf7dESOT4gI7VkJasjZQ9CsHYoERcyyr183LEnqJ3qFE8UX4qooX/G1Wc84inUh2is+QIC3EKfZyi0DuYpTYLD/z6FWD8A/UBmRiVPVXqtDLA2jNUBnDldxKzlWc84inUHsXMG4SoV/L8R0O1K9dRD2s38WO2uJlaC'+
			'weF3C6KRdLZqH2ZDUmjlfmdoAADJent3AVg2vHF9R7mDIVNOJPmdp1z2s7L7xfPAvjeB2eVPOMNlhlXNpm5F6LMMrG5iXhHXdraxWKPXTcFNn4iv5Y49pKMdZRJKsdj1DBfqzjFjqgB3qFKmnobNS/YC0Q/eRMefJbk1Ju2ibIDtJyUWoMQRFasrJOUixamugIp0T/pNZUcez9irWa6KO0pra3yWV+IPbY/TlzJEEJsm1HxoAJOUSYvGFnD5GQdTsoCrdrasALC5guxamueSxDY0uHtp5gypRcfZ583MXadc9rOzLCWAWIFCVY1bL920YvpxUMy/OdN5o2oF2o+OUVByxagl5oNM6tG/Gjw8YhKvJDn+TQj75UPcIsBVUwPkYvqS3Rs4RKjNJRKbtQL3pEYxp+Lgg62ID+ap7Bj+2Nz15M7o5Cv9nQEPy9PbHCvO31'+
			'53m+dqxkD9qBe9IjGNPzDaojrQ4v+/OyqM5NBXvpqUrQDl+K+mH17LR+GqzaONMFjopbJLGtreoHxzywu+E78CNOPiXqQ3zgdw4mjsLAXQOAC2C1f0QUG1Z2dya4pJ0w+vZaPw1NzYAcBQPcfa/zQaZ1aN+NHh4w9PNQfZiynW/Vgy6/KUjUQKOfU4ZGza2LpwINDxFZxOSb5yrnXqxfbCENU5MvLwABwsX1FD4fND76QLIZg7VU6ihzvNxaCSaSf+RE/NS5vWK2c4w/7TfXstH4bbLpvOJeuwZi1B9mLKdb9WE34SoeJEQmWuuE8EN22H0CiQj44AnL8mkPw+k+oCVDweitN9ey0fhuCkwcj17rH/pXV11RHOAwPwJiSGVWJ/VYpkdmBFa905URUIsN9d7Lw9ypGB0En324kQ9QEM25TxE3KTMkjHy5ACRw9EGIBQ'+
			'kQaUOdBgIicIVbZtDk1ZikmVC+82Xu85DO2ku3U6JPuHZ8FYJx/hDCJcP0/w+FfoOWT+GH1vRnenMEs9SNGkyvyssjMBb42bSSMk+hOfTYO832dWLRYHJMeezU5m67Cp8PNwf+EgdRyOHO6c5VaQ3e939MVNyodN8iCBlNkixeZ0tZuQGcCHVo7wYvJ9PZXszgY0INrVIMLnLDuxQUtjij9MRrjXsfWREQcZG3AWgclqH6B2bXj+JahO3MOjoVL6CYey+OafwZkAAAAH18D40qP5wMeNRpVNMZiY1nW9n06FlLSa4E6jHD5PKqx7JXgntNil1HuhA2bCrlXbfvBlG4UEM1NzoA/O/VREtPNO+5t8gGdxIcM/8lSySdpk4RHtrBxlVjm8A3tATKRuq11zu/BJ6dxbbvFW5cchVAa5MNlM1AVpJvLmr9HRdV46/+0JAR'+
			'596kL/+dzh/W6QxBz54LwD5jxutalnYcZVm0hD4YP7RjIANMNgqTd+OT2Wo/fnwfGtv2L8xsmSFIHxXmdLVLyl3qtjDqzv+5gZHgqSg/gSeqaEATShbF87XuBI9pdJQtfcb9JcwqAAAA';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video-icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 146px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videoicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._videoicon.onclick=function (e) {
			me._containerlanguage.style.transition='none';
			me._containerlanguage.style.visibility='hidden';
			me._containerlanguage.ggVisible=false;
			me._containersounds.style.transition='none';
			me._containersounds.style.visibility='hidden';
			me._containersounds.ggVisible=false;
			me._containermap.style.transition='none';
			me._containermap.style.visibility='hidden';
			me._containermap.ggVisible=false;
			me._containervideo.ggVisible = !me._containervideo.ggVisible;
			var flag=me._containervideo.ggVisible;
			me._containervideo.style.transition='none';
			me._containervideo.style.visibility=((flag)&&(Number(me._containervideo.style.opacity)>0||!me._containervideo.style.opacity))?'inherit':'hidden';
		}
		me._videoicon.ggUpdatePosition=function (useTransition) {
		}
		me._containermenu.appendChild(me._videoicon);
		me.divSkin.appendChild(me._containermenu);
		el=me._containersounds=document.createElement('div');
		el.ggId="Container-sounds";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 949px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : -266px;';
		hs+='visibility : hidden;';
		hs+='width : 1066px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containersounds.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containersounds.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='height : 250px;';
		hs+='left : 279px;';
		hs+='opacity : 0.60002;';
		hs+='position : absolute;';
		hs+='top : 702px;';
		hs+='visibility : inherit;';
		hs+='width : 611px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me._containersounds.appendChild(me._rectangle_4);
		el=me._mutena=document.createElement('div');
		els=me._mutena__img=document.createElement('img');
		els.className='ggskin ggskin_mutena';
		hs=basePath + 'images/mutena.webp';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mute-na";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 203px;';
		hs+='left : 627px;';
		hs+='position : absolute;';
		hs+='top : 712px;';
		hs+='visibility : inherit;';
		hs+='width : 216px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mutena.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mutena.onclick=function (e) {
			player.mute("_background");
			me._mutena.style.transition='none';
			me._mutena.style.visibility='hidden';
			me._mutena.ggVisible=false;
			me._unmutena.style.transition='none';
			me._unmutena.style.visibility=(Number(me._unmutena.style.opacity)>0||!me._unmutena.style.opacity)?'inherit':'hidden';
			me._unmutena.ggVisible=true;
		}
		me._mutena.ggUpdatePosition=function (useTransition) {
		}
		me._containersounds.appendChild(me._mutena);
		el=me._unmutena=document.createElement('div');
		els=me._unmutena__img=document.createElement('img');
		els.className='ggskin ggskin_unmutena';
		hs='data:image/webp;base64,UklGRjYiAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Unmute-na";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 168px;';
		hs+='left : 626px;';
		hs+='position : absolute;';
		hs+='top : 749px;';
		hs+='visibility : hidden;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmutena.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmutena.onclick=function (e) {
			player.unmute("_background");
			me._unmutena.style.transition='none';
			me._unmutena.style.visibility='hidden';
			me._unmutena.ggVisible=false;
			me._mutena.style.transition='none';
			me._mutena.style.visibility=(Number(me._mutena.style.opacity)>0||!me._mutena.style.opacity)?'inherit':'hidden';
			me._mutena.ggVisible=true;
		}
		me._unmutena.ggUpdatePosition=function (useTransition) {
		}
		me._containersounds.appendChild(me._unmutena);
		el=me._unmutefac=document.createElement('div');
		els=me._unmutefac__img=document.createElement('img');
		els.className='ggskin ggskin_unmutefac';
		hs='data:image/webp;base64,UklGRgQRAABXRUJQVlA4WAoAAAAwAAAA4QEAaAEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'jZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t//9BTFBIBwIAABEPMP8REYJuZNtVbWtSGJiEQBrXU2hSZpebCSFgylBpGFpi1Vmc+3+fiP5PgP5nYWG6vuKaHa+os/yKNuMVPFzetb6gPNlecD7ZX3B9Gsf35v400g/WJrP8J5SHfxNtMst/ozhXT9lCtd1Tj0gnh6OQIjWS4yYHKpAdQKDqukMVXD3U7boIhauHul0nobqrhbrwnITqrhbqxFMI1Vw11ImnEKq57lAFF6GqdcxuK/UQBXuZdWuLcVtJ'+
			'kwszKwb2OuvWFuO2kiYnZlaMbm2zZu0xLsysyYmtGN3aZs3aY5zYmhTsJUaz9lm1DoU4sTUp2EuMau2z20oKUbCXGfYao1qHJreVFOIr9jLr1hZjmjSZZoVaXVuoJE9WqM21h8pyKdTm2mPJtYTaXYdCybWE2l1JoRbXGuqQJynU8qzDGirJkxVqdTS2UEnOmvWme3+V/8++G9ikG1iHC9ilC9gCNOCQGrAPFUhSBY4AHUgSwDE0IEsNSAEAspWGDiB1IIcpQ36wiPHjyoDOB7yGJ8VYXrJGOY3ld8mhNhzqVlYdktqfYONyMhrjWhh/QZXPQJ9BfrAEKy4Z+jAN+VEfFExDGprVgRygA0nqwDFUIEsNSAEqsEsN2IcbSFIFjgAXsEo3sA4nsEkXsAX44P/994dNJfJfDIuvvctdWSVVFkmNRcG/aKzfXvJrEwBWUD'+
			'gghgIAAHBCAJ0BKuIBaQE+MRaJQyIhIRT/zAAgAwS0t3C7TwB/APfloyUyPAH8A/AD9AP4B+/vf4LGkk4SzovWDFhQLgvxzu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7ua+1bJX1Tkwt8r6pyYW+V9U5MG51kVsuvbGSlDuYsKBcF+Od3d3RjbQxLEqLrWL1gxYUC4L8cjG2gyNJNfXUHAKPO5iwoFwX453d3dGNtB1suvdibOx/5JOEs6L1gxYT9cC+u2850VpwlnResGLCgW2LCdGNf6orTg1iqb3/JJG+8LIXmVk8sJRpDuwOL3C5lbl8E5D+7m7UuRozQtFHnJhbX3OjGv9Mpa/ZdKUITfHM7dhVrzXbZVKtkm7AZr7Pzw20MS03UApg3hX52tHS/0tOqQrCiRaYGF6MNK/7FD4kKsRtics'+
			'Pd16EJLHXjBb0ZZGydHlSPPICxsWtzFNAC2xX7FUH8ZzFI29LdbzfYkWErlguSwjG2jSQlRdaxerg8J+uBfXbec30/F4ThOOFl6rySpE5walC/KBd8Jihy/79eBYYT8C+u3DYg2swlZOdF6wYsJWfgX124bEG1mErJzovWDFhKz8C+u3DYg2swlZOdF6wYsJWfgX124bEG1mErJzovWDFhKz8C+u3DYlMLwMTzkwt8r6pyYW+V9YeJpuHH0CjkctOEs6L1gxYUC4L8c7u7uYAAD+9oPAAAx/kywr8mVAACH/JlQAnfyUg/knanyXB+Si98l0fkq4/bmTS+68W/JzX5NPP1pePydF+TL3fk5992jp+Tn33aBO+TqfyVn/JRH+SkD8k4ABP/k2p+TMY/do7/kyoAAAAAAAAAA=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Unmute-fac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 191px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 726px;';
		hs+='visibility : hidden;';
		hs+='width : 252px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmutefac.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmutefac.onclick=function (e) {
			player.unmute("_videopanorama");
			me._unmutefac.style.transition='none';
			me._unmutefac.style.visibility='hidden';
			me._unmutefac.ggVisible=false;
			me._mutefac.style.transition='none';
			me._mutefac.style.visibility=(Number(me._mutefac.style.opacity)>0||!me._mutefac.style.opacity)?'inherit':'hidden';
			me._mutefac.ggVisible=true;
		}
		me._unmutefac.ggUpdatePosition=function (useTransition) {
		}
		me._containersounds.appendChild(me._unmutefac);
		el=me._mutefac=document.createElement('div');
		els=me._mutefac__img=document.createElement('img');
		els.className='ggskin ggskin_mutefac';
		hs='data:image/webp;base64,UklGRkoWAABXRUJQVlA4WAoAAAAwAAAA4QEAaAEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mute-fac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 190px;';
		hs+='left : 327px;';
		hs+='position : absolute;';
		hs+='top : 726px;';
		hs+='visibility : inherit;';
		hs+='width : 252px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mutefac.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mutefac.onclick=function (e) {
			player.mute("_videopanorama");
			me._mutefac.style.transition='none';
			me._mutefac.style.visibility='hidden';
			me._mutefac.ggVisible=false;
			me._unmutefac.style.transition='none';
			me._unmutefac.style.visibility=(Number(me._unmutefac.style.opacity)>0||!me._unmutefac.style.opacity)?'inherit':'hidden';
			me._unmutefac.ggVisible=true;
		}
		me._mutefac.ggUpdatePosition=function (useTransition) {
		}
		me._containersounds.appendChild(me._mutefac);
		me.divSkin.appendChild(me._containersounds);
		el=me._containervideo=document.createElement('div');
		el.ggId="Container-video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 297px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 366px;';
		hs+='visibility : hidden;';
		hs+='width : 745px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containervideo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containervideo.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_1=document.createElement('div');
		el.ggId="Rectangle 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='height : 203px;';
		hs+='left : -19px;';
		hs+='opacity : 0.60002;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 787px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_1.ggUpdatePosition=function (useTransition) {
		}
		me._containervideo.appendChild(me._rectangle_4_1);
		el=me._playvideo=document.createElement('div');
		els=me._playvideo__img=document.createElement('img');
		els.className='ggskin ggskin_playvideo';
		hs='data:image/webp;base64,UklGRl4YAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="play-video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 152px;';
		hs+='visibility : hidden;';
		hs+='width : 127px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._playvideo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._playvideo.onclick=function (e) {
			player.videoPanoPlay();
			me._playvideo.style.transition='none';
			me._playvideo.style.visibility='hidden';
			me._playvideo.ggVisible=false;
			me._pausevideo.style.transition='none';
			me._pausevideo.style.visibility=(Number(me._pausevideo.style.opacity)>0||!me._pausevideo.style.opacity)?'inherit':'hidden';
			me._pausevideo.ggVisible=true;
		}
		me._playvideo.ggUpdatePosition=function (useTransition) {
		}
		me._containervideo.appendChild(me._playvideo);
		el=me._pausevideo=document.createElement('div');
		els=me._pausevideo__img=document.createElement('img');
		els.className='ggskin ggskin_pausevideo';
		hs='data:image/webp;base64,UklGRpofAABXRUJQVlA4WAoAAAAwAAAA/wEA/wEASUNDUEgMAAAAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAA'+
			'xyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAA'+
			'AAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
			'AAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLB'+
			'AssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDy'+
			'UPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEo'+
			'oijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUF'+
			'GbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuW'+
			'i/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2O'+
			'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'+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pause-video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 126px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 155px;';
		hs+='visibility : inherit;';
		hs+='width : 126px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pausevideo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pausevideo.onclick=function (e) {
			player.videoPanoPause();
			me._pausevideo.style.transition='none';
			me._pausevideo.style.visibility='hidden';
			me._pausevideo.ggVisible=false;
			me._playvideo.style.transition='none';
			me._playvideo.style.visibility=(Number(me._playvideo.style.opacity)>0||!me._playvideo.style.opacity)?'inherit':'hidden';
			me._playvideo.ggVisible=true;
		}
		me._pausevideo.ggUpdatePosition=function (useTransition) {
		}
		me._containervideo.appendChild(me._pausevideo);
		me.divSkin.appendChild(me._containervideo);
		el=me._containerlanguage=document.createElement('div');
		el.ggId="Container-language";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88px;';
		hs+='left : 735px;';
		hs+='position : absolute;';
		hs+='top : 626px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containerlanguage.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containerlanguage.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._containerlanguage);
		el=me._containermap=document.createElement('div');
		el.ggId="Container-map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 217px;';
		hs+='left : 290px;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 671px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containermap.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._containermap.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.webp';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 625px;';
		hs+='left : -214px;';
		hs+='position : absolute;';
		hs+='top : -370px;';
		hs+='visibility : inherit;';
		hs+='width : 1143px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._containermap.appendChild(me._image_5);
		el=me._containercoilershuttel=document.createElement('div');
		el.ggId="Container-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containercoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containercoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2coilershuttel=document.createElement('div');
		el.ggId="F2-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2coilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2coilershuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whitecoilershuttel=document.createElement('div');
		el.ggId="F2-white-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whitecoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whitecoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f2coilershuttel.appendChild(me._f2whitecoilershuttel);
		el=me._f2greencoilershuttel=document.createElement('div');
		el.ggId="F2-green-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greencoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greencoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f2coilershuttel.appendChild(me._f2greencoilershuttel);
		me._containercoilershuttel.appendChild(me._f2coilershuttel);
		el=me._f1coilershuttel=document.createElement('div');
		el.ggId="F1-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1coilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1coilershuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whitecoilershuttel=document.createElement('div');
		el.ggId="F1-white-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whitecoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whitecoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f1coilershuttel.appendChild(me._f1whitecoilershuttel);
		el=me._f1greencoilershuttel=document.createElement('div');
		el.ggId="F1-green-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greencoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greencoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f1coilershuttel.appendChild(me._f1greencoilershuttel);
		me._containercoilershuttel.appendChild(me._f1coilershuttel);
		el=me._gfcoilershuttel=document.createElement('div');
		el.ggId="GF-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfcoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfcoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitecoilershuttel=document.createElement('div');
		el.ggId="GF-white-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitecoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitecoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._gfcoilershuttel.appendChild(me._gfwhitecoilershuttel);
		el=me._gfgreencoilershuttel=document.createElement('div');
		el.ggId="GF-green-coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreencoilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreencoilershuttel.ggUpdatePosition=function (useTransition) {
		}
		me._gfcoilershuttel.appendChild(me._gfgreencoilershuttel);
		me._containercoilershuttel.appendChild(me._gfcoilershuttel);
		el=me._coilershuttel=document.createElement('div');
		el.ggId="coilershuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coilershuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coilershuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._coilershuttelwhite=document.createElement('div');
		el.ggId="coilershuttel-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 293px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coilershuttelwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coilershuttelwhite.ggUpdatePosition=function (useTransition) {
		}
		me._coilershuttel.appendChild(me._coilershuttelwhite);
		el=me._coilershuttelgreen=document.createElement('div');
		el.ggId="coilershuttel-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 293px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coilershuttelgreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coilershuttelgreen.ggUpdatePosition=function (useTransition) {
		}
		me._coilershuttel.appendChild(me._coilershuttelgreen);
		me._containercoilershuttel.appendChild(me._coilershuttel);
		me._containermap.appendChild(me._containercoilershuttel);
		el=me._containercoiler=document.createElement('div');
		el.ggId="Container-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containercoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containercoiler.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2coiler=document.createElement('div');
		el.ggId="F2-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -42px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2coiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2coiler.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whitecoiler=document.createElement('div');
		el.ggId="F2-white-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whitecoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whitecoiler.ggUpdatePosition=function (useTransition) {
		}
		me._f2coiler.appendChild(me._f2whitecoiler);
		el=me._f2greencoiler=document.createElement('div');
		el.ggId="F2-green-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greencoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greencoiler.ggUpdatePosition=function (useTransition) {
		}
		me._f2coiler.appendChild(me._f2greencoiler);
		me._containercoiler.appendChild(me._f2coiler);
		el=me._f1coiler=document.createElement('div');
		el.ggId="F1-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1coiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1coiler.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whitecoiler=document.createElement('div');
		el.ggId="F1-white-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whitecoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whitecoiler.ggUpdatePosition=function (useTransition) {
		}
		me._f1coiler.appendChild(me._f1whitecoiler);
		el=me._f1greencoiler=document.createElement('div');
		el.ggId="F1-green-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greencoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greencoiler.ggUpdatePosition=function (useTransition) {
		}
		me._f1coiler.appendChild(me._f1greencoiler);
		me._containercoiler.appendChild(me._f1coiler);
		el=me._gfcoiler=document.createElement('div');
		el.ggId="GF-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -46px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfcoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfcoiler.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitecoiler=document.createElement('div');
		el.ggId="GF-white-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitecoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitecoiler.ggUpdatePosition=function (useTransition) {
		}
		me._gfcoiler.appendChild(me._gfwhitecoiler);
		el=me._gfgreencoiler=document.createElement('div');
		el.ggId="GF-green-coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreencoiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreencoiler.ggUpdatePosition=function (useTransition) {
		}
		me._gfcoiler.appendChild(me._gfgreencoiler);
		me._containercoiler.appendChild(me._gfcoiler);
		el=me._coiler=document.createElement('div');
		el.ggId="coiler";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coiler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coiler.ggUpdatePosition=function (useTransition) {
		}
		el=me._coilerwhite=document.createElement('div');
		el.ggId="coiler-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coilerwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coilerwhite.ggUpdatePosition=function (useTransition) {
		}
		me._coiler.appendChild(me._coilerwhite);
		el=me._coilergreen=document.createElement('div');
		el.ggId="coiler-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._coilergreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._coilergreen.ggUpdatePosition=function (useTransition) {
		}
		me._coiler.appendChild(me._coilergreen);
		me._containercoiler.appendChild(me._coiler);
		me._containermap.appendChild(me._containercoiler);
		el=me._containerwaterwall=document.createElement('div');
		el.ggId="Container-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containerwaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containerwaterwall.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2waterwall=document.createElement('div');
		el.ggId="F2-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -132px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2waterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2waterwall.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whitewaterwall=document.createElement('div');
		el.ggId="F2-white-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whitewaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whitewaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._f2waterwall.appendChild(me._f2whitewaterwall);
		el=me._f2greenwaterwall=document.createElement('div');
		el.ggId="F2-green-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greenwaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greenwaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._f2waterwall.appendChild(me._f2greenwaterwall);
		me._containerwaterwall.appendChild(me._f2waterwall);
		el=me._f1waterwall=document.createElement('div');
		el.ggId="F1-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1waterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1waterwall.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whitewaterwall=document.createElement('div');
		el.ggId="F1-white-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whitewaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whitewaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._f1waterwall.appendChild(me._f1whitewaterwall);
		el=me._f1greenwaterwall=document.createElement('div');
		el.ggId="F1-green-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greenwaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greenwaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._f1waterwall.appendChild(me._f1greenwaterwall);
		me._containerwaterwall.appendChild(me._f1waterwall);
		el=me._gfwaterwall=document.createElement('div');
		el.ggId="GF-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -136px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwaterwall.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitewaterwall=document.createElement('div');
		el.ggId="GF-white-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitewaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitewaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._gfwaterwall.appendChild(me._gfwhitewaterwall);
		el=me._gfgreenwaterwall=document.createElement('div');
		el.ggId="GF-green-waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreenwaterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreenwaterwall.ggUpdatePosition=function (useTransition) {
		}
		me._gfwaterwall.appendChild(me._gfgreenwaterwall);
		me._containerwaterwall.appendChild(me._gfwaterwall);
		el=me._waterwall=document.createElement('div');
		el.ggId="waterwall";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._waterwall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._waterwall.ggUpdatePosition=function (useTransition) {
		}
		el=me._waterwallwhite=document.createElement('div');
		el.ggId="waterwall-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._waterwallwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._waterwallwhite.ggUpdatePosition=function (useTransition) {
		}
		me._waterwall.appendChild(me._waterwallwhite);
		el=me._waterwallgreen=document.createElement('div');
		el.ggId="waterwall-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._waterwallgreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._waterwallgreen.ggUpdatePosition=function (useTransition) {
		}
		me._waterwall.appendChild(me._waterwallgreen);
		me._containerwaterwall.appendChild(me._waterwall);
		me._containermap.appendChild(me._containerwaterwall);
		el=me._containernavard=document.createElement('div');
		el.ggId="Container-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containernavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containernavard.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2navard=document.createElement('div');
		el.ggId="F2-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -219px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2navard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2navard.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whitenavard=document.createElement('div');
		el.ggId="F2-white-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whitenavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whitenavard.ggUpdatePosition=function (useTransition) {
		}
		me._f2navard.appendChild(me._f2whitenavard);
		el=me._f2greennavard=document.createElement('div');
		el.ggId="F2-green-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greennavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greennavard.ggUpdatePosition=function (useTransition) {
		}
		me._f2navard.appendChild(me._f2greennavard);
		me._containernavard.appendChild(me._f2navard);
		el=me._f1navard=document.createElement('div');
		el.ggId="F1-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -214px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1navard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1navard.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whitenavard=document.createElement('div');
		el.ggId="F1-white-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whitenavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whitenavard.ggUpdatePosition=function (useTransition) {
		}
		me._f1navard.appendChild(me._f1whitenavard);
		el=me._f1greennavard=document.createElement('div');
		el.ggId="F1-green-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greennavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greennavard.ggUpdatePosition=function (useTransition) {
		}
		me._f1navard.appendChild(me._f1greennavard);
		me._containernavard.appendChild(me._f1navard);
		el=me._gfnavard=document.createElement('div');
		el.ggId="GF-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -223px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfnavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfnavard.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitenavard=document.createElement('div');
		el.ggId="GF-white-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitenavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitenavard.ggUpdatePosition=function (useTransition) {
		}
		me._gfnavard.appendChild(me._gfwhitenavard);
		el=me._gfgreennavard=document.createElement('div');
		el.ggId="GF-green-navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreennavard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreennavard.ggUpdatePosition=function (useTransition) {
		}
		me._gfnavard.appendChild(me._gfgreennavard);
		me._containernavard.appendChild(me._gfnavard);
		el=me._navard=document.createElement('div');
		el.ggId="navard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._navard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navard.ggUpdatePosition=function (useTransition) {
		}
		el=me._navardwhite=document.createElement('div');
		el.ggId="navard-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._navardwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navardwhite.ggUpdatePosition=function (useTransition) {
		}
		me._navard.appendChild(me._navardwhite);
		el=me._navardgreen=document.createElement('div');
		el.ggId="navard-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._navardgreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._navardgreen.ggUpdatePosition=function (useTransition) {
		}
		me._navard.appendChild(me._navardgreen);
		me._containernavard.appendChild(me._navard);
		me._containermap.appendChild(me._containernavard);
		el=me._containerdescaling=document.createElement('div');
		el.ggId="Container-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containerdescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containerdescaling.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2descaling=document.createElement('div');
		el.ggId="F2-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -308px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2descaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2descaling.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whitedescaling=document.createElement('div');
		el.ggId="F2-white-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whitedescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whitedescaling.ggUpdatePosition=function (useTransition) {
		}
		me._f2descaling.appendChild(me._f2whitedescaling);
		el=me._f2greendescaling=document.createElement('div');
		el.ggId="F2-green-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greendescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greendescaling.ggUpdatePosition=function (useTransition) {
		}
		me._f2descaling.appendChild(me._f2greendescaling);
		me._containerdescaling.appendChild(me._f2descaling);
		el=me._f1descaling=document.createElement('div');
		el.ggId="F1-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -303px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1descaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1descaling.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whitedescaling=document.createElement('div');
		el.ggId="F1-white-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whitedescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whitedescaling.ggUpdatePosition=function (useTransition) {
		}
		me._f1descaling.appendChild(me._f1whitedescaling);
		el=me._f1greendescaling=document.createElement('div');
		el.ggId="F1-green-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greendescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greendescaling.ggUpdatePosition=function (useTransition) {
		}
		me._f1descaling.appendChild(me._f1greendescaling);
		me._containerdescaling.appendChild(me._f1descaling);
		el=me._gfdescaling=document.createElement('div');
		el.ggId="GF-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -312px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfdescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfdescaling.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitedescaling=document.createElement('div');
		el.ggId="GF-white-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitedescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitedescaling.ggUpdatePosition=function (useTransition) {
		}
		me._gfdescaling.appendChild(me._gfwhitedescaling);
		el=me._gfgreendescaling=document.createElement('div');
		el.ggId="GF-green-descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreendescaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreendescaling.ggUpdatePosition=function (useTransition) {
		}
		me._gfdescaling.appendChild(me._gfgreendescaling);
		me._containerdescaling.appendChild(me._gfdescaling);
		el=me._descaling=document.createElement('div');
		el.ggId="descaling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._descaling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descaling.ggUpdatePosition=function (useTransition) {
		}
		el=me._descalingwhite=document.createElement('div');
		el.ggId="descaling-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -62px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._descalingwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descalingwhite.ggUpdatePosition=function (useTransition) {
		}
		me._descaling.appendChild(me._descalingwhite);
		el=me._descalinggreen=document.createElement('div');
		el.ggId="descaling-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -62px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._descalinggreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descalinggreen.ggUpdatePosition=function (useTransition) {
		}
		me._descaling.appendChild(me._descalinggreen);
		me._containerdescaling.appendChild(me._descaling);
		me._containermap.appendChild(me._containerdescaling);
		el=me._containerdescaling_1=document.createElement('div');
		el.ggId="Container-descaling_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containerdescaling_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containerdescaling_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2slabshuttel=document.createElement('div');
		el.ggId="F2-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -399px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2slabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2slabshuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._f2whiteslabshuttel=document.createElement('div');
		el.ggId="F2-white-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2whiteslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2whiteslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f2slabshuttel.appendChild(me._f2whiteslabshuttel);
		el=me._f2greenslabshuttel=document.createElement('div');
		el.ggId="F2-green-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f2greenslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f2greenslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f2slabshuttel.appendChild(me._f2greenslabshuttel);
		me._containerdescaling_1.appendChild(me._f2slabshuttel);
		el=me._f1slabshuttel=document.createElement('div');
		el.ggId="F1-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -394px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1slabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1slabshuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._f1whiteslabshuttel=document.createElement('div');
		el.ggId="F1-white-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1whiteslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1whiteslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f1slabshuttel.appendChild(me._f1whiteslabshuttel);
		el=me._f1greenslabshuttel=document.createElement('div');
		el.ggId="F1-green-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f1greenslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f1greenslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._f1slabshuttel.appendChild(me._f1greenslabshuttel);
		me._containerdescaling_1.appendChild(me._f1slabshuttel);
		el=me._gfslabshuttel=document.createElement('div');
		el.ggId="GF-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -403px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhiteslabshuttel=document.createElement('div');
		el.ggId="GF-white-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhiteslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhiteslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._gfslabshuttel.appendChild(me._gfwhiteslabshuttel);
		el=me._gfgreenslabshuttel=document.createElement('div');
		el.ggId="GF-green-slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreenslabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreenslabshuttel.ggUpdatePosition=function (useTransition) {
		}
		me._gfslabshuttel.appendChild(me._gfgreenslabshuttel);
		me._containerdescaling_1.appendChild(me._gfslabshuttel);
		el=me._slabshuttel=document.createElement('div');
		el.ggId="slabshuttel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._slabshuttel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._slabshuttel.ggUpdatePosition=function (useTransition) {
		}
		el=me._slabshuttelwhite=document.createElement('div');
		el.ggId="slabshuttel-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -150px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._slabshuttelwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._slabshuttelwhite.ggUpdatePosition=function (useTransition) {
		}
		me._slabshuttel.appendChild(me._slabshuttelwhite);
		el=me._slabshuttelgreen=document.createElement('div');
		el.ggId="slabshuttel-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -150px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._slabshuttelgreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._slabshuttelgreen.ggUpdatePosition=function (useTransition) {
		}
		me._slabshuttel.appendChild(me._slabshuttelgreen);
		me._containerdescaling_1.appendChild(me._slabshuttel);
		me._containermap.appendChild(me._containerdescaling_1);
		el=me._containercontroller=document.createElement('div');
		el.ggId="Container-controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containercontroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containercontroller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controllerwhite=document.createElement('div');
		el.ggId="controller-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : 123px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controllerwhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controllerwhite.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controllerwhite);
		el=me._controllergreen=document.createElement('div');
		el.ggId="controller-green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : 123px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controllergreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controllergreen.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controllergreen);
		me._containercontroller.appendChild(me._controller);
		el=me._gfcontroller=document.createElement('div');
		el.ggId="GF-controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -266px;';
		hs+='position : absolute;';
		hs+='top : 362px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfcontroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfcontroller.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitecontroller=document.createElement('div');
		el.ggId="GF-white-controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitecontroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitecontroller.ggUpdatePosition=function (useTransition) {
		}
		me._gfcontroller.appendChild(me._gfwhitecontroller);
		el=me._gfgreencontroller=document.createElement('div');
		el.ggId="GF-green-controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreencontroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreencontroller.ggUpdatePosition=function (useTransition) {
		}
		me._gfcontroller.appendChild(me._gfgreencontroller);
		me._containercontroller.appendChild(me._gfcontroller);
		me._containermap.appendChild(me._containercontroller);
		el=me._containerfactoryentrance=document.createElement('div');
		el.ggId="Container-Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : 677px;';
		hs+='position : absolute;';
		hs+='top : -292px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._containerfactoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._containerfactoryentrance.ggUpdatePosition=function (useTransition) {
		}
		el=me._factoryentrance=document.createElement('div');
		el.ggId="Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -258px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._factoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._factoryentrance.onclick=function (e) {
			me._gffactoryentrance.ggVisible = !me._gffactoryentrance.ggVisible;
			var flag=me._gffactoryentrance.ggVisible;
			me._gffactoryentrance.style.transition='none';
			me._gffactoryentrance.style.visibility=((flag)&&(Number(me._gffactoryentrance.style.opacity)>0||!me._gffactoryentrance.style.opacity))?'inherit':'hidden';
		}
		me._factoryentrance.ggUpdatePosition=function (useTransition) {
		}
		el=me._factoryentrancewhite=document.createElement('div');
		el.ggId="Factoryentrance-white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #ffffff;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._factoryentrancewhite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._factoryentrancewhite.ggUpdatePosition=function (useTransition) {
		}
		me._factoryentrance.appendChild(me._factoryentrancewhite);
		el=me._factoryentrance_green=document.createElement('div');
		el.ggId="Factoryentrance_green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 7px solid #bcd431;';
		hs+='border-radius : 39px;';
		hs+='height : 70px;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._factoryentrance_green.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._factoryentrance_green.ggUpdatePosition=function (useTransition) {
		}
		me._factoryentrance.appendChild(me._factoryentrance_green);
		me._containerfactoryentrance.appendChild(me._factoryentrance);
		el=me._levelsfactoryentrance=document.createElement('div');
		el.ggId="levels-Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -333px;';
		hs+='position : absolute;';
		hs+='top : 395px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._levelsfactoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._levelsfactoryentrance.ggUpdatePosition=function (useTransition) {
		}
		el=me._gffactoryentrance=document.createElement('div');
		el.ggId="GF-Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gffactoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gffactoryentrance.ggUpdatePosition=function (useTransition) {
		}
		el=me._gfwhitefactoryentrance=document.createElement('div');
		el.ggId="GF-white-Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfwhitefactoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfwhitefactoryentrance.ggUpdatePosition=function (useTransition) {
		}
		me._gffactoryentrance.appendChild(me._gfwhitefactoryentrance);
		el=me._gfgreenfactoryentrance=document.createElement('div');
		el.ggId="GF-green-Factoryentrance";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 4px solid #bcd431;';
		hs+='border-radius : 5px;';
		hs+='height : 34px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gfgreenfactoryentrance.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gfgreenfactoryentrance.ggUpdatePosition=function (useTransition) {
		}
		me._gffactoryentrance.appendChild(me._gfgreenfactoryentrance);
		me._levelsfactoryentrance.appendChild(me._gffactoryentrance);
		me._containerfactoryentrance.appendChild(me._levelsfactoryentrance);
		me._containermap.appendChild(me._containerfactoryentrance);
		me.divSkin.appendChild(me._containermap);
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};
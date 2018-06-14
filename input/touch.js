export default class Touch {

	constructor() {
		this.touched =  false;
		this.pos = [{x: 0, y:0}];
		this.point = [{x: 0, y: 0}];
	}
	
	handleEvent(e) {
		switch(e.type) {
			case 'touchstart':
			this.touched = true;
			break; 
			case 'touchend':
			this.touched = false;
			break;
		}
		
		if(this.touched) {
			for(var i = 0; i < e.touches.length; i++) {
				this.pos[i] = {
					x: e.touches[i].pageX,
					y: e.touches[i].pageY
				}
				
				this.point[i] = {
					x: (e.type == 'touchstart') ? e.touches[i].pageX : 0,
					y: (e.type == 'touchstart') ? e.touches[i].pageY : 0
				}
			}
		}
		
		if(e.type == 'touchend') {
			for(var i = 0; i < e.touches.length; i++)
				this.point[i] = {};
				this.point[i].x = 0;
				this.point[i].y = 0;
		}
	}
	
	listenTo(element) {
			let events = [
				'touchstart', 
				'touchmove', 
				'touchend', 
				'touchcancel'
];
			for(var i = 0; i < events.length; i++) {
				element.addEventListener(events[i], e => {
				this.handleEvent(e);	
			});
			}
  }
}
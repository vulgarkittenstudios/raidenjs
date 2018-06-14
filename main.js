//import './assets/css/main.scss';
import raiden from './core/raiden';

app.SetOrientation( "Portrait", () => {
 setTimeout(() => {
 		const resources  = new raiden.graphics.resources();
		const entities = new raiden.core.entityManager();
		const win = new raiden.graphics.display();

		const loop = new raiden.core.loop();

		var run = false;

		const flappySheetURL = "https://raw.githubusercontent.com/theallmightyjohnmanning/snm/master/flappy/spritesheet.png";
		
		const bird = entities.createEntity();
		const pipes = entities.createEntity();
		
		bird.addTag('player');
		pipes.addTag('obsticle');

	var input = new raiden.input.touch();	
		
	win.init(() => {
	
		input.listenTo(window);
  	resources.load([
    	flappySheetURL
  	]);

  	resources.onReady(() => {
    	run = true;
  	});
  
  
  	loop.start();
	});

	
	loop.onFixedTick((dt) => {
  
  	if(run) {
  		win.clear();
  	}
	});


 }, 50);
});
// import './style.css';
import raiden from './core/raiden';

const resources  = new raiden.graphics.resources();
const entities = new raiden.core.entityManager();
const win = new raiden.graphics.display({
  resize: true
});
const loop = new raiden.core.loop();

const run = false;
win.init(() => {
  
  resources.load([
    
  ]);

  resources.onReady(() => {

    hero.transform.position.x = hero.transform.position.y = 51;
    run = true;
  });
  
  
  loop.start();
});

loop.onFixedTick((dt) => {
  
  if(run) {
    
    win.clear();

    const c = new raiden.physics.circle(
      hero.transform.position.x, 
      hero.transform.position.y, 
      20
    );
    c.draw(win.ctx, 'red');
  }
});

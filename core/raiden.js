// Import Core Libraries
import entity from './entity';
import entityManager from './entityManager';
import loop from './loop';
import transform from './transform';

// Import Graphics Libraries
import buffer from '../graphics/buffer';
import compositor from '../graphics/compositor';
import display from '../graphics/display';
import resources from '../graphics/resources';
import sprite from '../graphics/sprite';
import slice from '../graphics/slice';

// Import Input Libraries
import mouse from '../input/mouse';
import keyboard from '../input/keyboard';
import touch from '../input/touch';

// Import Math Libraries
import mathf from '../math/mathf';
import vec2 from '../math/vec2';

// Import Physics Libraries
import circle from '../physics/circle';
import point from '../physics/point';
import rectangle from '../physics/rectangle';
import segment from '../physics/segment';

// Import Utils Libraries
import event from '../utils/event';
import ex from '../utils/extends';
import getArguments from '../utils/getArguments';
import getName from '../utils/getName';
import messenger from '../utils/messenger';
import mixin from '../utils/mixin';
import objectPool from '../utils/objectPool';

// Initialize The Engine Namespace
const engine = {};

// Core Namespace
engine.core = {};

engine.core.entity = entity;
engine.core.entityManager = entityManager;
engine.core.loop = loop;
engine.core.transform = transform;

// Graphics Namespace
engine.graphics = {};

engine.graphics.buffer = buffer;
engine.graphics.compositor = compositor;
engine.graphics.display = display;
engine.graphics.resources = resources;
engine.graphics.sprite = sprite;
engine.graphics.slice = slice;

// Input Namespace
engine.input = {};

engine.input.mouse = mouse;
engine.input.keyboard = keyboard;
engine.input.touch = touch;

// Math Namespace
engine.math = {};

engine.math.mathf = mathf;
engine.math.vec2 = vec2;

// Physics Namespace
engine.physics = {};

engine.physics.circle = circle;
engine.physics.point = point;
engine.physics.rectangle = rectangle;
engine.physics.segment = segment;

// Utils Namespace
engine.utils = {};

engine.utils.event = event;
engine.utils.extends = ex;
engine.utils.getArguments = getArguments;
engine.utils.getName = getName;
engine.utils.messenger = messenger;
engine.utils.mixin = mixin;
engine.utils.objectPool = objectPool;

export default engine;
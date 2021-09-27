/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Animation = require('Animation');
const FaceTracking = require("FaceTracking");
const openness = FaceTracking.face(0).mouth.openness;

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]
	
// Locate the plane in the Scene
  const [Object] = await Promise.all([
    Scene.root.findFirst('doughnut2_')
  ]);

// bounce animation
// create driver and time value 
const parameters = {
durationMilliseconds: 800,
loopCount: Infinity,
mirror: true
};
const driver = Animation.timeDriver(parameters);
driver.start();

// samplers
const sampler = Animation.samplers.easeInBounce(1.0, 1.2);

// animation (driver+sampler)
const animation = Animation.animate(driver, sampler);

// apply animation
Object.transform.scaleX=animation;
Object.transform.scaleY=animation;
Object.transform.scaleZ=animation;
	
	
const driver2 = Animation.valueDriver(openness, 0.1, 0.5);
const sampler2 = Animation.samplers.linear(0, 1.0);
const animation2 = Animation.animate(driver2, sampler2);

Object.transform.scaleX=animation2;
Object.transform.scaleY=animation2;
Object.transform.scaleZ=animation2;


  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]

import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1.0 });

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
})

window.addEventListener('resize', function(){
  engine.resize();
})
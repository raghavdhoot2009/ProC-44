const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var target,targetimg,target2,target3;

var tree,treeimg,tree2,tree3;

function preload(){
targetimg=loadImage("target.png");
treeimg = loadImage("tree.png");  
}


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  tree=createSprite(200,400,20,20);
  tree.addImage(treeimg);
  tree.scale=0.50;

  target=createSprite(225,500,20,20);
  target.addImage(targetimg);
  target.scale=0.15;

  tree2=createSprite(450,400,20,20);
  tree2.addImage(treeimg);
  tree2.scale=0.50;

  target2=createSprite(475,500,20,20);
  target2.addImage(targetimg);
  target2.scale=0.15;

  //tree3=createSprite(600,400,20,20);
  //tree3.addImage(treeimg);
  //tree3.scale=0.50;

  //target3=createSprite(625,500,20,20);
  //target3.addImage(targetimg);
  //target3.scale=0.15;

}

function draw() {
Engine.update(engine);
background(0);
drawSprites();
}
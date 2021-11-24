
var path
var chao

var r1
var r2
var pd
var pe

function preload(){
  //imagens pré-carregadas


path = loadImage("path.png")

r1 = loadAnimation("Runner-1.png","Runner-2.png")


}

function setup(){
  createCanvas(600,600);
  //crie sprite aqui
  chao = createSprite(300,300)
  chao.addImage(path)
chao.velocityY=20
chao.scale=1.5
pe = createSprite(560,400,100,1000)
pd = createSprite(40,400,100,1000)
pd.visible=false
pe.visible=false
ProcessingInstruction.visible=false
  r2 = createSprite(300,400)
  r2.addAnimation("r1",r1)
r2.scale=0.05791642387648639874628946

}

function draw() {
  background(0);
drawSprites()
if(chao.y>600){
  chao.y=chao.height/2
}
r2.x=mouseX
r2.collide(pe)
r2.collide(pd)
}

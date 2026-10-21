let ph = document.querySelector('#photointro h3');
let msg='';
let gee='';
let galerialoc;
let answers =[['brightwalk',
    'So this is actually off the beaten path. There are signs and stiles but the fields are intermittently planted or ploughed in different manners. I don\'t so much know if the path was obvious either for the  photo before taking it but the gate certainly is open and showing the way, then the snow highlights the line and bright promise.'],
   ['peaklimema',
    'The perspective is in the path, diminishing from the viewer and so why up or down is anyhow the same as the dale lines fading. This a long long day in the White and Dark Peak both so suits a long line image.'],
   ['hc',
   'The path on a walk with a dog to emphasise it, otherwise perhaps the rest of the view would take it away as I think it shows off the village of Horncliffe very well. In fact this path does as much as one can in the time it takes to get there and is fun and memorable, interesting and necessary as the river below is too hard to walk alongside for a while here. '],
   ['pathsup',
   'Big Lake District path catching the perspective of the ridge it slowly ascends with lots more obviously behind, lots of walking and motivation and direction captured symbolically in the essence of the path line. '],
   ['sign',
   'A lot of walking and these are respected of course for making that bit more effort to help you in your exertion stay in this current world of names and places. I see a lot of people looking for the open path between two places and nature is the reason, natural geology or wild land and this photo like the sign is a record.'] 
 ];
 window.addEventListener("load", function () {
    galerialoc  = document.getElementById('galeria'); 
    galerialoc.addEventListener('click',gale,false); 
});
function gale(e) {    
    if (!e.target.closest('.item')) return;
   let  larger = document.querySelector('div[data-pos="0"]'); //5,10,15  
    let target = e.target.parentElement;
    [target.dataset.pos,larger.dataset.pos] = [larger.dataset.pos,target.dataset.pos];
    msg=e.target.alt;     
    loseheadline();
}
function loseheadline(){
    document.querySelector('#photointro h2').innerHTML='';
    altdetails();
}   
 
function altdetails(){
  if(msg=='hc'){    
        gee=answers[2][1];
}else if(msg=='sign'){    
        gee=answers[4][1];
}else if(msg=='pathsup'){    
        gee=answers[3][1];
}else if(msg=='brightwalk'){    
        gee=answers[0][1];
}else if(msg=='peaklimema'){    
        gee=answers[1][1];
}else{
gee=' :balls : lost missing notes';
} 
altertext();
} ;
function altertext(){
   document.querySelector('#photosays').innerHTML=msg+ ': '+ gee; 
}  

  

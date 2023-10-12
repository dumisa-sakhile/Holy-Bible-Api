
function $(element){
return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}

function none(element){
  element.style.display="none";
}

function block(element) {
  element.style.display = "block";
}

function grid(element) {
  element.style.display = "grid";
}

function flex(element,direction) {
  element.style.display = "flex";
  element.style.flexDirection=direction;
}

function universalOn(duration,theUniversalTitle,theUniversalContent) {
  
  flex($("#universal"));
  
  $("#title").textContent=`${theUniversalTitle}`;
  
  $("#content").textContent=`${theUniversalContent}`;
  
  setTimeout(()=>universalOff(), duration)
  
  }
  
function universalOff() {
  
    none($("#universal"));
  }
  
function createEl(elementToCreate){
  return document.createElement(elementToCreate);
}
  
$('#universal').addEventListener('click', universalOff);
  
function copyText(theCopiedText, theTime, theUniversalTitle, theUniversalContent) {
  
    navigator.clipboard.writeText(`${theCopiedText}`);
  
    universalOn(theTime, theUniversalTitle, theUniversalContent)
  
  }
  
$$("button").forEach(e => {
  e.addEventListener("click", (ev) => {
      ev.currentTarget.classList.toggle("scaled");
    });
  });
  

$$('.icon-up').forEach(e=>{
  e.addEventListener('click', ()=>{
    
window.scrollTo({ top: 0, behavior: "smooth" })
    
  })
});


// time functions
setInterval(()=>{

$$('.social-child').forEach(e=>e.addEventListener('click',()=>{ 
e.stopPropagation();
}))

  
//preventions
$$('img').forEach(e=>{
e.setAttribute("onContextMenu","return false;");
e.setAttribute("onerror","this.src='images/not_found.svg'");

//e.setAttribute("loading","lazy");
});


$$('a').forEach(e => {
  
  e.setAttribute("onContextMenu", "return false;");
  
  e.setAttribute("target", "_blank");
});

$$(`input`).forEach(e=>{
  e.setAttribute("autocomplete","off");
});


},)
// time functions end


// share api

const shareData = {
title: "Bible",
text: "Holy Bible: World English Bible",
url: "https://dumisa-info.netlify.app",
};

const shareBtn= $$(".share-btn");


// Share must be triggered by "user activation"
shareBtn.forEach(e=>{
  e.addEventListener("click", async () => {
  
try {

await navigator.share(shareData);

//universalOn(3000,'successful','Dumisa shared successfully!');

window.navigator.vibrate(200);
    
} catch (err) {
    
console.log(`an error occurred: ${err}`);
    
}
});


})
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    e.key === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.key === 'U'.charCodeAt(0))
  )
    return false;
};



//bibleApi

const bibleBtn = $('#bibleBtn');

let verseArray;

function bibleApi(){

let bibleContent = $('#bibleContent');

let bookName = $('#bookName');
let bookTrans = $('#bookTrans');
let bookRight = $('#bookRight');
let bibleInput = $('#bibleInput').value;
let bibleInputNo = $('#bibleInputNo').value;
let url;
let bookChapters = $("#bookChapters");

if(bibleInput.toLowerCase() === '2 john'){

  url = `https://bible-api.com/2john+1:1-13`;

}
else if(bibleInput.toLowerCase() === '3 john'){

  url = `https://bible-api.com/3john+1:1-14`;

}
else if(bibleInput.toLowerCase() === 'jude'){

  url = `https://bible-api.com/jude+1:1-25`;

}
else if(bibleInput.toLowerCase() === 'philemon'){

  url = `https://bible-api.com/philemon+1:1-25`;

}
else{

  url = `https://bible-api.com/${bibleInput}+${bibleInputNo}`;
}



if(bibleInput.toLowerCase() === 'genesis'){

  $('#bibleInputNo').setAttribute('max', 50);

  bookChapters.textContent = 50;
  
  }
  else if(bibleInput.toLowerCase() === 'exodus'){
  
    $('#bibleInputNo').setAttribute('max',  40);
    
    bookChapters.textContent = 40;
    
  }
else if(bibleInput.toLowerCase() === 'leviticus'){
  
    $('#bibleInputNo').setAttribute('max', 27);
    
    bookChapters.textContent = 27;
    
  }
else if(bibleInput.toLowerCase() === 'numbers'){
  
    $('#bibleInputNo').setAttribute('max', 36);
    
    bookChapters.textContent = 36;
    
  }
else if(bibleInput.toLowerCase() === 'deuteronomy'){
  
    $('#bibleInputNo').setAttribute('max', 34);
    
    bookChapters.textContent = 34;
    
  }
else if(bibleInput.toLowerCase() === 'joshua'){
  
    $('#bibleInputNo').setAttribute('max', 24);
    
    bookChapters.textContent = 24;
    
  }
else if(bibleInput.toLowerCase() === 'judges'){
  
    $('#bibleInputNo').setAttribute('max', 21);
    
    bookChapters.textContent = 21;
    
  }
else if(bibleInput.toLowerCase() === 'ruth'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === '1 samuel'){
  
    $('#bibleInputNo').setAttribute('max', 31);
    
    bookChapters.textContent = 31;
    
  }
else if(bibleInput.toLowerCase() === '2 samuel'){
  
    $('#bibleInputNo').setAttribute('max', 24);
    
    bookChapters.textContent = 24;
    
  }
else if(bibleInput.toLowerCase() === '1 kings'){
  
    $('#bibleInputNo').setAttribute('max', 22);
    
    bookChapters.textContent = 22;
    
  }
else if(bibleInput.toLowerCase() === '2 kings'){
  
    $('#bibleInputNo').setAttribute('max', 25);
    
    bookChapters.textContent = 25;
    
  }
else if(bibleInput.toLowerCase() === '1 chronicles'){
  
    $('#bibleInputNo').setAttribute('max', 29);
    
    bookChapters.textContent = 29;
    
  }
else if(bibleInput.toLowerCase() === '2 chronicles'){
  
    $('#bibleInputNo').setAttribute('max', 36);
    
    bookChapters.textContent = 36;
    
  }
else if(bibleInput.toLowerCase() === 'ezra'){
  
    $('#bibleInputNo').setAttribute('max', 10);
    
    bookChapters.textContent = 10;
    
  }
else if(bibleInput.toLowerCase() === 'nehemiah'){
  
    $('#bibleInputNo').setAttribute('max', 13);
    
    bookChapters.textContent = 13;
    
  }
else if(bibleInput.toLowerCase() === 'esther'){
  
    $('#bibleInputNo').setAttribute('max', 10);
    
    bookChapters.textContent = 10;
    
  }
else if(bibleInput.toLowerCase() === 'job'){
  
    $('#bibleInputNo').setAttribute('max', 42);
    
    bookChapters.textContent = 42;
    
  }
else if(bibleInput.toLowerCase() === 'psalms'){
  
    $('#bibleInputNo').setAttribute('max', 150);
    
    bookChapters.textContent = 150;
    
  }
else if(bibleInput.toLowerCase() === 'proverbs'){
  
    $('#bibleInputNo').setAttribute('max', 31);
    
    bookChapters.textContent = 31;
    
  }
else if(bibleInput.toLowerCase() === 'ecclesiastes'){
  
    $('#bibleInputNo').setAttribute('max', 12);
    
    bookChapters.textContent = 12;
    
  }
else if(bibleInput.toLowerCase() === 'song of solomon'){
  
    $('#bibleInputNo').setAttribute('max', 8);
    
    bookChapters.textContent = 8;
    
  }
else if(bibleInput.toLowerCase() === 'isaiah'){
  
    $('#bibleInputNo').setAttribute('max', 66);
    
    bookChapters.textContent = 66;
    
  }
else if(bibleInput.toLowerCase() === 'jeremiah'){
  
    $('#bibleInputNo').setAttribute('max', 52);
    
    bookChapters.textContent = 52;
    
  }
else if(bibleInput.toLowerCase() === 'lamentations'){
  
    $('#bibleInputNo').setAttribute('max', 5);
    
    bookChapters.textContent = 5;
    
  }
else if(bibleInput.toLowerCase() === 'ezekiel'){
  
    $('#bibleInputNo').setAttribute('max', 48);
    
    bookChapters.textContent = 48;
    
  }
else if(bibleInput.toLowerCase() === 'daniel'){
  
    $('#bibleInputNo').setAttribute('max', 12);
    
    bookChapters.textContent = 12;
    
  }
else if(bibleInput.toLowerCase() === 'hosea'){
  
    $('#bibleInputNo').setAttribute('max', 14);
    
    bookChapters.textContent = 14;
    
  }
else if(bibleInput.toLowerCase() === 'joel'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === 'amos'){
  
    $('#bibleInputNo').setAttribute('max', 9);
    
    bookChapters.textContent = 9;
    
  }
else if(bibleInput.toLowerCase() === 'obadiah'){
  
    $('#bibleInputNo').setAttribute('max', 1);
    
    bookChapters.textContent = 1;
    
  }
else if(bibleInput.toLowerCase() === 'jonah'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === 'micah'){
  
    $('#bibleInputNo').setAttribute('max', 7);
    
    bookChapters.textContent = 7;
    
  }
else if(bibleInput.toLowerCase() === 'nahum'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === 'habakkuk'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === 'zephaniah'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === 'haggai'){
  
    $('#bibleInputNo').setAttribute('max', 2);
    
    bookChapters.textContent = 2;
    
  }
else if(bibleInput.toLowerCase() === 'zechariah'){
  
    $('#bibleInputNo').setAttribute('max', 14);
    
    bookChapters.textContent = 14;
    
  }
else if(bibleInput.toLowerCase() === 'malachi'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === 'matthew'){
  
    $('#bibleInputNo').setAttribute('max', 28);
    
    bookChapters.textContent = 28;
    
  }
else if(bibleInput.toLowerCase() === 'mark'){
  
    $('#bibleInputNo').setAttribute('max', 16);
    
    bookChapters.textContent = 16;
    
  }
else if(bibleInput.toLowerCase() === 'luke'){
  
    $('#bibleInputNo').setAttribute('max', 24);
    
    bookChapters.textContent = 24;
    
  }
else if(bibleInput.toLowerCase() === 'john'){
  
    $('#bibleInputNo').setAttribute('max', 21);
    
    bookChapters.textContent = 21;
    
  }
else if(bibleInput.toLowerCase() === 'acts'){
  
    $('#bibleInputNo').setAttribute('max', 28);
    
    bookChapters.textContent = 28;
    
  }
else if(bibleInput.toLowerCase() === 'romans'){
  
    $('#bibleInputNo').setAttribute('max', 16);
    
    bookChapters.textContent = 16;
    
  }
else if(bibleInput.toLowerCase() === '1 corinthians'){
  
    $('#bibleInputNo').setAttribute('max', 16);
    
    bookChapters.textContent = 16;
    
  }
else if(bibleInput.toLowerCase() === '2 corinthians'){
  
    $('#bibleInputNo').setAttribute('max', 13);
    
    bookChapters.textContent = 13;
    
  }
else if(bibleInput.toLowerCase() === 'galatians'){
  
    $('#bibleInputNo').setAttribute('max', 6);
    
    bookChapters.textContent = 6;
    
  }
else if(bibleInput.toLowerCase() === 'ephesians'){
  
    $('#bibleInputNo').setAttribute('max', 6);
    
    bookChapters.textContent = 6;
    
  }
else if(bibleInput.toLowerCase() === 'philippians'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === 'colossians'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === '1 thessalonians'){
  
    $('#bibleInputNo').setAttribute('max', 5);
    
    bookChapters.textContent = 5;
    
  }
else if(bibleInput.toLowerCase() === '2 thessalonians'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === '1 timothy'){
  
    $('#bibleInputNo').setAttribute('max', 6);
    
    bookChapters.textContent = 6;
    
  }
else if(bibleInput.toLowerCase() === '2 timothy'){
  
    $('#bibleInputNo').setAttribute('max', 4);
    
    bookChapters.textContent = 4;
    
  }
else if(bibleInput.toLowerCase() === 'titus'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === 'philemon'){
  
    $('#bibleInputNo').setAttribute('max', 1);
    
    bookChapters.textContent = 1;
    
  }
else if(bibleInput.toLowerCase() === 'hebrews'){
  
    $('#bibleInputNo').setAttribute('max', 13);
    
    bookChapters.textContent = 13;
    
  }
else if(bibleInput.toLowerCase() === 'james'){
  
    $('#bibleInputNo').setAttribute('max', 5);
    
    bookChapters.textContent = 5;
    
  }
else if(bibleInput.toLowerCase() === '1 peter'){
  
    $('#bibleInputNo').setAttribute('max', 5);
    
    bookChapters.textContent = 5;
    
  }
else if(bibleInput.toLowerCase() === '2 peter'){
  
    $('#bibleInputNo').setAttribute('max', 3);
    
    bookChapters.textContent = 3;
    
  }
else if(bibleInput.toLowerCase() === '1 john'){
  
    $('#bibleInputNo').setAttribute('max', 5);
    
    bookChapters.textContent = 5;
    
  }
else if(bibleInput.toLowerCase() === '2 john'){
  
    $('#bibleInputNo').setAttribute('max', 1);
    
    bookChapters.textContent = 1;
    
  }
else if(bibleInput.toLowerCase() === '3 john'){
  
    $('#bibleInputNo').setAttribute('max', 1);
    
    bookChapters.textContent = 1;
    
  }
else if(bibleInput.toLowerCase() === 'jude'){
  
    $('#bibleInputNo').setAttribute('max', 1);
    
    bookChapters.textContent = 1;
    
  }
else if(bibleInput.toLowerCase() === 'revelation'){
  
    $('#bibleInputNo').setAttribute('max', 22);
    
    bookChapters.textContent = 22;

    }


bibleContent.innerHTML = null;

fetch(url)
  .then(res=>res.json())
  .then((outputBible)=>{


//console.log(outputBible);


outputBible.verses.map(e=>{
  return e.text;
}).forEach((e,index)=>{
  
  paragraph = document.createElement('p');
  
  paragraph.textContent =`v${Number((index + 1))}: ${e}`;
  
  bibleContent.append(paragraph);
  
})


bookRight.textContent = outputBible.translation_note;
bookName.textContent = outputBible.reference;
bookTrans.textContent = outputBible.translation_name;

$$(".footer").forEach(foot=>{
  flex(foot);
});

}).catch((err)=>{

  universalOn(4000,'Oh No!', 'Book could not be found. Please type the correct book in its field and value as well');
  
  for (let i = 0; i < associatesValue; i++) {
  
    $('#bibleContent').innerHTML += skeletonTemplate;
  
    //dictionaryPage.innerHTML += skeletonTemplate;
  
    //lyricsPage.innerHTML += skeletonTemplate;
  }

  $$(".footer").forEach(foot=>{
    flex(foot);
  });

})

}

bibleApi();


$('#bibleInputNo').addEventListener("change",  ()=>{

$$(".footer").forEach(foot=>{
    none(foot);
  });


if (Number($('#bibleInputNo').value) > Number($('#bookChapters').textContent)) {

  $('#bibleInputNo').value = 1;

  universalOn(7000, 'Chapters number exceeded', `please note that this chapter has only ${$('#bookChapters').textContent}, please do not exceed this range!`);
  
  bibleApi();

} else {

  bibleApi();

}

});

$('#bibleInput').addEventListener("change", () => {
  $('#bibleInputNo').value =1;
      });

//bible



// Close of the universal modal using the escape key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        universalOff();
    }
};
// Close of the universal modal using the escape key


function booksFetch(){

fetch(`booksOfTheBible.json`)
.then(res=>res.json())
.then(booksData=>console.log(booksData))

}

booksFetch()
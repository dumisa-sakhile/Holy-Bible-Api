
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

function universalOn(theUniversalContent) {
  
  grid($("#universal"));
  
  $("#content").textContent=`${theUniversalContent}`;
  
  }
  
function universalOff() {
    none($("#universal"));
  }
  
function createEl(elementToCreate){
  return document.createElement(elementToCreate);
}
  
$('#universal').addEventListener('click', universalOff);
  
function copyText(theCopiedText) {
  
    navigator.clipboard.writeText(`${theCopiedText}`);
  
    universalOn(`Copied "${theCopiedText}"`)
  
  }

$$('.icon-up').forEach(e=>{
  e.addEventListener('click', ()=>{
    
window.scrollTo({ top: 0, behavior: "smooth" })
    
  })
});

function skeletonAppend(appendWhere,appendHowManyTimes){
  for( let i = 0; i < appendHowManyTimes; i++){

let skeletonMom = document.createElement('aside');
skeletonMom.setAttribute('class','skeleton-mom flex-row');
let skeletonChild1 = document.createElement('aside');
skeletonChild1.setAttribute('class','skeleton-child skeleton-child-1 flex-column gap');
let skeletonH6 = document.createElement('h6');
let skeletonMain = document.createElement('div');
skeletonChild1.append(skeletonH6,skeletonMain);


let skeletonChild2 = document.createElement('aside');
skeletonChild2.setAttribute('class','skeleton-child skeleton-child-2 flex-row gap');
let skeletonChildDiv1 = document.createElement('div');
let skeletonChildDiv2 = document.createElement('div');
skeletonChild2.append(skeletonChildDiv1,skeletonChildDiv2);
skeletonMom.append(skeletonChild1,skeletonChild2);

      appendWhere.append(skeletonMom);
      
    }

}


// time functions
setInterval(()=>{

$$('.social-child').forEach(e=>e.addEventListener('click',()=>{ 
e.stopPropagation();
}));


let allBookChapters = $("#bookChapters");
let next = $("#next");
let back = $("#back");
let bibleInputNo = $("#bibleInputNo").value;

bibleInputNo <=1 ? none(back) : grid(back);
bibleInputNo <  Number(allBookChapters.textContent) ? grid(next) : none(next);


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


},100)
// time functions end

//copyright years
$("#copyrightYears").textContent = new Date().getFullYear();

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

const maxChapters = {
  'genesis': 50,
  'exodus': 40,
  'leviticus': 27,
  'numbers': 36,
  'deuteronomy': 34,
  'joshua': 24,
  'judges': 21,
  'ruth': 4,
  '1 samuel': 31,
  '2 samuel': 24,
  '1 kings': 22,
  '2 kings': 25,
  '1 chronicles': 29,
  '2 chronicles': 36,
  'ezra': 10,
  'nehemiah': 13,
  'esther': 10,
  'job': 42,
  'psalms': 150,
  'proverbs': 31,
  'ecclesiastes': 12,
  'song of solomon': 8,
  'isaiah': 66,
  'jeremiah': 52,
  'lamentations': 5,
  'ezekiel': 48,
  'daniel': 12,
  'hosea': 14,
  'joel': 3,
  'amos': 9,
  'obadiah': 1,
  'jonah': 4,
  'micah': 7,
  'nahum': 3,
  'habakkuk': 3,
  'zephaniah': 3,
  'haggai': 2,
  'zechariah': 14,
  'malachi': 4,
  'matthew': 28,
  'mark': 16,
  'luke': 24,
  'john': 21,
  'acts': 28,
  'romans': 16,
  '1 corinthians': 16,
  '2 corinthians': 13,
  'galatians': 6,
  'ephesians': 6,
  'philippians': 4,
  'colossians': 4,
  '1 thessalonians': 5,
  '2 thessalonians': 3,
  '1 timothy': 6,
  '2 timothy': 4,
  'titus': 3,
  'philemon': 1,
  'hebrews': 13,
  'james': 5,
  '1 peter': 5,
  '2 peter': 3,
  '1 john': 5,
  '2 john': 1,
  '3 john': 1,
  'jude': 1,
  'revelation': 22
};

async function bibleApi() {

  $("body").classList.remove('overflow');

  let bibleContent = $('#bibleContent');
  let bookName = $('#bookName');
  let bookTrans = $('#bookTrans');
  let bookRight = $('#bookRight');
  let bibleInput = $('#bibleInput').value;
  let bibleInputNo = $('#bibleInputNo').value;
  let url;
  let bookChapters = $("#bookChapters");

  console.clear();

  if (bibleInput.toLowerCase() === '2 john') {

    url = `https://bible-api.com/2john+1:1-13?translation=kjv`;

  }
  else if (bibleInput.toLowerCase() === '3 john') {

    url = `https://bible-api.com/3john+1:1-14?translation=kjv`;

  }
  else if (bibleInput.toLowerCase() === 'obadiah') {

    url = `https://bible-api.com/obadiah+1:1-21?translation=kjv`;

  }
  else if (bibleInput.toLowerCase() === 'jude') {

    url = `https://bible-api.com/jude+1:1-25?translation=kjv`;

  }
  else if (bibleInput.toLowerCase() === 'philemon') {

    url = `https://bible-api.com/philemon+1:1-25?translation=kjv`;

  }
  else {

    url = `https://bible-api.com/${bibleInput}+${bibleInputNo}?translation=kjv`;
  }

  const theBookName = bibleInput.toLowerCase();
  if (theBookName in maxChapters) {
    const maxChapter = maxChapters[theBookName];
    $('#bibleInputNo').setAttribute('max', maxChapter);
    bookChapters.textContent = maxChapter;
  }

  bibleContent.innerHTML = null;

  try {
    const outputBible = await axios.get(url);

  outputBible.data.verses.map(e => {
      return e.text;
    }).forEach((e, index) => {

paragraph = document.createElement('p');

paragraph.textContent = `v${Number((index + 1))}: ${e}`;

bibleContent.append(paragraph);

flex($("#pagination"));

})

bookRight.textContent = outputBible.data.translation_note;

bookName.textContent = outputBible.data.reference.slice(outputBible.data.reference.indexOf(' ') + 1, outputBible.data.reference.indexOf(' ') + 2);

bookTrans.textContent = outputBible.data.translation_name;

bookName.textContent = outputBible.data.reference;


  $$('#bibleContent p').forEach(para => {
      para.addEventListener('dblclick', (ev) => {
        copyText(ev.target.textContent);
      });
    })

    grid($("footer"));

  } catch (err) {

    universalOn('Book could not be found. Please type the correct book in its field and value as well');

    skeletonAppend($('#bibleContent'), 20);

    grid($("footer"));

  }

}

//1 sec delay for opening skeleton loading
bibleApi();

$('#bibleInputNo').addEventListener("keyup",  function(){

  /[\W_]/.test(this.value) ? this.value = null : null;

Number(this.value) ? null  : this.value = null;

!this.value.includes('.') || !this.value.includes(',') || !this.value.includes('-') ? null  : this.value = null;

});

$('#bibleInputNo').addEventListener("change",  ()=>{

  
  if (Number($('#bibleInputNo').value.trim()) > Number($('#bookChapters').textContent) && $('#bibleInputNo').value.trim() !== '') {

    $('#bibleInputNo').value = `${$('#bookChapters').textContent}`;
  
    universalOn(`please note that this chapter has only ${$('#bookChapters').textContent}, please do not exceed this range!`);
  
  } 
  else if(Number($('#bibleInputNo').value.trim()) <= Number($('#bookChapters').textContent) && $('#bibleInputNo').value.trim() !== ''){

  none($("footer"));

  none($("#pagination"));

  bibleApi();

  universalOff();

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


async function booksFetch() {
  try {
    const booksData = await axios.get('booksOfTheBible.json');
    const oldBooks = booksData.data.filter(book => book.type == 'old');
    const newBooks = booksData.data.filter(book => book.type == 'new');

    booksData.data.map(book => {
      let chapters = $("#chapters");
      let span = createEl('span');
      span.textContent = book.name;
      span.setAttribute('data-book', book.name);
      span.setAttribute('data-number', book.chapters);
      chapters.append(span);

      function removeSpnActive() {
        $$("#chapters span").forEach(spn => {
          spn.classList.remove("span-active");
        });
      }

      $$("#chapters span").forEach(spn => {
        spn.addEventListener('click', (ev) => {
          $("#bibleInput").value = ev.currentTarget.dataset.book;
          removeSpnActive();
          ev.currentTarget.classList.add("span-active");
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}

booksFetch();

$("#select").addEventListener("click",()=>{
  none($("#books"));
  $("#bibleInputNo").value = 1;
  bibleApi();
  none($("footer"));
});

$("#cancelChapters").addEventListener("click",()=>{
  none($("#books"));
  $("body").classList.remove('overflow');
});


none($("#books"));

$("#bibleInput").addEventListener("click",listenForInput);
$("#bibleInput").addEventListener("focus",listenForInput);
$("#bibleInput").addEventListener("keyup",listenForInput);
$("#bibleInput").addEventListener("touchstart",listenForInput);

function listenForInput(){
  grid($("#books"));
  $("body").classList.add('overflow');
  $("#bibleInput").blur();
}

let fullScreen = $(".fullscreen");

fullScreen.addEventListener('click',toggleFullscreen);

fullScreen.textContent = 'Enter Fullscreen Mode';      

function toggleFullscreen() {
  if (document.fullscreenElement) {
      // If there's an element in fullscreen, exit fullscreen
      document.exitFullscreen();
this.textContent = 'Enter Fullscreen Mode';      
  
  } else {
      // If not in fullscreen, request fullscreen on the document
this.textContent = 'Exit Fullscreen Mode';      
document.documentElement.requestFullscreen().catch(err => {
              console.error('Failed to enter fullscreen:', err);
          });
  }
}


let next = $("#next");
let back = $("#back");

next.addEventListener("click",()=>{
  $("#bibleInputNo").value = Number($("#bibleInputNo").value) + 1;

  none($("footer"));
  none($("#pagination"));
  bibleApi();

});

back.addEventListener("click",()=>{
  $("#bibleInputNo").value = Number($("#bibleInputNo").value) - 1;
  
  none($("footer"));
  none($("#pagination"));
  bibleApi();
});

$("#logo").addEventListener('click',(ev)=>{
  ev.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


$("#books").addEventListener('click',function(){

  window.innerWidth >= 800 ? $("#cancelChapters").click() : null;
      
  });
  
  $(".chapter").addEventListener('click',(ev)=>{
ev.stopPropagation();
  })
  
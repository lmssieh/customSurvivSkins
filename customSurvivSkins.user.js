// ==UserScript==
// @name         Free Custom Surviv.io Skins and Mods (FREE SURVIV GOLD PASS #7 )
// @namespace    https://github.com/notKaiAnderson/
// @version      1.3.1
// @description   a free and purely cosmetic script that lets you use custom skins during games, it even lets you make your own skins!
// @author       preacher
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// @icon         https://i.imgur.com/jgHdTYA.png
// @run-at       document-end
// ==/UserScript==
 
/*** contributors
 * garlic
 * preacher
 * and thanks to Michal2SAB for the webpack inject code
***/
 
 
// make console.log() work
console.log = console.info;
 
// global declarartion
window.gunskins = "";
window.guns = "";
window.ceilings = ""
window.hands = ""
window.skins = ""
window.SkinRules = {};
window.FistsRules = {};
 
 
 
 
window.skinsArr = ["outfitDragonTails", "outfitCosmicBlue", "outfitJuleVerny", "outfitNorseCode", "outfitDigiturt", "outfitStreetArt",
  "outfitGhoulFire", "outfitGaudisque", "outfitMelonWater", "outfitStarryNight",
  "outfitBlueZone", "outfitKingGalaxy", "outfitBraaains", "outfitILavaYou", "outfitStumpd","outfitEggnite", "outfitTiki", "outfitMachoLucha2", "outfitCalaca", "outfitTipTheScales", "outfitAvocadoh",  "outfitChromesis", "outfitBoet","outfitFireball", "outfitMagmatic", "outfitPurpleMecha", "outfitMecha", "outfitDiamondy", "outfitAstronaut","outfitLasrDisk", "outfitCrusader", "outfitBlueMecha", "outfitSnowman" , "outfitChritstmasTree", "outfitGrinch", "outfitGingerbread", "outfitEventHorizon", "outfitMod", "outfitDev",,"outfitMojo", "outfitGiraffe", "outfitUrbanCamo", "outfitBlueLava", "outfitMango", "outfitBengal", "outfitUnderbrush", "outfitViper", "outfitGeometric", "outfitMilitary", "outfitClaymore", "outfitSunset", "outfitSplotchfest", "outfitRedLeader"];
 
window.handsArr = [];
 
window.gunsArr = {
  weaponSkinMilitary: {
    name: 'weaponSkinMilitary',
    long: "https://surviv.io/img/guns/gun-long-02.svg",
    med: "https://surviv.io/img/guns/gun-med-02.svg",
    short: "https://surviv.io/img/guns/gun-short-02.svg",
  },  
    weaponSkinAquatic: {
    name: 'weaponSkinAquatic',
    long: "https://surviv.io/img/guns/gun-long-03.svg",
    med: "https://surviv.io/img/guns/gun-med-03.svg",
    short: "https://surviv.io/img/guns/gun-short-03.svg"
  },
  weaponSkinSand: {
    name: 'weaponSkinSand',
    long: "https://surviv.io/img/guns/gun-long-04.svg",
    med: "https://surviv.io/img/guns/gun-med-04.svg",
    short: "https://surviv.io/img/guns/gun-short-04.svg",
  },
}
 
// Michal2SAB's code
// no idea how this work, maybe garlic could explain it
// 6 months later he still hasn't explained it yet ((
 
window.webpackR;
 
var func = {
    webpack_inject: (w, e, get) => {
        skins = get("63d67e9d");
        hands = get("ccb6ad93");
        guns = get("ad1c4e70");
        animation = get("3617adcf");
      window.webpackR = get.bind(this)
    },
};
 
if (typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
}
 
for (key in window.hands) {
    if(key.includes('fist')) {
        handsArr.push(key)
    }
}
 
load();
 
 
 
 
// _SKIN and _Hand must be a String 
// ex: skins["outfitFireball"]
 
window.assignSkin = function (_SKIN) {
 
    if (!skins[_SKIN]) return _SKIN + "doesn't exist"
 
    skins.outfitBase.accessory = {}
    skins.outfitBase.accessory.sprite = "";
 
    Object.assign(skins.outfitBase, skins[_SKIN]);
 
    return _SKIN
}
 
window.assignHand = function (_HAND) {
 
    if (!hands[_HAND]) return _HAND + "doesn't exist"
 
    hands.fists.handSprites = {};
    hands.fists.handSprites.spriteL = ""
    hands.fists.handSprites.spriteR = ""
 
    Object.assign(hands.fists, hands[_HAND]);
 
    return _HAND;
}
 
window.assignGuns = function (_GUNSKIN) {
 
    // guns = webpackR("ad1c4e70");
    Object.values(guns).forEach(ee => {
        switch(ee.worldImg.sprite) {
            case 'gun-short-01.img':
                ee.worldImg.sprite = _GUNSKIN.short
            break;
            case 'gun-med-01.img':
                ee.worldImg.sprite = _GUNSKIN.med
            break;
            case 'gun-long-01.img':
                ee.worldImg.sprite = _GUNSKIN.long
            break;
            };
    
        if (ee.worldImg.tint == 16777215) return
        ee.worldImg.tint = 16777215;
    })
 
}
 
 
 
//	inject css
//	useless comment ik
injectCss();
 
// hide the script
// .pass-body-container  {display: none;}
 
 
function load() {
    // turn string into camel case
    String.prototype.toCamelCase = function () {
        return this.replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })
            .replace(/\s/g, "")
            .replace(/^(.)/, function ($1) {
                return $1.toLowerCase();
            });
    };
    // UI stuff
    let ehtml = `
        <div  class="custom-wrapper-random"> 
                olimpiqisgay)
                survivistrash))
        </div>
        `;
    let disableScripthtml = `
        <div class="disable-the-script"><label>Disable the script</label>
            <input type="checkbox" id="disableTheScript">    
        </div>
    `;
    const startMenuEle = document.querySelector("#start-menu");
    // document.querySelector("div.pass-title").style.display = "none";
    // document.querySelector("div.pass-body-container").style.display = "none";
    // startMenuEle.style.display = 'none';
    startMenuEle.insertAdjacentHTML("beforeend", ehtml);
    startMenuEle.insertAdjacentHTML("afterend", disableScripthtml);
    const customWrapperEle = document.querySelector(".custom-wrapper-random");
    customWrapperEle.innerHTML = `<div class="contents">
			<div class="tabs">
				<div class="tab" style="flex-basis: 80%;">Select Skins</div>
        <div class="tab" style="flex-basis: 80%;">Select Fists</div>
        <div class="tab" style="flex-basis: 80%;">Select Guns</div>
			</div>
			<div class="container content">
				<div class="skins"></div>
			</div>
      <div class="container content">
				<div class="fists"></div>
			</div>
      <div class="container content">
				<div class="guns"></div>
			</div>
			<div class="footer">
				<p>
					report bugs on
					<a href="https://discord.gg/WjXgrGa" target="_blank">Discord</a> 🐓
				</p>
			</div>
		</div>
 
		`;
 
    // disable the script
 
    const checkbox = document.querySelector('#disableTheScript')
    const passBody = document.querySelector('.pass-body-container')
    checkbox.addEventListener('click', disableTheScript)
    function disableTheScript() {  
        const customWrapperEle = document.querySelector(".custom-wrapper-random");
        if (checkbox.checked == true){
            passBody.style.display = "block";
            customWrapperEle.style.display = "none";
        console.log(customWrapperEle)
        } else {
            passBody.style.display = "none";
            customWrapperEle.style.display = "block";
        }
    }
 
    // Tabs
    const tabLinks = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".content");
    tabLinks[0].classList.add("active-tab");
    tabContents[0].classList.add("active-tab");
    tabLinks.forEach((tabLink, i) => {
        tabLink.addEventListener("click", () => {
            tabLinks.forEach((tabLink) => tabLink.classList.remove("active-tab"));
            tabContents.forEach((tabContent) =>
                tabContent.classList.remove("active-tab")
            );
            tabLink.classList.add("active-tab");
            tabContents[i].classList.add("active-tab");
        });
    });
 
    // generate SKINS UI
    const skinItems = document.querySelector(".skins");
    const fistsItems = document.querySelector(".fists");
    const gunsItems = document.querySelector(".guns");
    skinItems.addEventListener("click", applySkin); // apply skins and border on click
    skinItems.innerHTML = "";
    fistsItems.addEventListener("click", applyFists);
    fistsItems.innerHTML = "";
    gunsItems.addEventListener("click", applyGuns);
    gunsItems.innerHTML = "";
  
 
//       (function() {
//   skins.outfitDonut = {}
//   Object.assign(skins.outfitDonut, skins.outfitBase)
//   skins.outfitDonut.name = "Donut Outfit"
//   skins.outfitDonut.skinImg.baseSprite = "donut.img"
//   skins.outfitDonut.anchor = {x:1,y:1}
// })()
    function updatehtml() {
        skinHtml = "";
        fistsHtml = "";
        gunsHtml = "";
      
        skinsArr.forEach((obj) => {
            console.log(obj, skins[obj])
            let eee = `
										<div class="skin-item" id="${obj}">
												<img src="img/loot/${skins[obj].lootImg.sprite.replace(
                "img",
                "svg"
            )}" class="skin-img" />
												<h4 class="skin-name">${skins[obj].name}</h4>
										</div>
										`;
            SkinRules[obj] = () => {
                assignSkin(obj);
            };
            skinHtml += eee;
        });
        skinItems.innerHTML = skinHtml;
      
      
        handsArr.forEach((obj) => {
            console.log(obj, hands[obj])
            let eee = `
										<div class="skin-item" id="${obj}">
												<img src="img/loot/${hands[obj].lootImg.sprite.replace(
                "img",
                "svg"
            )}" class="skin-img" />
												<h4 class="skin-name">${hands[obj].name}</h4>
										</div>
										`;
            FistsRules[obj] = () => {
                assignHand(obj);
            };
            fistsHtml += eee;
        });
        fistsItems.innerHTML = fistsHtml;
 
 
 
        Object.values(gunsArr).forEach(obj => {
            let eee = `
            <div class="skin-item" id="${obj.name}">
                <img src="${obj.long}" class="skin-img" />
                <h4 class="skin-name">${obj.name}</h4>
            </div>
            `;
            gunsHtml += eee;
        });
 
      gunsItems.innerHTML = gunsHtml;
      
    }
    updatehtml();
}
 
 
 
// Skin Rules
function applySkin(e) {
    if (SkinRules.hasOwnProperty(e.target.id)) {
        SkinRules[e.target.id]();
        skinRemoveBorder();
        e.target.className += " active";
        console.log(SkinRules[e.target.id]);
    } else if (SkinRules.hasOwnProperty(e.target.parentElement.id)) {
        SkinRules[e.target.parentElement.id]();
        skinRemoveBorder();
        e.target.parentElement.className += " active";
        console.log(SkinRules[e.target.parentElement.id]);
    }
}
 
// Fists Rules
function applyFists(e) {
    if (FistsRules.hasOwnProperty(e.target.id)) {
        FistsRules[e.target.id]();
        skinRemoveBorder();
        e.target.className += " active";
        console.log(FistsRules[e.target.id]);
    } else if (FistsRules.hasOwnProperty(e.target.parentElement.id)) {
        FistsRules[e.target.parentElement.id]();
        skinRemoveBorder();
        e.target.parentElement.className += " active";
        console.log(FistsRules[e.target.parentElement.id]);
    }
}
 
 
function applyGuns(e) {
    if (gunsArr.hasOwnProperty(e.target.id)) {
        assignGuns(gunsArr[e.target.id]);
        skinRemoveBorder();
        e.target.className += " active";
        console.log(gunsArr[e.target.id]);
    } else if (gunsArr.hasOwnProperty(e.target.parentElement.id)) {
        assignGuns(gunsArr[e.target.parentElement.id]);
        skinRemoveBorder();
        e.target.parentElement.className += " active";
        console.log(assignGuns(gunsArr[e.target.parentElement.id]));
    }
}
// removeBorder
function skinRemoveBorder() {
    skinItem = document.querySelectorAll(".skin-item");
    skinItem.forEach((item) => {
        item.classList.remove("active");
    });
}
 
 
// inject css
 
function injectCss() {
    const css = `.active { color: green; border: 2px solid #668e38;} .content, .pass-body-container  {display: none;}; .skin-name {margin: 10px;} .tab {display: flex !important;} .active-tab {display: block !important} .contents {display: flex; flex-direction: column; width: 100%; overflow-y: scroll; height: 100%;text-align: center; box-sizing: border-box;} .container {width: 100%; flex: 1 0 auto;} .skins, .fists, .guns, .crates {display: flex; box-sizing: border-box; flex-wrap: wrap} .trees img {max-height: auto; max-width: 100%} .maps {display: flex; box-sizing: border-box; flex-wrap: wrap} .skin-item, .map-item {flex-grow: 1; flex-basis: 25%; position: relative; cursor: pointer; box-sizing: border-box; padding: 10px 0;} .tabs {display: flex !important;} .tab {display: inline-block !important; flex-grow: 1; padding: 10px; background: rgba(0, 0, 0, 0.28); cursor: pointer; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd;} #start-menu {padding: 0;} #social-share-block-wrapper {display: none;} .tab.active-tab {background: #000;} .footer {background-color: #000; padding: 10px; border-top: 1px solid #ddd; flex-shrink: 0;} .footer p {margin:0; text-align: center;} .tab.icon { padding: 0; display: flex !important; justify-content: center; align-items: center;} .svg-icon { width: 1.5em; height: 1.5em; } .svg-icon path, .svg-icon polygon, .svg-icon rect { fill: #ffffff; } .svg-icon circle { stroke: #ffffff; stroke-width: 1;} .container.set .modal-settings-item {padding: 10px 0; } .btn-custom {-webkit-animation-name:custom-pulse;-webkit-animation-duration:5s;border-bottom:4px solid #00448a}@-webkit-keyframes custom-pulse{from{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}25%{background-color:#318585;border-bottom-color:#208686;-webkit-box-shadow:0 0 18px #318585}75%{background-color:#675fe0;border-bottom-color:#312b8a;-webkit-box-shadow:0 0 18px #675fe0}to{background-color:#8a9e69;border-bottom-color:#8a9e69;-webkit-box-shadow:0 0 9px #8a9e69}}#deleteSkinItem { position: absolute; right: 2px;} .btn-submit { margin-left: 10px; padding: 5px 10px; font-size: 1.3rem; background: #191616; color: #fff; border: solid 1px #fff; border-radius: 4px;} #addSkinName { font-size: 1.5rem;} .custom-wrapper-random { width: 753.89px; height: 415.06px; border-radius: 10.27px; box-sizing: border-box; max-height: unset; display: -webkit-box; display: flex;} #start-menu {padding: 0 !important;} .disable-the-script { position: absolute; bottom: -10%; text-align: center; background: #000; width: 100%; } #start-menu {    position: relative;}`
    let node = `<style>${css}</style>`;
    document.head.innerHTML += node;
}
 
 
// setTimeout(() => {
//   PIXI.utils.TextureCache["donut.img"].rotate=2
// }, 3000)

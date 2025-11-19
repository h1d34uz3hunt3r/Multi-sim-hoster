// ==UserScript==
// @name         Multi-sim hoster
// @namespace    https://github.com/h1d34uz3hunt3r
// @downloadURL  https://github.com/h1d34uz3hunt3r/Multi-sim-hoster/raw/main/MultisimHoster.user.js
// @updateURL    https://github.com/h1d34uz3hunt3r/Multi-sim-hoster/raw/main/MultisimHoster.user.js
// @version      2025-11-15
// @description  Easier tribute loading for the old sim, the new sim, and murder games
// @author       h1d34uz3hunt3r
// @include     /^(https?://)?boards\.4chan(nel)?\.org/.*/(res|thread)/.*/
// @include     /^(https?://)?(www\.)?brantsteele\.net/hungergames/(edit|personal)\.php*/
// @include     /^(https?://)?(www\.)?brantsteele\.com/hungergames/classic/edit\.php*/
// @include     /^(https?:\/\/)?orteil\.dashnet\.org\/murdergames*/
// @icon        data:image/webp;base64,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
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       unsafeWindow
// @grant       GM_setClipboard
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.5.2/jscolor.min.js
// @run-at      document-idle
// ==/UserScript==

// Copyright ZMNMXLNTR 2017-2021
// Copyright (C) 2025 h1d34uz3hunt3r
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

(function() {
    'use strict';

    const SIMSETTINGS = {
        hgos: {
            name: "Old Hunger Games",
            genders: ["male", "female"],
            genderToValue: {
                "male": 1,
                "female": 0
            }
        },
        hgns: {
            name: "New Hunger Games",
            genders: ["male", "female", "non-binary", "neuter", "pair"],
            genderToValue: {
                "male": 1,
                "female": 0,
                "non-binary": 4,
                "neuter": 2,
                "pair": 3
            }
        },
        mg: {
            name: "Murder Games",
            genders: ["male", "female", "non-binary"],
            genderToValue: {
                "male": 0,
                "female": 1,
                "non-binary": 2
            },
            perks: ["no perk", "leader", "peaceful", "sociopath", "kind", "unstable", "bulky", "meek", "naive", "devious",
                         "seductive", "suicidal", "cute", "annoying", "scrappy", "survivalist", "rich", "inventor", "goth",
                         "lunatic"],
            items: ["no item", "big stick", "pitchfork", "sword", "axe", "handgun", "shotgun", "grenade", "slingshot",
                    "bow", "flamethrower", "rocket launcher", "lasergun", "magic wand", "ancient scepter", "pet wolf", "pet tiger",
                    "pet turtle", "wish ring"]
        }
    }
    const FILE_FORMATS = ["png", "jpeg", "jpg", "webm", "mp4", "gif"];
    const IMAGE_FORMATS = ["png", "jpeg", "jpg", "gif"];

    function save() {
        const tributeData = {
            unaffiliated: [],
            teams: {
            }
        }
        for (const entry of document.querySelectorAll(".hostingForm")) {
            if (entry.querySelector(".hostingCheckbox").checked) {
                const tribute = {
                    name: entry.querySelector(".hostingName").value,
                    gender: entry.querySelector(".hostingGender").value,
                    firstPerk: entry.querySelector(".hostingPerk").value,
                    secondPerk: entry.querySelectorAll(".hostingPerk")[1].value,
                    item: entry.querySelector(".hostingItem").value,
                    color: entry.querySelector(".hostingColor").value,
                    entryNumber: Number(entry.querySelector(".hostingNumber").innerText.replace(/(?:\(|\))/g, "")),
                    imageUrl: (IMAGE_FORMATS.includes(entry.parentNode.querySelector(".fileThumb")?.href?.toLowerCase().split(".").at(-1)) ?
                    entry.parentNode.querySelector(".fileThumb")?.href :
                    entry.parentNode.querySelector(".fileThumb")?.querySelector("img")?.src)
                }

                const team = entry.querySelector(".hostingTeam").value;
                const color = entry.querySelector(".hostingColor").value
                if (team) {
                    if (!tributeData.teams[team]) {
                        tributeData.teams[team] = {
                            name: team,
                            color: color,
                            players: []
                        }
                    }
                    tributeData.teams[team].players.push(tribute);
                } else {
                    tributeData.unaffiliated.push(tribute);
                }
            }
        }
        GM_setValue("tributeData", JSON.stringify(tributeData));
        if (document.querySelector("#hostingSettingsClipboard").checked) {
            GM_setClipboard(JSON.stringify(tributeData));
        }
    }

    function deselectAll() {
        if (confirm("Deselect all tributes?")) {
            for (const checkbox of document.querySelectorAll(".hostingCheckbox")) {
                checkbox.checked = false;
            }
        }
        numberTributes();
    }

    function selectAll() {
        for (const checkbox of document.querySelectorAll(".hostingCheckbox")) {
            checkbox.checked = true;
        }
        numberTributes();
    }

    function numberTributes() {
        let count = 1;
        for (const entry of document.querySelectorAll(".hostingForm")) {
            if (entry.parentElement.querySelector(".hostingCheckbox").checked) {
                entry.querySelector(".hostingNumber").innerText = `(${count})`;
                count++;
            } else {
                entry.querySelector(".hostingNumber").innerText = "";
            }
        }
    }

    function hide() {
      for (const post of document.querySelectorAll(".post.reply")) {
        const form = post.querySelector(".hostingForm");
        if (form) {
          if (form.style.display !== "none") {
            form.style.display = "none";
          } else {
            form.style.display = "flex";
          }
        }
      }
    }

    function draw() {
        const sim = document.querySelector("#hostingModeSelect").value;
        const setTeams = [];

        for (const post of document.querySelectorAll(".post.reply")) {
            if (!FILE_FORMATS.includes(post.querySelector(".fileThumb")?.href?.toLowerCase().split(".").at(-1))) {
                continue;
            }

            if (!post.querySelector(".hostingCheckbox")) {
                const form = document.createElement("div");
                form.classList.add("hostingForm");

                const checkbox = document.createElement("input");
                checkbox.classList.add("hostingCheckbox");
                checkbox.type = "checkbox";
                checkbox.addEventListener("change", () => {
                    numberTributes();
                });

                const textfields = document.createElement("div");
                textfields.classList.add("hostingTextfields");
                Object.assign(textfields.style, {
                    display: "flex",
                    flexDirection: "column"
                });

                const name = document.createElement("input");
                name.classList.add("hostingName");
                name.type = "text";
                name.size = 36;
                name.title = "Tribute name.";
                name.placeholder = "Tribute name...";
                //Autofill. The first line of an entry is usually the name.
                for (const cn of post.querySelector(".postMessage").childNodes) {
                    if (cn.nodeType === Node.TEXT_NODE) {
                        name.value = cn.nodeValue;
                        checkbox.checked = true;
                        break;
                    }
                }
                textfields.appendChild(name);

                const teamSpan = document.createElement("div");
                teamSpan.classList.add("hostingTeamSpan");
                Object.assign(teamSpan.style, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                });

                const team = document.createElement("input");
                team.classList.add("hostingTeam");
                team.type = "text";
                team.size = 36;
                team.title = "Tribute team";
                team.placeholder = "Tribute team...";
                Object.assign(team.style, {
                    marginRight: "0px"
                });
                teamSpan.appendChild(team);

                const teamSet = document.createElement("input");
                teamSet.classList.add("hostingTeamSet");
                teamSet.type = "checkbox";
                teamSet.title = "Set team";
                Object.assign(teamSet.style, {
                    width: "23.9833px",
                    height: "23.9833px",
                    margin: "0px"
                });
                teamSpan.appendChild(teamSet);

                textfields.appendChild(teamSpan);
                if (sim !== "hgns" && sim !== "mg") {
                    teamSpan.style.display = "none";
                }

                const loadoutFields = document.createElement("div");
                loadoutFields.classList.add("hostingLoadoutFields");
                Object.assign(loadoutFields.style, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px"
                });
                if (sim !== "mg") {
                    loadoutFields.style.display = "none";
                }

                const alreadyChosenPerks = [];
                for (let i = 0; i < 2; i++) {
                    const perks = document.createElement("select");
                    perks.classList.add("hostingPerk");

                    for (const perk of SIMSETTINGS.mg.perks) {
                        const option = document.createElement("option");
                        option.classList.add("hostingOption");
                        option.innerText = prettify(perk);
                        option.value = perk;
                        perks.appendChild(option);
                        //Autofill.
                        if (post.querySelector(".postMessage").innerText.toLowerCase().includes(perk) && !alreadyChosenPerks.includes(perk) && perks.value === "no perk") {
                            perks.value = perk;
                            alreadyChosenPerks.push(perk);
                        }
                    }
                    loadoutFields.appendChild(perks);
                }

                const items = document.createElement("select");
                items.classList.add("hostingItem");
                for (const item of SIMSETTINGS.mg.items) {
                    const option = document.createElement("option");
                    option.classList.add("hostingOption");
                    option.innerText = prettify(item);
                    option.value = item;
                    items.appendChild(option);
                    //Autofill.
                    if (post.querySelector(".postMessage").innerText.toLowerCase().includes(item)) {
                        items.value = item;
                    }
                }
                loadoutFields.appendChild(items);

                const optionsFields = document.createElement("div");
                optionsFields.classList.add("hostingOptionsField");
                Object.assign(optionsFields.style, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px"
                });

                const gender = document.createElement("select");
                gender.classList.add("hostingGender");
                for (const simGender of SIMSETTINGS[sim].genders) {
                    const option = document.createElement("option");
                    option.classList.add("hostingOption");
                    option.innerText = simGender;
                    option.value = simGender;
                    gender.appendChild(option);
                }
                optionsFields.appendChild(gender);

                const color = document.createElement("input");
                color.classList.add("hostingColor");
                color.type = "text";
                color.value = "#FFFFFF";
                color.setAttribute('data-jscolor', '{height: 23.9833}');
                color.style.width = "93px";
                new jscolor(color);
                optionsFields.appendChild(color);
                if (sim !== "hgns") {
                    color.style.display = "none";
                }


                const number = document.createElement("span");
                number.classList.add("hostingNumber");

                for (const formElement of [checkbox, textfields, loadoutFields, optionsFields, number]) {
                    form.appendChild(formElement);
                }
                Object.assign(form.style, {
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px"
                });
                post.prepend(form);
            } else {
                //Form already exists. Convert for correct sim
                post.querySelector(".hostingForm").style.display = "flex";
                post.querySelector(".hostingTeamSpan").style.display = (sim === "hgns" || sim === "mg") ? "flex" : "none";
                post.querySelector(".hostingColor").style.display = sim === "hgns" ? "inline-block" : "none";
                post.querySelector(".hostingLoadoutFields").style.display = sim === "mg" ? "flex" : "none";
                const gender = post.querySelector(".hostingGender");
                const prevGender = gender.value;
                gender.innerHTML = "";
                for (const simGender of SIMSETTINGS[sim].genders) {
                    const option = document.createElement("option");
                    option.classList.add("hostingOption");
                    option.innerText = simGender;
                    option.value = simGender;
                    gender.appendChild(option);
                    if (simGender === prevGender) {
                        gender.value = simGender;
                    }
                }
                if (post.querySelector(".hostingTeamSet").checked) {
                    setTeams.push({name: post.querySelector(".hostingTeam").value, color: post.querySelector(".hostingColor").value});
                } else {
                    //Autofill
                    for (const setTeam of setTeams) {
                        if (!post.querySelector(".hostingTeam").value && post.querySelector(".postMessage").innerText.toLowerCase().includes(setTeam.name.toLowerCase())) {
                            post.querySelector(".hostingTeam").value = setTeam.name;
                            post.querySelector(".hostingColor").value = setTeam.color;
                            post.querySelector(".hostingColor").jscolor.fromString(setTeam.color);
                            break;
                        } else if (post.querySelector(".hostingTeam").value === setTeam.name) {
							post.querySelector(".hostingColor").value = setTeam.color;
                            post.querySelector(".hostingColor").jscolor.fromString(setTeam.color);
                            break;
						}
                    }
                }
            }
        }

        numberTributes();
    }

    function oldLoad(rolling) {
        const tributeData = JSON.parse(GM_getValue("tributeData"));
        const tributes = [...tributeData.unaffiliated];
        for (const team of Object.values(tributeData.teams)) {
            tributes.push(...team.players);
        }
        tributes.sort((a, b) => {
            if (a.entryNumber > b.entryNumber) {
                return 1;
            } else if (a.entryNumber < b.entryNumber) {
                return -1;
            } else {
                return 0;
            }
        });

        const textInputs = Array.from(document.querySelectorAll("table.personalHG tbody input[type='text']"));
        const genderInputs = document.querySelectorAll("table.personalHG tbody #gender");
        const nameInputs = textInputs.filter((ele) => {
            return !(ele.name.endsWith("img") || ele.name.endsWith("imgBW"));
        });
        const imgInputs = textInputs.filter((ele) => {
            return (ele.name.endsWith("img") || ele.name.endsWith("imgBW"));
        });

        for (let i = 0; i < genderInputs.length; i++) {
            let tribute;
            if (i < tributes.length) {
                tribute = tributes[i];
            } else if (rolling && tributes.length > 0) {
                const tributeIndex = i % tributes.length;
                tribute = tributes[tributeIndex];
            }

            if (tribute) {
                nameInputs[i * 2].value = tribute.name;
                nameInputs[i * 2 + 1].value = tribute.name;

                imgInputs[i * 2].value = tribute.imageUrl;
                imgInputs[i * 2 + 1].value = tribute.imageUrl;

                genderInputs[i].value = SIMSETTINGS.hgos.genderToValue[tribute.gender];
            } else {
                nameInputs[i * 2].value = "";
                nameInputs[i * 2 + 1].value = "";

                imgInputs[i * 2].value = "";
                imgInputs[i * 2 + 1].value = "";

                genderInputs[i].value = "?";
            }
        }
    }

    async function newLoad() {
        const tributeData = JSON.parse(GM_getValue("tributeData"));

        //There's a separate form where district count and sizes are adjusted but we can do that here to minimize clicks
        const districtNum = tributeData.unaffiliated.length + Object.keys(tributeData.teams).length;
        if (districtNum <= 0) {
            alert("No tribute data is saved.");
            return;
        }

        const formData = new FormData();
        formData.append("FormCode", 6);
        formData.append("DistrictNumber", districtNum);
        formData.append("NumberPerDistrict", "-");

        //Unaffiliated players need to be in their own district to avoid triggering endgame events
        let districtCount = 0;
        for (const player of tributeData.unaffiliated) {
            districtCount++;
            formData.append(`District${districtCount}`, 1);
        }
        for (const team of Object.values(tributeData.teams)) {
            districtCount++;
            formData.append(`District${districtCount}`, team.players.length);
        }

        const response = await fetch("https://brantsteele.com/hungergames/classic/SetSettings.php", {
            method: "POST",
            body: formData
        });

        //Now send the tribute data
        //The formatting the server expects is a little special
        let nameCount = 0;
        const teams = tributeData.unaffiliated.map(ele => {
            nameCount++;
            return {players: [ele], color: ele.color, name: `Tribute ${nameCount}`}
        });
        teams.push(...Object.values(tributeData.teams));

        const TeamCountArray = {};
        for (let i = 0; i < teams.length; i++) {
            TeamCountArray[i + 1] = teams[i].players.length;
        }

        const ImageBWArray = [];
        const Name = [];
        const Nickname = [];
        const Gender = [];
        const ImageArray = [];

        for (var i = 1; i <= districtNum; i++) {
            Name[i] = [];
            Nickname[i] = [];
            Gender[i] = [];
            ImageArray[i] = [];
            ImageBWArray[i] = [];


            for (var j = 1; j <= TeamCountArray[i]; j++) {
                Name[i][j] = i*j;
                Nickname[i][j] = i*j;
                Gender[i][j] = i*j;
                ImageArray[i][j] = i*j;
                ImageBWArray[i][j] = i*j;
            }
        }

        const NameIndicator = [];
        const NicknameIndicator = [];
        const GenderIndicator = [];
        const ImageArrayIndicator = [];
        const TeamIndicator = [];
        const TeamPluralIndicator = [];
        const TeamColorIndicator = [];
        const TeamColorReverseIndicator = [];

        for (let i = 1; i <= districtNum; i++) {
            TeamIndicator[i] = newSimSanitize("text", teams[i-1].name);
            TeamPluralIndicator[i] = 0;
            TeamColorIndicator[i] = newSimSanitize("color", teams[i-1].color);
            TeamColorReverseIndicator[i] = 0;
        }

        const ImageBWArrayIndicator = [];
        for (let i = 1; i <= districtNum; i++) {
            NameIndicator[i] = [];
            NicknameIndicator[i] = [];
            GenderIndicator[i] = [];
            ImageArrayIndicator[i] = [];
            ImageBWArrayIndicator[i] = [];

            for (let j = 1; j <= TeamCountArray[i]; j++) {
                NameIndicator[i][j] = i*j;
                NicknameIndicator[i][j] = i*j;
                GenderIndicator[i][j] = i*j;
                ImageArrayIndicator[i][j] = i*j;
                ImageBWArrayIndicator[i][j] = i*j;
            }
        }

        for (let i = 1; i <= districtNum; i++) {
            for (let j = 1; j <= TeamCountArray[i]; j++) {
                NameIndicator[i][j] = newSimSanitize("text", teams[i-1].players[j-1].name);
                NicknameIndicator[i][j] = newSimSanitize("text", teams[i-1].players[j-1].name);
                GenderIndicator[i][j] = SIMSETTINGS.hgns.genderToValue[teams[i-1].players[j-1].gender];
                ImageArrayIndicator[i][j] = newSimSanitize("url", teams[i-1].players[j-1].imageUrl);
                ImageBWArrayIndicator[i][j] = "BW";
            }
        }

        //Brant decided to add a random code that changes whenever you change settings, so we have to go get the updated one
        const editUrl = await fetch("https://brantsteele.com/hungergames/classic/edit.php");
        const editHtml = await editUrl.text();
        const randomCode = editHtml.match(/var RandomCode = '(?<RC>.+)'/).groups.RC;

        const formData2 =
              {
                  EditType: document.querySelector("#EditType").value,
                  Title: document.querySelector("#Title").value,
                  Logo: document.querySelector("#Logo").value,
                  Name: NameIndicator,
                  Nickname: NicknameIndicator,
                  Gender: GenderIndicator,
                  Image: ImageArrayIndicator,
                  ImageBW: ImageBWArrayIndicator,
                  RandomCode: randomCode,
                  Reverse: TeamColorReverseIndicator,
                  Variation: document.querySelector("#Variation")?.value ?? 1,
                  Team: TeamIndicator,
                  Color: TeamColorIndicator,
                  Plural: TeamPluralIndicator
              };

        $.ajax
            ({
                type        : 'POST',
                url         : '../../include/edit/process.php',
                data        : formData2,
                dataType    : 'json',
                encode      : true
            })
            .done(function(data)
            {
                if(data[0] == "1")
                {
                    window.location.reload();
                }
                else if(data[0] == "2")
                {
                    $('#FormInformation').html(data[1]);
                }
            })
            .fail(function(data)
            {
                    console.log(data);
            });
    }

    function newSimSanitize(mode, text) {
        switch (mode) {
            case "url":
                return /(https:\/\/.*\.(?:png|jpg|gif|bmp|jpeg))$/i.test(text) ? text.slice(0, 200) : "https://brantsteele.com/extras/hungergames/01/logo.png";
                break;
            case "color":
                return /([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/.test(text) ? text.replaceAll("#", "") : "FFFFFF";
                break;
            case "text":
                return text.replaceAll(/[^a-zA-Z0-9 ,.'-:!?úóãíáéêçkıÇ;#&ñěá²üàäö?åöōôÓÁþ\]\[\/]/g, "").slice(0, 45) || " ";
                break;
        }
    }

    function murderLoad() {
        const tributeData = JSON.parse(GM_getValue("tributeData"));

        const murderData = {
            teams:[
                {
                    name:"NOTEAM"
                }
            ],
            chars:[
            ]
        }

        for (const tribute of tributeData.unaffiliated) {
            murderData.chars.push({
			"name": tribute.name,
			"g": SIMSETTINGS.mg.genderToValue[tribute.gender],
			"t": 0,
			"pic": tribute.imageUrl,
			"team": "NOTEAM",
			"perks": [
				tribute.firstPerk,
				tribute.secondPerk,
				tribute.item
			]
            });
        }

        for (const team of Object.values(tributeData.teams)) {
            murderData.teams.push({
                name: team.name
            });
            for (const tribute of team.players) {
            murderData.chars.push({
			"name": tribute.name,
			"g": SIMSETTINGS.mg.genderToValue[tribute.gender],
			"t": 0,
			"pic": tribute.imageUrl,
			"team": team.name,
			"perks": [
				tribute.firstPerk,
				tribute.secondPerk,
				tribute.item
			]
            });
          }
        }

        unsafeWindow.G.importSetup(JSON.stringify(murderData));
    }

    function prettify(text) {
        return (text.charAt(0).toUpperCase() + text.slice(1)).replace(/(\S)([A-Z])/g, "$1 $2").trim();
    }

    function create4chanControls() {
        const controls = document.createElement("div");
        Object.assign(controls.style, {
            display: "flex",
            flexDirection: "row",
            gap: "2px"
        });

        const modeSelect = document.createElement("select");
        modeSelect.id = "hostingModeSelect";
        for (const sim of Object.keys(SIMSETTINGS)) {
            const option = document.createElement("option");
            option.innerText = SIMSETTINGS[sim].name;
            option.value = sim;
            modeSelect.appendChild(option);
        }
        modeSelect.value = GM_getValue("hostingMode") || "hgos";
        modeSelect.addEventListener("change", () => {
            GM_setValue("hostingMode", modeSelect.value);
        });
        controls.appendChild(modeSelect);

        for (const func of [draw, save, selectAll, deselectAll, hide]) {
            const button = document.createElement("button");
            button.type = "button";
            button.addEventListener("click", func);
            button.innerText = prettify(func.name);
            controls.appendChild(button);
        }

        const settings = document.createElement("div");
        settings.classList.add("extPanel", "reply");
        Object.assign(settings.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "min-content",
            display: "none"
        });
        settings.innerHTML =
        `<div class="panelHeader">
		         Settings
                 <span id="hostingSettingsClose" class="panelCtrl">
                     <img src="https://s.4cdn.org/image/buttons/tomorrow/cross.png" style="cursor: pointer;">
                 </span>
	     </div>
	     <ul class="settings-cat" style="display: block; list-style-type: none; padding-left: 3px">
             <li>
                 <label>
                     <input id="hostingSettingsClipboard" type="checkbox" class="menuOption" style="cursor: pointer;">
                     Clipboard
                 </label>
             </li>
             <li class="settings-tip">
                 Copy tribute data to clipboard when saving
             </li>
	     </ul>`;
        settings.querySelector("#hostingSettingsClipboard").checked = GM_getValue("clipboardSettings") === "1" ? true : false;
        settings.querySelector("#hostingSettingsClipboard").addEventListener("change", () => {
            GM_setValue("clipboardSettings", settings.querySelector("#hostingSettingsClipboard").checked ? "1" : "0");
        });
        settings.querySelector("#hostingSettingsClose").addEventListener("click", () => {
            settings.style.display = "none";
        });

        const settingsButton = document.createElement("button");
        settingsButton.type = "button";
        settingsButton.addEventListener("click", () => {
            if (settings.style.display !== "none") {
                settings.style.display = "none";
            } else {
                settings.style.display = "block";
            }
        });
        settingsButton.innerText = "Settings";
        controls.appendChild(settingsButton);

        const helpButton = document.createElement("button");
        helpButton.type = "button";
        helpButton.addEventListener("click", () => {
            window.open("https://github.com/h1d34uz3hunt3r/Multi-sim-hoster", "_blank");
        });
        helpButton.innerText = "Help";
        controls.appendChild(helpButton);


        document.body.appendChild(controls);
        document.body.appendChild(settings);
    }

    function createOldSimControls() {
        const controls = document.createElement("div");
        controls.style.position = "absolute";

        const load = document.createElement("button");
        load.innerText = "Load";
        load.addEventListener("click", () => {
            oldLoad(false);
        });

        const rollingLoad = document.createElement("button");
        rollingLoad.innerText = "Rolling Load";
        rollingLoad.addEventListener("click", () => {
            oldLoad(true);
        });

        for (const button of [load, rollingLoad]) {
            button.type = "button";
            controls.appendChild(button);
        }

        document.querySelector(".personalHG").prepend(controls);
    }

    function createNewSimControls() {
        const cosemeticForm = document.createElement("form");

        const loadButton = document.createElement("button");
        loadButton.classList.add("EditButtons");
        loadButton.type = "button";
        loadButton.innerText = "Load";
        loadButton.addEventListener("click", newLoad);
        cosemeticForm.appendChild(loadButton);

        const returnForm = document.querySelector("form[action='reaping.php']");
        returnForm.parentNode.insertBefore(cosemeticForm, returnForm);
        cosemeticForm.parentNode.insertBefore(document.createElement("br"), cosemeticForm.nextSibling);
    }

    function createMurderGamesControls() {
        const loadButton = document.createElement("div");
        loadButton.classList.add("button");
        loadButton.innerText = "Load";
        loadButton.addEventListener("click", murderLoad);

        const importButton = document.querySelector("#importSetup");
        importButton.parentNode.insertBefore(loadButton, importButton);
        importButton.parentNode.insertBefore(document.createTextNode(" "), importButton);
    }


    if (/^(https?:\/\/)?boards\.4chan(nel)?\.org\/.*\/(res|thread)\/.*/i.test(window.location.href)) {
        //4chan
        create4chanControls();
    } else if (/^(https?:\/\/)?brantsteele\.net\/hungergames\/(edit|personal)\.php/i.test(window.location.href)) {
        //Old sim
        //Remove character limit and bypass form validation since there's no backend validation
        const form = document.querySelector('form[name="PersonalForm"]');
        for (const input of form.querySelectorAll('input[type="text"]')) {
            input.removeAttribute("maxlength");
        }
        unsafeWindow.validateForm = function() {
            return true;
        }

        createOldSimControls();
    } else if (/^(https?:\/\/)?brantsteele\.com\/hungergames\/classic\/edit\.php/i.test(window.location.href)) {
        //New sim
        //Brant added serverside validation this time
        //Name length limit can be bypassed using the "import from text file" feature but then certain characters get converted to html entities
        //So pick your poison  ¯\_(ツ)_/¯

        createNewSimControls();
    } else if (/^(https?:\/\/)?orteil\.dashnet\.org\/murdergames/i.test(window.location.href)) {
        //Murder games
        //Remove poorly-placed ad & fix issue with 4chan images not working
        document.querySelector("#ad").display = "none";
        const meta = document.createElement("meta");
        meta.name = "referrer";
        meta.content = "no-referrer";
        document.head.appendChild(meta);

        createMurderGamesControls();
    }

})();


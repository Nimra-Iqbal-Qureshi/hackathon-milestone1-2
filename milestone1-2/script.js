"use strict";
let ObjectiveBtn = document.getElementById("ObjectiveBtn");
let EducationBtn = document.getElementById("EducationBtn");
let SkillsBtn = document.getElementById("SkillBtn");
let WorkBtn = document.getElementById("WorkBtn");
let ObjectiveSec = document.getElementById("ObjectiveSec");
let eduSec = document.getElementById("eduSec");
let skillSec = document.getElementById("skillSec");
let Workexpsec = document.getElementById("workexpSec");
ObjectiveBtn?.addEventListener('click', () => {
    if (ObjectiveSec.style.display == 'block') {
        ObjectiveSec.style.display = 'none';
    }
    else {
        ObjectiveSec.style.display = 'block';
    }
});
EducationBtn?.addEventListener('click', () => {
    if (eduSec.style.display == 'block') {
        eduSec.style.display = 'none';
    }
    else {
        eduSec.style.display = 'block';
    }
});
SkillsBtn?.addEventListener('click', () => {
    if (skillSec.style.display == 'block') {
        skillSec.style.display = 'none';
    }
    else {
        skillSec.style.display = 'block';
    }
});
WorkBtn?.addEventListener('click', () => {
    if (Workexpsec.style.display == 'block') {
        Workexpsec.style.display = 'none';
    }
    else {
        Workexpsec.style.display = 'block';
    }
});

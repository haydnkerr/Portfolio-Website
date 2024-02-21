AOS.init();



let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let activeDxg = document.getElementById('active-dxg')
let activeFreelance = document.getElementById('active-freelance')
let activeNutmeg = document.getElementById('active-nutmeg')
let inactiveDxg = document.getElementById('inactive-dxg')
let inactiveFreelance = document.getElementById('inactive-freelance')
let inactiveNutmeg = document.getElementById('inactive-nutmeg')
let bookBtn = document.getElementById('nutmeg-book-button')
let bookContainer = document.getElementById('book-container')
let bookCloseBtn = document.getElementById('book-close-btn')


let resumeBtn = document.getElementById('resume-link')
let resumeCloseBtn = document.getElementById('resume-close-btn')
let resume = document.querySelector('.resume-container')


let artCloseBtn = document.getElementById('art-view-close-btn');
let artView = document.getElementById('art-view-container');
let farmFullSize = document.getElementById('farming-drawing-full-size');
let shadeFullSize = document.getElementById('shadow-drawing-full-size');
let paperFullSize = document.getElementById('paper-drawing-full-size');
let stripedPaperFullSize = document.getElementById('striped-paper-drawing-full-size');
let plantFullSize = document.getElementById('plant-drawing-full-size');
let zebraFullSize = document.getElementById('zebra-drawing-full-size');
let zebraExpandBtn = document.getElementById('zebra-drawing-expand');
let paperExpandBtn = document.getElementById('paper-drawing-expand');
let stripedPaperExpandBtn = document.getElementById('striped-paper-drawing-expand');
let plantExpandBtn = document.getElementById('plant-drawing-expand');
let shadowExpandBtn = document.getElementById('shading-drawing-expand');
let farmExpandBtn = document.getElementById('farming-drawing-expand');




one.addEventListener('click', oneTransition);
two.addEventListener('click', twoTransition);
three.addEventListener('click', threeTransition);
bookBtn.addEventListener('click', openBook);
bookCloseBtn.addEventListener('click', openBook)
resumeBtn.addEventListener('click', resumeToggle);
resumeCloseBtn.addEventListener('click', resumeToggle);
artCloseBtn.addEventListener('click', toggleArtView);

zebraExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  zebraFullSize.classList.remove('display-none')
})

paperExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  paperFullSize.classList.remove('display-none')
})

stripedPaperExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  stripedPaperFullSize.classList.remove('display-none')
})

plantExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  plantFullSize.classList.remove('display-none')
})

shadowExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  shadeFullSize.classList.remove('display-none')
})

farmExpandBtn.addEventListener('click', function () {
  artView.classList.remove('display-none')
  farmFullSize.classList.remove('display-none')
})




function toggleArtView() {
  artView.classList.toggle('display-none')
  farmFullSize.classList.add('display-none')
  paperFullSize.classList.add('display-none')
  stripedPaperFullSize.classList.add('display-none')
  shadeFullSize.classList.add('display-none')
  plantFullSize.classList.add('display-none')
}

function resumeToggle() {
  resume.classList.toggle('display-none')
}



function openBook() {
  bookContainer.classList.toggle('display-none')
}



function oneTransition() {
  if (two.classList.contains('primary-grid')) {
    two.classList.remove('primary-grid')
    one.classList.remove('left-grid')
    one.classList.remove('right-grid')
    one.classList.add('primary-grid')
    activeNutmeg.classList.remove('display-none')
    inactiveNutmeg.classList.add('display-none')
    inactiveDxg.classList.remove('display-none')
    inactiveFreelance.classList.remove('display-none')
    activeDxg.classList.add('display-none')
    activeFreelance.classList.add('display-none')
  } else if (three.classList.contains('primary-grid')) {
    three.classList.remove('primary-grid')
    one.classList.remove('left-grid')
    one.classList.remove('right-grid')
    one.classList.add('primary-grid')
    activeNutmeg.classList.remove('display-none')
    inactiveNutmeg.classList.add('display-none')
    // inactiveDxg.classList.remove('display-none')
    inactiveFreelance.classList.remove('display-none')
    // activeDxg.classList.add('display-none')
    activeFreelance.classList.add('display-none')
  }
}

function twoTransition() {
  if (one.classList.contains('primary-grid')) {
    one.classList.remove('primary-grid')
    two.classList.remove('left-grid')
    two.classList.remove('right-grid')
    two.classList.add('primary-grid')
    activeDxg.classList.remove('display-none')
    inactiveDxg.classList.add('display-none')
    inactiveFreelance.classList.remove('display-none')
    activeFreelance.classList.add('display-none')
    inactiveNutmeg.classList.remove('display-none')
    activeNutmeg.classList.add('display-none')

  } else if (three.classList.contains('primary-grid')) {
    three.classList.remove('primary-grid')
    two.classList.remove('left-grid')
    two.classList.remove('right-grid')
    two.classList.add('primary-grid')
    activeDxg.classList.remove('display-none')
    inactiveDxg.classList.add('display-none')
    inactiveFreelance.classList.remove('display-none')
    activeFreelance.classList.add('display-none')
    inactiveNutmeg.classList.remove('display-none')
    activeNutmeg.classList.add('display-none')
  }
}

function threeTransition() {
  if (two.classList.contains('primary-grid')) {
    two.classList.remove('primary-grid')
    three.classList.remove('left-grid')
    three.classList.remove('right-grid')
    three.classList.add('primary-grid')
    activeFreelance.classList.remove('display-none')
    inactiveFreelance.classList.add('display-none')
    inactiveDxg.classList.remove('display-none')
    activeDxg.classList.add('display-none')
    inactiveNutmeg.classList.remove('display-none')
    activeNutmeg.classList.add('display-none')
  } else if (one.classList.contains('primary-grid')) {
    one.classList.remove('primary-grid')
    three.classList.remove('left-grid')
    three.classList.remove('right-grid')
    three.classList.add('primary-grid')
    activeFreelance.classList.remove('display-none')
    inactiveFreelance.classList.add('display-none')
    inactiveDxg.classList.remove('display-none')
    activeDxg.classList.add('display-none')
    inactiveNutmeg.classList.remove('display-none')
    activeNutmeg.classList.add('display-none')
  }
}




let projectCloseBtn = document.querySelectorAll('.project-close-btn')
let jobDescriptionContainer = document.getElementById('job-description-container')
let n = 0;

let connectFourOpen = document.getElementById('connect-four-learn-more');
let miraclesOpen = document.getElementById('miracles-learn-more');
let ctnerrOpen = document.getElementById('ctnerr-learn-more');
let spaceOpen = document.getElementById('space-learn-more');
let coreOpen = document.getElementById('core-learn-more');
let prArchivesOpen = document.getElementById('pr-archive-learn-more');
let crosshairsOpen = document.getElementById('crosshairs-learn-more');
let floeOpen = document.getElementById('floe-learn-more');
let frontendMentorOpen = document.getElementById('frontend-mentor-learn-more');


let connectFourDesc = document.getElementById('connect-four-description');
let miraclesDesc = document.getElementById('miracles-description');
let ctnerrDesc = document.getElementById('ct-nerr-description');
let spaceDesc = document.getElementById('space-description');
let coreDesc = document.getElementById('core-description');
let prArchivesDesc = document.getElementById('pr-archive-description');
let crosshairsDesc = document.getElementById('crosshairs-description');
let floeDesc = document.getElementById('floe-description');
let frontendMentorDesc = document.getElementById('frontend-mentor-description');

connectFourOpen.addEventListener('click', openConnectProject);
miraclesOpen.addEventListener('click', openMiraclesProject);
ctnerrOpen.addEventListener('click', openCtnerrProject);
spaceOpen.addEventListener('click', openSpaceProject);
coreOpen.addEventListener('click', openCoreProject);
prArchivesOpen.addEventListener('click', openPrArchivesProject);
crosshairsOpen.addEventListener('click', openCrosshairsProject);
floeOpen.addEventListener('click', openFloeProject);
frontendMentorOpen.addEventListener('click', openFrontendMentorProject);

function openConnectProject() {
  connectFourDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 0
  projectCloseBtn[n] = projectCloseBtn[n]
}

function openMiraclesProject() {
  miraclesDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 1
  projectCloseBtn[n] = projectCloseBtn[1]
}

function openCtnerrProject() {
  ctnerrDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 2
}
function openSpaceProject() {
  spaceDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 3
}
function openCoreProject() {
  coreDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 4
}
function openPrArchivesProject() {
  prArchivesDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 5
}
function openCrosshairsProject() {
  crosshairsDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 6
}
function openFloeProject() {
  floeDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 7
}
function openFrontendMentorProject() {
  frontendMentorDesc.classList.remove('display-none')
  jobDescriptionContainer.classList.remove('display-none')
  n = 8
}






projectCloseBtn[0].addEventListener('click', closeProjectModal);
projectCloseBtn[1].addEventListener('click', closeProjectModal);
projectCloseBtn[2].addEventListener('click', closeProjectModal);
projectCloseBtn[3].addEventListener('click', closeProjectModal);
projectCloseBtn[4].addEventListener('click', closeProjectModal);
projectCloseBtn[5].addEventListener('click', closeProjectModal);
// projectCloseBtn[6].addEventListener('click', closeProjectModal);
// projectCloseBtn[7].addEventListener('click', closeProjectModal);
// projectCloseBtn[8].addEventListener('click', closeProjectModal);




function closeProjectModal() {
  jobDescriptionContainer.classList.add('display-none')
  connectFourDesc.classList.add('display-none')
  miraclesDesc.classList.add('display-none')
  ctnerrDesc.classList.add('display-none')
  spaceDesc.classList.add('display-none')
  coreDesc.classList.add('display-none')
  prArchivesDesc.classList.add('display-none')
  crosshairsDesc.classList.add('display-none')
  floeDesc.classList.add('display-none')
  frontendMentorDesc.classList.add('display-none')
}

let mobileNav = document.getElementById('mobile-nav-container');
let mobileModalCloseBtn = document.querySelector('.mobile-modal-close-btn');
let mobileLink = document.querySelector('.mobile-link');
let hamburgerBtn = document.querySelector('.hamburger-btn')

hamburgerBtn.addEventListener('click', toggleMobileNav)

mobileModalCloseBtn.addEventListener('click', toggleMobileNav)

function toggleMobileNav() {
  console.log('click')
  mobileNav.classList.toggle('display-none')
}







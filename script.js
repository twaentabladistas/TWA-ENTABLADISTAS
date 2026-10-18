
const THEATER = {
  name: "ENTABLADISTAS",
  school: "Tayabas Western Academy",
  tagline: "The Official Theater Guild of Tayabas Western Academy",

  announcement: {
    badge: "Announcement",
    category: "Upcoming Production",
    title: "To be announced!",
    description: "",
    date: "N/A",
    buttonText: "Preview",
    url: "" 
  },

  footer: "© Entabladistas · Tayabas Western Academy",


  links: [
    { label: "Official Facebook Page", handle: "TWA Entabladistas", url: "https://www.facebook.com/profile.php?id=61592315416145" },
    { label: "Instagram", handle: "@twaentabladistas", url: "https://www.instagram.com/twaentabladistas?psln=MWE2ODR0ejh3dzRqdg" },
    { label: "TikTok", handle: "@entabladistas", url: "https://www.tiktok.com/@entabladistas?_r=1&_t=ZS-9Ae8Qq6oGSw" },
    { label: "X", handle: "@entabladistas", url: "https://x.com/entabladistas" },
    
  ]
};


const $ = id => document.getElementById(id);
const T = THEATER;


document.title = `${T.name} - ${T.school}`;
$("name").textContent = T.name;
$("subtitle").textContent = T.school;
$("tag").textContent = T.tagline;
$("foot").textContent = T.footer;


$("badge-text").textContent = T.announcement.badge;
$("ann-category").textContent = T.announcement.category;
$("ann-title").textContent = T.announcement.title;
$("ann-desc").textContent = T.announcement.description;
$("ann-date").textContent = T.announcement.date;

const annBtn = $("ann-btn");
annBtn.textContent = T.announcement.buttonText;
annBtn.href = T.announcement.url;


$("links").innerHTML = "";
T.links.forEach(link => {
  const li = document.createElement("li");
  
  const a = document.createElement("a");
  a.className = "ticket stub";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const spanLabel = document.createElement("span");
  spanLabel.className = "a";
  spanLabel.textContent = link.label;

  const spanHandle = document.createElement("span");
  spanHandle.className = "b";
  spanHandle.textContent = link.handle;

  a.append(spanLabel, spanHandle);
  li.appendChild(a);
  $("links").appendChild(li);

 

$("links").innerHTML = "";
T.links.forEach(link => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.className = "ticket stub";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const spanLabel = document.createElement("span");
  spanLabel.className = "a";
  spanLabel.textContent = link.label;

  const spanHandle = document.createElement("span");
  spanHandle.className = "b";
  spanHandle.textContent = link.handle;

  a.append(spanLabel, spanHandle);
  li.appendChild(a);
  $("links").appendChild(li);
});

async function updateViewCount() {
  const countElement = document.getElementById('visits-count');
  const base = 'https://api.counterapi.dev/v1/twa-entabladistas/views/';

  // Only count once per visit (per browser tab session)
  let alreadyCounted = false;
  try {
    alreadyCounted = sessionStorage.getItem('twa-counted') === '1';
  } catch (e) {}

  try {
    // First time this visit: add +1. Refreshes: just read the number.
    const url = alreadyCounted ? base : base + 'up';
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    if (!alreadyCounted) {
      try { sessionStorage.setItem('twa-counted', '1'); } catch (e) {}
    }

    if (countElement) {
      countElement.innerText = data.count || '1';
    }
  } catch (error) {
    console.log('Error loading counter:', error);
    if (countElement) {
      countElement.innerText = '1';
    }
  }
}

updateViewCount();

});
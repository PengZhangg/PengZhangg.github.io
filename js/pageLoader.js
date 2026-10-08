const pageContent = {
  home: {
    html: `
            <div class="about">
                <p>BSc Computer Science @ the University of Auckland,&nbsp;</p>
                <p>I have experience working with the following technologies:&nbsp;</p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>Dart</li>
                    <li>Flutter</li>
                    <li>HTML/CSS</li>
                </ul>
            </div>
        `,
  },
  projects: {
    html: `
            <div class="projects">
                <div class="project-item">
                    <h3>Meddy: Prescription Medicine Scanner</h3>
                    <p>A cross-platform mobile application for scanning prescription medications and providing summarised CMI information about them.</p>
                    <p>Developed using Flutter and Dart, utilizing image recognition for barcode scanning and integrating approved Medsafe data.</p>
                    <p>CMI (Consumer Medicine Information) approved by Medsafe are formatted to present key information about medications to users in a clear and concise manner.</p>
                </div>
                
                <div class="project-item">
                    <h3>Blendify</h3>
                    <p>Mobile-first React Native app that combines multiple users' Spotify listening histories into a shared weighted playlist.</p>
                    <p>Implemented end to end authentication with BetterAuth and persisted playlist/user data through a Prisma + MongoDB backend.</p>
                    <p>Designed playlist generation controls for weighted users and filtering tracks by genre, tempo, and key. </p>
                </div>

                <div class="project-item">
                    <h3>Video Platform</h3>
                    <p>Full-stack video platform with authentication, video upload, and video playback using Next.js and Firebase.</p>
                    <p>Designed video processing pipeline using Cloud Pub/Sub, Cloud Run, and FFmpeg to transcode uploaded videos.</p>
                    <p>Containerised the app and processing service for independent deployment.</p>
                </div>
            </div>
        `,
  },
  contact: {
    html: `
            <div class="contact-item">
                <h2>Email: <a href="mailto:pengzhang720@gmail.com">pengzhang720@gmail.com</a></h2>
            </div>
        `,
  },
};

const contentDiv = document.getElementById('content');
const navLinks = document.querySelectorAll('.navItem a');

function loadPage(pageName) {
  contentDiv.innerHTML = pageContent[pageName].html;
  navLinks.forEach((link) => link.classList.remove('active'));
  document.querySelector(`[page-name="${pageName}"]`).classList.add('active');
}

loadPage('home');

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const page = this.getAttribute('page-name');
    loadPage(page);
  });
});

document.getElementById('home-link').addEventListener('click', function (e) {
  e.preventDefault();
  loadPage('home');
});

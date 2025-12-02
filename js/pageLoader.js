const pageContent = {
    home: {
        html: `
            <div class="about"
                <p>BSc Computer Science @ the University of Auckland,&nbsp;</p>
                <p>with a focus on software development and graph theory.</p>
                <p>I have experience working with the following technologies:&nbsp;</p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>C</li>
                    <li>SQL</li>
                    <li>Dart</li>
                    <li>Flutter</li>
                    <li>HTML/CSS</li>
                </ul>
                <p>In my free time, I enjoy photography and listening to music.&nbsp;</p>
            </div>
        `
    },
    projects: {
        html: `
            <div class="projects">
                <div class="project-item">
                    <h3>Prescription Medicine Scanner</h3>
                    <p>A cross-platform mobile application for scanning prescription medications and providing summarised CMI information about them.</p>
                    <p>Developed using Flutter and Dart, utilizing image recognition for barcode scanning and integrating approved Medsafe data.</p>
                    <p>CMI (Consumer Medicine Information) approved by Medsafe are formatted to present key information about medications to users in a clear and concise manner.</p>
                </div>
                
                <div class="project-item">
                    <h3>Film Archive + Negative Inverter (In Progress)</h3>
                    <p>Desktop application to sort/manage film photography negatives and provide tools for editing and enhancing scanned images.</p>
                    <p>Written in C# using .NET framework, featuring image processing algorithms for negative inversion.</p>
                </div>
            </div>
        `
    },
    contact: {
        html: `
            <div class="contact-item">
                <h2>Email: <a href="mailto:pengzhang720@gmail.com">pengzhang720@gmail.com</a></h2>
            </div>
        `
    }
};

const contentDiv = document.getElementById('content');
const navLinks = document.querySelectorAll('.navItem a');

function loadPage(pageName) {
    contentDiv.innerHTML = pageContent[pageName].html;
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[page-name="${pageName}"]`).classList.add('active');
}

loadPage('home');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('page-name');  
        loadPage(page);
    });
});
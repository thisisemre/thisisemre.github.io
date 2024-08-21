import React from 'react';

function Projects(){
    return(
        <div className='projects-container'>
            <section className="live-projects">
                <h2>Live Projects</h2>
                <p>
                    <a href="https://thisisemre.github.io/StudyTimer/" target="_blank" rel="noopener noreferrer">Study Timer</a>
                    <div className="project-about">
                    <h3>About</h3>
                    <p>The Study Timer is a countdown application designed to help you manage your study sessions efficiently. It allows you to set study and break intervals and get random motivational quotes.</p>
                </div>
                </p>
                

            </section>
            <section className="other-projects">
                <h2>Other Projects</h2>
                <p>
                    <a href="https://github.com/thisisemre/React-Node.js-Blog-Application" target="_blank" rel="noopener noreferrer">
                        Blog Application with React and Node.js
                    </a>
                    <div className="project-about">
                    <h3>About</h3>
                    <p>This is a blog application built with React and Node.js, featuring a modern and responsive design with CRUD operations and user authentication.</p>
                </div>
                </p>
            </section>
        </div>
    );
}

export default Projects;
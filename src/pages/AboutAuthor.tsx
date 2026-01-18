import React from "react";

export default function AboutAuthor() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h2 className="page-title">About</h2>
      </div>

      <div className="about-content">
        <div className="book-info">
          <h3 className="book-title">Integrated Language Skills for Higher Education</h3>
          <p className="book-author">by Sevinj Agahuseyn qizi Hasanova</p>
        </div>

        <div className="author-info">
          <p className="author-title">
            Associate Professor<br />
            Azerbaijani University of Languages
          </p>
          <a 
            href="https://scholar.google.com/citations?user=OIcH4IgAAAAJ&hl=ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="scholar-link"
            aria-label="View author's Google Scholar profile"
          >
            <svg className="scholar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" fill="#4285F4"/>
            </svg>
            <span>Google Scholar</span>
          </a>
        </div>
      </div>
    </div>
  );
}


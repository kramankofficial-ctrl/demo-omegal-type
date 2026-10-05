import React from 'react';
import FooterBackground from './footer-background';
import BrandLogo from './brand-logo';

interface StudioHeroProps {
  onOpenInvitationModal: () => void;
  onOpenQuiz: () => void;
  onExploreExperiences: () => void;
}

export const StudioHero: React.FC<StudioHeroProps> = ({
  onOpenInvitationModal,
  onOpenQuiz,
  onExploreExperiences
}) => {
  return (
    <section className="studio-hero" aria-label="Hero">
      {/* Exact calibrated video background with cursor pupil tracking */}
      <FooterBackground />

      {/* Left Information Block */}
      <div className="jobs">
        <span className="tag">have a fresh idea?</span>
        <span className="headline job-title">
          imagination<br />meets craft
        </span>
        <div className="footer-nav">
          <a
            href="#experiences"
            onClick={(e) => {
              e.preventDefault();
              onExploreExperiences();
            }}
          >
            Made
          </a>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Story
          </a>
          <a
            href="#match-engine"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('match-engine')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            In the lab
          </a>
          <span
            onClick={onOpenInvitationModal}
            role="button"
            tabIndex={0}
          >
            Say hey
          </span>
        </div>
      </div>

      {/* Centered Script Logo */}
      <div className="logo" role="img" aria-label="Studio logo">
        <BrandLogo />
      </div>

      {/* Right Contact Block */}
      <div className="contact">
        <span className="tag">say hey</span>
        <div
          className="headline contact-links"
          onClick={onOpenInvitationModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onOpenInvitationModal();
          }}
        >
          <span>let’s team up!</span>
          <span>bring us your idea*</span>
        </div>
        <p className="note">*good things start with one spark. let’s make yours.</p>
        <div className="socials">
          <span aria-label="LinkedIn">
            <img src="/linkedin.svg" alt="" width="35" height="35" />
          </span>
          <span aria-label="Instagram">
            <img src="/instagram.svg" alt="" width="35" height="35" />
          </span>
          <span aria-label="TikTok">
            <img src="/tiktok.svg" alt="" width="35" height="35" />
          </span>
        </div>
      </div>
    </section>
  );
};

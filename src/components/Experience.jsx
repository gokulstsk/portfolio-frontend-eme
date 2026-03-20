import React from 'react';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import { mockExperience } from '../data/mock';

const TimelineItem = ({ item, isLast }) => {
  const Icon = item.type === 'work' ? Briefcase : GraduationCap;
  
  const descriptions = [];
  if (item.description) {
    for (let i = 0; i < item.description.length; i++) {
      descriptions.push(<li key={i}>{item.description[i]}</li>);
    }
  }
  
  const techBadges = [];
  if (item.techStack && item.techStack.length > 0) {
    for (let i = 0; i < item.techStack.length; i++) {
      techBadges.push(
        <Badge key={i} variant="outline" className="timeline-tech-badge">
          {item.techStack[i]}
        </Badge>
      );
    }
  }
  
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <div className="timeline-icon">
          <Icon size={20} />
        </div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
          </div>
          <span className="timeline-date">{item.date}</span>
        </div>
        
        {item.description && (
          <ul className="timeline-description">
            {descriptions}
          </ul>
        )}
        
        {item.techStack && item.techStack.length > 0 && (
          <div className="timeline-tech-stack">
            {techBadges}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const timelineItems = [];
  for (let i = 0; i < mockExperience.length; i++) {
    timelineItems.push(
      <TimelineItem 
        key={i} 
        item={mockExperience[i]} 
        isLast={i === mockExperience.length - 1} 
      />
    );
  }
  
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">CAREER JOURNEY</h2>
          <p className="section-subtitle">
            Professional experience and education
          </p>
        </div>

        <div className="timeline">
          {timelineItems}
        </div>
      </div>
    </section>
  );
};

export default Experience;
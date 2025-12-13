import React from 'react';
import styled from 'styled-components';
import {
  Code, Braces, Terminal, Database, Palette, Zap,
  Cpu, Layers, Smartphone, Globe, Cloud, Lightbulb, Rocket,
  Star, Award, GitBranch, Server, PenTool, Monitor, SmartphoneIcon
} from 'lucide-react';

export const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
`;

const HeroBgAnimation = () => {
  // Tech icons for floating animation
  const techIcons = [
    { icon: <Code size={24} />, color: "#6a11cb", delay: 0, duration: 20 },
    { icon: <Braces size={24} />, color: "#2575fc", delay: 1, duration: 18 },
    { icon: <Terminal size={24} />, color: "#a78bfa", delay: 2, duration: 22 },
    { icon: <Database size={24} />, color: "#13ADC7", delay: 3, duration: 19 },
    { icon: <Palette size={24} />, color: "#F46737", delay: 4, duration: 21 },
    { icon: <Zap size={24} />, color: "#6a11cb", delay: 5, duration: 17 },
    { icon: <Cpu size={24} />, color: "#2575fc", delay: 6, duration: 23 },
    { icon: <Layers size={24} />, color: "#a78bfa", delay: 7, duration: 16 },
    { icon: <Smartphone size={24} />, color: "#13ADC7", delay: 8, duration: 20 },
    { icon: <Globe size={24} />, color: "#F46737", delay: 9, duration: 18 },
    { icon: <Cloud size={24} />, color: "#6a11cb", delay: 10, duration: 22 },
    { icon: <Lightbulb size={24} />, color: "#2575fc", delay: 11, duration: 19 },
    { icon: <Rocket size={24} />, color: "#a78bfa", delay: 12, duration: 21 },
    { icon: <GitBranch size={24} />, color: "#13ADC7", delay: 13, duration: 17 },
    { icon: <Server size={24} />, color: "#F46737", delay: 14, duration: 23 },
    { icon: <PenTool size={24} />, color: "#6a11cb", delay: 15, duration: 16 },
    { icon: <Monitor size={24} />, color: "#2575fc", delay: 16, duration: 20 },
    { icon: <SmartphoneIcon size={24} />, color: "#a78bfa", delay: 17, duration: 18 },
    { icon: <Star size={24} />, color: "#13ADC7", delay: 18, duration: 22 },
    { icon: <Award size={24} />, color: "#F46737", delay: 19, duration: 19 },
  ];

  // Geometric shapes for background
  const shapes = [
    { type: 'circle', size: 80, color: 'rgba(106, 17, 203, 0.1)', top: '10%', left: '5%', delay: 0, duration: 25 },
    { type: 'circle', size: 60, color: 'rgba(37, 117, 252, 0.1)', top: '70%', left: '85%', delay: 1, duration: 20 },
    { type: 'circle', size: 100, color: 'rgba(167, 139, 250, 0.1)', top: '40%', left: '90%', delay: 2, duration: 30 },
    { type: 'triangle', size: 70, color: 'rgba(19, 173, 199, 0.1)', top: '20%', left: '80%', delay: 3, duration: 22 },
    { type: 'triangle', size: 90, color: 'rgba(244, 103, 55, 0.1)', top: '60%', left: '10%', delay: 4, duration: 27 },
    { type: 'square', size: 80, color: 'rgba(106, 17, 203, 0.1)', top: '80%', left: '70%', delay: 5, duration: 24 },
    { type: 'square', size: 60, color: 'rgba(37, 117, 252, 0.1)', top: '30%', left: '15%', delay: 6, duration: 19 },
    { type: 'square', size: 70, color: 'rgba(167, 139, 250, 0.1)', top: '15%', left: '40%', delay: 7, duration: 26 },
  ];

  // Generate random floating particles
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, 255, ${Math.random() * 0.3 + 0.1})`,
  }));

  return (
    <Div>
      {/* Original SVG animation */}
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 10px rgba(106, 17, 203, 0.3))' }}
      >
        <defs>
          {/* Enhanced gradients with more vibrant colors */}
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
            <stop offset="0" stopColor="#6a11cb" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#2575fc" stopOpacity="0.5" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
            <stop offset="0" stopColor="#2575fc" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#6a11cb" stopOpacity="0.5" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main paths with enhanced styling */}
        <g opacity="0.3">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            stroke="url(#paint0_radial)"
            strokeWidth="2"
            id="path_0"
            filter="url(#glow)"
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke="url(#paint1_radial)"
            strokeWidth="2"
            id="path_1"
            filter="url(#glow)"
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke="url(#paint2_radial)"
            strokeWidth="2"
            id="path_2"
            filter="url(#glow)"
          />
        </g>

        {/* Animated particles */}
        <ellipse
          cx="295.027"
          cy="193.118"
          rx="1.5"
          ry="1.5"
          fill="#6a11cb"
          filter="url(#glow)"
        >
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </ellipse>

        {/* More particles with different colors and timings */}
        <ellipse
          cx="295.027"
          cy="193.118"
          rx="1.2"
          ry="1.2"
          fill="#2575fc"
          filter="url(#glow)"
        >
          <animateMotion dur="8s" begin="1" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </ellipse>

        <ellipse
          cx="476.525"
          cy="363.313"
          rx="1.8"
          ry="1.8"
          fill="#a78bfa"
          transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
          filter="url(#glow)"
        >
          <animateMotion dur="15s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>

        <ellipse
          cx="382.164"
          cy="155.029"
          rx="1.3"
          ry="1.3"
          fill="#c084fc"
          transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
          filter="url(#glow)"
        >
          <animateMotion dur="10s" begin="2" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>

        <ellipse
          cx="333.324"
          cy="382.691"
          rx="1.4"
          ry="1.4"
          fill="#6a11cb"
          transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
          filter="url(#glow)"
        >
          <animateMotion dur="9s" begin="0" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_1" />
          </animateMotion>
        </ellipse>

        <ellipse
          cx="165.524"
          cy="93.9596"
          rx="1.6"
          ry="1.6"
          fill="#2575fc"
          transform="translate(-165.524 -93.9596)"
          filter="url(#glow)"
        >
          <animateMotion dur="14s" begin="3" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>

        <ellipse
          cx="476.525"
          cy="363.313"
          rx="1.7"
          ry="1.7"
          fill="#13ADC7"
          transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
          filter="url(#glow)"
        >
          <animateMotion dur="18s" begin="4" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </ellipse>

        {/* Linear gradients for particle trails */}
        <linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6a11cb" />
          <stop offset="1" stopColor="#6a11cb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" />
          <stop offset="1" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6a11cb" />
          <stop offset="1" stopColor="#6a11cb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2575fc" />
          <stop offset="1" stopColor="#2575fc" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </svg>

      {/* Floating tech icons */}
      <div className="floating-icons">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: tech.color,
              opacity: 0.6,
              animation: `float ${tech.duration}s infinite ease-in-out`,
              animationDelay: `${tech.delay}s`,
              filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))',
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="shape"
            style={{
              position: 'absolute',
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: shape.top,
              left: shape.left,
              background: shape.color,
              borderRadius: shape.type === 'circle' ? '50%' : '0',
              clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
              animation: `pulse ${shape.duration}s infinite ease-in-out`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="floating-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              position: 'absolute',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: particle.color,
              top: particle.top,
              left: particle.left,
              animation: `float-particle ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 20 - 10}deg);
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 20 - 10}deg);
          }
          75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 20 - 10}deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
        }
      `}</style>
    </Div>
  );
};

export default HeroBgAnimation;
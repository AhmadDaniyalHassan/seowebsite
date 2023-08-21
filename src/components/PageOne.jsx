import React from "react";
import comp from '../assets/comp1.png'
import comp1 from '../assets/comp2.png'
import comp2 from '../assets/comp3.png'

const PageOne = () => {
  return (
    <div>
      <div className="page-one">
        <svg
          width="571"
          height="108"
          viewBox="0 0 571 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M39.75 1.7C50.85 1.7 60.55 3.9 68.85 8.29999C77.15 12.7 83.55 18.9 88.05 26.9C92.65 34.8 94.95 43.95 94.95 54.35C94.95 64.65 92.65 73.8 88.05 81.8C83.55 89.8 77.1 96 68.7 100.4C60.4 104.8 50.75 107 39.75 107H0.3V1.7H39.75ZM38.1 84.8C47.8 84.8 55.35 82.15 60.75 76.85C66.15 71.55 68.85 64.05 68.85 54.35C68.85 44.65 66.15 37.1 60.75 31.7C55.35 26.3 47.8 23.6 38.1 23.6H25.95V84.8H38.1ZM134.934 1.7V107H109.284V1.7H134.934ZM223.423 35C221.523 31.5 218.773 28.85 215.173 27.05C211.673 25.15 207.523 24.2 202.723 24.2C194.423 24.2 187.773 26.95 182.773 32.45C177.773 37.85 175.273 45.1 175.273 54.2C175.273 63.9 177.873 71.5 183.073 77C188.373 82.4 195.623 85.1 204.823 85.1C211.123 85.1 216.423 83.5 220.723 80.3C225.123 77.1 228.323 72.5 230.323 66.5H197.773V47.6H253.573V71.45C251.673 77.85 248.423 83.8 243.823 89.3C239.323 94.8 233.573 99.25 226.573 102.65C219.573 106.05 211.673 107.75 202.873 107.75C192.473 107.75 183.173 105.5 174.973 101C166.873 96.4 160.523 90.05 155.923 81.95C151.423 73.85 149.173 64.6 149.173 54.2C149.173 43.8 151.423 34.55 155.923 26.45C160.523 18.25 166.873 11.9 174.973 7.39999C183.073 2.79999 192.323 0.499994 202.723 0.499994C215.323 0.499994 225.923 3.54999 234.523 9.64999C243.223 15.75 248.973 24.2 251.773 35H223.423ZM293.43 1.7V107H267.78V1.7H293.43ZM387.769 1.7V22.25H359.869V107H334.219V22.25H306.319V1.7H387.769ZM466.192 88.4H426.892L420.592 107H393.742L431.842 1.7H461.542L499.642 107H472.492L466.192 88.4ZM459.592 68.6L446.542 30.05L433.642 68.6H459.592ZM536.888 87.2H570.488V107H511.238V1.7H536.888V87.2Z"
            fill="url(#paint0_linear_10_118)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_118"
              x1="282"
              y1="-78"
              x2="282"
              y2="107"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.126029" stop-color="#4DD3A0" />
              <stop offset="0.980342" stop-color="#4DD3A0" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pageone-box">
        <h2>Providing Innovative Digital Solutions for Clients since 2010</h2>
        <p>
          Our commitment to honesty and trustworthiness sets our digital company
          apart from the competition.
        </p>
        <div className="pageone-comp">
          <div className="comp">
            <img src={comp} />
            <h5>Personalized Solutions</h5>
            <p>Rather than a one-size-fits-all approach, we provide personalized solutions for all of our clients.</p>
          </div>
          <div className="comp">
            <img src={comp1} />
            <h5>Absolute Transparency</h5>
            <p>We prioritize our clients needs and goals and provide them with end-to-end reporting and analysis.</p>
          </div>
          <div className="comp">
            <img src={comp2} />
            <h5>Cutting Edge Technologies</h5>
            <p>We use cutting-edge technology to ensure that our clients campaigns generate targeted site traffic.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="page-two">
          <h1 className="h1-page2">Web Design & Development So<br /></h1>
        </div>
      </div>
      <br />
      <div style={{ marginTop: '45px' }} className="page-three">
        <div className="bg-text" >
          <svg width="717" height="109" viewBox="0 0 717 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M151.2 1.7L123.75 107H92.7L75.9 37.7L58.5 107H27.45L0.75 1.7H28.2L43.35 78.35L62.1 1.7H90.3L108.3 78.35L123.6 1.7H151.2ZM189.714 22.25V43.55H224.064V63.35H189.714V86.45H228.564V107H164.064V1.7H228.564V22.25H189.714ZM270.866 87.2H304.466V107H245.216V1.7H270.866V87.2ZM312.35 54.2C312.35 43.8 314.6 34.55 319.1 26.45C323.6 18.25 329.85 11.9 337.85 7.39999C345.95 2.79999 355.1 0.499994 365.3 0.499994C377.8 0.499994 388.5 3.79999 397.4 10.4C406.3 17 412.25 26 415.25 37.4H387.05C384.95 33 381.95 29.65 378.05 27.35C374.25 25.05 369.9 23.9 365 23.9C357.1 23.9 350.7 26.65 345.8 32.15C340.9 37.65 338.45 45 338.45 54.2C338.45 63.4 340.9 70.75 345.8 76.25C350.7 81.75 357.1 84.5 365 84.5C369.9 84.5 374.25 83.35 378.05 81.05C381.95 78.75 384.95 75.4 387.05 71H415.25C412.25 82.4 406.3 91.4 397.4 98C388.5 104.5 377.8 107.75 365.3 107.75C355.1 107.75 345.95 105.5 337.85 101C329.85 96.4 323.6 90.05 319.1 81.95C314.6 73.85 312.35 64.6 312.35 54.2ZM480.758 108.05C470.858 108.05 461.758 105.75 453.458 101.15C445.258 96.55 438.708 90.15 433.808 81.95C429.008 73.65 426.608 64.35 426.608 54.05C426.608 43.75 429.008 34.5 433.808 26.3C438.708 18.1 445.258 11.7 453.458 7.1C461.758 2.5 470.858 0.199998 480.758 0.199998C490.658 0.199998 499.708 2.5 507.908 7.1C516.208 11.7 522.708 18.1 527.408 26.3C532.208 34.5 534.608 43.75 534.608 54.05C534.608 64.35 532.208 73.65 527.408 81.95C522.608 90.15 516.108 96.55 507.908 101.15C499.708 105.75 490.658 108.05 480.758 108.05ZM480.758 84.65C489.158 84.65 495.858 81.85 500.858 76.25C505.958 70.65 508.508 63.25 508.508 54.05C508.508 44.75 505.958 37.35 500.858 31.85C495.858 26.25 489.158 23.45 480.758 23.45C472.258 23.45 465.458 26.2 460.358 31.7C455.358 37.2 452.858 44.65 452.858 54.05C452.858 63.35 455.358 70.8 460.358 76.4C465.458 81.9 472.258 84.65 480.758 84.65ZM668.128 1.7V107H642.478V43.85L618.928 107H598.228L574.528 43.7V107H548.878V1.7H579.178L608.728 74.6L637.978 1.7H668.128ZM712.223 22.25V43.55H746.573V63.35H712.223V86.45H751.073V107H686.573V1.7H751.073V22.25H712.223Z" fill="url(#paint0_linear_10_133)" />
            <defs>
              <linearGradient id="paint0_linear_10_133" x1="377.346" y1="-78" x2="377.346" y2="107" gradientUnits="userSpaceOnUse">
                <stop offset="0.126029" stop-color="#4DD3A0" />
                <stop offset="0.980342" stop-color="#4DD3A0" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div style={{ display: 'flex', marginLeft: '114px' }}>
          <img width={'580px'} height={'505px'}></img>
          <div>
            <h2 style={{ width: '600px', fontSize: '2.6rem', fontWeight: '700', marginLeft: '46px' }}>Welcome to Evolve Tech Through the Digital Impasse</h2>
            <p style={{ marginLeft: '50px', fontFamily: 'Poppins', width: '600px' }}>Allure Digital is a full-service digital marketing and web design and development firm that provides a wide range of solutions to meet your digital needs. Our experts can assist you in increasing brand awareness, driving targeted traffic to your website, and implementing revenue-focused SEO strategies and digital marketing campaigns. We handle everything for our customers, from lead nurturing to data-driven implementations, so they can benefit from accelerated revenue growth and responsive designs.<br /><br />
              At Allure Digital, we strive to create a digital presence for your company that attracts clients and builds an incredible brand. We believe in creating engaging and relevant experiences. Our team of experienced professionals works hard to develop solutions that will give your company long-term results and set you apart from the competition. We understand the needs of modern businesses. We aim to be your one-stop shop for all of your software development and digital marketing needs.</p>
            <div className="btn-sect" style={{marginBottom:'60px'}}>
              <button className="btn-header">Call Us Now </button>
              <button className="btn-header">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;

// src/DemoCarousel.jsx
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.avif';
import img2 from '../assets/2.avif';
import img3 from '../assets/3.avif';
import img4 from '../assets/4.avif';
import img5 from '../assets/5.avif';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: 15,
                                transform: 'translateY(-50%)',
                                border: 'none',
                                padding: '10px',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: '#f9fafb' }}
                            >
                                <path
                                    d="M15.88 18L9.88 12L15.88 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: 15,
                                transform: 'translateY(-50%)',
                                border: 'none',
                                padding: '10px',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                        >
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: '#f9fafb' }}
                            >
                                <path
                                    d="M8.12 18L14.12 12L8.12 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => (
                    <button
                        key={index}
                        type="button"
                        onClick={onClickHandler}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: isSelected ? '#fff' : 'transparent',
                            border: '1px solid #fff',
                            cursor: 'pointer',
                            margin: '0 4px',
                            transition: 'background-color 0.3s, border-color 0.3s',
                            position: 'absolute',
                            bottom: '20px',
                            right: `${20 + (index * 30)}px`, // Adjust based on number of indicators
                            zIndex: 2,
                        }}
                    />
                )}
            >
                <div>
                    <img className='w-full h-full object-cover' src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={img3} alt="Slide 3" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={img4} alt="Slide 4" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={img5} alt="Slide 5" />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;

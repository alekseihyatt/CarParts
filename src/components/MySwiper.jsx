import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the complete Swiper bundle
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const containerStyle = {
    maxHeight: '680px',
    maxWidth: '1960px',
    height: 'auto',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
};

const imageStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const buttonsContainerStyle = {
  position: 'absolute', // Set the position of the buttons container to absolute
  bottom: 0, // Position the container at the bottom
  right: 0, // Position the container at the right
  padding: '10px', // Add some padding for spacing
  display: 'flex',
  flexDirection: 'row',
  zIndex: 1000,
};

const customButtonStyle = {
  margin: '0 10px', // Adjust the margin as needed
};

const CustomNavigation = () => {
  const [prevButtonSvg, setPrevButtonSvg] = useState(
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="#C8C3C2"/>
<path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9884 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.5 26C32.5 26.3978 32.342 26.7794 32.0607 27.0607C31.7794 27.342 31.3978 27.5 31 27.5H24.625L26.065 28.9387C26.3468 29.2205 26.5051 29.6027 26.5051 30.0012C26.5051 30.3998 26.3468 30.782 26.065 31.0637C25.7832 31.3455 25.401 31.5039 25.0025 31.5039C24.604 31.5039 24.2218 31.3455 23.94 31.0637L19.94 27.0637C19.8002 26.9244 19.6892 26.7588 19.6135 26.5765C19.5378 26.3941 19.4988 26.1987 19.4988 26.0012C19.4988 25.8038 19.5378 25.6084 19.6135 25.426C19.6892 25.2437 19.8002 25.0781 19.94 24.9388L23.94 20.9388C24.0795 20.7992 24.2452 20.6885 24.4275 20.613C24.6098 20.5375 24.8052 20.4986 25.0025 20.4986C25.1998 20.4986 25.3952 20.5375 25.5775 20.613C25.7598 20.6885 25.9255 20.7992 26.065 20.9388C26.2045 21.0783 26.3152 21.2439 26.3907 21.4262C26.4662 21.6085 26.5051 21.8039 26.5051 22.0013C26.5051 22.1986 26.4662 22.394 26.3907 22.5763C26.3152 22.7586 26.2045 22.9242 26.065 23.0638L24.625 24.5H31C31.3978 24.5 31.7794 24.658 32.0607 24.9393C32.342 25.2206 32.5 25.6022 32.5 26Z" fill="#0F0B0C"/>
</svg>
  );

  const [nextButtonSvg, setNextButtonSvg] = useState(
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="#C8C3C2"/>
<path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9883 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.0612 24.9388C32.2011 25.0781 32.312 25.2437 32.3878 25.426C32.4635 25.6083 32.5024 25.8038 32.5024 26.0012C32.5024 26.1987 32.4635 26.3941 32.3878 26.5765C32.312 26.7588 32.2011 26.9244 32.0612 27.0637L28.0612 31.0637C27.9217 31.2033 27.7561 31.314 27.5738 31.3895C27.3915 31.465 27.1961 31.5039 26.9987 31.5039C26.8014 31.5039 26.606 31.465 26.4237 31.3895C26.2414 31.314 26.0758 31.2033 25.9362 31.0637C25.7967 30.9242 25.686 30.7586 25.6105 30.5763C25.535 30.394 25.4961 30.1986 25.4961 30.0012C25.4961 29.8039 25.535 29.6085 25.6105 29.4262C25.686 29.2439 25.7967 29.0783 25.9362 28.9387L27.375 27.5H21C20.6022 27.5 20.2206 27.342 19.9393 27.0607C19.658 26.7794 19.5 26.3978 19.5 26C19.5 25.6022 19.658 25.2206 19.9393 24.9393C20.2206 24.658 20.6022 24.5 21 24.5H27.375L25.935 23.0612C25.7955 22.9217 25.6848 22.7561 25.6093 22.5738C25.5338 22.3915 25.4949 22.1961 25.4949 21.9987C25.4949 21.8014 25.5338 21.606 25.6093 21.4237C25.6848 21.2414 25.7955 21.0758 25.935 20.9362C26.0745 20.7967 26.2402 20.686 26.4225 20.6105C26.6048 20.535 26.8002 20.4961 26.9975 20.4961C27.1948 20.4961 27.3902 20.535 27.5725 20.6105C27.7548 20.686 27.9205 20.7967 28.06 20.9362L32.0612 24.9388Z" fill="#0F0B0C"/>
</svg>

  );

  const handlePrevButtonClick = () => {
    // Update SVG content for the previous button
    setPrevButtonSvg(
      /* Your new SVG content for the previous button */
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="#353030"/>
<path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9884 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.5 26C32.5 26.3978 32.342 26.7794 32.0607 27.0607C31.7794 27.342 31.3978 27.5 31 27.5H24.625L26.065 28.9387C26.3468 29.2205 26.5051 29.6027 26.5051 30.0012C26.5051 30.3998 26.3468 30.782 26.065 31.0637C25.7832 31.3455 25.401 31.5039 25.0025 31.5039C24.604 31.5039 24.2218 31.3455 23.94 31.0637L19.94 27.0637C19.8002 26.9244 19.6892 26.7588 19.6135 26.5765C19.5378 26.3941 19.4988 26.1987 19.4988 26.0012C19.4988 25.8038 19.5378 25.6084 19.6135 25.426C19.6892 25.2437 19.8002 25.0781 19.94 24.9388L23.94 20.9388C24.0795 20.7992 24.2452 20.6885 24.4275 20.613C24.6098 20.5375 24.8052 20.4986 25.0025 20.4986C25.1998 20.4986 25.3952 20.5375 25.5775 20.613C25.7598 20.6885 25.9255 20.7992 26.065 20.9388C26.2045 21.0783 26.3152 21.2439 26.3907 21.4262C26.4662 21.6085 26.5051 21.8039 26.5051 22.0013C26.5051 22.1986 26.4662 22.394 26.3907 22.5763C26.3152 22.7586 26.2045 22.9242 26.065 23.0638L24.625 24.5H31C31.3978 24.5 31.7794 24.658 32.0607 24.9393C32.342 25.2206 32.5 25.6022 32.5 26Z" fill="#F6F5F4"/>
</svg>


    );
    // Add any additional logic or actions you want to perform when the previous button is clicked
    setTimeout(() => {
      setPrevButtonSvg(
        /* Revert to the original SVG content */
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52" height="52" rx="26" fill="#C8C3C2"/>
        <path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9884 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.5 26C32.5 26.3978 32.342 26.7794 32.0607 27.0607C31.7794 27.342 31.3978 27.5 31 27.5H24.625L26.065 28.9387C26.3468 29.2205 26.5051 29.6027 26.5051 30.0012C26.5051 30.3998 26.3468 30.782 26.065 31.0637C25.7832 31.3455 25.401 31.5039 25.0025 31.5039C24.604 31.5039 24.2218 31.3455 23.94 31.0637L19.94 27.0637C19.8002 26.9244 19.6892 26.7588 19.6135 26.5765C19.5378 26.3941 19.4988 26.1987 19.4988 26.0012C19.4988 25.8038 19.5378 25.6084 19.6135 25.426C19.6892 25.2437 19.8002 25.0781 19.94 24.9388L23.94 20.9388C24.0795 20.7992 24.2452 20.6885 24.4275 20.613C24.6098 20.5375 24.8052 20.4986 25.0025 20.4986C25.1998 20.4986 25.3952 20.5375 25.5775 20.613C25.7598 20.6885 25.9255 20.7992 26.065 20.9388C26.2045 21.0783 26.3152 21.2439 26.3907 21.4262C26.4662 21.6085 26.5051 21.8039 26.5051 22.0013C26.5051 22.1986 26.4662 22.394 26.3907 22.5763C26.3152 22.7586 26.2045 22.9242 26.065 23.0638L24.625 24.5H31C31.3978 24.5 31.7794 24.658 32.0607 24.9393C32.342 25.2206 32.5 25.6022 32.5 26Z" fill="#0F0B0C"/>
        </svg>
        
      );
    }, 300);
  };

  const handleNextButtonClick = () => {
    // Update SVG content for the next button
    setNextButtonSvg(
      /* Your new SVG content for the next button */
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="#353030"/>
<path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9884 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.0612 24.9388C32.2011 25.0781 32.312 25.2437 32.3878 25.426C32.4635 25.6084 32.5024 25.8038 32.5024 26.0012C32.5024 26.1987 32.4635 26.3941 32.3878 26.5765C32.312 26.7588 32.2011 26.9244 32.0612 27.0637L28.0612 31.0637C27.9217 31.2033 27.7561 31.314 27.5738 31.3895C27.3915 31.465 27.1961 31.5039 26.9987 31.5039C26.8014 31.5039 26.606 31.465 26.4237 31.3895C26.2414 31.314 26.0758 31.2033 25.9362 31.0637C25.7967 30.9242 25.686 30.7586 25.6105 30.5763C25.535 30.394 25.4961 30.1986 25.4961 30.0012C25.4961 29.8039 25.535 29.6085 25.6105 29.4262C25.686 29.2439 25.7967 29.0783 25.9362 28.9387L27.375 27.5H21C20.6022 27.5 20.2206 27.342 19.9393 27.0607C19.658 26.7794 19.5 26.3978 19.5 26C19.5 25.6022 19.658 25.2206 19.9393 24.9393C20.2206 24.658 20.6022 24.5 21 24.5H27.375L25.935 23.0612C25.7955 22.9217 25.6848 22.7561 25.6093 22.5738C25.5338 22.3915 25.4949 22.1961 25.4949 21.9987C25.4949 21.8014 25.5338 21.606 25.6093 21.4237C25.6848 21.2414 25.7955 21.0758 25.935 20.9362C26.0745 20.7967 26.2402 20.686 26.4225 20.6105C26.6048 20.535 26.8002 20.4961 26.9975 20.4961C27.1948 20.4961 27.3902 20.535 27.5725 20.6105C27.7548 20.686 27.9205 20.7967 28.06 20.9362L32.0612 24.9388Z" fill="#F6F5F4"/>
</svg>

    );
    // Add any additional logic or actions you want to perform when the next button is clicked
    setTimeout(() => {
      setNextButtonSvg(
        /* Revert to the original SVG content */
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="#C8C3C2"/>
<path d="M26 12.5C23.33 12.5 20.7199 13.2918 18.4998 14.7752C16.2797 16.2586 14.5494 18.367 13.5276 20.8338C12.5058 23.3006 12.2385 26.015 12.7594 28.6337C13.2803 31.2525 14.566 33.6579 16.4541 35.5459C18.3421 37.434 20.7475 38.7197 23.3663 39.2406C25.985 39.7615 28.6994 39.4942 31.1662 38.4724C33.633 37.4506 35.7414 35.7203 37.2248 33.5002C38.7082 31.2801 39.5 28.67 39.5 26C39.496 22.4208 38.0724 18.9893 35.5416 16.4584C33.0107 13.9276 29.5792 12.504 26 12.5ZM26 36.5C23.9233 36.5 21.8932 35.8842 20.1665 34.7304C18.4398 33.5767 17.094 31.9368 16.2993 30.0182C15.5045 28.0996 15.2966 25.9884 15.7018 23.9516C16.1069 21.9148 17.1069 20.0438 18.5754 18.5754C20.0438 17.1069 21.9147 16.1069 23.9515 15.7018C25.9883 15.2966 28.0995 15.5045 30.0182 16.2993C31.9368 17.094 33.5767 18.4398 34.7304 20.1665C35.8842 21.8932 36.5 23.9233 36.5 26C36.497 28.7839 35.3898 31.4528 33.4213 33.4213C31.4528 35.3898 28.7839 36.497 26 36.5ZM32.0612 24.9388C32.2011 25.0781 32.312 25.2437 32.3878 25.426C32.4635 25.6083 32.5024 25.8038 32.5024 26.0012C32.5024 26.1987 32.4635 26.3941 32.3878 26.5765C32.312 26.7588 32.2011 26.9244 32.0612 27.0637L28.0612 31.0637C27.9217 31.2033 27.7561 31.314 27.5738 31.3895C27.3915 31.465 27.1961 31.5039 26.9987 31.5039C26.8014 31.5039 26.606 31.465 26.4237 31.3895C26.2414 31.314 26.0758 31.2033 25.9362 31.0637C25.7967 30.9242 25.686 30.7586 25.6105 30.5763C25.535 30.394 25.4961 30.1986 25.4961 30.0012C25.4961 29.8039 25.535 29.6085 25.6105 29.4262C25.686 29.2439 25.7967 29.0783 25.9362 28.9387L27.375 27.5H21C20.6022 27.5 20.2206 27.342 19.9393 27.0607C19.658 26.7794 19.5 26.3978 19.5 26C19.5 25.6022 19.658 25.2206 19.9393 24.9393C20.2206 24.658 20.6022 24.5 21 24.5H27.375L25.935 23.0612C25.7955 22.9217 25.6848 22.7561 25.6093 22.5738C25.5338 22.3915 25.4949 22.1961 25.4949 21.9987C25.4949 21.8014 25.5338 21.606 25.6093 21.4237C25.6848 21.2414 25.7955 21.0758 25.935 20.9362C26.0745 20.7967 26.2402 20.686 26.4225 20.6105C26.6048 20.535 26.8002 20.4961 26.9975 20.4961C27.1948 20.4961 27.3902 20.535 27.5725 20.6105C27.7548 20.686 27.9205 20.7967 28.06 20.9362L32.0612 24.9388Z" fill="#0F0B0C"/>
</svg>

      );
    }, 300);
  };

  return (
    <div style={buttonsContainerStyle}>
      <div className="custom-prev-button" onClick={handlePrevButtonClick}>
        {prevButtonSvg}
      </div>
      <div className="custom-next-button" style={customButtonStyle} onClick={handleNextButtonClick}>
        {nextButtonSvg}
      </div>
    </div>
  );
};

const MySwiper = () => {
  return (
    <div style={containerStyle}>
      <Swiper
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href='./geely'>
            <img src='./src/images/geelytemplate.png' alt="Geely" style={imageStyle}></img>
          </a>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2, // Adjust the z-index as needed to make it appear above other elements
            color: '#F57D0E', // Set the text color
            padding: '10px',
            fontFamily: 'Raleway',
            fontSize: '54px', // Set the font size
            fontWeight: 'bold', // Make the font bold
          }}>
          Geely
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='./haval'>
            <img src='./src/images/havaltemplate.jpg' alt="Haval" style={imageStyle}></img>
          </a>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2, // Adjust the z-index as needed to make it appear above other elements
            color: '#F57D0E', // Set the text color
            padding: '10px', 
            fontFamily: 'Raleway',
            fontSize: '54px', // Set the font size
            fontWeight: 'bold',
          }}>
          Haval
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='./chery'>
            <img src='./src/images/cherytemplate.jpg' alt="Chery" style={imageStyle}></img>
          </a>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2, // Adjust the z-index as needed to make it appear above other elements
            color: '#F57D0E', // Set the text color
            padding: '10px', // Optional: Add padding for better visibility
            fontFamily: 'Raleway',
            fontSize: '54px', // Set the font size
            fontWeight: 'bold',
          }}>
          Chery
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href='./jac'>
            <img src='./src/images/jactemplate.jpg' alt="JAC" style={imageStyle}></img>
          </a>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2, // Adjust the z-index as needed to make it appear above other elements
            color: '#F57D0E', // Set the text color
            padding: '10px', // Optional: Add padding for better visibility
            fontFamily: 'Raleway',
            fontSize: '54px', // Set the font size
            fontWeight: 'bold',
          }}>
          JAC
          </div>
        </SwiperSlide>
      </Swiper>

      <CustomNavigation />
    </div>
  );
};

export default MySwiper ;

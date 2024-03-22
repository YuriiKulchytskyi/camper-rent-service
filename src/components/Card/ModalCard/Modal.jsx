// import Modal from 'react-modal';
// import {
//   Location,
//   ModalBackdrop,
//   ModalCloseButton,
//   ModalDescription,
//   ModalGallery,
//   ModalGalleryItem,
//   ModalInformationWrapper,
//   ModalItemImage,
//   ModalPrice,
//   ModalRateLocationWrapper,
//   ModalTechInfo,
//   ModalTitle,
//   Rate,
//   SectionModal,
// } from './ModalCard.styled';

// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: ' rgba(17, 18, 19, 0.4)',
//     // zIndex: 1200,
//   },

//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#fff',
//     borderRadius: '20px',
//     padding: '40px',
//     width: '982px',
//     height: '720px',
//   },
// };

// export const ModalCard = ({ isOpen, onClose, item }) => {
//   if (!item) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <ModalBackdrop>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         style={customStyles}
//       >
//         <SectionModal>
//           <ModalInformationWrapper>
//             <ModalTitle>{item.name}</ModalTitle>
//             <ModalRateLocationWrapper>
//               <Rate>
//                 {item.rating}({item.reviews} reviews)
//               </Rate>
//               <Location>{item.location}</Location>
//             </ModalRateLocationWrapper>
//             <ModalPrice>€{item.price},00</ModalPrice>
//             <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
//           </ModalInformationWrapper>
//           <ModalTechInfo>
//             <ModalGallery>
//               <ModalGalleryItem>
//                 <ModalItemImage src={item.gallery[0]} alt="camper" />
//               </ModalGalleryItem>
//               <ModalGalleryItem>
//                 <ModalItemImage src={item.gallery[1]} alt="camper" />
//               </ModalGalleryItem>
//               <ModalGalleryItem>
//                 <ModalItemImage src={item.gallery[2]} alt="camper" />
//               </ModalGalleryItem>
//             </ModalGallery>
//             <ModalDescription>{item.description}</ModalDescription>
//           </ModalTechInfo>
//         </SectionModal>
//       </Modal>
//     </ModalBackdrop>
//   );
// };
import React, { useEffect } from 'react';

import {
  AdditionalNaw,
  Backdrop,
  Location,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalGallery,
  ModalGalleryItem,
  ModalInformationWrapper,
  ModalItemImage,
  ModalPrice,
  ModalRateLocationWrapper,
  ModalTechInfo,
  ModalTitle,
  Rate,
  SectionModal,
  StyledLink,
} from './ModalCard.styled';
import { FeatureDetails } from 'components/Features/Details/FeatureDetails';
import { FeaturesOptions } from 'components/Features/FeaturesOptions/FeaturesOptions';

const Modal = ({ onClose, item }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (event.target.classList.contains('backdrop')) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Backdrop>
      <ModalContent>
        <SectionModal>
          <ModalInformationWrapper>
            <ModalTitle>{item.name}</ModalTitle>
            <ModalRateLocationWrapper>
              <Rate>
                {item.rating}({item.reviews.length} reviews)
              </Rate>
              <Location>{item.location}</Location>
            </ModalRateLocationWrapper>
            <ModalPrice>€{item.price},00</ModalPrice>
            <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
          </ModalInformationWrapper>
          <ModalTechInfo>
            <ModalGallery>
              <ModalGalleryItem>
                <ModalItemImage src={item.gallery[0]} alt="camper" />
              </ModalGalleryItem>
              <ModalGalleryItem>
                <ModalItemImage src={item.gallery[1]} alt="camper" />
              </ModalGalleryItem>
              <ModalGalleryItem>
                <ModalItemImage src={item.gallery[2]} alt="camper" />
              </ModalGalleryItem>
            </ModalGallery>
            <ModalDescription>{item.description}</ModalDescription>
          </ModalTechInfo>
          <AdditionalNaw>
            <StyledLink to="features">Features</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </AdditionalNaw>
        </SectionModal>
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;

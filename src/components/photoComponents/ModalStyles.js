import styled from 'styled-components';

export const ModalWrapper = styled.div`
  overflow: hidden;
  width: 1000px;
  height:600px;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 200;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
`;
export const LowerBannerWrapper = styled.div`
  color: white;
  width: 100%;
  height: 59px;
  display: flex;
  border-top: 1px solid white;
  align-items: center;
  justify-content: space-between;
`;
export const UpperBannerWrapper = styled.div`
  font-size: 15px;
  width: 100%;
  background: #fff;
  display: flex;
  height: 59px;
  flex-direction: rtl;
  justify-items: end;
  justify-content: flex-end;
  align-items: center;
`;
export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1500px;
  max-height: 1000px;
  object-fit: contain;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const Exit = styled.button`
  border: none;
  background-color: #fff;
`;
export const ArrowBtnLT = styled.button`
  outline: none;
  border: none;
  border-radius: 25px;
  width: 48px;
  height: 48px;
  background: #3B4145;
  color: white;
  padding: 1px;
  position: absolute;
  top: 55%;
  left: 5%;
  z-index: 10;
  : hover {
    background-color: #869199;
  }
  : active {
    background-color: #869199;
  }
`;
export const ArrowBtnRT = styled.button`
  outline: none;
  border: none;
  border-radius: 25px;
  width: 48px;
  height: 48px;
  background: #3B4145;
  color: white;
  padding: 1px;
  color: white;
  position: absolute;
  top: 55%;
  left: 90%;
  z-index: 10;
  : hover {
    background-color: #869199;
  }
  : active {
    background-color: #869199;
  }
`;

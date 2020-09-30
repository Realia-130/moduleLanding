import styled from 'styled-components';

//  Banner Styled Components
export const BannerWrapper = styled.div`
font-family: sans-serif;
font-size: 12px;
display: flex;
text-align: center;
width: 100%;
height: 100%;
position: absolute;
top: -50;
left: -50;
padding: 15px;
`;
export const SaveBTN = styled.button`
display: inline-block;
border: solid .5px lightgrey;
font-size: 16px;
padding: 8px 16px;
min-width: 100px;
height: 42px;
margin-left: 650px;
border-radius: 5px;
float: right;
`;
export const Border = styled.span`
color: #19B15B;
max-height: 15px;
border-radius: 5px;
background-color: white;
padding: 2px 4px;
margin-right: 4px;
`;

export const New = styled.span`
color: #132286;
max-height: 15px;
border-radius: 5px;
background-color: white;
padding: 2px 4px;
`;

//  PhotoComponent styled-components

export const PhotoPreview = styled.div`
overflow: hidden;
position: relative;
display: flex;
flex-direction: row;
max-width: 992px;
max-height: 490px;
margin: 0;
padding: 0;
z-index: -1;
border-radius: 8px;
`;

export const Secondary = styled.div`
overflow: hidden;
display:flex;
flex-direction: column;
`;

export const Img = styled.img`
margin-right: 5px;
object-fit: cover;
width: 744px;
height: 490px;
display: block;
z-index: -1;
`;

export const Img2 = styled.img`
margin-bottom: 5px;
object-fit: cover:
display: block;
width: 248px;
height: 245px;
z-index: -1;
`;

export const Img3 = styled.img`
object-fit: cover;
display: block;
width: 248px;
height: 245px;
z-index: -1;
`;

import React from 'react'

import { Button } from '../ButtonElement';
import { Column2, ImgWrap, Img, InfoContainer,
InfoWrapper, InfoRow, TopLine,
TextWrapper, Column1, Heading, BtnWrap, Subtitle } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart,
    topLine, lightText, headline,
    darkText, description, buttonLabel,
    img, alt
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home">{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;

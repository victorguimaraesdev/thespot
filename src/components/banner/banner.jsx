import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ContainerImg = styled.div`
    position: relative;
    width: 100%;
    display: inline-block;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
`;

const Img = styled.img`
    width: 100%;
    display: block;
`;

const TextContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    padding: 20px;
    z-index: 2;
    width: 90%;
`;

const H1 = styled.h1`
        font-size: 48px;
        margin-bottom: 20px;
        font-weight: 700;

         @media (max-width: 768px) {
            font-size: 20px;
         }
`;

const P = styled.p`
        font-size: 20px;
        font-weight: 400;

         @media (max-width: 768px) {
            font-size: 10px;
         }
`;

export const Banner = () => {
    return (
        <Container>
            <ContainerImg>
                <Overlay />
                <Img src="assets/img3.png" alt="Banner" />
                <TextContent>
                    <H1>The Spot</H1>
                    <P>Moderno, seguro e pensado para você.</P>
                </TextContent>
            </ContainerImg>
        </Container>
    );
};

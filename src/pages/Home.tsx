import styled from "@emotion/styled";

function Home() {
    return(
    <>
        <BackgroundImage>
            <Container>
                <TilteBox>
            <SubTitle>My dream is to be an</SubTitle>
            <Title>Astronaut</Title>
            </TilteBox>

            <SpaceMan src="/img/home/space_man.svg" />

            <Rocket src="/img/home/rocket.svg" />
            </Container>
        </BackgroundImage>

        <ProfileSection>
            <SectionContainer>
                <ProfileImage src="/img/home/profile.png" />

            
            <ProfileInformation>
                <ProfileInfobox>
                    <ProfileTitle>Name</ProfileTitle>
                    <ProfileDesc>Neil Alden Armstrong</ProfileDesc>
                </ProfileInfobox>

                <ProfileInfobox>
                    <ProfileTitle>Birth date</ProfileTitle>
                    <ProfileDesc>1930. 08. 05</ProfileDesc>
                </ProfileInfobox>

                <ProfileInfobox>
                    <ProfileTitle>Nationality</ProfileTitle>
                    <ProfileDesc>USA</ProfileDesc>
                </ProfileInfobox>

                <ProfileInfobox>
                    <ProfileTitle>Hobby</ProfileTitle>
                    <ProfileDesc>Stargazing, Solve math problems</ProfileDesc>
                </ProfileInfobox>

            </ProfileInformation>
             </SectionContainer>
         </ProfileSection>
        

         <CircleSection>
         <CircleQuestion>What is an astronaut?</CircleQuestion>
            <CircleContainer>
                <FirstCircle src="/img/home/section_1.png" />
                <SecondCircle src="/img/home/section_2.png" />
                <ThirdCircle src ="/img/home/section_3.png" />
            </CircleContainer>
            <BluePlanet src ="/img/home/planet_1.svg" />
            <PurplePlanet src ="/img/home/planet_2.svg" />
            <YellowPlanet src ="/img/home/splanet_3.svg" />
         </CircleSection>

         <EffortSection>
            <SquareContainer>
                <FirstSquare src="/img/home/section_4.png" />
                <SecondSquare src="/img/home/section_5.png" />
                <ThirdSquare src="/img/home/section_6.png" />
                <FourthSquare src="/img/home/section_7.png" />
            </SquareContainer>
            <MyEfforts>My efforts to achieve my dream</MyEfforts>
         </EffortSection>
    </>
    );
}

const MyEfforts = styled.div`
    color: white;
    font-style: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    display: flex;
    align-items: flex-start;
`;

const EffortSection = styled.div`
    background-color: lightpink;
    padding-top: 160px;
    padding-bottom: 160px;
`;

const SquareContainer = styled.div`
    color: white;
    margin: 0 auto;
    display: flex;
    width: 1170px;
    justify-content: space-around;
    align-items: flex-end;
`;

const CircleQuestion = styled.div`
    color: yellow;
    font-style: bold;
    font-size: 30px;    
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 585px;
    padding-bottom: 30px;

`;

const FirstSquare = styled("img")``;

const SecondSquare = styled("img")``;

const ThirdSquare = styled("img")``;

const FourthSquare = styled("img")``;


const FirstCircle = styled("img")`
    border-radius: 50%;
`;

const SecondCircle = styled("img")`
    border-radius: 50%;
`;

const ThirdCircle = styled("img")`
    border-radius: 50%;
`;

const BluePlanet = styled("img")`
    position: absolute;
    

`;

const PurplePlanet = styled("img")`
    position: absolute;
`;


const YellowPlanet = styled("img")`
    position: absolute;
`;





const CircleContainer = styled.div`
    color: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

`;

const CircleSection = styled.div`
    background-color: purple;
    padding-top: 100px;
    padding-bottom: 100px;
`;


const ProfileSection = styled.div`
    background-color: white;
    padding-top: 100px;
    padding-bottom: 100px;
`;

const SectionContainer = styled.div`
    color: white;
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;    
`;



const ProfileInformation = styled.div``;

const ProfileImage = styled("img")``;

const ProfileInfobox = styled.div``;

const ProfileTitle = styled.div`
    color: #d9d7ec;
    font-size: 24px;
    font-style: italic;
    margin-left: 30px;
    

`;


const ProfileDesc = styled.div`
    color: #070052;
    font-size: 40px;
    margin-top: 10px;
    margin-left: 30px;

`;
    

const BackgroundImage = styled.div`
    width: 100%;
    height: 950px;
    background-image: url("/img/home/main_visual.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding-top: 80px;
    `;


    const Container = styled.div`
        width: 1170px;
        height: 950px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    `;

    const TilteBox = styled.div`
        text-align: center
    `;

    const SubTitle = styled.div`
        color: #e2d4ff;
        font-family: "Bungee", sans-serif;
        font-size: 44px;
    `;
    
    const Title = styled.div`
        color: #ffed4b;
        font-family: "Bungee", sans-serif;
        font-size: 80px;
        margin-top: 10px;
    `;

    const SpaceMan = styled("img")`
        position: absolute;
        right: 177px;
        top: 223px;
    
    `;
        


    const Rocket = styled("img")`      
      position: absolute;
      bottom: 58px;
      left: 170px;
    `;






    export default Home;

import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import{ Link } from "react-router-dom";
console.log("here");
function Layouts() {
    return (
        <Container>
            <Header>
                <HeaderContain>
                    <Logo>Ryans</Logo>

                    <MenuBox>
                    <MenuItem>
                        <Link to="/">홈</Link>
                    </MenuItem>
                        <MenuItem>
                        <Link to="/rainbow">레인보우</Link>
                        </MenuItem>
                    </MenuBox>
                </HeaderContain>
            </Header>

        <Outlet />
    </Container>
    );
}

const Container = styled.div``;

const Header = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    height: 80px;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
`;

const HeaderContain = styled.div`
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 28px;
    color: white;
`;

const MenuBox = styled.div`
    display: flex;
    align-items: center;
`;

const MenuItem = styled.div`
    margin-left: 56px;
    color: white;
    font-size: 14px;

a {
    color: white;
    text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }
`;



export default Layouts;

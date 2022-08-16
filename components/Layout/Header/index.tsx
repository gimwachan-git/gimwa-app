import { StyledNav,StyledHeader } from "components/Layout/Header/styles";
import { Navigation } from "components/Layout/Navigation";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <Navigation href="/" text="Home" />
                <Navigation href="/works" text="Works" />
                <Navigation href="/blog" text="Blog" />
            </StyledNav>
        </StyledHeader>
    )
}  
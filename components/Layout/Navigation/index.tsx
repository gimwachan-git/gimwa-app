import { useRouter } from "next/router";
import { StringProps } from "lib/types";
import { StyledLink } from "components/Layout/Navigation/styles";


export const Navigation = ({ href, text }: StringProps) => {
  const router = useRouter();

  return (
      <StyledLink href={href as string}>
        <a
          className={router.pathname == href ? "active" : ""}
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </StyledLink>
  );
};
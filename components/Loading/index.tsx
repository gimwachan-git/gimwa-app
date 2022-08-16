import { Loadingmask } from "components/Loading/styles";
import { Logo } from "components/Logo";

export const Loading = ({router}:{router:any}) => {
    return(
        <Loadingmask>
            <Logo router={router} color={""} />
        </Loadingmask>
    )
}

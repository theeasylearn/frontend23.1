import VerifyLogin,{ LogoutAdmin } from "./VerifyLogin";

export default function AdminLogout()
{
    VerifyLogin();
    LogoutAdmin();
    return (<></>);
}
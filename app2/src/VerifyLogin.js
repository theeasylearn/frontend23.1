import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
var deleteCookie,navigate;
export default function VerifyLogin() {
    var [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    deleteCookie = removeCookie;
    let SendToLogin = function () {
        useEffect(() => {
            navigate("/");
        });
    }
    navigate = useNavigate();
    if (cookies['id'] === undefined) {
        SendToLogin();
    }
}
export function LogoutAdmin()
{
    deleteCookie('id');
    navigate("/");
}
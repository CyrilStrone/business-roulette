import { UserSecurityItem } from "../molecules/UserSecurityItem";
import { UserSecurityItemFirst } from "../molecules/UserSecurityItemFirst";
import "../styles/UserSecurity.css";

export const UserSecurity = () => {

  return (
    <div className="UserSecurity UserSetting__Blocks">
      <div className="UserSetting__Blocks__Title">
        Моя безопасность
      </div>
      <div className="UserSetting__Blocks__ItemBar">
        <UserSecurityItemFirst view={true} />
        <UserSecurityItemFirst view={false} />
        <UserSecurityItem key={"avatar"} title={"Аватар"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Специальность"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Фамилия"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Дата рождения"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Почта"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Регион"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Краткое описание"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"О себе"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Контакты"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Навыки"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Образование"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Опыт работы"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar"} title={"Дата регистрации"} all={true} authorizedUser={false} unauthorizedUser={false} />
      </div>
    </div>
  );
};

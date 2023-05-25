import "../styles/UserSetting.css";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $userSetting, $userValue, setUserSetting } from "../../../ui/functions/Hooks";
import { UserMenu } from "../../../ui/userMenu/molecules/UserMenu";
import { UserSettingPersonalInformation } from "../molecules/UserSettingPersonalInformation";
import { UserSettingContacts } from "../molecules/UserSettingContacts";
import { UserSettingStack } from "../molecules/UserSettingStack";
import { UserSettingEducation } from "../molecules/UserSettingEducation";
import { UserSettingWorkExp } from "../molecules/UserSettingWorkExp";
import { UserSettingRest } from "../molecules/UserSettingRest";
import { FieldChange, IFieldChange } from "../../../ui/fieldChange/organelles/FieldChange";

//TODO:Убирать плюс если максимум
export const UserSetting = () => {
  const userValue = useStore($userValue);
  const userSetting = useStore($userSetting);
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [keyName, setkeyName] = useState<string | undefined>(undefined)
  const [value, setValue] = useState<any>(undefined)
  
  const handleCheck = (params: IFieldChange) => {
    setUserSetting(!userSetting);
    setTitle(params.title)
    setkeyName(params.keyName)
    setValue(params.value)
  };

  useEffect(() => {
    return () => {
      setUserSetting(false)
    }
  }, [])
  return (
    userValue &&
    <div className="UserMore">
      <UserMenu />
      <div className="UserSetting">
        <UserSettingPersonalInformation handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
        <UserSettingContacts handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
        <UserSettingStack handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
        <UserSettingEducation handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
        <UserSettingWorkExp handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
        <UserSettingRest handleCheck={handleCheck} title={title} keyName={keyName} value={value} />
      </div>
      {userSetting && <FieldChange keyName={keyName} title={title} value={value} setValue={setValue} />}
    </div >
  );
};

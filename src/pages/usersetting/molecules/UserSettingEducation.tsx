import "../styles/UserSettingEducation.css";
import { useStore } from "effector-react";
import { IFieldChange } from "../../../ui/fieldChange/organelles/FieldChange";
import { $userValue } from "../../../ui/functions/Hooks";
import Plus from '../../../assets/userChange/Plus.svg'

export interface IUserSettingEducation {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}

export const UserSettingEducation = (params: IUserSettingEducation) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingEducation UserSetting__Blocks">
            <div className="UserSetting__Blocks__Title">
                Образование
            </div>
            <div className="UserSetting__Blocks__List">
                {userValue?.education?.map((e: any) =>
                        <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: e, title: "образование", keyName: "education", })}>
                            <div className="UserSetting__Blocks__List__Item__Title">
                                {e.name}
                            </div>
                            <div className="Setting__Card__Short__Value">
                                {e.specialization}
                            </div>
                            <div className="Setting__Card__Short__Value">
                                {new Date(e.studyStart).getFullYear()}{" - " + new Date(e.studyEnd).getFullYear()}
                            </div>
                        </div>
                    )
                }
                <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ title: "образование", keyName: "education" })}>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
        </div >
    );
};

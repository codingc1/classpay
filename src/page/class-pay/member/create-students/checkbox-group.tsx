import { HomeIconTitle } from "../../../../components/home/icon/home-icon-title";
import { AgreeStudent } from "./agree-student";



//체크박스 두개로 구성된 컴포넌트
export const CreateStuCheckBoxGroup = ({notificationMethods, isHumanInput} : 
    {notificationMethods:{id: string;title: string;isHumanInput: boolean; onChange: () => void;}[],
    isHumanInput:boolean
}) => {


    return(
        <div>
            <div className="py-5 flex text-lg items-center"><HomeIconTitle />학생 추가하기</div>
                {/* <label className="text-base font-semibold text-gray-900"><HomeIconTitle /></label> */}
                <p className="text-sm text-gray-500">학생 계정을 생성하고 학급에 가입합니다</p>
                <AgreeStudent />
                <fieldset className="mt-4">
                    <legend className="sr-only">설명</legend>
                    <div className="flex items-center space-y-0">
                    {notificationMethods.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center mr-3">
                            <input
                                id={notificationMethod.id}
                                name="notification-method"
                                type="radio"
                                defaultChecked={notificationMethod.isHumanInput === isHumanInput}
                                onChange={notificationMethod.onChange}
                                className="h-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor={notificationMethod.id} className="ml-1 block text-sm font-medium leading-6 text-gray-900"
                                onClick={notificationMethod.onChange}>
                                {notificationMethod.title}
                            </label>
                        </div>
                    ))}
                    </div>
                </fieldset>
            </div>
    )
}
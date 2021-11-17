import { Assesment } from "../dtos/dtos";
import AssesmentTable from "./assesment-table";
import UserInfoBar from "./user-info-bar";

export default function ViewerPage(){

    const assesments:Assesment[] = [{"assessmentId":"64929db2-d0be-493b-beae-01cf4e54dfb1","exerciseId":101,"email":"billy.smith@revature.net","tests":[{"testName":"subtraction()","points":50,"isSuccessful":false,"errorMessage":"org.opentest4j.AssertionFailedError: expected: ^0> but was: ^4>"},{"testName":"addition()","points":10,"isSuccessful":true,"errorMessage":"SUCCESS"}]},{"assessmentId":"0d2029d6-e72c-4c82-9935-2879178fd5a3","exerciseId":101,"email":"bobby.hill@revature.net","tests":[{"testName":"subtraction()","points":50,"isSuccessful":false,"errorMessage":"org.opentest4j.AssertionFailedError: expected: ^0> but was: ^4>"},{"testName":"addition()","points":10,"isSuccessful":true,"errorMessage":"SUCCESS"}]},{"assessmentId":"a49daebf-528d-451c-be74-246edd392281","exerciseId":101,"email":"bobby.hill@revature.net","tests":[{"testName":"subtraction()","points":50,"isSuccessful":false,"errorMessage":"org.opentest4j.AssertionFailedError: expected: ^0> but was: ^4>"},{"testName":"addition()","points":10,"isSuccessful":true,"errorMessage":"SUCCESS"}]}]

    return(<>
        <UserInfoBar/>
        <AssesmentTable assesments={assesments} />

    </>)
}
import { Test } from "../dtos/dtos";

export default function TestRow(props:Test){
    const {testName,isSuccessful,errorMessage,points} = props;

    return(<tr>
        <td>{testName}</td>
        <td>{isSuccessful? "Passed": "Failed"}</td>
        <td>{points}</td>
        </tr>)
}
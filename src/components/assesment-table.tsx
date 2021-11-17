import { useState } from "react";
import { Assesment } from "../dtos/dtos";
import DataRow from "./data-row";
import TestRow from "./test-row";

interface AssessmentRow{
    assessment:Assesment
    isExpanded:boolean
}

export default function AssesmentTable(props:{assesments:Assesment[]}){

    const [assementRows, setAssessmentRows] = useState<AssessmentRow[]>(props.assesments.map((a)=>{return {assessment:a,isExpanded:false}}));


    function expanded(assessmentId:string){
        for(let i =0; i< assementRows.length; i++){
            if(assementRows[i].assessment.assessmentId === assessmentId){
                assementRows[i] = {...assementRows[i], isExpanded:!assementRows[i].isExpanded}
                setAssessmentRows([...assementRows])
                console.log(assementRows)
            }
        }

    }

    return(<table>
        <thead>
            <th>Email</th>
            <th>Exercise ID</th>
            <th>Score</th>
        </thead>
        <tbody>
            {
                assementRows.map((ar) =>{

                    if(ar.isExpanded){
                        return(<>
                        <DataRow isExpanded={ar.isExpanded} key={ar.assessment.assessmentId} assesment={ar.assessment} expandNotify={expanded}></DataRow>
                        {ar.assessment.tests.map(t => <TestRow {...t}></TestRow>)} 
                        </> )
                        
                    }else{
                        return <DataRow isExpanded={ar.isExpanded} key={ar.assessment.assessmentId} assesment={ar.assessment} expandNotify={expanded}></DataRow>
                    }
                    
                })
            }
        </tbody>
    </table>)
}
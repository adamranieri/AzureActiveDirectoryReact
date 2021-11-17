import { CSSProperties, StyleHTMLAttributes, useState } from "react";
import { Assesment } from "../dtos/dtos";

export default function DataRow(props: {assesment:Assesment, expandNotify:Function, isExpanded:boolean}){
    const {exerciseId, email, tests, assessmentId} = props.assesment; 
    const expandNotify = props.expandNotify
    const isExpanded = props.isExpanded

    const score: number = tests.map(t => t.points).reduce((a,b) => a +b);

    const [style,setStyle] = useState<CSSProperties>();

    function expand(){
        expandNotify(assessmentId)
    }

    
    return(<tr style={style} onMouseOver={e => setStyle({color:'red'})} onMouseOut={e => setStyle({color:'black'})}  >


        <td>{email}</td>
        <td>{exerciseId}</td>
        <td>{score}</td>
        <td><button onClick={expand}>{isExpanded ? 'Collapse' : 'Expand'}</button></td>
  
    </tr>)
}
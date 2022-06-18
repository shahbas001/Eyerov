import React from "react";

export default function Table(props){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Chainage No.</th>
                    <th>Depth</th>
                    <th>Type Of Damage</th>
                    <th>Damage Photo</th>
                </tr>
            </thead>
            <tbody>
                {
                 props.tableData.map((data,index)=>{
                     return (
                         <tr>
                             <td>{index+1}</td>
                             <td>{data.damage_ref.line_video_name}</td>
                             <td>{data.damage_ref.depth_from_ref}</td>
                             <td>{data.damage_ref.damage_type}</td>
                             <td>
                                 <button className="tablebtn viewbtn">View Photo</button>
                                 <button className="tablebtn downbtn">Download</button>
                             </td>

                         </tr>
                     )

                 })
                }
            </tbody>
        </table>
    )
}


import React from "react";

type Data={
    title:string,
    content:{
        title:string | React.ReactNode;
        description:string | React.ReactNode;
    }[];
};

function Timeline() {
    const data=[{
      title: "2025",
content: [
  {
    title: "Event 1",
    description: "Description for the first event in the timeline."
  },
]
},
{
   title:"2024",
   content:[
    {
        title:"Event 1",
        description:"Description for the first event in the timeline."
    }
   ] ,
},
{
    title:"2023",
    content:[
     {
         title:"Event 1",
         description:"Description for the first event in the timeline."
     }
    ] ,
},
{
    title:"2022",
    content:[
     {
         title:"Event 1",
         description:"Description for the first event in the timeline."
     }
    ] ,
},
{
    title:"2021",
    content:[
     {
         title:"Event 1",
         description:"Description for the first event in the timeline."
     }
    ] ,
    
    }]
    return (
        <div className="py-10">
          {data.map((year,idx)=>{
            return(
              <div key={year.title}>
               <h2 className="font-bold text-balck"></h2>
                {year.content.map((content,isx)=>{
                  return(
                    <div key={isx}>
                      <h2>{content.title}</h2>
                      <p>{content.description}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
            <h1>Timeline</h1>
        </div>
    )
}
export default Timeline
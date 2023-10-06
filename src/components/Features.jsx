import { useState } from "react";
import FeatureBox from "./FeatureBox";

useState
function Features() {
        const [items , setItems] = useState ([
    {icon:"icon-access-anywhere.svg",
    title:"Acces your files,anywhere",
    desc:"lorem iopser dodlr amrf,ffksmoo foki er dodlr amrf,ffksmoo foki trem dk ut eds fkf,dodlr dodlr amrffoki trem dk  amrf trem dk ut eds fkf, fjn",
    },
    {icon:"icon-security.svg",
    title:"secuirty you can trust",
    desc:"lorem iopser dodlr amrf,ffksmoo er dodlr amrf, f fksmoo foki trem dk ut eds dodlr amrffoki trem dk fkf,dodlr amrffoki trem dk ut eds fkf, fjn",
    },
    {icon:"icon-collaboration.svg",
    title:"Real-time collaboration ",
    desc:"lorem iopser dodlr amrf,ffksmoo foki  er dodlr amrf,f f ksmoo foki trem dk ut eds fkf,dodlr amrftrem dk ut eds fkf,dodlr amrf,ffksmoo foki  fjn",
    },
    {icon:"icon-any-file.svg",
    title:"Store any type of file",
    desc:"lorem iopser dodlr amrf,fm fksmoo foki  er dodlr amrf,ffksmoo foki trem dk ut eds fkf,dodlr amrftrem dk ut  dodlr amrffoki trem dk eds fkf, fjn",
    },
  
        ]);
  return (
    <section className="pb-[150px]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full ">
                {items.map((item) => (
                    <FeatureBox 
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                    />
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Features
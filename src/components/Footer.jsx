import { useState } from "react";

function Footer() {
  const [contact, setContact] = useState ([
    {icon:"icon-phone.svg", text:"+201225456985"},
    {icon:"icon-email.svg", text:"example@fylo.com"},
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white ">
      <div className="container">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img"
          className="w-[175px] h-[66px] object-contain"
          />
        </a>
          <div className="mt-[30px] flex justify-between flex-wrap gap-[30px]">
            <div className="flex items-start gap-[15px] w-[340px] max-w-full">
              <img 
              src="/src/assets/images/icon-location.svg" 
              alt="location-img" 
              className="w-[18px] h-[18px] object-contain"
              />
              <p className="font-normal text-sm tracking-[0.8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                officia consequuntur corporis q eriores m sequi marum 
                velit!
                </p>
            </div>
            <div>
                {contact.map((item) => (
                  <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">
                      <img 
                      src={`/src/assets/images/${item.icon}`} 
                      alt="icon" className="w-[18px] h-[18px] object-contain" 
                      />
                      <p>{item.text}</p>
                  </div>
                ))}
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {links.map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="hover:text-primary transition-colors duration-200 text-base">{link}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Footer
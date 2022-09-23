import React from 'react'
import Footerbottom from './Footerbottom';
import FooterLinks from './FooterLinks';

 const Footer = () => {
  return (
    <React.Fragment>
        <footer className="bg-black h-auto xl:w-full">
    <section className="flex flex-col">
     <FooterLinks/>
      <hr className="xl:mb-6 xl:w-[87%] xl:m-auto" />
<Footerbottom/>     
    </section>
  </footer>
        </React.Fragment>
  )
}
export default Footer;
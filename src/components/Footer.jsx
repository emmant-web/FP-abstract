import whiteAbstractIcon from "../assets/images/abstract-icon-white.svg"

function Footer() {
  return (

    <div className="bg-black text-white">

<div className="mx-auto p-10 px-15 md:px-6">
<div className="grid grid-cols-2 grid-rows-3 gap-2 justify-center md:grid-cols-5 md:grid-rows-1">

  {/* first column */}
    <div className="row-span-1 md:row-span-1 md:row-start-auto">
      <p className="font-bold text-xl">Abstract</p>
            <a href="#">
              <p>Branches</p>
            </a>
    </div>

    {/* second column */}
    <div className="row-span-1 md:row-span-1 md:row-start-auto">
      <p className="font-bold text-xl">Resources</p>
            <a href="#">
              <p>Blog</p>
            </a>
            <a href="#">
              <p>Help Center</p>
            </a>
            <a href="#">
              <p>Release Notes</p>
            </a>
            <a href="#">
              <p>Status</p>
            </a>
    </div>



    {/* third column */}
    <div className="row-span-1 row-start-2 md:row-span-1 md:row-start-auto">
      <p className="font-bold text-xl">Community</p>
            <a href="#">
              <p>Twitter</p>
            </a>
            <a href="#">
              <p>LinkedIn</p>
            </a>
            <a href="#">
              <p>Facebook</p>
            </a>
            <a href="#">
              <p>Dribbble</p>
            </a>
            <a href="#">
              <p>Podcast</p>
            </a>
    </div>

    {/* fourth column */}
    <div className="row-span-1 row-start-2 md:row-span-1 md:row-start-auto">

<div className="flex flex-col gap-4">
  <div>
        <p className="font-bold text-xl">Company</p>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>Careers</p>
            </a>
            <a href="#">
              <p>Legal</p>
            </a>
      </div>
      <div>
        <p className="font-bold text-xl">Contact Us</p>
            <a href="#">
              <p>info@abstract.com</p>
            </a>
      </div>
</div>

      
    </div>


    {/* fifth column */}
    <div className="row-span-2 row-start-3 md:row-span-1 md:row-start-auto lg:h-64">
      <div className="flex flex-col justify-end h-full">
        <img src={whiteAbstractIcon} className="w-12 w-12 pb-4" alt="White Abstract Icon" />
        <p>© Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All right reserved</p>
      </div>
    </div>
</div>
    
</div>



    </div>
    
    
    
  );
}

export default Footer;

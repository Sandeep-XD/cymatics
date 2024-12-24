import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar  bg-[#1c1d21]">
            <div className='nav-mob lg:max-w-[1180px] mx-auto flex justify-between items-center h-[82px] md:h-[62px] lg:px-[20px]'>
                <div className="menu w-1/3 h-[52px] flex items-center lg:hidden">
                    <div className="menu-icon w-[45px] h-[42px] p-[10px] flex items-center justify-center">
                        <img className='antialiased w-[15px] h-[11px] bg-white' src=".\src\assets\ui-icon\menu-burger.svg" alt="icon" />
                    </div>
                </div>
                <div className="logo h-[52px] w-1/3 flex justify-center pt-[30px] sm:pt-0 md:p-[20px] md:w-auto">
                    <img className='antialiased w-[150px] h-[22px] ' src=".\src\assets\logo\logo.png" alt='logo'/>
                </div>
                <div className='nav-links hidden lg:flex justify-end w-full '>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Sample Packs</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Plugins</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Events</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Hub</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Free Downloads</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">Blogs</div>
                    <div className="link text-white text-nowrap p-[20px] h-[61px]">My Account</div>
                </div>
                <div className="buy w-1/3 h-[52px] flex items-center justify-end lg:w-auto">
                    <div className="cart-div  flex items-center justify-end">
                        <div className="cart w-[45px] h-[42px] p-[10px] flex items-center justify-center">
                            <img className='antialiased w-[21px] h-[16px] bg-slate-50 invert ' src=".\src\assets\ui-icon\shopping-cart.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
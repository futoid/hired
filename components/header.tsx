const Header = () => {
    return (
        <div className="fixed backdrop-filter backdrop-blur-sm w-full p-2 rounded-b-2xl lg:p-4 shadow-lg">
            <div className=" flex justify-center">
                <h1 className="font-extrabold text-4xl lg:text-5xl">Jobs <span className=" text-base text-[#47e17a]">tech</span></h1>
            </div>
        </div>
    );
}

export default Header;
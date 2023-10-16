const Search = () => {
    return (
        <div>
            <div className="hidden pt-20 
            md:flex w-full items-center justify-center gap-10">
                <div className="w-full">
                    <input type="text" name="Hello" placeholder="Job Title" className="p-4 bg-[#E4F1F1] text-2xl w-full outline-none transition focus:shadow-2xl focus:shadow-green-100 rounded-lg" />
                </div>
                <div className="w-[40%]">
                    <input type="text" name="Hello" placeholder="Location" className="p-3 bg-[#E4F1F1] text-lg w-full outline-none transition focus:shadow-2xl focus:shadow-green-100 rounded-lg" />
                </div>
                <div>
                    <button className=" bg-green-300 p-3 rounded-lg font-bold">Search</button>
                </div>
            </div>
            <div className=" pt-16 md:hidden">
                <div className="p-2">
                    <input type="text" name="Hello" placeholder="Job Title" className="p-3 bg-[#E4F1F1] text-lg w-full outline-none transition focus:shadow-2xl focus:shadow-green-100 rounded-lg" />
                </div>
                <div className="p-2 flex gap-2 items-center">
                    <div>
                        <input type="text" name="Hello" placeholder="Location" className="p-3 bg-[#E4F1F1] text-lg w-full outline-none transition focus:shadow-2xl focus:shadow-green-100 rounded-lg" />
                    </div>
                    <div>
                        <button className=" bg-green-300 p-3 rounded-lg font-bold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
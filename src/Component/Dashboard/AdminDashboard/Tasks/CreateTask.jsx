

const CreateTask = () => {
    return (
        <div>
            <form className='flex w-full justify-between  bg-[#1c1c1c] px-5 py-5 rounded-lg mb-10'>
                <div className='flex flex-col w-2/3'>
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" name="" id="" placeholder='enter title' className='border-1 border-gray-400 px-2 py-1 outline-0 rounded-lg w-[65%] mt-2'  />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type="date" name="" id=""   className='border-1 border-gray-400 px-2 py-1 outline-0 rounded-lg w-[65%] mt-2'/>
                    </div>
                    <div>
                        <h3>Asign to </h3>
                        <input type="text" name="" id="" placeholder='employee name' className='border-1 border-gray-400 px-2 py-1 outline-0 rounded-lg w-[65%] mt-2'/>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type="text" name="" id="" placeholder='design, development etc' className='border-1 border-gray-400 px-2 py-1 outline-0 rounded-lg w-[65%] mt-2'/>
                    </div>
                </div>
                
                <div className='flex flex-col w-1/3 '>
                <h3>Description</h3>
                    <textarea name="" id="" className='border-1 border-gray-400 px-2 py-1 outline-0 rounded-lg w-[100%] min-h-40'></textarea>
                    <button className='border-1 outline-0 border-green-300 bg-green-500 px-5 py-2 rounded-xl text-xl w-[100%] mt-5'>Submit</button>
                
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
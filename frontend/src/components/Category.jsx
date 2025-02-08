const Category = ({type,val,setval}) => {
  function handleincrease(){
      if(val === 5) return ;
      setval(val+1);
  }
  function handledecrease(){
    if(val === 0)return ;
    setval(val-1);
  }
  return (
    <div>
      <div className="flex items-center">
        <div class="h-[3rem] w-[16rem] m-1 flex justify-between items-center rounded-md bg-dark">
          <button
            className="h-[3rem] w-[3rem] rounded-md  flex justify-center items-center rounded-r-none btn hover:bg-darkest border-0"
            onClick={handledecrease}>
            <svg
              class="w-4 h-4 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M1 1h16"
              />
            </svg>
          </button>
          <span className={`text-${type} capitalize`}>{type}</span>
          <button
            className="h-[3rem] w-[3rem] rounded-md  flex justify-center items-center rounded-l-none btn hover:bg-darkest border-0"
            onClick={handleincrease}>
            <svg
              class="w-4 h-4 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <div className="ml-4 flex justify-center items-center rounded-full border h-[3rem] w-[3rem] bg-darkest">
          <span className={`text-${type}`}>{val}</span>
        </div>
      </div>
    </div>
  );
}
export default Category
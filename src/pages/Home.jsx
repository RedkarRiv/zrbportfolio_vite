export const Home = () => {
  return (
    <>
      <div className="pt-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white min-h-dvh flex justify-center items-center">
        <section className="bg-gray-400/25 rounded-xl h-max md:w-1/2 sm:w-full flex flex-col justify-center items-center text-center py-9">
          <h1 className="text-8xl">Zaida Ranea</h1>
          <p className="text-4xl">La fucking ama</p>
          <div>
            <div
              className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block hover:font-black hover:cursor-pointer"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">Button Text</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

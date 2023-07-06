export default function Loader({message}) {
  return (
    <div className="h-screen w-full fixed loader flex-col justify-center flex items-center bg-[#000000]">
      <div className="rounded-text rotating" style={{ zIndex: "1" }}>
        <svg viewBox="0 0 200 200">
          <path
            id="textPath"
            d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
            transform="translate(100,100)"
            fill="none"
            strokeWidth="0"
          ></path>
          <g>
            <text textAnchor="start">
              <textPath
                className="coloring text-2xl"
                xlinkHref="#textPath"
                startOffset="0%"
              >
                <tspan fill="#400090">
                  &nbsp; 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0
                  1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0
                </tspan>
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <h1 className="md:text-[1vw] text-[4vw]  text-[#DF6A50] mt-5 text-center text-savapro">{message}</h1>
    </div>
  );
}

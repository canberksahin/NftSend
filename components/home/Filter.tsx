/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Filter = ({ time, setTime, timeArray }: any) => (
  <div className="mx-auto flex py-12 md:flex-row flex-col items-center justify-between">
    <div className="font-medium text-2xl">Market Overview</div>
    <div className="dropdown inline-block relative">
      <button
        type="button"
        className="bg-yellow-100  text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-3 text-sm">
          <span className="text-gray-500 font-normal">Show: </span> {time}
        </span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-full">
        {timeArray.map((item: any) => (
          <li className="" key={item} onClick={() => setTime(item)}>
            <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Filter;

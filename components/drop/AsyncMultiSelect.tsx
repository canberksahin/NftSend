import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: 'black',
    padding: 15,
    background:
      'linear-gradient(90.26deg, rgba(0, 234, 223, 0.15) 0.7%, rgba(255, 139, 139, 0.15) 99.19%)',
    backdropFilter: `blur(45px)`,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor: `rgba(196, 196, 196, 0.16)`,
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: 'white',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
  //   singleValue: (provided: any, state: any) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';

  //     return { ...provided, opacity, transition };
  //   },
};

// interface IAsyncMultiOptions {
//   value: string;
//   label: string;
//   color: string;
// }

// const options = [
//   { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
//   { value: 'blue', label: 'Blue', color: '#0052CC' },
//   { value: 'purple', label: 'Purple', color: '#5243AA' },
//   { value: 'red', label: 'Red', color: '#FF5630' },
//   { value: 'orange', label: 'Orange', color: '#FF8B00' },
//   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//   { value: 'green', label: 'Green', color: '#36B37E' },
//   { value: 'forest', label: 'Forest', color: '#00875A' },
//   { value: 'slate', label: 'Slate', color: '#253858' },
//   { value: 'silver', label: 'Silver', color: '#666666' },
// ];

// const getERC20TokenOptions = async () => {
//   const response: IAsyncMultiOptions[] = options;
//   return response;
// };

// const promiseOptions = (inputValue: string) =>
//   new Promise<IAsyncMultiOptions[]>((resolve) => {
//     setTimeout(() => {
//       resolve(getERC20TokenOptions(inputValue));
//     }, 1000);
//   });

export default function AsyncMultiSelect() {
  return (
    <AsyncSelect
      className="w-full p-2 text-white bg-black input_border_primary border-2 outline-0"
      styles={customStyles}
      isMulti
      cacheOptions
      components={animatedComponents}
      // loadOptions={promiseOptions}
    />
  );
}

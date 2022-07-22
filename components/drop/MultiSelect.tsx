import Select from 'react-select';
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

export default function MultiSelect({ options }: any) {
  return (
    <Select
      className="w-full p-2 text-white bg-black input_border_primary border-2 outline-0"
      styles={customStyles}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
    />
  );
}

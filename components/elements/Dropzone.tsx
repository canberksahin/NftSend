/* eslint-disable no-unused-vars */
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import csv from 'csvtojson';

const promisifyCsvToJson = (csvFile: File) =>
  new Promise((resolve) => {
    const reader: any = new FileReader();
    reader.readAsText(csvFile, 'UTF-8');
    reader.onload = () => {
      if (reader && reader.result) {
        csv()
          .fromString(reader.result)
          .then((jsonArrayObj) => {
            resolve(jsonArrayObj);
          });
      }
    };
  });

function MyDropzone({ onChange }: { onChange: (value: any) => void }) {
  const onDrop = useCallback(async (files) => {
    const data = await promisifyCsvToJson(files[0]);
    onChange(data);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className="drop_zone border-2 mt-2 flex flex-col justify-center items-center py-28 cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <img src="/images/dropzone.png" alt="dropzone" />
    </div>
  );
}

export default MyDropzone;

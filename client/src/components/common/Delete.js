
import React from 'react';
import Button from "./Button";
const Delete = ({ handleDeleteCanceled, handleDeleteConfirmed, deleting, type }) => {

    // console.log("===Deleting===>", deleting);
  return (
      <div className="tw-w-full tw-min-w-[500px] tw-h-full tw-flex tw-items-center tw-justify-center">
        <div className="tw-bg-white tw-rounded-md tw-p-4">
          <p className="tw-text-lg tw-font-medium tw-text-gray-800">
            Are you sure you want to delete this {type}?
          </p>
          <div className="tw-mt-4 tw-flex tw-items-center tw-justify-end">
            <button
              className="tw-mr-4 tw-px-4 tw-py-2 tw-text-gray-600 tw-bg-gray-200 tw-rounded-md"
              onClick={handleDeleteCanceled}
            >
              Cancel
            </button>
            <Button
              className={"tw-text-white tw-bg-red-500"}
              title="Delete"
              disabled={deleting}
              loading={deleting}
              onClick={handleDeleteConfirmed}
            />
          </div>
        </div>
      </div>
  );
};

export default Delete;

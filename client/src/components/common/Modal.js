const Modal = ({ children }) => {
  return (
    <div
      className="tw-relative tw-z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ zIndex: "9999" }}
    >
      <div className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity"></div>

      <div className="tw-fixed tw-inset-0 tw-z-10 tw-w-full tw-overflow-y-auto">
        <div className="tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 tw-text-center sm:tw-items-center sm:tw-p-0">
          <div className="tw-relative tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-left tw-shadow-xl tw-transition-all sm:my-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

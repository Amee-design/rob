import { Fragment, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Success from "./SuccessModal";

export default function GalleryModal({ open, setOpenSuccess }) {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const imageChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setIsUploaded(false);
      setIsUploading(true);
      if (!name || files.length === 0) {
        alert("All fields are required.");
        setIsUploading(false);
        return;
      }

      const imageData = {
        name: name,
        file: "",
      };
      const form = new FormData();
      for (const singleFile of files) {
        form.append("photo", singleFile);
      }

      form.append("meta", JSON.stringify(imageData));

      console.log(...form);
      const response = await axios.post(
        "https://rob-api-1.onrender.com/api/v1/gallery",
        form,
        {}
      );
      if (response.status === 201) {
        setIsUploaded(true);
        setFiles([]);
        setName("");
      } else {
        alert("Error adding to gallery, please try again");
      }
      setIsUploading(false);
    } catch (error) {
      setIsUploading(false);
      alert(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto text-black"
        onClose={() => setOpenSuccess(false)}
      >
        <Success
          openSuccess={isUploaded}
          setOpenSuccess={setIsUploaded}
          successMessage="Image uploaded Successfully"
        />
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:min-w-fit sm:max-w-sm sm:w-full sm:p-6">
              <div className="flex justify-between items-center pb-4">
                <p className="sora text-black md:text-2xl">Upload to Gallery</p>
                <button
                  onClick={() => setOpenSuccess(false)}
                  className="text-red-500 hover:text-red-400"
                >
                  Close
                </button>
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                <input
                  type="file"
                  className="border-none w-full text-black outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="file"
                  multiple
                  onChange={imageChange}
                />
              </div>
              <div className="">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={handleSubmit}
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

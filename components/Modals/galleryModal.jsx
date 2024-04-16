/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";


export default function GalleryModal({ open, setOpen }) {
  const [file, setFile] = useState([])
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
  
    const fileList = e.target.files;
    let newFiles = []
    for (let i = 0; i < fileList.length; i++) {
      newFiles.push(fileList[i]);
    }
    // console.log("file", Array.from(e.target.files));
    // console.log("1",e.target.files[0]);
    // console.log("2",e.target.files);
    setFile(newFiles)
  }
  const handleSubmit = async () => {
    try {
      if (name && file) {
        const form = new FormData();
        form.append("name", name)
        for (let i = 0; i < file.length; i++) {
          form.append("photo", file[i]);
        }
        const headers = {
          'Content-Type': 'multipart/form-data'
        }
        return;
        const response = await axios.post("http://localhost:4000/api/v1/gallery", form, headers)
        console.log({ response });
        if (response.status != 201) {
          setError("Error adding to gallery, please try again")
        } else {
          console.log("success");
        }

      } else {
        setError("All fields are required.")
      }
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setOpen(open)}
      >
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

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
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

              <p className="sora dark:text-white  md:text-2xl text-center pb-4 ">
                Upload to Gallery
              </p>
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
                  className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="file"
                  multiple
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={handleSubmit}
                >
                  Upload
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

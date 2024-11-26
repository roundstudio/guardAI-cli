import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContactList from "../hooks/useContactList";
import { useContactDelete } from "../hooks/useContactList";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./contact.form";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ContactFormData } from "../types";

const ContactTable = () => {
  const { data, isLoading, error } = useContactList();
  const { mutate: deleteContact } = useContactDelete();
  const [open, setOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactFormData | undefined>(
    undefined
  );

  const handleOpen = (contact: ContactFormData) => {
    setSelectedContact(contact);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id: number) => {
    deleteContact(id);
  };

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error.message}</div>;

  return (
    <>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">نام و نام خانوادگی</th>
            <th className="border p-2">ایمیل</th>
            <th className="border p-2">شماره تماس</th>
            <th className="border p-2">پیام</th>
            <th className="border p-2">تاریخ ایجاد</th>
            <th className="border p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-50">
              <td className="border p-2">{contact.name}</td>
              <td className="border p-2">{contact.email}</td>
              <td className="border p-2">{contact.phone}</td>
              <td className="border p-2">{contact.message}</td>
              <td className="border p-2">{new Date(contact.created_at).toLocaleDateString('fa-IR')}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleOpen(contact)}
                  className="text-blue-500 hover:text-blue-700 ml-2"
                  aria-label="ویرایش تماس"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(contact.id!)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="حذف تماس"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={open} onClose={handleClose}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ContactForm initialData={selectedContact} onClose={handleClose} />
        </div>
      </Modal>
    </>
  );
};

export default ContactTable;

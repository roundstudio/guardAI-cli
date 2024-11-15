import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRuleDelete, useRuleList } from "../hooks";
import RuleForm from "./rule.form";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Rule, STATUS_CHOICES, PRIORITY_CHOICES } from "../types";

const RuleTable = () => {
    const { data, isPending, error } = useRuleList();
    const { mutate: deleteRule } = useRuleDelete();
    const [open, setOpen] = useState(false);
    const [selectedRule, setSelectedRule] = useState<Rule | undefined>(undefined);

    const handleOpen = (rule: Rule) => {
        setSelectedRule(rule);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleDelete = (id: number) => {
        deleteRule(id);
    };

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">نام قانون</th>
                        <th className="border p-2">توضیحات</th>
                        <th className="border p-2">وضعیت</th>
                        <th className="border p-2">اولویت</th>
                        <th className="border p-2">زمان شروع</th>
                        <th className="border p-2">زمان پایان</th>
                        <th className="border p-2">حد آستانه اطمینان</th>
                        <th className="border p-2">فاصله تشخیص</th>
                        <th className="border p-2">زمان انتظار هشدار</th>
                        <th className="border p-2">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((rule) => (
                        <tr key={rule.id} className="hover:bg-gray-50">
                            <td className="border p-2">{rule.name}</td>
                            <td className="border p-2">{rule.description}</td>
                            <td className="border p-2">{rule.status ? STATUS_CHOICES[rule.status] : '-'}</td>
                            <td className="border p-2">{rule.priority ? PRIORITY_CHOICES[rule.priority] : '-'}</td>
                            <td className="border p-2">{rule.start_time || '-'}</td>
                            <td className="border p-2">{rule.end_time || '-'}</td>
                            <td className="border p-2">{rule.confidence_threshold || '-'}</td>
                            <td className="border p-2">{rule.detection_interval || '-'}</td>
                            <td className="border p-2">{rule.notification_cooldown || '-'}</td>
                            <td className="border p-2">
                                <button onClick={() => handleOpen(rule)} className="text-blue-500 hover:text-blue-700 ml-2">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => handleDelete(rule.id!)} className="text-red-500 hover:text-red-700">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                    <RuleForm initialData={selectedRule} onClose={handleClose} />
                </div>
            </Modal>
        </>
    );
};

export default RuleTable;

import { Toolbar } from "../../../components";
import DashboardLayout from "../../../layouts/dashboard.layout";
import { useRuleList } from "../hooks";
import {RuleForm, RuleTable} from "../features";

const RulePage = () => {
    const { refetch } = useRuleList();
    return(
        <DashboardLayout>
            <Toolbar onRefresh={refetch} titleAdd="افزودن قانون جدید" onAdd={RuleForm} />
            <RuleTable />
        </DashboardLayout>
    );
}

export default RulePage;

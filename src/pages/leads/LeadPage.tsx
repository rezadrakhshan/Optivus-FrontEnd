import LeadsHeader from "../../components/leads/LeadHeader";
import LeadsFilters from "../../components/leads/LeadFilter";
import LeadsTable from "../../components/leads/LeadTable";

export default function LeadsPage() {
  return (
    <div className="space-y-6">

      <LeadsHeader />

      <LeadsFilters />

      <LeadsTable />

    </div>
  );
}
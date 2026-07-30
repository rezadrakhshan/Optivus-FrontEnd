import { ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import LeadForm from "../../components/leads/create/LeadForm";

import { leads } from "../../mock/leads";

export default function EditLeadPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const lead = leads.find((x) => x.id === id);

  if (!lead) {
    return (
      <div className="rounded-xl border border-red-800 bg-red-950 p-6 text-red-300">
        لید پیدا نشد.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="mb-3 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowRight size={18} />
          بازگشت
        </button>

        <h1 className="text-3xl font-bold text-white">ویرایش لید</h1>

        <p className="mt-2 text-zinc-400">اطلاعات لید را بروزرسانی کنید.</p>
      </div>

      <LeadForm
        mode="edit"
        defaultValues={{
          trackingCode: lead.trackingCode,
          categoryId: lead.categoryId,
          type: lead.type,
          status: lead.status,
          tag: lead.tag,
          nextFollowUp: lead.nextFollowUp,
          notes: lead.notes,
        }}
        onSubmit={async (data) => {
          console.log("UPDATE", id, data);

          // TODO:
          // await updateLead(id!, data)
        }}
      />
    </div>
  );
}

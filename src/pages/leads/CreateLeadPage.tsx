import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LeadForm from "../../components/leads/create/LeadForm";

export default function CreateLeadPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="mb-3 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowRight size={18} />
            بازگشت
          </button>

          <h1 className="text-3xl font-bold text-white">ایجاد لید جدید</h1>

          <p className="mt-2 text-zinc-400">اطلاعات اصلی لید را وارد کنید</p>
        </div>
      </div>

      <LeadForm mode="create" />
    </div>
  );
}

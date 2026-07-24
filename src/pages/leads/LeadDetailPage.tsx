import { ArrowRight, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LeadInfoCard from "../../components/leads/detail/LeadInfoCard";
import NotesCard from "../../components/leads/detail/NotesCard";
import ActivityTimeline from "../../components/leads/detail/ActivityTimeline";

import { leads } from "../../mock/leads";
import { activities } from "../../mock/activities";

export default function LeadDetailsPage() {
  const navigate = useNavigate();

  const lead = leads[0];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <button
            onClick={() => navigate(-1)}
            className="
              mb-3
              flex
              items-center
              gap-2
              text-sm
              text-zinc-400
              transition
              hover:text-white
            "
          >
            <ArrowRight size={18} />
            بازگشت
          </button>

          <h1 className="text-3xl font-bold text-white">
            لید #{lead.trackingCode}
          </h1>

          <p className="mt-2 text-zinc-400">
            مشاهده جزئیات لید
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <Pencil size={18} />
          ویرایش لید
        </button>

      </div>

      {/* Content */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6">

          <LeadInfoCard lead={lead} />

          <NotesCard notes={lead.notes} />

        </div>

        <div className="xl:col-span-2">

          <ActivityTimeline
            activities={activities}
          />

        </div>

      </div>

    </div>
  );
}
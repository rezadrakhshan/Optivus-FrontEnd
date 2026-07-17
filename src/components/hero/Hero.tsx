import DashboardPreview from "./DashboardPreview";
import Divider from "./Divider";
import FeatureItem from "./FeatureItem";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-4
          py-2
          text-sm
          text-blue-400
        "
      >
        Optivus CRM
      </span>

      {/* Title */}

      <h1 className="mt-8 text-5xl font-black leading-tight text-white">
        مدیریت هوشمند
        <br />
        ارتباط با مشتریان
      </h1>

      {/* Description */}

      <p className="mt-6 max-w-xl leading-8 text-zinc-400">
        اپتیویوس بستری مدرن برای مدیریت لیدها، مشتریان و فرآیند فروش است تا تیم
        شما سریع‌تر و هوشمندتر رشد کند.
      </p>

      {/* Features */}

      <div className="mt-10 grid gap-4">
        <FeatureItem>مدیریت لیدها</FeatureItem>

        <FeatureItem>پیگیری فعالیت مشتریان</FeatureItem>

        <FeatureItem>گزارش‌های لحظه‌ای</FeatureItem>
      </div>

      {/* Dashboard */}
      <Divider text="پیش‌نمایش داشبورد" />
      <DashboardPreview />
    </div>
  );
}

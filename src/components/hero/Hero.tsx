import FeatureItem from "./FeatureItem";

export default function Hero() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col justify-center">

      {/* Title */}

      <h1 className="mt-6 text-4xl xl:text-5xl font-black leading-tight text-white">
        مدیریت هوشمند
        <br />
        ارتباط با مشتریان
      </h1>

      {/* Description */}

      <p className="mt-6 max-w-xl leading-8 text-zinc-400">
        آپتیووس بستری مدرن برای مدیریت لیدها، مشتریان و فرآیند فروش است تا تیم
        شما سریع‌تر و هوشمندتر رشد کند.
      </p>

      {/* Features */}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <FeatureItem>مدیریت لیدها</FeatureItem>

        <FeatureItem>پیگیری فعالیت مشتریان</FeatureItem>

        <FeatureItem>گزارش‌های لحظه‌ای</FeatureItem>
      </div>


    </div>
  );
}

import { type Lead } from "../types/lead";

export const leads: Lead[] = [
  {
    id: "1",
    trackingCode: 1223456,
    category: "بیمه بدنه",
    type: "CARBODY",
    status: "WON",
    tag: "RENEWED",
    notes: "کاربر برای تمدید بیمه در هفته آینده تماس بگیرد.",
  },
  {
    id: "2",
    trackingCode: 2121212,
    category: "شخص ثالث",
    type: "THIRDPARTY",
    status: "LOST",
    tag: "FOLLOWUP",
    notes: "کاربر برای تمدید بیمه در هفته آینده تماس بگیرد.",
  },
];

import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setOpen(true)} />

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}

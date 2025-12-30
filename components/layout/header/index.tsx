import { supabase } from "@/lib/supabase/supabaseClient";

import Guestheader from "./guast-header";
import Empoyeeheader from "./employee-header";
import Companyheader from "./company-header";
import Adminheader from "./admin-header";



export default function Header() {
  return (
    <div>
      <Guestheader />
    </div>
  );
}

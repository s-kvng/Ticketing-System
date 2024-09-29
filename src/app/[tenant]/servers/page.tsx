import React from "react";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilsClient";

const Servers = async () => {
  const supabase = getSupabaseCookiesUtilClient();
  const buckets = await supabase.storage.listBuckets();
  console.log("Buckets list => ", buckets);

  return <div>{JSON.stringify(buckets, null, 2)}</div>;
};

export default Servers;

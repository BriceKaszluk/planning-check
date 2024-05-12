import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: assignment } = await supabase.from('assignment').select()
  console.log(assignment)
  return <pre>{JSON.stringify(assignment, null, 2)}</pre>
}
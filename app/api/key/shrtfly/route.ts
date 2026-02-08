import { createBypassResponse } from "@/lib/bypass";

export async function GET() {
  return createBypassResponse(
    "https://ads.luarmor.net/get_key?for=shrtfly-TPSgeaqyEjxC"
  );
}

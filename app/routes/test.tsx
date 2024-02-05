import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";

export const loader = ({ context }: LoaderFunctionArgs) => {
  return json({ value: "value", context });
};

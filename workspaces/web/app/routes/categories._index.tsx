import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/");
}

export const shouldRevalidate = () => false;

export default function Categories(): JSX.Element {
  return <></>;
}

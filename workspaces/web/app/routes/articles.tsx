import { Outlet } from "@remix-run/react";

import { LoaderFunctionArgs } from "@remix-run/node";

export const shouldRevalidate = () => false;

export async function loader(args: LoaderFunctionArgs) {
  return null;
}

export default Outlet;

import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Pegasus 41 Blueprint",
    price: 2099000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4615e080-c7a7-470e-b96a-02370aba3276/AIR+ZOOM+PEGASUS+41+FP.png",
  },
  {
    id: 2,
    title: "Nike Mercurial Superfly 10 Academy",
    price: 1499000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a10e080b-1985-48dc-83d5-ce0d86a294b7/ZM+SUPERFLY+10+ACADEMY+TF.png",
  },
  {
    id: 3,
    title: "Giannis Freak 6 EP",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cad08379-10fd-45a9-98db-5689453f8353/GIANNIS+FREAK+6+NRG+EP.png",
  },
  {
    id: 4,
    title: "Giannis Freak 6 EP",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cad08379-10fd-45a9-98db-5689453f8353/GIANNIS+FREAK+6+NRG+EP.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}

import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ca0a76ab-8bca-4d52-aed8-99dab7625cdd/dunk-low-shoes-g54Fbv.png",
  },
  {
    id: 2,
    title: "Sepatu Baru Dong",
    price: 1000000000,
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ca0a76ab-8bca-4d52-aed8-99dab7625cdd/dunk-low-shoes-g54Fbv.png",
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

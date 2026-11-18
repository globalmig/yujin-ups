import Image from "next/image";

// 누끼(배경 제거) 작업 전 원본 이미지를 임시로 그리드 배치 (docs/제품 카다로그/PC 서버용 UPS.pdf 3p 참고)
const rackMountTypes = [
  {
    capacity: "1KVA",
    image: "/image/products/hp900c-rm-1kva.png",
    desc: "본체높이 2U (88mm)",
  },
  {
    capacity: "2~3KVA",
    image: "/image/products/hp900c-rm-2-3kva.png",
    desc: "본체높이 2U (88mm)\n배터리 팩 2U (88mm)별도",
  },
  {
    capacity: "6~12KVA",
    image: "/image/products/hp900c-rm-6-12kva.png",
    desc: "본체높이 4U (176mm)\n배터리 팩 3U (132mm)별도",
  },
];

export default function ProductRackMountTypesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
      {rackMountTypes.map(({ capacity, image, desc }) => (
        <div key={capacity} className="bg-surface rounded-md overflow-hidden">
          <div className="relative w-full aspect-4/3 bg-white">
            <Image src={image} alt={`HP900C-RM ${capacity}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-6" />
          </div>
          <div className="text-center px-3 pt-4 pb-5 border-t border-dashed border-line">
            <p className="text-base md:text-lg font-bold text-navy mb-2">{capacity}</p>
            <p className="text-xs text-muted leading-relaxed whitespace-pre-line">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

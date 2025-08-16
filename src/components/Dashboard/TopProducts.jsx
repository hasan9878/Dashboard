import React from "react";

const TopProducts = () => {
  const products = [
    { id: 1, name: "Home Decore Range", popularity: 48, sales: 1204 },
    { id: 2, name: "Disney Princess Dress", popularity: 75, sales: 987 },
    { id: 3, name: "Bathroom Essentials", popularity: 10, sales: 463 },
    { id: 4, name: "Apple Smartwatch", popularity: 29, sales: 382 },
  ];

  // ডাইনামিক কালার নির্ধারণ করার ফাংশন (HEX return করছে)
  const getColor = (value) => {
    if (value <= 10) return "#FCB859";   // কম
    if (value <= 30) return "#A9DFD8";   // মাঝারি
    if (value <= 60) return "#28AEF3";   // ভালো
    return "#F2C8ED";                    // বেশি
  };

  return (
    <div className="bg-[#1e293b] p-4 rounded-xl shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Top Products</h2>
        <button className="text-xs px-3 py-1 rounded-lg bg-black/20 hover:bg-black/30">
          View all
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 text-sm text-[#87888C] pb-2 border-b border-white/10">
        <div className="col-span-1">#</div>
        <div className="col-span-5">Name</div>
        <div className="col-span-3">Popularity</div>
        <div className="col-span-3 text-right">Sales</div>
      </div>

      {/* Table Body */}
      <ul className="divide-y divide-white/10">
        {products.map((p, idx) => {
          // একবার colorValue বের করব (popularity অনুযায়ী)
          const colorValue = getColor(p.popularity);

          return (
            <li key={p.id} className="grid grid-cols-12 items-center py-3">
              {/* Serial */}
              <div className="col-span-1 text-gray-300">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Name */}
              <div className="col-span-5 font-medium">{p.name}</div>

              {/* Popularity */}
              <div className="col-span-3">
                {p.popularity <= 10 ? (
                  // 10% বা কম হলে ফুল ব্যাকগ্রাউন্ড
                  <div
                    className="w-full h-2 flex items-center justify-center rounded text-black font-semibold"
                    style={{ backgroundColor: colorValue }}
                  >
                    {p.popularity}%
                  </div>
                ) : (
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${p.popularity}%`,
                        backgroundColor: colorValue,
                      }}
                    />
                  </div>
                )}
              </div>

              
             {/* Sales */}
<div className="col-span-3 font-medium flex justify-end">
  <span
    className="min-w-[60px] h-10 flex items-center justify-center rounded font-semibold"
    style={{
      backgroundColor: `${colorValue}33`, // হালকা (33 = 20% opacity in HEX)
      border: `2px solid ${colorValue}`,   // border হবে আসল রঙে
      color: colorValue,                   // টেক্সটও সেই রঙের হবে
    }}
  >
    {p.sales}
  </span>
</div>

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopProducts;

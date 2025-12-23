export default function Sectors() {
  const data = [
    "EdenKingDom Farm",
    "EdenKingDom Build",
    "EdenKingDom Engineering",
    "EdenKingDom MoveLog",
    "EdenKingDom FlyLog",
    "EdenKingDom General clinic",
    "EdenKingDom Learn",
    "EdenKingDom City",
    "EdenKingDom Plastics",
    "EdenKingDom Recycling",
    "EdenKingDom Paper Industry",
    "EdenKingDom Steel & Manufacturing",
    "EdenKingDom Energy",
    "EdenKingDom ExpressLog",
    "EdenKingDom Pay (E-Pay)",
    "EdenKingDom Buy Crypto (EBC)",
    "EdenKingDom Wallet (E-Wallet)",
    "EdenKingDom PrintArt",
    "EdenKingDom SonyCine",
    "EdenKingDom News",
    "EdenKingDom Hope",
    "EdenKingDom Rise",
    "EdenKingDom Solidarity",
    "EdenKingDom Donation",
    "EdenKingDom Shareholder",
    "EdenKingDom Academy",
    "EdenKingDom Innovation Center",
    "EdenKingDom Ice Industry",
    "EdenKingDom CarpintArt",
    "EdenKingDom Stores & Markets",
    "EdenKingDom Tourism",
    "Etc",
  ];

  return (
    <section
      id="sectors"
      className="py-20 bg-white border-t border-gold/20"
    >
      <h2 className="text-4xl text-center text-deepblue font-bold mb-10">
        Divisões Corporativas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-pearl rounded-xl shadow hover:shadow-xl transition border border-graystone/20"
          >
            <p className="text-lg font-semibold text-deepblue">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
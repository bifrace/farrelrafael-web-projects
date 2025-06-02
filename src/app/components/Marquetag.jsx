export default function Marquetag() {
    return (
      <div className="fixed top-15 w-full z-40 bg-gray-200 text-blue-600 py-1 shadow-md">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee px-4 text-sm font-medium">
            
            <span className="mx-4">🚀 Tips: Selalu gunakan HTTPS</span>
            <span className="mx-4">🛡️ Amankan input dengan validasi</span>
            <span className="mx-4">🔒 Gunakan Helmet.js</span>
            <span className="mx-4">📌 Cek CVE terbaru!</span>
            <span className="mx-4">🧪 Audit security code secara berkala</span>
          </div>
        </div>
      </div>
    );
  }
  
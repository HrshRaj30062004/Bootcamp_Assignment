"use client";

export default function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4 text-red-600">This is a Popup </h2>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mx-auto block"
        >
          Close
        </button>
      </div>
    </div>
  );
}
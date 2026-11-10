export function CvHeader() {
  return (
    <div className="bg-blue-50 rounded-xl shadow p-4 text-blue-950">
      <p className="text-sm mb-2">En savoir plus sur moi</p>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Thomas Bertholet</h1>
          <p>Âge : 20 ans</p>
          <p>Étudiant en 3ᵉ bachelier, ECAM Brussels Engineering School</p>
        </div>
        <img src="/photo_anto.png" alt="Ma photo" className="w-32 h-32" />
      </div>
    </div>
  );
}

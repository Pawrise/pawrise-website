// Fond animé "aurora" (DA PAWRISE) : blobs verts/cyan/violet qui dérivent
// lentement derrière le contenu. Le grain est appliqué par body::after (CSS).
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <span className="aurora-blob b1" />
      <span className="aurora-blob b2" />
      <span className="aurora-blob b3" />
      <span className="aurora-blob b4" />
    </div>
  );
}

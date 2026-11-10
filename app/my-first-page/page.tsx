function MyFirstComponent() {
  return (
    <p className="text-2x1 text-red-900"> Ceci est mon premier composant</p>
  );
}
function Hello(props: { name: string }) {
  return <p>Bonjour {props.name}</p>;
}

export default function MyFirstPage() {
  return (
    <div className="bg-blue-50 rounded-x1 shadow p-4 container mx-auto">
      <div>
        <MyFirstComponent />
        <Hello name="Thomas" />
      </div>
      <div className="flex justify-end gap-4">
        <img src="OIP.png" alt="Logo" />
      </div>
    </div>
  );
}

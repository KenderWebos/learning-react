export function Lista() {
  const items = ['Manzana', 'Banana', 'Cereza'];
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

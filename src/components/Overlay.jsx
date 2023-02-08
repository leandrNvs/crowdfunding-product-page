export default function Overlay({ isOpen }) {
  return <div className={`overlay ${isOpen ? "active" : null}`}></div>;
}

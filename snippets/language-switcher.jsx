// snippets/language-switcher.jsx
export const LanguageSwitcher = () => {
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);

  if (!path) return null;

  // Normalize current path:
  // /de/introduction  -> slug = "introduction"
  // /introduction     -> slug = "introduction"
  const isGerman = path.startsWith("/de/");
  const slug = isGerman ? path.replace(/^\/de\//, "") : path.replace(/^\//, "");

  const enPath = `/${slug}`;
  const dePath = `/de/${slug}`;

  const handleChange = (event) => {
    const targetUrl = event.target.value;
    if (targetUrl && targetUrl !== path) {
      window.location.href = targetUrl;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
      <select
        onChange={handleChange}
        value={isGerman ? dePath : enPath}
        style={{
          padding: "4px 8px",
          borderRadius: 6,
          border: "1px solid #CBD5E1",
          fontSize: 14
        }}
      >
        <option value={enPath}>English</option>
        <option value={dePath}>Deutsch</option>
      </select>
    </div>
  );
};

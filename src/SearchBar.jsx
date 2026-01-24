import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleChange = (event) => {
    const newQuery = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams);
    if (newQuery) {
      newSearchParams.set("q", newQuery);
    } else {
      newSearchParams.delete("q");
    }
    setSearchParams(newSearchParams, { replace: true });
  };

  return (
    <form id="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        id="q"
        aria-label="Search posts"
        placeholder="Search posts..."
        type="search"
        name="q"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}
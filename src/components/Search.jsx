const Search = ({ search, setSearch, showFilter, setShowFilter }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquise uma tarefa..."
        value={search}
        name="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setShowFilter(!showFilter )} style={{opacity: "1"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-filter"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
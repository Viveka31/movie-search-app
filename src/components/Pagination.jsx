export default function Pagination({ page, setPage, totalResults }) {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex justify-center mt-8 gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="bg-gray-700 px-4 py-2 rounded"
      >
        Prev
      </button>

      <span>{page} / {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="bg-gray-700 px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}
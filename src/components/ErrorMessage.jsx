export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="bg-red-500/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg shadow-lg max-w-xl text-center">
        <h2 className="text-lg font-semibold mb-2">⚠ Error</h2>
        <p className="mb-4">{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
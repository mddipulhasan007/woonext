export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid border-opacity-70"></div>
            <p className="mt-4 text-lg text-indigo-700">Loading...</p>
        </div>
    );
}

export default function JobCard({ job, onApply }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>

      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
        <span className="px-3 py-1 bg-gray-100 rounded-full">{job.type}</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">
          {job.location}
        </span>
      </div>

      <p className="text-gray-700 mt-4">{job.description}</p>

      <button
        onClick={() => onApply(job.title)}
        className="mt-5 px-5 py-2.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
      >
        Apply for this role
      </button>
    </div>
  );
}

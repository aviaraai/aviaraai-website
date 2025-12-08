// components/JobCard.js

export default function JobCard({ job, onApply, onViewDetails }) {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white/90 shadow-sm p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {job.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {job.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
            {job.type}
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
            {job.location}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={onViewDetails}
          className="text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900 underline underline-offset-4"
        >
          More info
        </button>
        <button
          onClick={() => onApply(job.title)}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-indigo-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

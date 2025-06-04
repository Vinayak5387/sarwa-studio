export default function Projects() {
  return (
    <div className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            [Project Image]
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Project Name</h3>
            <p className="text-gray-600 mt-2">
              Description of the project and the technologies used.
            </p>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-3 py-1 bg-blue-500 text-white rounded text-sm">View Demo</a>
              <a href="#" className="px-3 py-1 bg-gray-800 text-white rounded text-sm">GitHub</a>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            [Project Image]
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Project Name</h3>
            <p className="text-gray-600 mt-2">
              Description of the project and the technologies used.
            </p>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-3 py-1 bg-blue-500 text-white rounded text-sm">View Demo</a>
              <a href="#" className="px-3 py-1 bg-gray-800 text-white rounded text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
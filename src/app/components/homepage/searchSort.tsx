export default function SearchSort() {
  return (
    <div className="text-black/50 flex justify-between w-[800px]] gap-4">
      <label
        htmlFor="filter"
        className="flex items-center text-nowrap">
        Search:
      </label>
      <input
        id="filter"
        name="filter"
        className="hidden sm:inline w-40 h-8 border-b border-black/50"></input>
      <label
        htmlFor="sorting"
        className="flex items-center text-nowrap">
        Sort by:
      </label>
      <select
        id="sorting"
        name="sorting"
        className="hidden sm:inline w-40 h-8 border-b border-black/50">
        <option value="name">Name</option>
        <option value="dueDate">Due date</option>
      </select>
      <label
        htmlFor="status"
        className="flex items-center text-nowrap">
        Filter:
      </label>
      <select
        id="status"
        name="status"
        className="hidden sm:inline w-40 h-8 border-b border-black/50">
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="finished">Completed</option>
      </select>
    </div>
  );
}

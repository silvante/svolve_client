export default function NewOrganisationForm() {
  return (
    <form>
      <div className="space-y-1">
        <label htmlFor="name" className="block">
          Organisation Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Enter organisation name"
          required
        />
      </div>
    </form>
  );
}

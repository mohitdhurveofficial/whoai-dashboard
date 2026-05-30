import { getAgents } from "@/lib/api";

export default async function AgentsPage() {
  const agents = await getAgents();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Agents
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Decisions</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="border-b">
              <td className="p-3">{agent.name}</td>
              <td className="p-3">{agent.status}</td>
              <td className="p-3">{agent.decisions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
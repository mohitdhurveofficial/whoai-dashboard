import type { Decision } from "@/lib/api";

type Props = {
  decisions: Decision[];
};

export default function DecisionTable({ decisions }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left p-2">Agent</th>
          <th className="text-left p-2">Action</th>
          <th className="text-left p-2">Decision</th>
        </tr>
      </thead>

      <tbody>
        {decisions.map((d) => (
          <tr key={d.id}>
            <td className="p-2">{d.agent_id}</td>
            <td className="p-2">{d.action_type}</td>
            <td className="p-2">{d.decision}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

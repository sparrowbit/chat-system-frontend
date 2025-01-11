import { X } from "lucide-react";
import ChatAvatar, { Member } from "./ChatAvatar";

const MembersList = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const members: Member[] = [
    {
      id: "1",
      name: "Random user",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
      status: "online",
      playing: "Random user",
    },
    {
      id: "2",
      name: "Jenna Ortiz",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
      status: "online",
    },
    {
      id: "3",
      name: "Random user",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
      status: "offline",
    },
    {
      id: "4",
      name: "Random user",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
      status: "offline",
    },
  ];

  return (
    <div
      className={`
        fixed inset-y-0 right-0 z-30 w-72 bg-gray-900 transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-300 font-semibold">Members</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white md:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center space-x-2">
              <ChatAvatar key={member.id} member={member} />
              <div>
                <div className="text-gray-300 text-sm">{member.name}</div>
                {member.playing && (
                  <div className="text-gray-400 text-xs">
                    playing {member.playing}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersList;

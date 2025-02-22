import { Search } from "lucide-react";
import { Channel } from "../../pages/ChatPage";
import ChatAvatar from "./ChatAvatar";
import {useQueries} from '@tanstack/react-query'

const ChatBoxes = ({ onChannelSelect }: { onChannelSelect: (channel: Channel) => void }) => {

  

  const channels: Channel[] = [
    {
      id: "1",
      name: "Random Chat 1",
      type: "text",
      lastMessage: "random message you received",
      timestamp: "2m ago",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
    },
    {
      id: "2",
      name: "Random Chat 2",
      type: "group",
      participants: 8,
      lastMessage: "random message you received",
      timestamp: "5m ago",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
    },
    {
      id: "3",
      name: "Random Chat 3",
      type: "group",
      participants: 12,
      lastMessage: "random message you received",
      timestamp: "1h ago",
      avatar:
        "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
    },
  ];

  return (
    <div className="h-screen bg-[#2A2D37] flex flex-col w-full sm:w-72 2xl:w-[420px] flex-shrink-0">
      {/* Header */}
      <div className="p-4 ">
        {/* <div className="text-xl text-white font-semibold mb-4">Chats</div> */}
        <div className="bg-[#3E4252] rounded-lg p-2 flex items-center">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent border-none text-gray-300 focus:outline-none w-full min-w-0"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-scroll ">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="p-4 border-b border-gray-800 hover:bg-[#3E4252] cursor-pointer"
            onClick={() => onChannelSelect(channel)}
          >
            <div className="flex items-center space-x-3">
              <ChatAvatar
                member={{
                  id: channel.id,
                  name: channel.name,
                  avatar:
                    "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
                  status: "online",
                }}
              />

              <div className="min-w-0 flex-1">
                {" "}
                {/* Added min-w-0 to enable truncation */}
                <div className="flex justify-between items-start">
                  <span className="text-white font-medium truncate">
                    {channel.name}
                  </span>
                  <span className="text-gray-400 text-sm flex-shrink-0 ml-2">
                    {channel.timestamp}
                  </span>
                </div>
                <p className="text-gray-400 text-sm truncate mt-1">
                  {channel.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBoxes;

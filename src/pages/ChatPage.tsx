import { useEffect, useState } from "react";
import ChatBoxes from "../components/chatPageComponents/ChatBoxes";
import ChatScreen from "../components/chatPageComponents/ChatScreen";
import MembersList from "../components/chatPageComponents/MembersList";
import ChatAvatar from "../components/chatPageComponents/ChatAvatar";
import { Bell, BellDot, SettingsIcon, Plus } from "lucide-react";

export interface Channel {
  id: string;
  name: string;
  type: "text" | "group";
  participants?: number;
  lastMessage?: string;
  timestamp?: string;
  avatar?: string;
}

const ChatPage = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [isMembersListOpen, setIsMembersListOpen] = useState(true);
  const [isNotification, setIsNotification] = useState(true);
  const showContactsView = !selectedChannel;

  useEffect(() => {
    window.screen.availWidth < 768 && setIsMembersListOpen(false);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      <div
        className={`
        flex-none transition-transform duration-300 ease-in-out
        ${
          showContactsView
            ? "translate-x-0"
            : "-translate-x-full hidden md:block"
        }
        md:translate-x-0 w-full md:w-fit
      `}
      >
        <ChatBoxes onChannelSelect={setSelectedChannel} />
      </div>

      <div className="flex-1 flex flex-col">
        {/* USER PROFILE */}
        <div className="flex justify-end items-center space-x-3 pt-4 px-2 ">
          <div className="p-2 bg-gray-500/60 rounded-full hover:bg-gray-500/50 cursor-pointer">
            <Plus className="w-5 h-5 text-white " />
          </div>
          
          <div className="p-2 bg-gray-500/60 rounded-full hover:bg-gray-500/50 cursor-pointer">
            <SettingsIcon className="w-5 h-5 text-white " />
          </div>

          <div className="p-2 bg-gray-500/60 rounded-full mr-10 hover:bg-gray-500/50 cursor-pointer">
            {isNotification ? (
              <BellDot
                className="w-5 h-5 text-white"
                onClick={() => setIsNotification(false)}
              />
            ) : (
              <Bell
                className="w-5 h-5 text-white"
                onClick={() => setIsNotification(true)}
              />
            )}
          </div>

          <div className="flex items-center gap-2  *:">
            <p className="text-white">Random User</p>
            <ChatAvatar
              member={{
                id: "member.id",
                name: "member.name",
                avatar:
                  "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
                status: "online",
              }}
            />
          </div>
        </div>

        <div className="flex-1 flex">
          <div
            className={`
              flex-1 transition-transform duration-300 ease-in-out
        
            `}
          >
            <ChatScreen
              channel={selectedChannel}
              onBack={() => setSelectedChannel(null)}
              onMembersClick={() => setIsMembersListOpen((prev) => !prev)}
            />
          </div>

          <MembersList
            isOpen={isMembersListOpen}
            onClose={() => setIsMembersListOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

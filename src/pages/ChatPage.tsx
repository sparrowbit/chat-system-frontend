import { useState } from "react";
import ChatBoxes from "../components/chatPageComponents/ChatBoxes";
import ChatScreen from "../components/chatPageComponents/ChatScreen";
import MembersList from "../components/chatPageComponents/MembersList";

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
  const [isMembersListOpen, setIsMembersListOpen] = useState(false);
  const showContactsView = !selectedChannel;

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      <div
        className={`
        flex-none transition-transform duration-300 ease-in-out
        ${showContactsView ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 w-screen sm:w-fit
      `}
      >
        <ChatBoxes onChannelSelect={setSelectedChannel} />
      </div>

      <div
        className={`
        absolute inset-0 transition-transform duration-300 ease-in-out
        ${showContactsView ? "translate-x-full" : "translate-x-0"}
        md:relative md:translate-x-0 md:flex-1
      `}
      >
        <ChatScreen
          channel={selectedChannel}
          onBack={() => setSelectedChannel(null)}
          onMembersClick={() => setIsMembersListOpen(true)}
        />
      </div>

      <MembersList
        isOpen={isMembersListOpen}
        onClose={() => setIsMembersListOpen(false)}
      />
    </div>
  );
};

export default ChatPage;

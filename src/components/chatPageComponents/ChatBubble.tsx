import ChatAvatar, { Member } from "./ChatAvatar";

const ChatBubble = ({ member, }: { member: Member }) => {
  return (
    <div className="flex items-start space-x-3">
      <ChatAvatar
        member={{
          id: member.id,
          name: member.name,
          avatar:
            "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
          status: "online",
        }}
      />
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium">Random person</span>
          <span className="text-gray-400 text-sm">7 pm</span>
        </div>
        <p className="text-gray-300">
            copilot is dope with claude 3.5 sonnet and chatGPT O1, but i can't afford it...😔      
        </p>
      </div>  
    </div>
  );
};

export default ChatBubble;

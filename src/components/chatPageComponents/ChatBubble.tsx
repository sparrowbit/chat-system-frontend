import ChatAvatar, { Member } from "./ChatAvatar";

const ChatBubble = ({ member,index }: { member: Member, index: number }) => {
  return (
    <div className="flex items-start space-x-3 mb-1 hover:bg-gray-800 p-2 rounded-md">
      <ChatAvatar
        member={{
          id: member.id,
          name: member.name,
          avatar:
            "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
          status: "online",
        }}
      />
      <div className="w-full">
        <div className="flex items-center space-x-2 justify-between">
          <span className="text-white text-base">Random person {`${index}`}</span>
          <span className="text-gray-400 text-sm">7:30 pm</span>
        </div>
        <p className="text-white/80 text-sm">
            copilot is dope with claude 3.5 sonnet and chatGPT O1, but i can't afford ittttttttttttttttttttttttt...😔      
        </p>
      </div>  
    </div>
  );
};

export default ChatBubble;

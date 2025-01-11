import React from "react";

export interface Member {
  id: string;
  name: string;
  avatar: string;
  status: string;
  playing?: string;
}

interface ChatAvatarProps {
  member: Member;
}

const ChatAvatar: React.FC<ChatAvatarProps> = ({ member }) => {
  return (
      <div className="relative">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-8 h-8 rounded-full"
        />
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
            member.status === "online" ? "bg-green-500" : "bg-gray-500"
          }`}
        />
      </div>
  );
};

export default ChatAvatar;

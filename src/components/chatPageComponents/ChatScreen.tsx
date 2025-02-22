import {
  ArrowLeft,
  Paperclip,
  Phone,
  SendHorizonal,
  Smile,
  Users,
  Video,
} from "lucide-react";
import { Channel } from "../../pages/ChatPage";
import ChatBubble from "./ChatBubble";
import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface Message {
  content: string;
  timestamp: number;
  type: 'sent' | 'received';
}

const ChatScreen = ({ channel, onBack, onMembersClick }: {
  channel: Channel | null;
  onBack: () => void;
  onMembersClick: () => void;
}) => {
  
  const socketUrl = import.meta.env.VITE_WS_URL as string;
  const [inputValue, setInputValue] = useState<string>("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
console.log(socketUrl);
const wss = new WebSocket("url", "sjkdvkd" )
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {

    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onError: (event) => {
      console.error('WebSocket error:', event);

      if (event.target instanceof WebSocket) {
        if (event.target.readyState === WebSocket.CLOSED) {
          console.error('Connection closed. Please check your authentication.');
        }
      }
    },
    onClose: (event) => {
      console.log('WebSocket connection closed:', event);
      if (event.code === 1000) {
        console.log('Normal closure');
      } else {
        console.error('Abnormal closure. Status code:', event.code);
      }
    },
    shouldReconnect: (closeEvent) => {
      // You might want to prevent reconnection attempts if it's an auth failure
      return closeEvent.code !== 1008; // 1008 is for policy violation (often auth issues)
    },
    reconnectInterval: 3000,
    reconnectAttempts: 2,
  });

  // Handle incoming messages
  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const parsedMessage = JSON.parse(lastMessage.data);
        setMessageHistory((prev) => [
          ...prev,
          {
            content: parsedMessage.content || parsedMessage.message || lastMessage.data,
            timestamp: Date.now(),
            type: 'received'
          }
        ]);
      } catch (e) {
        console.error('Error parsing message:', e);
        // Handle raw message if it's not JSON
        setMessageHistory((prev) => [
          ...prev,
          {
            content: lastMessage.data,
            timestamp: Date.now(),
            type: 'received'
          }
        ]);
      }
    }
  }, [lastMessage]);

  const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16];

  if (!channel)
    return (
      <h1 className="flex-1 flex place-content-center">Select a channel</h1>
    );

  return (
    <div className="flex-1 flex flex-col h-[92vh]">
      <header className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-3 text-gray-400 md:hidden">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <img
              src={channel.avatar}
              alt={channel.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <h1 className="text-white text-xl font-semibold">{channel.name}</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <Video className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <button
            onClick={onMembersClick}
            className="text-gray-400 hover:text-white  "
          >
            <Users className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 p-2 space-y-4 overflow-y-auto">
        <div className="h-full flex flex-col-reverse gap-1 overflow-y-scroll">
          {messages.map((index) => (
            <ChatBubble
              member={{
                id: "1",
                name: "Random user",
                avatar:
                  "https://cdn.usegalileo.ai/sdxl10/1e43ae00-42bb-4e92-b726-79ea4d35356d.png",
                status: "online",
              }}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center bg-gray-700 text-white rounded-lg p-2">
          <Paperclip className="w-5 h-5  mx-2" />
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 bg-transparent border-none focus:outline-none"
          />
          <Smile className="w-5 h-5  mx-2" />
          <SendHorizonal className="w-5 h-5  mx-2" />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

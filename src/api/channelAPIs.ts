import axiosInstance from "@/services/axios";

export interface ChannelData {
  name: string;
 
}

const createChannel = async (channelData: ChannelData) => {
  try {
    const response = await axiosInstance.post('/create-channel', channelData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const getChannels = async () => {
  try {
    const response = await axiosInstance.get('/getchannels');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { createChannel, getChannels };
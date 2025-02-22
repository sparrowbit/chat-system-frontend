import axiosInstance from "@/services/axios"

export interface MessageHistoryData  {
    channelId: string
}

const messageHistory = async (data: MessageHistoryData) => {
   try {
     const response = await axiosInstance.post('/message-history', data)
     return response.data
 }
   catch (error) {
    return null   
   }
}

export {
    messageHistory
}



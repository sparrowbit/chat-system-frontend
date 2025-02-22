// import { useCallback } from 'react';
// import useWebSocket, { Options } from 'react-use-websocket';

// export const useCustomWebSocket = (socketUrl: string, token: string | null, options: Options = {}) => {
//     // Custom function to create a WebSocket with headers
//     const createWebSocket = useCallback(() => {
//         if (!token) {
//             console.error('Token is missing. Cannot establish WebSocket connection.');
//             return null;
//         }

//         const ws = new WebSocket(socketUrl, ['Cookie', `token=${token}`]);

//         return ws;
//     }, [socketUrl, token]);

//     return useWebSocket(socketUrl, {
//         getWebSocket: createWebSocket, 

//         shouldReconnect: () => true,  
//         ...options,                    
//     });
// };

import { useCallback, useState } from "react";
import Room from "../components/Room";
import { getToken } from "../api";
import Lobby from "../components/Lobby";

const VideoChat = () => {
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { data } = await getToken();
      setToken(data.token);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        roomName={roomName}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;

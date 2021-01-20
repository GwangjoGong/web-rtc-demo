import { useCallback, useEffect, useState } from "react";
import Room from "../components/Room";
import { getToken } from "../api";
import Lobby from "../components/Lobby";
import { fb } from "../firebase";

const VideoChat = () => {
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [masterId, setMasterId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = () => {
    const roomsQuery = fb.firestore().collection("rooms");
    roomsQuery.get().then((snapshot) => {
      const rooms = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(rooms);
      setRooms(rooms);
    });
  };

  const handleRoomNameChange = useCallback(
    (event) => {
      setRoomName(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { data } = await getToken();
      const roomRef = fb.firestore().collection("rooms").doc(roomName);
      const uid = localStorage.getItem("uid");
      await roomRef.set({
        name: roomName,
        master: uid,
      });
      setMasterId(uid);
      setToken(data.token);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  const destroyRoom = async (roomName) => {
    console.log(roomName);
    fb.firestore().collection("rooms").doc(roomName).delete();
    setToken(null);
  };

  const onClickRoom = async (room) => {
    const { data } = await getToken();
    setMasterId(room.uid);
    setToken(data.token);
    setRoomName(room.name);
  };

  let render;
  if (token) {
    render = (
      <Room
        roomName={roomName}
        token={token}
        masterId={masterId}
        handleLogout={handleLogout}
        destroyRoom={destroyRoom}
      />
    );
  } else {
    render = (
      <Lobby
        roomName={roomName}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
        rooms={rooms}
        onClickRoom={onClickRoom}
      />
    );
  }
  return render;
};

export default VideoChat;

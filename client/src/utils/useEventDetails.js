import axios from "axios";
import { useEffect, useState, useCallback } from "react";
async function getEventDetails(eventId, userId) {
  return await axios
    .get("/api/eventDetails", { params: { eventId, userId } })
    .then((res) => {
      // console.log(res);
      return res.data;
    });
}

async function joinEvent(eventId, userId, toStatus) {
  return await axios
    .post("/api/join_event", { eventId, userId, toStatus })
    .then((res) => {
      // console.log(res);
      return res.data;
    });
}

async function _postComment(eventId, userId, content) {
  return await axios
    .post("/api/comment", { eventId, userId, content })
    .then((res) => {
      // console.log(res);
      return res.data;
    });
}

export default function useEventDetails(eventId, userId) {
  const [eventDetails, setEventDetails] = useState({});
  const [pending, setPending] = useState(true);
  const refresh = useCallback(
    () =>
      getEventDetails(eventId, userId).then((events) =>
        setEventDetails(events)
      ),
    [eventId, userId]
  );
  const joinOrLeave = useCallback(
    (toStatus) => joinEvent(eventId, userId, toStatus).then(refresh),
    [eventId, userId, refresh]
  );
  const postComment = useCallback(
    (content) => _postComment(eventId, userId, content).then(refresh),
    [eventId, userId, refresh]
  );
  useEffect(() => {
    refresh().then(() => setPending(false));
  }, [refresh]);
  return [eventDetails, pending, joinOrLeave, postComment];
}

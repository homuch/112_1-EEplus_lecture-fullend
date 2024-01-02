import axios from "axios";
import { useEffect, useState, useCallback } from "react";
async function getAllEvents(search, userId) {
  return await axios
    .get("/api/events", { params: { search, userId } })
    .then((res) => {
      // console.log(res);
      return res.data;
    });
}

export default function useAllEvents(search, userId) {
  const [events, setEvents] = useState([]);
  const refresh = useCallback(() => {
    getAllEvents(search, userId).then((events) => setEvents(events));
  }, [search, userId]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return [events, refresh];
}

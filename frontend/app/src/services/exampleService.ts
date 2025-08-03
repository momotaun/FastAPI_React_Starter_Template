import api from "./api";

export const fetchHello = async (title: string, content: string) => {
    const res = await api.get("/hello");
    return res.data;
}
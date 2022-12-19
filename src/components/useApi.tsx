import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://api.dev.cloud.barbooksaustralia.com/code-challenge/api";

type apiType =
  | "getAllGames"
  | "platform"
  | "category"
  | "order"
  | "platform-category-order"
  | "multiple-tags"
  | "category-list"
  | "details";

interface IUseApiProps {
  type: apiType;
  searchQuery?: string;
}

const searchByMultipleTagsCall = async (searchQuery: any) => {
  return await axios.get(`${BASE_URL}/filter?tag=${searchQuery}`);
};

const useApi = (props: IUseApiProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const { searchQuery } = props;

  const getAllGames = async () => {
    const res = await axios.get(`${BASE_URL}/games`);
    setLoading(false);
    setData(res.data);
  };
  const searchByPlatform = async () => {
    const res = await axios.get(`${BASE_URL}/games?platform=${searchQuery}`);
    setLoading(false);
    setData(res);
  };
  const searchByCategory = async () => {
    const res = await axios.get(`${BASE_URL}/games?category=${searchQuery}`);
    setLoading(false);
    setData(res.data);
  };
  const searchByOrder = async () => {
    const res = await axios.get(`${BASE_URL}/games?sort-by=${searchQuery}`);
    setLoading(false);
    setData(res.data);
  };
  //Search by platform category or order
  const searchByPCO = async () => {
    const res = await axios.get(`${BASE_URL}/games?${searchQuery}`);
    setLoading(false);
    setData(res.data);
  };
  const searchByMultipleTags = async () => {
    const res = await axios.get(`${BASE_URL}/filter?tag=${searchQuery}`);
    setLoading(false);
    setData(res.data);
  };
  const getCategoriesList = async () => {
    const res = await axios.get(`${BASE_URL}/categories`);
    setLoading(false);
    setData(res.data);
  };
  const getGameDetails = async () => {
    const res = await axios.get(`${BASE_URL}/game?id=${searchQuery}`);
    setLoading(false);
    setData(res.data);
  };

  useEffect(() => {
    switch (props.type) {
      case "getAllGames":
        getAllGames();
        break;
      case "platform":
        searchByPlatform();
        break;
      case "category":
        searchByCategory();
        break;
      case "order":
        searchByOrder();
        break;
      case "platform-category-order":
        searchByPCO();
        break;
      case "multiple-tags":
        searchByMultipleTags();
        break;
      case "category-list":
        getCategoriesList();
        break;
      case "details":
        getGameDetails();
        break;

      default:
        break;
    }
  }, []);

  return { loading, data };
};

export default useApi;

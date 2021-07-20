import { openDB } from "idb";
import axios from "axios";

const createApi = () => {
  const dbConnection = openDB("tags", 1, {
    upgrade: (db, oldVersion) => {
      if (oldVersion < 1) {
        db.createObjectStore("data", { keyPath: "id" });
        db.createObjectStore("meta", { keyPath: "id" });
      }
    },
  });

  const sync = async (auto = false) => {
    const db = await dbConnection;

    const process = async () => {
      const { data: tagsArray } = await axios.get(`/data/recipe-tags.json`);

      db.clear('data');

      const promiseArray = tagsArray.map((singleTag) =>
        db.put("data", singleTag)
      );
      await Promise.all(promiseArray);
    };

    if (auto) {
      await process();
      return null;
    }
    return process;
  };
  const read = async (id) => {
    const db = await dbConnection;
    if (!id) return db.getAll("data");
    return db.get(id);
  };
  return {
    sync,
    read,
  };
};

export const tags = createApi();

export default tags;

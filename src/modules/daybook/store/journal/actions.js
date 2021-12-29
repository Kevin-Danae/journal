import journalApi from "@/api/journalApi";

// export const myAction = async ({commit}) => {}
export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  if (!data) return commit("setEntries", []);
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, ...data } = entry;
  await journalApi.put(`/entries/${id}.json`, data);
  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { data } = await journalApi.post("/entries.json", entry);
  commit("addEntry", { ...entry, id: data.name });
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
};

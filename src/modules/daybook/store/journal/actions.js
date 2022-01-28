import journalApi from "@/api/journalApi";

// export const myAction = async ({commit}) => {}
export const loadEntries = async ({ commit }, email) => {
  const { data } = await journalApi.get("/entries.json", {
    params: { orderBy: '"user"', equalTo: `"${email}"`, print: '"pretty"' },
  });
  if (!data) return commit("setEntries", []);
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", { entries, email });
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, ...data } = entry;
  await journalApi.put(`/entries/${id}.json`, data);
  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, { entry, user }) => {
  const { data } = await journalApi.post("/entries.json", { ...entry, user });
  commit("addEntry", { ...entry, user, id: data.name });
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
};

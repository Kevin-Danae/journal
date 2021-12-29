// export const myAction = (state) => {}
export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  const index = state.entries.findIndex((e) => e.id === entry.id);
  if (index !== -1) state.entries[index] = entry;
};

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((e) => e.id !== id);
};

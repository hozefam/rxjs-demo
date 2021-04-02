const dbConnected = false;

export const longRunningTask = (ms = 5000) => {
  return new Promise((resolve, reject) => {
    setTimeout(dbConnected ? resolve : reject, ms);
  });
};

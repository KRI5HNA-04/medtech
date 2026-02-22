// services/api.js

export const saveExerciseSession = async (sessionData) => {
  console.log("🚀 Sending data to Backend...", sessionData);

  // Simulate a network delay (1 second) to show "Saving..." state
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, message: "Session saved successfully!" });
    }, 1000);
  });
};

export const getPatientStats = async () => {
  // Mock data for the Dashboard charts
  return {
    streak: 5,
    totalSessions: 12,
    accuracyTrend: [60, 65, 70, 75, 80, 85, 90],
  };
};

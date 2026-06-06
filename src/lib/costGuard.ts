export async function estimateCost(scene: any, options: { model: string }) {
  const estimate = { totalCredits: 145, model: options.model, breakdown: [] };
  console.log("🖤 Cost preview:", estimate);
  return estimate;
}
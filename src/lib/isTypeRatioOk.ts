export default function isTypeRatioOk(typeRatio: number) {
  if (typeRatio < 0 || typeRatio > 1) { throw new Error("Lopez Error : typeRatio must be between 0 and 1") }
}
